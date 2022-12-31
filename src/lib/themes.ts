export enum Themes {
	'cyberpunk' = 'Cyberpunk',
	'tinder' = 'Tinder',
	'cartoon' = 'Cartoon',
	'anime' = 'Anime',
	'office' = 'Office',
	'debug' = 'Debug'
}

export function themesMap() {
	return (Object.keys(Themes) as (keyof typeof Themes)[]).map((key) => [key, Themes[key]]);
}