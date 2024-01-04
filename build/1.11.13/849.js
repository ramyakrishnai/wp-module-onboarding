"use strict";(globalThis.webpackChunknewfold_Onboarding=globalThis.webpackChunknewfold_Onboarding||[]).push([[849],{4401:(e,t,a)=>{a.d(t,{V:()=>l});var r=a(9196),o=a(5634),n=a(1526),s=a(950);const l=({title:e,subtitle:t,error:a})=>(0,r.createElement)(o.Z,{className:"step-error-state",isVerticallyCentered:!0},(0,r.createElement)(n.Z,{title:e,subtitle:t}),(0,r.createElement)("div",{className:"step-error-state__logo"}),(0,r.createElement)("h3",{className:"step-error-state__error"},a),(0,r.createElement)(s.Z,null))},9291:(e,t,a)=>{a.d(t,{L:()=>s,Y:()=>r.Z});var r=a(35),o=a(9196),n=a(682);const s=()=>(0,o.createElement)("div",{className:"image-upload-loader--loading-box"},(0,o.createElement)(n.Z,{type:"load",className:"image-upload-loader--loading-box__loader"}))},3124:(e,t,a)=>{a.d(t,{U:()=>C});var r=a(9196),o=a(9818),n=a(9307),s=a(4333),l=a(5736),i=a(9291),c=a(2503),d=a(7625),u=a(2200),m=a(4401);var w=a(9250),h=a(4310),p=a(5609),b=a(3967),g=a.n(b),_=a(7207),E=a(7533),f=a(8395),v=a(8297),y=a(6342),S=a(3421),N=a(3568);const T=({buttonText:e=(0,l.__)("Exit to WordPress","wp-module-onboarding"),showButtonIcon:t=!0,showButton:a=!0,buttonVariant:s="secondary",buttonClassName:i=!1,isModalOpen:d=!1,modalTitle:m=(0,l.__)("Exit without finishing?","wp-module-onboarding"),modalText:b=!1,modalPrimaryCloseButtonText:T=(0,l.__)("Continue","wp-module-onboarding"),modalOnClose:C=!1,modalExitButtonText:D=(0,l.__)("Exit","wp-module-onboarding")})=>{const[x,k]=(0,n.useState)(d),B=()=>{"function"==typeof C&&C(),k(!1)},V=(0,w.TH)(),{currentData:O,brandName:P,socialData:Z,currentStep:G}=(0,o.useSelect)((e=>({currentData:e(c.h).getCurrentOnboardingData(),brandName:e(c.h).getNewfoldBrandName(),socialData:e(c.h).getOnboardingSocialData(),currentStep:e(c.h).getCurrentStep()})),[]),{setOnboardingSocialData:I}=(0,o.useDispatch)(c.h);return b||(b=(0,l.sprintf)(/* translators: %s: Brand */ /* translators: %s: Brand */
(0,l.__)("You can restart onboarding from your %s Settings page.","wp-module-onboarding"),P)),(0,r.createElement)(n.Fragment,null,a&&(0,r.createElement)(p.Button,{icon:!!t&&h.Z,variant:s,onClick:()=>k(!0),className:g()("nfd-onboarding-etw__trigger",i)},e),x&&(0,r.createElement)(p.Modal,{title:m,onRequestClose:()=>B()},(0,r.createElement)("p",null,b),(0,r.createElement)(p.ButtonGroup,{className:"nfd-onboarding-etw__buttons"},(0,r.createElement)(p.Button,{variant:"secondary",onClick:()=>B()},T),(0,r.createElement)(p.Button,{variant:"primary",onClick:()=>async function(e){if(O){if(O.hasExited=(new Date).getTime(),e?.includes("basic-info")){const e=await async function(){const e=await(0,f.Gw)(),t=await(0,f.I2)(Z);return null!==t?.error?e?.body:t?.body}();e&&I(e)}(0,E.kB)(O),(0,N.a)(O?.data?.comingSoon)}(0,S.jd)(),(0,v.tH)(new v.Z_(y._C,G.title)),await _.v.dispatchEvents(y.En),window.location.replace(u.br)}(V.pathname)},D))))},C=({children:e,navigationStateCallback:t=!1,refresh:a=!0})=>{const w=(0,s.useViewportMatch)("medium"),{storedThemeStatus:h,brandName:p}=(0,o.useSelect)((e=>({storedThemeStatus:e(c.h).getThemeStatus(),brandName:e(c.h).getNewfoldBrandName()})),[]),b=(e=>({loader:{title:(0,l.sprintf)(/* translators: %s: Brand */ /* translators: %s: Brand */
(0,l.__)("Preparing your %s design studio","wp-module-onboarding"),e),subtitle:(0,l.__)("Hang tight while we show you some of the best WordPress has to offer!","wp-module-onboarding")},errorState:{title:(0,l.sprintf)(/* translators: %s: Brand */ /* translators: %s: Brand */
(0,l.__)("Preparing your %s design studio","wp-module-onboarding"),e),subtitle:(0,l.__)("Hang tight while we show you some of the best WordPress has to offer!","wp-module-onboarding"),error:(0,l.__)("Uh-oh, something went wrong. Please contact support.","wp-module-onboarding")}}))(p),{updateThemeStatus:g,setIsDrawerOpened:_,setIsDrawerSuppressed:E,setIsHeaderNavigationEnabled:f}=(0,o.useDispatch)(c.h),v=()=>{switch(h){case u.Rq:case u.GV:return(()=>{if("function"==typeof t)return t();w&&_(!0),E(!1),f(!0)})();default:_(!1),E(!0),f(!1)}};(0,n.useEffect)((()=>{v(),h===u.a0&&(async()=>{const e=await(async()=>{const e=await(0,d.YL)(u.DY);return e?.error?u.vv:e.body.status})();switch(e){case u.Zh:(async()=>{(await(0,d.sN)(u.DY)).error||!0!==a?y():window.location.reload()})();break;case u.GV:!0===a&&window.location.reload();break;default:g(e)}})()}),[h]);const y=async()=>{if(g(u.Zh),(await(0,d.N9)(u.DY,!0,!1)).error)return g(u.Rq);!0===a&&window.location.reload()};return(0,r.createElement)(n.Fragment,null,(()=>{switch(h){case u.vv:return(0,r.createElement)(T,{showButton:!1,isModalOpen:!0,modalTitle:(0,l.__)("It looks like you may have an existing website","wp-module-onboarding"),modalText:(0,l.__)("Going through this setup will change your active theme, WordPress settings, add content – would you like to continue?","wp-module-onboarding"),modalOnClose:y,modalExitButtonText:(0,l.__)("Exit to WordPress","wp-module-onboarding")});case u.Rq:return(0,r.createElement)(m.V,{title:b.errorState.title,subtitle:b.errorState.subtitle,error:b.errorState.error});case u.GV:return e;default:return(0,r.createElement)(i.Y,{title:b.loader.title,subtitle:b.loader.subtitle})}})())}},1849:(e,t,a)=>{a.r(t),a.d(t,{default:()=>h});var r=a(9196),o=a(9250),n=a(9307),s=a(9818),l=a(6138),i=a(2503),c=a(5634),d=a(3124),u=a(6332),m=a(2200),w=a(8548);const h=()=>{const e=(0,o.TH)(),[t,a]=(0,n.useState)(),{currentStep:h,themeStatus:p}=(0,s.useSelect)((t=>({currentStep:t(i.h).getStepFromPath(e.pathname),themeStatus:t(i.h).getThemeStatus()})),[]),{setDrawerActiveView:b,setSidebarActiveView:g,updateThemeStatus:_}=(0,s.useDispatch)(i.h);return(0,n.useEffect)((()=>{g(m.Jq),b(m.qR)}),[]),(0,n.useEffect)((()=>{m.GV===p&&(async()=>{var e;const t=await(0,l.C)(null!==(e=h?.data?.patternId)&&void 0!==e?e:w.Ub[0]?.data.patternId,!0);if(t?.error)return _(m.a0);a(t?.body)})()}),[p]),(0,r.createElement)(d.U,null,(0,r.createElement)(u.V3,null,(0,r.createElement)(c.Z,{className:"theme-colors-preview"},(0,r.createElement)("div",{className:"theme-colors-preview__title-bar"},(0,r.createElement)("div",{className:"theme-colors-preview__title-bar__browser"},(0,r.createElement)("span",{className:"theme-colors-preview__title-bar__browser__dot"}),(0,r.createElement)("span",{className:"theme-colors-preview__title-bar__browser__dot"}),(0,r.createElement)("span",{className:"theme-colors-preview__title-bar__browser__dot"}))),!t&&(0,r.createElement)(u.i5,{styling:"large",viewportWidth:1300}),t&&(0,r.createElement)(u.i5,{blockGrammer:t,styling:"large",viewportWidth:1300}))))}}}]);