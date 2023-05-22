"use strict";(globalThis.webpackChunknewfold_Onboarding=globalThis.webpackChunknewfold_Onboarding||[]).push([[181],{4401:(e,t,r)=>{r.d(t,{V:()=>l});var a=r(9307),o=r(1996),n=r(4316),s=r(950);const l=e=>{let{title:t,subtitle:r,error:l}=e;return(0,a.createElement)(o.Z,{className:"step-error-state",isVerticallyCentered:!0},(0,a.createElement)(n.Z,{title:t,subtitle:r}),(0,a.createElement)("div",{className:"step-error-state__logo"}),(0,a.createElement)("h3",{className:"step-error-state__error"},l),(0,a.createElement)(s.Z,null))}},9291:(e,t,r)=>{r.d(t,{L:()=>s,Y:()=>a.Z});var a=r(35),o=r(9307),n=r(682);const s=()=>(0,o.createElement)("div",{className:"image-upload-loader--loading-box"},(0,o.createElement)(n.Z,{type:"load",className:"image-upload-loader--loading-box__loader"}))},1340:(e,t,r)=>{r.d(t,{U:()=>m,g:()=>b});var a=r(9307),o=r(9818),n=r(4333),s=r(5736),l=r(9291),i=r(6831),u=r(7625),d=r(2200),c=r(4401);var g=r(1589);const m=e=>{let{children:t,navigationStateCallback:r=!1}=e;const m=(0,n.useViewportMatch)("medium"),{storedThemeStatus:w,brandName:h}=(0,o.useSelect)((e=>({storedThemeStatus:e(i.h).getThemeStatus(),brandName:e(i.h).getNewfoldBrandName()})),[]),p=(e=>({loader:{title:(0,s.sprintf)(
/* translators: %s: Brand */
(0,s.__)("Preparing your %s design studio","wp-module-onboarding"),e),subtitle:(0,s.__)("Hang tight while we show you some of the best WordPress has to offer!","wp-module-onboarding")},errorState:{title:(0,s.sprintf)(
/* translators: %s: Brand */
(0,s.__)("Preparing your %s design studio","wp-module-onboarding"),e),subtitle:(0,s.__)("Hang tight while we show you some of the best WordPress has to offer!","wp-module-onboarding"),error:(0,s.__)("Uh-oh, something went wrong. Please contact support.","wp-module-onboarding")}}))(h),{updateThemeStatus:b,setIsDrawerOpened:f,setIsDrawerSuppressed:y,setIsHeaderNavigationEnabled:_}=(0,o.useDispatch)(i.h),S=async()=>{const e=await(0,u.YL)(d.DY);return null!=e&&e.error?d.vv:e.body.status},v=()=>{switch(w){case d.Rq:case d.GV:return(()=>{if("function"==typeof r)return r();m&&f(!0),y(!1),_(!0)})();default:f(!1),y(!0),_(!1)}};(0,a.useEffect)((()=>{v(),w===d.a0&&(async()=>{const e=await S();switch(e){case d.Zh:setTimeout((async()=>{if(await S()!==d.GV)return b(d.vv);window.location.reload()}),d.YU);break;case d.GV:window.location.reload();break;default:b(e)}})()}),[w]);const E=async()=>(b(d.Zh),(await(0,u.N9)(d.DY,!0,!1)).error?b(d.Rq):window.location.reload());return(0,a.createElement)(a.Fragment,null,(()=>{switch(w){case d.vv:return(0,a.createElement)(g.Z,{showButton:!1,isModalOpen:!0,modalTitle:(0,s.__)("It looks like you may have an existing website","wp-module-onboarding"),modalText:(0,s.__)("Going through this setup will change your active theme, WordPress settings, add content – would you like to continue?","wp-module-onboarding"),modalOnClose:E,modalExitButtonText:(0,s.__)("Exit to WordPress","wp-module-onboarding")});case d.Rq:return(0,a.createElement)(c.V,{title:p.errorState.title,subtitle:p.errorState.subtitle,error:p.errorState.error});case d.GV:return t;default:return(0,a.createElement)(l.Y,{title:p.loader.title,subtitle:p.loader.subtitle})}})())};var w=r(3421),h=r(1392);var p=r(9884);const b=e=>{let{children:t,navigationStateCallback:r=!1}=e;const l=(0,n.useViewportMatch)("medium"),[u,g]=(0,a.useState)(d.Sr),{storedPluginsStatus:m,brandName:b}=(0,o.useSelect)((e=>({storedPluginsStatus:e(i.h).getPluginsStatus(),brandName:e(i.h).getNewfoldBrandName()})),[]),f=(e=>({errorState:{title:(0,s.sprintf)(
/* translators: 1: Brand 2: Site */
(0,s.__)("Making the keys to your %1$s Online %2$s","wp-module-onboarding"),e,(0,h.I)("Site")),subtitle:(0,s.__)("We’re installing WooCommerce for you to fill with your amazing products & services!","wp-module-onboarding"),error:(0,s.__)("Uh-oh, something went wrong. Please contact support.","wp-module-onboarding")}}))(b),{updatePluginsStatus:y,setIsDrawerOpened:_,setIsDrawerSuppressed:S,setIsHeaderNavigationEnabled:v}=(0,o.useDispatch)(i.h),E=async()=>{const e=await(0,w.qC)(d.Gv);return null!=e&&e.error?d.sG:e.body.status},N=e=>{switch(e){case d.sG:case d.ye:return(()=>{if("function"==typeof r)return r();l&&_(!0),S(!1),v(!0)})();default:_(!1),S(!0),v(!1)}};(0,a.useEffect)((()=>{N(u)}),[u]);return(0,a.useEffect)((()=>{g(m[d.Gv]),m[d.Gv]===d.Ck&&(async e=>{const t=await E();switch(t){case d.Sr:setTimeout((async()=>{if(await E()!==d.ye)return m[d.Gv]=d.sG,y(m),g(d.sG);window.location.reload()}),d.sr);break;case d.ye:window.location.reload();break;default:e[d.Gv]=t,g(t),y(e)}})(m)}),[m]),(0,a.createElement)(a.Fragment,null,(()=>{switch(u){case d.sG:return(0,a.createElement)(c.V,{title:f.errorState.title,subtitle:f.errorState.subtitle,error:f.errorState.error});case d.ye:return t;default:return(0,a.createElement)(p.Z,null)}})())}},4181:(e,t,r)=>{r.r(t),r.d(t,{default:()=>h});var a=r(9307),o=r(6831),n=r(9818),s=r(9250),l=r(5736),i=r(1392);var u=r(7533),d=r(9291),c=r(3421),g=r(4401),m=r(1340),w=r(2200);const h=()=>{const{setIsDrawerSuppressed:e,setIsHeaderNavigationEnabled:t,setSidebarActiveView:r,updateThemeStatus:h,flushQueue:p}=(0,n.useDispatch)(o.h),b=(0,s.s0)(),[f,y]=(0,a.useState)(!1),{nextStep:_,brandName:S,currentData:v,isQueueEmpty:E,pluginInstallHash:N}=(0,n.useSelect)((e=>({nextStep:e(o.h).getNextStep(),brandName:e(o.h).getNewfoldBrandName(),currentData:e(o.h).getCurrentOnboardingData(),isQueueEmpty:e(o.h).isQueueEmpty(),pluginInstallHash:e(o.h).getPluginInstallHash()})),[]),k=(e=>({loader:{title:(0,l.sprintf)(
/* translators: 1: Brand 2: site */
(0,l.__)("Hang tight, we’re building your %s %s","wp-module-onboarding"),e,(0,i.I)("site")),subtitle:(0,l.__)("We’re assembling your unique design and installing useful tools","wp-module-onboarding")},errorState:{title:(0,l.sprintf)(
/* translators: 1: Brand 2: site */
(0,l.__)("Hang tight, we’re building your %s %s","wp-module-onboarding"),e,(0,i.I)("site")),subtitle:(0,l.__)("We’re assembling your unique design and installing useful tools","wp-module-onboarding"),error:(0,l.__)("Uh-oh, something went wrong. Please contact support.","wp-module-onboarding")}}))(S);async function G(){const e=await(0,u.BN)();return null==e||!e.error}async function I(){var e,t;if(Array.isArray(null==v||null===(e=v.data)||void 0===e?void 0:e.siteFeatures))return!0;const r=await(0,c.uc)(N,{plugins:null==v||null===(t=v.data)||void 0===t?void 0:t.siteFeatures});return null==r||!r.error}return(0,a.useEffect)((()=>{E?(async()=>{await Promise.all([G(),I()]).then((e=>e.forEach((e=>{if(!e)return t(!0),y(!0)})))),b(_.path),h(w.a0)})():p()}),[E]),(0,a.createElement)(m.U,{navigationStateCallback:()=>{t(!1),e(!0),r(!1)}},f?(0,a.createElement)(g.V,{title:k.errorState.title,subtitle:k.errorState.subtitle,error:k.errorState.error}):(0,a.createElement)(d.Y,{title:k.loader.title,subtitle:k.loader.subtitle}))}}}]);