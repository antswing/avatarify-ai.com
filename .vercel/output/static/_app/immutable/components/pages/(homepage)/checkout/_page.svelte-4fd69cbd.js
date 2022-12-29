import{S as L,i as T,s as j,k as d,q as y,a as _,l as f,m,r as g,h as u,c as x,n as P,b as q,G as o,B as v,H as U,o as B}from"../../../../chunks/index-eaa75a16.js";import{e as G}from"../../../../chunks/env-public-f7741390.js";import{p as A}from"../../../../chunks/stores-e5294287.js";var R="https://js.stripe.com/v3",$=/^https:\/\/js\.stripe\.com\/v3\/?(\?.*)?$/,I="loadStripe.setLoadParameters was called but an existing Stripe.js script already exists in the document; existing script parameters will be used",H=function(){for(var e=document.querySelectorAll('script[src^="'.concat(R,'"]')),r=0;r<e.length;r++){var t=e[r];if($.test(t.src))return t}return null},M=function(e){var r=e&&!e.advancedFraudSignals?"?advancedFraudSignals=false":"",t=document.createElement("script");t.src="".concat(R).concat(r);var n=document.head||document.body;if(!n)throw new Error("Expected document.body not to be null. Stripe.js requires a <body> element.");return n.appendChild(t),t},O=function(e,r){!e||!e._registerWrapper||e._registerWrapper({name:"stripe-js",version:"1.46.0",startTime:r})},S=null,W=function(e){return S!==null||(S=new Promise(function(r,t){if(typeof window>"u"){r(null);return}if(window.Stripe&&e&&console.warn(I),window.Stripe){r(window.Stripe);return}try{var n=H();n&&e?console.warn(I):n||(n=M(e)),n.addEventListener("load",function(){window.Stripe?r(window.Stripe):t(new Error("Stripe.js not available"))}),n.addEventListener("error",function(){t(new Error("Failed to load Stripe.js"))})}catch(a){t(a);return}})),S},F=function(e,r,t){if(e===null)return null;var n=e.apply(void 0,r);return O(n,t),n},b=Promise.resolve().then(function(){return W(null)}),C=!1;b.catch(function(i){C||console.warn(i)});var K=function(){for(var e=arguments.length,r=new Array(e),t=0;t<e;t++)r[t]=arguments[t];C=!0;var n=Date.now();return b.then(function(a){return F(a,r,n)})};const D=async()=>await K(G.PUBLIC_STRIPE_PUBLISHABLE_KEY);function N(i){let e,r,t,n,a,c,h,l;return{c(){e=d("article"),r=d("h2"),t=y("Start the payment process"),n=_(),a=d("p"),c=y("Please wait while we redirect you to Stripe for payment..."),h=_(),l=d("progress"),this.h()},l(p){e=f(p,"ARTICLE",{class:!0});var s=m(e);r=f(s,"H2",{});var w=m(r);t=g(w,"Start the payment process"),w.forEach(u),n=x(s),a=f(s,"P",{});var E=m(a);c=g(E,"Please wait while we redirect you to Stripe for payment..."),E.forEach(u),h=x(s),l=f(s,"PROGRESS",{class:!0}),m(l).forEach(u),s.forEach(u),this.h()},h(){P(l,"class","progress"),P(e,"class","prose px-2 lg:prose-xl container max-w-3xl mx-auto text-center my-16")},m(p,s){q(p,e,s),o(e,r),o(r,t),o(e,n),o(e,a),o(a,c),o(e,h),o(e,l)},p:v,i:v,o:v,d(p){p&&u(e)}}}function V(i,e,r){let t;return U(i,A,n=>r(0,t=n)),B(async()=>{var n,a,c;(c=await D())==null||c.redirectToCheckout({successUrl:"http://127.0.0.1:5173/payment_success?session_id={CHECKOUT_SESSION_ID}",cancelUrl:"http://127.0.0.1:5173/",mode:"payment",lineItems:[{price:"price_1MK2tvBlbhyeaEyqRQmMr8RI",quantity:1}],customerEmail:(n=t.data.session)==null?void 0:n.user.email,clientReferenceId:(a=t.data.session)==null?void 0:a.user.id})}),[]}class z extends L{constructor(e){super(),T(this,e,V,N,j,{})}}export{z as default};
