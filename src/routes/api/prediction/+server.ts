import type { RequestHandler } from './$types';
import { error as svelteError, json } from '@sveltejs/kit';
import { getSupabase } from '@supabase/auth-helpers-sveltekit';
import { supabaseClientAdmin } from '$lib/db.server';
import { getAdminUserInfo, handleError } from '$lib/db';
import { getNegativePrompt, getReplacedPrompt } from '$lib/prompts.server';
import { getPredictionStatus, runPrediction } from '$lib/replicate.server';
import { getPrompt } from '$lib/themes';

interface GeneratePayload {
	theme: string | undefined;
	prompt: string | undefined;
	seed: string | undefined;
}
export const GET: RequestHandler = async (event) => {
	try {
		const predictionID = event.url.searchParams.get('id');
		const { session } = await getSupabase(event);

		if (!predictionID) {
			throw new Error('Prediction ID not valid');
		}
		if (!session) {
			throw new Error('Session not valid');
		}

		const userInfo = await getAdminUserInfo(session.user.id, supabaseClientAdmin);

		if (!userInfo.paid) {
			throw new Error('Payment required');
		}

		if (userInfo.in_training || !userInfo.trained || !userInfo.replicate_version_id) {
			throw new Error('Model not trained');
		}

		const predictionResponse = await getPredictionStatus(predictionID);
		console.log('Predict response', predictionResponse);

		const { error } = await supabaseClientAdmin.from('predictions').upsert({
			id: predictionResponse.id,
			user_id: session.user.id,
			status: predictionResponse.status
		});
		if (error) {
			throw new Error('Error on insert prediction', { cause: error });
		}
		const [url] = predictionResponse.output || [];
		if (url) {
			const image = await fetch(url);
			handleError(
				await supabaseClientAdmin.storage
					.from('photos-generated')
					.upload(`${session.user.id}/${predictionResponse.id}.jpg`, await image.arrayBuffer())
			);
		} else {
			throw new Error('Missing url', {
				cause: predictionResponse
			});
		}

		return json({ done: true });
	} catch (error) {
		console.error(error);
		if (error instanceof Error) {
			console.error(error.cause);
			throw svelteError(500, { message: error.message });
		}
		throw svelteError(500);
	}
};

export const POST: RequestHandler = async (event) => {
	try {
		const body = (await event.request.json()) as GeneratePayload;
		const { theme, seed } = body;
		let { prompt } = body;

		if (theme) {
			prompt = getPrompt(theme);
		}
		if (!prompt) {
			throw new Error('Theme not selected');
		}
		const { session } = await getSupabase(event);

		if (!session) {
			throw new Error('Session not valid');
		}

		const user = session.user;

		const userInfo = await getAdminUserInfo(session.user.id, supabaseClientAdmin);

		if (!userInfo.paid) {
			throw new Error('Payment required');
		}

		if (userInfo.in_training || !userInfo.trained || !userInfo.replicate_version_id) {
			throw new Error('Model not trained');
		}

		const negativePrompt = getNegativePrompt();
		console.log({ prompt, negativePrompt, seed });

		const predictionResponse = await runPrediction(
			userInfo.replicate_version_id,
			getReplacedPrompt(prompt),
			negativePrompt,
			seed,
			user
		);
		console.log('Predict response', predictionResponse);
		const { error } = await supabaseClientAdmin.from('predictions').insert({
			id: predictionResponse.id,
			user_id: session.user.id,
			status: predictionResponse.status
		});
		if (error) {
			throw new Error('Error on insert prediction', { cause: error });
		}

		return json({ done: true });
	} catch (error) {
		console.error(error);
		if (error instanceof Error) {
			console.error(error.cause);
			throw svelteError(500, { message: error.message });
		}
		throw svelteError(500);
	}
};
