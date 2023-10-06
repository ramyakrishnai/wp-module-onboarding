"use strict";(globalThis.webpackChunknewfold_Onboarding=globalThis.webpackChunknewfold_Onboarding||[]).push([[420],{5420:(e,t,a)=>{a.r(t),a.d(t,{default:()=>k});var n=a(9307),s=a(2819),l=a(4333),c=a(9818),o=a(2503),i=a(2200),r=a(5634),d=a(3421),u=a(1526),m=a(1984),h=a(6058),b=a(5609),g=a(682);const v=e=>{let{name:t,icon:a,title:s,desc:l,subtitle:c,callback:o,tabIndex:i=0,isSelectedDefault:r,fullWidth:d=!1,className:u="checkbox-item"}=e;const[v,p]=(0,n.useState)(!1),[_,E]=(0,n.useState)(r),f=()=>{p(!v)};return(0,n.createElement)("div",null,(0,n.createElement)("div",{className:`${u} ${_&&`${u}--selected`} ${d&&`${u}--full-width`} ${v&&`${u}--shown`}`},(0,n.createElement)("div",{className:`${u}-container`},(0,n.createElement)(b.CheckboxControl,{checked:_,onChange:()=>{E(!_),o(t,!_)},className:`${u}-checkbox`}),(0,n.createElement)("div",{className:`${u}__contents`},(0,n.createElement)("div",{className:`${u}__contents-icon\n                                     ${_&&`${u}__contents-icon--selected`}\n                                     ${v&&`${u}__contents-icon--shown`}`},(0,n.createElement)("div",{style:{width:"35px",height:"35px",backgroundPosition:"center",backgroundRepeat:"no-repeat",backgroundImage:`var(${a})`,filter:_?"invert(100%) sepia(100%) saturate(0%) hue-rotate(288deg) brightness(102%) contrast(102%)":"none"}})),(0,n.createElement)("div",{className:`${u}__contents-text`},(0,n.createElement)("div",{className:`${u}__contents-text-title ${_&&`${u}__contents-text-title--selected`}`},s),(0,n.createElement)("div",{className:`${u}__contents-text-subtitle`},c)),(0,n.createElement)("div",{className:`${u}__contents-help ${v?"highlighted":""}`,onClick:f,role:"button",onKeyDown:f,tabIndex:i},(0,n.createElement)(m.Z,{icon:h.Z,style:{width:"30px",height:"30px"}}))))),v&&(0,n.createElement)(g.Z,{className:` ${u}__dropdown `,type:"dropdown"},(0,n.createElement)("div",{className:`${u}__desc ${d&&`${u}__desc--full-width`}`},l)))},p=e=>{let{count:t}=e;const a=()=>{const e=[];for(let a=0;a<t;a++)e.push((0,n.createElement)(g.Z,{type:"shine-placeholder",className:"checkbox-skeleton-item"}));return e};return(0,n.createElement)("div",{className:"checkbox-list"},(0,n.createElement)("div",{className:"checkbox-list-col"},a().slice(0,Math.floor(t/2))),(0,n.createElement)("div",{className:"checkbox-list-col"},a().slice(Math.floor(t/2),t)))},_=e=>{let{callback:t,selectedItems:a,customItemsList:s}=e;const l=Object.keys(s).length,c=()=>{var e=[];for(const c in s){var l=s[c];const o=a[l.slug];e.push((0,n.createElement)(v,{name:l.slug,icon:l.icon,title:l.title,subtitle:l.subtitle,desc:l.desc,callback:t,isSelectedDefault:null!=o&&o}))}return e};return(0,n.createElement)("div",{className:"checkbox-list"},(0,n.createElement)("div",{className:"checkbox-list-col"},c().slice(0,Math.floor(l/2))),(0,n.createElement)("div",{className:"checkbox-list-col"},c().slice(Math.floor(l/2),l)))};var E=a(5736);var f=a(1392);const w=()=>{var e;const t={title:(0,E.__)("Coming Soon","wp-module-onboarding"),subtitle:(0,E.sprintf)(
/* translators: %s: site or store */
(0,E.__)("Keep your %s private until you click launch","wp-module-onboarding"),(0,f.I)("site")),desc:(0,E.sprintf)(
/* translators: %s: site or store */
(0,E.__)("We'll show a placeholder page to logged-out visitors while you build your %s.","wp-module-onboarding"),(0,f.I)("site"))},{currentData:a}=(0,c.useSelect)((e=>({currentData:e(o.h).getCurrentOnboardingData()})),[]),{setCurrentOnboardingData:s}=(0,c.useDispatch)(o.h);return(0,n.createElement)("div",{className:"coming_soon__wrapper"},(0,n.createElement)(v,{name:"coming_soon",title:t.title,subtitle:t.subtitle,icon:"--site-features-comingsoon",desc:t.desc,callback:async function(e,t){a.data.comingSoon=t,s(a)},fullWidth:!0,isSelectedDefault:null==a||null===(e=a.data)||void 0===e?void 0:e.comingSoon}))},k=()=>{var e,t;const a=(0,l.useViewportMatch)("medium"),[m,h]=(0,n.useState)(),[b,g]=(0,n.useState)(),{setIsDrawerOpened:v,setDrawerActiveView:f,setSidebarActiveView:k,setCurrentOnboardingData:$,setIsDrawerSuppressed:x,setIsHeaderNavigationEnabled:N}=(0,c.useDispatch)(o.h),{currentStep:y,currentData:S,themeVariations:D}=(0,c.useSelect)((e=>({currentStep:e(o.h).getCurrentStep(),currentData:e(o.h).getCurrentOnboardingData(),themeVariations:e(o.h).getStepPreviewData()})),[]);(0,n.useEffect)((()=>{a&&v(!1),k(i.Jq),x(!1),f(i.tM),N(!0),async function(){var e;const t=await(0,d.yn)();var a;(0,s.isEmpty)(null==S||null===(e=S.data)||void 0===e?void 0:e.siteFeatures)?async function(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];const a={};for(const t in e){const n=e[t];a[n.slug]=n.selected}h(a),t&&(S.data.siteFeatures={...a},$(S))}(t.body,!0):h({...null==S||null===(a=S.data)||void 0===a?void 0:a.siteFeatures}),g(t.body)}()}),[]);const C={heading:(0,E.__)("Key features to supercharge your site","wp-module-onboarding"),subheading:(0,E.__)("Our toolbox of Plugins & Services is your toolbox.","wp-module-onboarding")};return(0,n.createElement)(r.Z,null,(0,n.createElement)("div",{className:"site-features__heading"},(0,n.createElement)(u.Z,{title:C.heading,subtitle:C.subheading})),!b&&(0,n.createElement)(p,{count:null===(e=D[null==y||null===(t=y.data)||void 0===t?void 0:t.patternId])||void 0===e?void 0:e.previewCount}),b&&(0,n.createElement)(_,{callback:async function(e,t){const a={...m};a[e]=t,h(a),S.data.siteFeatures={...a},$(S)},selectedItems:m,customItemsList:b}),b&&(0,n.createElement)(w,null))}}}]);