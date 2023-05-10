"use strict";(globalThis.webpackChunknewfold_Onboarding=globalThis.webpackChunknewfold_Onboarding||[]).push([[193],{4401:(e,t,a)=>{a.d(t,{V:()=>i});var r=a(9307),n=a(5791),o=a(4316),s=a(950);const i=e=>{let{title:t,subtitle:a,error:i}=e;return(0,r.createElement)(n.Z,{className:"step-error-state",isVerticallyCentered:!0},(0,r.createElement)(o.Z,{title:t,subtitle:a}),(0,r.createElement)("div",{className:"step-error-state__logo"}),(0,r.createElement)("h3",{className:"step-error-state__error"},i),(0,r.createElement)(s.Z,null))}},4316:(e,t,a)=>{a.d(t,{Z:()=>n});var r=a(9307);const n=e=>{let{title:t,subtitle:a,children:n}=e;return(0,r.createElement)("div",{className:"nfd-main-heading"},(0,r.createElement)("h2",{className:"nfd-main-heading__title"},t),a&&(0,r.createElement)("h3",{className:"nfd-main-heading__subtitle"},a),n)}},5791:(e,t,a)=>{a.d(t,{Z:()=>p});var r=a(9307),n=a(4184),o=a.n(n),s=a(5158),i=a(6974),l=a(2200),d=a(6989),u=a.n(d),c=a(4704);const m=e=>{let{className:t="nfd-onboarding-layout__base",children:a}=e;const n=(0,i.TH)(),d=document.querySelector(".nfd-onboard-content");return(0,r.useEffect)((()=>{null==d||d.focus({preventScroll:!0}),function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"Showing new Onboarding Page";(0,s.speak)(t,"assertive")}(n,"Override"),new class{constructor(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};this.eventSlug=e,this.eventData=t}send(){u()({url:(0,c.F)("events"),method:"POST",data:{slug:this.eventSlug,data:this.eventData}}).catch((e=>{console.error(e)}))}}(`${l.Db}-pageview`,{stepID:n.pathname,previousStepID:window.nfdOnboarding.previousStepID}).send(),window.nfdOnboarding.previousStepID=n.pathname}),[n.pathname]),(0,r.createElement)("div",{className:o()("nfd-onboarding-layout",t)},a)};var h=a(682);const g=e=>{let{children:t}=e;return(0,r.createElement)("section",{className:"is-contained"},t)},p=e=>{let{className:t="",children:a,isBgPrimary:n=!1,isCentered:s=!1,isVerticallyCentered:i=!1,isContained:l=!1,isPadded:d=!1,isFadeIn:u=!0}=e;const c=l?g:r.Fragment;return(0,r.createElement)(h.Z,{type:u&&"fade-in",duration:"233ms",timingFunction:"ease-in-out"},(0,r.createElement)(m,{className:o()("nfd-onboarding-layout__common",t,{"is-bg-primary":n},{"is-centered":s},{"is-vertically-centered":i},{"is-padded":d})},(0,r.createElement)(c,null,a)))}},7004:(e,t,a)=>{a.d(t,{L:()=>d,Y:()=>i});var r=a(9307),n=a(5791),o=a(4316),s=a(950);const i=e=>{let{title:t,subtitle:a}=e;return(0,r.createElement)(n.Z,{className:"step-loader",isVerticallyCentered:!0},(0,r.createElement)(o.Z,{title:t,subtitle:a}),(0,r.createElement)("div",{className:"step-loader__logo-container"},(0,r.createElement)("div",{className:"step-loader__logo"})),(0,r.createElement)(s.Z,null))};var l=a(682);const d=()=>(0,r.createElement)("div",{className:"image-upload-loader--loading-box"},(0,r.createElement)(l.Z,{type:"load",className:"image-upload-loader--loading-box__loader"}))},950:(e,t,a)=>{a.d(t,{Z:()=>i});var r=a(9307),n=a(4106),o=a(9818),s=a(5736);const i=e=>{let{question:t=(0,s.__)("Need Help?","wp-module-onboarding"),urlLabel:a=(0,s.__)("Hire our Experts","wp-module-onboarding")}=e;const i=(0,o.select)(n.h).getHireExpertsUrl();return i&&(0,r.createElement)("div",{className:"nfd-card-need-help-tag"},t,(0,r.createElement)("a",{href:i,target:"_blank",rel:"noreferrer"},a))}},1340:(e,t,a)=>{a.d(t,{U:()=>h,g:()=>w});var r=a(9307),n=a(9818),o=a(4333),s=a(5736),i=a(7004),l=a(4106),d=a(7625),u=a(2200),c=a(4401);var m=a(1589);const h=e=>{let{children:t,navigationStateCallback:a=!1}=e;const h=(0,o.useViewportMatch)("medium"),{storedThemeStatus:g,brandName:p}=(0,n.useSelect)((e=>({storedThemeStatus:e(l.h).getThemeStatus(),brandName:e(l.h).getNewfoldBrandName()})),[]),w=(e=>({loader:{title:(0,s.sprintf)(
/* translators: %s: Brand */
(0,s.__)("Preparing your %s design studio","wp-module-onboarding"),e),subtitle:(0,s.__)("Hang tight while we show you some of the best WordPress has to offer!","wp-module-onboarding")},errorState:{title:(0,s.sprintf)(
/* translators: %s: Brand */
(0,s.__)("Preparing your %s design studio","wp-module-onboarding"),e),subtitle:(0,s.__)("Hang tight while we show you some of the best WordPress has to offer!","wp-module-onboarding"),error:(0,s.__)("Uh-oh, something went wrong. Please contact support.","wp-module-onboarding")}}))(p),{updateThemeStatus:v,setIsDrawerOpened:b,setIsDrawerSuppressed:f,setIsHeaderNavigationEnabled:_}=(0,n.useDispatch)(l.h),y=async()=>{const e=await(0,d.YL)(u.DY);return null!=e&&e.error?u.vv:e.body.status},S=()=>{switch(g){case u.Rq:case u.GV:return(()=>{if("function"==typeof a)return a();h&&b(!0),f(!1),_(!0)})();default:b(!1),f(!0),_(!1)}};(0,r.useEffect)((()=>{S(),g===u.a0&&(async()=>{const e=await y();switch(e){case u.Zh:setTimeout((async()=>{if(await y()!==u.GV)return v(u.vv);window.location.reload()}),u.YU);break;case u.GV:window.location.reload();break;default:v(e)}})()}),[g]);const E=async()=>(v(u.Zh),(await(0,d.N9)(u.DY,!0,!1)).error?v(u.Rq):window.location.reload());return(0,r.createElement)(r.Fragment,null,(()=>{switch(g){case u.vv:return(0,r.createElement)(m.Z,{showButton:!1,isModalOpen:!0,modalTitle:(0,s.__)("It looks like you may have an existing website","wp-module-onboarding"),modalText:(0,s.__)("Going through this setup will change your active theme, WordPress settings, add content – would you like to continue?","wp-module-onboarding"),modalOnClose:E,modalExitButtonText:(0,s.__)("Exit to WordPress","wp-module-onboarding")});case u.Rq:return(0,r.createElement)(c.V,{title:w.errorState.title,subtitle:w.errorState.subtitle,error:w.errorState.error});case u.GV:return t;default:return(0,r.createElement)(i.Y,{title:w.loader.title,subtitle:w.loader.subtitle})}})())};var g=a(3421),p=a(1392);const w=e=>{let{children:t,navigationStateCallback:a=!1}=e;const d=(0,o.useViewportMatch)("medium"),[m,h]=(0,r.useState)(u.Sr),{storedPluginsStatus:w,brandName:v}=(0,n.useSelect)((e=>({storedPluginsStatus:e(l.h).getPluginsStatus(),brandName:e(l.h).getNewfoldBrandName()})),[]),b=(e=>({loader:{title:(0,s.sprintf)(
/* translators: 1: Brand 2: Site */
(0,s.__)("Making the keys to your %s Online %s","wp-module-onboarding"),e,(0,p.I)("Site")),subtitle:(0,s.__)("We’re installing WooCommerce for you to fill with your amazing products & services!","wp-module-onboarding")},errorState:{title:(0,s.sprintf)(
/* translators: 1: Brand 2: Site */
(0,s.__)("Making the keys to your %s Online %s","wp-module-onboarding"),e,(0,p.I)("Site")),subtitle:(0,s.__)("We’re installing WooCommerce for you to fill with your amazing products & services!","wp-module-onboarding"),error:(0,s.__)("Uh-oh, something went wrong. Please contact support.","wp-module-onboarding")}}))(v),{updatePluginsStatus:f,setIsDrawerOpened:_,setIsDrawerSuppressed:y,setIsHeaderNavigationEnabled:S}=(0,n.useDispatch)(l.h),E=async()=>{const e=await(0,g.qC)(u.Gv);return null!=e&&e.error?u.sG:e.body.status},N=e=>{switch(e){case u.sG:case u.ye:return(()=>{if("function"==typeof a)return a();d&&_(!0),y(!1),S(!0)})();default:_(!1),y(!0),S(!1)}};(0,r.useEffect)((()=>{N(m)}),[m]);return(0,r.useEffect)((()=>{h(w[u.Gv]),w[u.Gv]===u.Ck&&(async e=>{const t=await E();switch(t){case u.Sr:setTimeout((async()=>{if(await E()!==u.ye)return w[u.Gv]=u.sG,f(w),h(u.sG);window.location.reload()}),u.sr);break;case u.ye:window.location.reload();break;default:e[u.Gv]=t,h(t),f(e)}})(w)}),[w]),(0,r.createElement)(r.Fragment,null,(()=>{switch(m){case u.sG:return(0,r.createElement)(c.V,{title:b.errorState.title,subtitle:b.errorState.subtitle,error:b.errorState.error});case u.ye:return t;default:return(0,r.createElement)(i.Y,{title:b.loader.title,subtitle:b.loader.subtitle})}})())}},3193:(e,t,a)=>{a.r(t),a.d(t,{default:()=>h});var r=a(9307),n=a(6974),o=a(9818),s=a(6138),i=a(4106),l=a(5791),d=a(2200),u=a(4316),c=a(1340),m=a(6332);const h=()=>{var e;const t=["yith-wonder/homepage-1","yith-wonder/homepage-2","yith-wonder/homepage-3"],a={"homepage-1":["yith-wonder/site-header-left-logo-navigation-inline","yith-wonder/homepage-1","yith-wonder/site-footer"],"homepage-2":["yith-wonder/site-header-left-logo-navigation-inline","yith-wonder/homepage-2","yith-wonder/site-footer"],"homepage-3":["yith-wonder/site-header-left-logo-navigation-inline","yith-wonder/homepage-3","yith-wonder/site-footer"]},h=(0,n.TH)(),[g,p]=(0,r.useState)(),[w,v]=(0,r.useState)(0),{currentStep:b,currentData:f,storedPreviewSettings:_,themeStatus:y,themeVariations:S}=(0,o.useSelect)((e=>({currentStep:e(i.h).getStepFromPath(h.pathname),currentData:e(i.h).getCurrentOnboardingData(),storedPreviewSettings:e(i.h).getPreviewSettings(),themeStatus:e(i.h).getThemeStatus(),themeVariations:e(i.h).getStepPreviewData()})),[]),{setDrawerActiveView:E,setSidebarActiveView:N,setCurrentOnboardingData:P,updateThemeStatus:k}=(0,o.useDispatch)(i.h);return(0,r.useEffect)((()=>{N(d.Jq),E(d.Yl)}),[]),(0,r.useEffect)((()=>{y===d.GV&&async function(){const e=await(0,s.C)(b.patternId);if(null!=e&&e.error)return k(d.a0);p(function(e){const t=[];for(const r in a){const n=a[r];(f.data.partHeader||""!==f.data.partHeader)&&(n[0]=f.data.partHeader);let o="";n.forEach((t=>{null==e||e.body.forEach((e=>{e.slug===t&&(o+=e.content)}))})),t.push(o)}return t}(e)),""!==(null==f?void 0:f.data.sitePages.homepage)?v(null==t?void 0:t.indexOf(null==f?void 0:f.data.sitePages.homepage)):(f.data.sitePages={...f.data.sitePages,homepage:t[0]},P(f))}()}),[y]),(0,r.createElement)(c.U,null,(0,r.createElement)(m.V3,null,(0,r.createElement)(l.Z,null,(0,r.createElement)("div",{className:"homepage_preview"},(0,r.createElement)(u.Z,{title:null==b?void 0:b.heading,subtitle:null==b?void 0:b.subheading}),(0,r.createElement)("div",{className:"homepage_preview__list"},(0,r.createElement)(m.r9,{watch:g,count:null===(e=S[null==b?void 0:b.patternId])||void 0===e?void 0:e.previewCount,callback:function(){return null==g?void 0:g.map(((e,a)=>e?(0,r.createElement)(m.H,{key:a,className:"homepage_preview__list__item",selected:a===w,blockGrammer:e,viewportWidth:1200,styling:"custom",previewSettings:_,overlay:!1,onClick:()=>function(e){v(e),f.data.sitePages={...f.data.sitePages,homepage:t[e]},P(f)}(a)}):null))},className:"homepage_preview__list__item",viewportWidth:1200}))))))}}}]);