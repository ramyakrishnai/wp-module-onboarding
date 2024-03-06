"use strict";(globalThis.webpackChunknewfold_Onboarding=globalThis.webpackChunknewfold_Onboarding||[]).push([[632],{8053:(e,t,a)=>{a.d(t,{A:()=>i});var n=a(1609),o=a(5573);const i=(0,n.createElement)(o.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,n.createElement)(o.Path,{d:"M12 13.06l3.712 3.713 1.061-1.06L13.061 12l3.712-3.712-1.06-1.06L12 10.938 8.288 7.227l-1.061 1.06L10.939 12l-3.712 3.712 1.06 1.061L12 13.061z"}))},6999:(e,t,a)=>{a.d(t,{A:()=>m});var n=a(1609),o=a(6942),i=a.n(o),r=a(148),l=a(7143),s=a(6427),d=a(7677),c=a(6655),g=a(7675);const m=({text:e,className:t,callback:a=null,disabled:o=!1,showChevronRight:m=!0})=>{const _=(0,r.Zp)(),{nextStep:u}=(0,l.useSelect)((e=>({nextStep:e(g.M).getNextStep()})));return(0,n.createElement)(s.Button,{className:i()("nfd-onboarding-button--site-gen-next",{"nfd-onboarding-button--site-gen-next--disabled":o},t),onClick:()=>{o||(a&&"function"==typeof a&&a(),u&&_(u.path))}},(0,n.createElement)("p",{className:"nfd-onboarding-button--site-gen-next--text"},e),m&&(0,n.createElement)(d.A,{className:"nfd-onboarding-button--site-gen-next--icon",icon:c.A}))}},513:(e,t,a)=>{a.d(t,{A:()=>r});var n=a(1609),o=a(8468),i=a(7673);const r=(0,o.memo)((({title:e})=>(0,n.createElement)("div",{className:"ai-heading"},(0,n.createElement)(i.A,{height:"40px"}),(0,n.createElement)("div",{className:"ai-heading--title"},e))))},7673:(e,t,a)=>{a.d(t,{A:()=>i});var n=a(1609),o=a(8468);const i=({height:e="80px"})=>{const t={"--wnd-ai-logo-size":e,height:`var(--wnd-ai-logo-size, ${e})`};return(0,o.useEffect)((()=>{document.querySelectorAll("[data-wnd-ai-logo]").forEach((function(e){let t=!1,a=null;const n=()=>{t?document.body.classList.add("wnd-ai-logo-keydown"):document.body.classList.remove("wnd-ai-logo-keydown"),a=null};e.addEventListener("keydown",(function(){t||(t=!0,a||(a=window.requestAnimationFrame(n)))})),e.addEventListener("keyup",(function(){t=!1,a||(a=window.requestAnimationFrame(n))}))}))}),[]),(0,n.createElement)("span",{className:"wnd-ai-logo",style:t},(0,n.createElement)("span",{className:"wnd-ai-logo__circle wnd-ai-logo__circle--bg"}),(0,n.createElement)("span",{className:"wnd-ai-logo__circle wnd-ai-logo__circle--1"}),(0,n.createElement)("span",{className:"wnd-ai-logo__circle wnd-ai-logo__circle--2"}),(0,n.createElement)("span",{className:"wnd-ai-logo__circle wnd-ai-logo__circle--3"}),(0,n.createElement)("span",{className:"wnd-ai-logo__circle wnd-ai-logo__circle--4"}),(0,n.createElement)("span",{className:"wnd-ai-logo__circle wnd-ai-logo__circle--5"}),(0,n.createElement)("span",{className:"wnd-ai-logo__circle wnd-ai-logo__circle--6"}),(0,n.createElement)("span",{className:"wnd-ai-logo__spinner"}))}},2607:(e,t,a)=>{a.d(t,{A:()=>f});var n=a(1609),o=a(7723),i=a(8468),r=a(6427),l=a(7143),s=a(148),d=a(4371),c=a(6079),g=a(7675),m=a(2014),_=a(8969),u=a(2202),p=a(6942),w=a.n(p);const f=(0,i.memo)((({callback:e=!1,className:t,text:a})=>{const i=(0,s.Zp)(),p=(0,s.zy)(),{nextStep:f,currentData:b,socialData:h}=(0,l.useSelect)((e=>({nextStep:e(g.M).getNextStep(),currentData:e(g.M).getCurrentOnboardingData(),socialData:e(g.M).getOnboardingSocialData()})),[]),v=null===f||!1===f,{setOnboardingSocialData:E}=(0,l.useDispatch)(g.M);return(0,n.createElement)(r.Button,{className:w()("skip-button",t),onClick:v?()=>async function(e){if(b){if(b.isComplete=(new Date).getTime(),e?.includes("basic-info")){const e=await async function(){const e=await(0,m.mt)(),t=await(0,m.oc)(h);return null!==t?.error?e?.body:t?.body}();e&&E(e),await d.y.dispatchEvents(u.XJ)}(0,c.V1)(b)}window.location.replace(_.R0)}(p.pathname):()=>("function"==typeof e&&e(),void i(f.path))},a||(0,o.__)("Skip this Step","wp-module-onboarding"))}))},5632:(e,t,a)=>{a.r(t),a.d(t,{default:()=>A});var n=a(1609),o=a(9491),i=a(8468),r=a(7143),l=a(3582),s=a(7723);var d=a(8969),c=a(2607),g=a(7675),m=a(513),_=a(3988),u=a(6999),p=a(9645),w=a(6478),f=a(9269),b=a(6942),h=a.n(b),v=a(5508),E=a.n(v),x=a(7677),N=a(8053);const S=(0,i.memo)((({image:e,imageSetter:t})=>{const a=(0,i.useRef)(null),{theme:o}=(0,i.useContext)(f.D),[l,c]=(0,i.useState)(!1),[m,_]=(0,i.useState)(!1),[u,b]=(0,i.useState)(""),{updateSiteGenErrorStatus:v}=(0,r.useDispatch)(g.M);async function S(e){if(e){c(!0);const a=await(0,p.V)(e);if(!a?.body)return v(!0),c(!1);const n=a.body?.id,o=a.body?.source_url;e&&"image/png"===e.type&&((e,t)=>{const a=new Image;a.crossOrigin="Anonymous",a.onload=()=>{const e=document.createElement("canvas"),t=e.getContext("2d");e.width=a.width,e.height=a.height,t.drawImage(a,0,0);const n=t.getImageData(0,0,e.width,e.height).data;let o=0,i=0,r=0,l=0;for(let e=0;e<n.length;e+=4)n[e+3]>0&&(o+=n[e],i+=n[e+1],r+=n[e+2],l++);l>0&&(o=Math.floor(o/l),i=Math.floor(i/l),r=Math.floor(r/l)),(e=>{const t=(e=>{const[t,a,n]=e.match(/\d+/g).map(Number);return.2126*t+.7152*a+.0722*n>160?d.fS:d.Vw})(e);b(t)})(`rgb(${o}, ${i}, ${r})`)},a.src=e})(o),t({id:n,url:o,fileName:e?.name,fileSize:e?.size})}c(!1)}const y=!l&&0!==e?.id&&void 0!==e?.id,D=h()("nfd-onboarding-image-uploader--with-text",{"nfd-onboarding-image-uploader--with-text--on-drag":m,"nfd-onboarding-image-uploader--with-text--not-dashed":y,"nfd-onboarding-image-uploader--with-text--not-dashed__dark":u===d.fS,"nfd-onboarding-image-uploader--with-text--not-dashed__light":u===d.Vw});return(0,n.createElement)("div",{className:D,onDrop:e=>(e=>{e.preventDefault(),e.stopPropagation(),_(!1),e?.dataTransfer?.files&&e?.dataTransfer?.files.length>0&&"image"===e?.dataTransfer?.files[0]?.type.split("/")[0]&&S(e?.dataTransfer?.files[0])})(e),onDragOver:e=>(e=>{e.preventDefault(),e.stopPropagation(),_(!0)})(e),onDragEnter:e=>(e=>{e.preventDefault(),e.stopPropagation(),_(!0)})(e),onDragLeave:e=>(e=>{e.preventDefault(),e.stopPropagation(),_(!1)})(e)},l?(0,n.createElement)(w.A,null):(0,n.createElement)(n.Fragment,null,!y&&(0,n.createElement)(n.Fragment,null,(0,n.createElement)("div",{className:"nfd-onboarding-image-uploader--with-text__heading"},(0,n.createElement)("div",{className:h()("nfd-onboarding-image-uploader--with-text__heading__icon",o===d.Vw?"nfd-onboarding-image-uploader--with-text__heading__icon--light":null)}),(0,n.createElement)("p",{className:"nfd-onboarding-image-uploader--with-text__heading__text"},(0,n.createElement)("span",{className:"nfd-onboarding-image-uploader--with-text__heading__text__drop"},(0,s.__)("Drop your logo here, or ","wp-module-onboarding")),(0,n.createElement)("button",{onClick:()=>{a?.current.click()},className:"nfd-onboarding-image-uploader--with-text__heading__text__modal"},(0,s.__)("browse","wp-module-onboarding")),(0,n.createElement)("input",{className:"nfd-onboarding-image-uploader--with-text__heading__text__input",accept:"image/*",type:"file",ref:a,onChange:e=>{e?.target?.files&&e?.target?.files.length>0&&S(e?.target?.files[0])}}))),(0,n.createElement)("div",{className:"nfd-onboarding-image-uploader--with-text__subheading"},(0,n.createElement)("p",{className:"nfd-onboarding-image-uploader--with-text__subheading__text"},(0,s.__)("supports .jpg, .png, .gif","wp-module-onboarding")))),y&&(0,n.createElement)("div",{className:"nfd-onboarding-image-uploader--with-text__site_logo__preview"},(0,n.createElement)("div",{className:"nfd-onboarding-image-uploader--with-text__site_logo__preview__wrapper"},(0,n.createElement)("img",{className:"nfd-onboarding-image-uploader--with-text__site_logo__preview__image",src:e.url,alt:(0,s.__)("Site Logo Preview","wp-module-onboarding")})),(0,n.createElement)("div",{className:"nfd-onboarding-image-uploader--with-text__site_logo__preview__details"},(0,n.createElement)("p",{className:"nfd-onboarding-image-uploader--with-text__site_logo__preview__details__filename"},e.fileName),(0,n.createElement)("p",{className:"nfd-onboarding-image-uploader--with-text__site_logo__preview__details__filesize"},E()(e.fileSize))),(0,n.createElement)("div",{className:"nfd-onboarding-image-uploader--with-text__site_logo__preview__reset"},(0,n.createElement)("button",{className:"nfd-onboarding-image-uploader--with-text__site_logo__preview__reset__button",onClick:()=>{b(""),t({id:0,url:"",fileName:"",fileSize:0}),a?.current?.files.length>0&&(a.current.value="")}},(0,n.createElement)(x.A,{className:"nfd-onboarding-image-uploader--with-text__site_logo__preview__reset__button__icon",icon:N.A}))))))}));var y=a(1056),D=a(2202),k=a(8744);const A=()=>{const[e,t]=(0,i.useState)(),a=(0,o.useViewportMatch)("small"),{currentData:p}=(0,r.useSelect)((e=>({currentData:e(g.M).getCurrentOnboardingData()}))),{editEntityRecord:w}=(0,r.useDispatch)(l.store),{getEditedEntityRecord:f}=(0,r.useSelect)((e=>e(l.store)),[]),{setIsFooterNavAllowed:b,setIsHeaderEnabled:h,setSidebarActiveView:v,setHeaderActiveView:E,setDrawerActiveView:x,setHideFooterNav:N,setCurrentOnboardingData:A,setIsHeaderNavigationEnabled:C}=(0,r.useDispatch)(g.M);(0,i.useEffect)((()=>{if(N(!1),h(!0),v(!1),C(!0),E(d.Ix),x(!1),0!==p.sitegen.siteLogo?.id)return b(!0),t(p.sitegen.siteLogo);b(!1),f("root","site")}),[]);const L={heading:(0,s.__)("Do you have a logo you would like to use for this site?","wp-module-onboarding"),imageUploader:{subHeading:(0,s.__)("supports .jpg, .png, .svg","wp-module-onboarding")},buttons:{skip:(0,s.__)("Skip for now","wp-module-onboarding"),next:(0,s.__)("Next","wp-module-onboarding")}};return(0,n.createElement)(_.A,{isCentered:!0,className:"nfd-onboarding-step--site-gen__site-logo"},(0,n.createElement)("div",{className:"nfd-onboarding-step--site-gen__site-logo__container"},(0,n.createElement)(m.A,{title:L.heading}),(0,n.createElement)(S,{image:e,imageSetter:e=>{const a={...p};a.sitegen.siteLogo.id=e.id,a.sitegen.siteLogo.url=e.url,a.sitegen.siteLogo.fileName=e.fileName,a.sitegen.siteLogo.fileSize=e.fileSize,A(a),b(0!==e.id),w("root","site",void 0,{site_logo:e.id}),t(e)}}),(0,n.createElement)("div",{className:"nfd-onboarding-step--site-gen__site-logo__container__buttons"},(0,n.createElement)(c.A,{callback:()=>(()=>{const e={...p};e.sitegen.siteLogo={id:0,url:"",fileName:"",fileSize:0},A(e),t(void 0),b(!1),(0,y.v)(new y.iC(D.Qp,void 0,{source:k.d0}))})(),className:"nfd-onboarding-step--site-gen__site-logo__container__buttons__skip",text:L.buttons.skip}),a&&(0,n.createElement)(u.A,{callback:()=>{e&&(0,y.v)(new y.iC(D.WT),{source:k.d0})},text:L.buttons.next,disabled:void 0===e||0===e?.id}))))}},9645:(e,t,a)=>{a.d(t,{V:()=>l});var n=a(5435),o=a(8674),i=a(1455),r=a.n(i);async function l(e){const t=await function(e){return new Promise(((t,a)=>{const n=new FileReader;n.addEventListener("loadend",(e=>t(e.target.result))),n.addEventListener("error",a),n.readAsArrayBuffer(e)}))}(e),a={"Content-Type":"image/png"};return a["Content-Disposition"]="attachment; filename="+e.name,await(0,n.h)(r()({url:(0,o.zV)("media"),method:"POST",headers:a,body:t}))}},5508:e=>{e.exports=function(e,t){return"string"==typeof e?r(e):"number"==typeof e?i(e,t):null},e.exports.format=i,e.exports.parse=r;var t=/\B(?=(\d{3})+(?!\d))/g,a=/(?:\.0*|(\.[^0]+)0+)$/,n={b:1,kb:1024,mb:1<<20,gb:1<<30,tb:Math.pow(1024,4),pb:Math.pow(1024,5)},o=/^((-|\+)?(\d+(?:\.\d+)?)) *(kb|mb|gb|tb|pb)$/i;function i(e,o){if(!Number.isFinite(e))return null;var i=Math.abs(e),r=o&&o.thousandsSeparator||"",l=o&&o.unitSeparator||"",s=o&&void 0!==o.decimalPlaces?o.decimalPlaces:2,d=Boolean(o&&o.fixedDecimals),c=o&&o.unit||"";c&&n[c.toLowerCase()]||(c=i>=n.pb?"PB":i>=n.tb?"TB":i>=n.gb?"GB":i>=n.mb?"MB":i>=n.kb?"KB":"B");var g=(e/n[c.toLowerCase()]).toFixed(s);return d||(g=g.replace(a,"$1")),r&&(g=g.split(".").map((function(e,a){return 0===a?e.replace(t,r):e})).join(".")),g+l+c}function r(e){if("number"==typeof e&&!isNaN(e))return e;if("string"!=typeof e)return null;var t,a=o.exec(e),i="b";return a?(t=parseFloat(a[1]),i=a[4].toLowerCase()):(t=parseInt(e,10),i="b"),isNaN(t)?null:Math.floor(n[i]*t)}}}]);