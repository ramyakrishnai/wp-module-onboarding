"use strict";(self.webpackChunknewfold_Onboarding=self.webpackChunknewfold_Onboarding||[]).push([[154],{4316:function(e,t,a){var l=a(9307),n=a(5736);t.Z=e=>{let{title:t,subtitle:a}=e;return(0,l.createElement)("div",{className:"nfd-main-heading"},(0,l.createElement)("h2",{className:"nfd-main-heading__title"},(0,n.__)(t,"wp-module-onboarding")),(0,l.createElement)("h3",{className:"nfd-main-heading__subtitle"},(0,n.__)(a,"wp-module-onboarding")))}},5791:function(e,t,a){a.d(t,{Z:function(){return b}});var l=a(9307),n=a(4184),r=a.n(n),o=a(5158),i=a(6974),s=a(2200),c=a(6989),d=a.n(c),u=a(4704),m=e=>{let{className:t="nfd-onboarding-layout__base",children:a}=e;const n=(0,i.TH)(),c=document.querySelector(".nfd-onboard-content");return(0,l.useEffect)((()=>{null==c||c.focus({preventScroll:!0}),function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"Showing new Onboarding Page";(0,o.speak)(t,"assertive")}(n,"Override"),new class{constructor(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};this.eventSlug=e,this.eventData=t}send(){d()({url:(0,u.F)("events"),method:"POST",data:{slug:this.eventSlug,data:this.eventData}}).catch((e=>{console.error(e)}))}}(`${s.Db}-pageview`,{stepID:n.pathname,previousStepID:window.nfdOnboarding.previousStepID}).send(),window.nfdOnboarding.previousStepID=n.pathname}),[n.pathname]),(0,l.createElement)("div",{className:r()("nfd-onboarding-layout",t)},a)},_=a(682);const p=e=>{let{children:t}=e;return(0,l.createElement)("section",{className:"is-contained"},t)};var b=e=>{let{className:t="",children:a,isBgPrimary:n=!1,isCentered:o=!1,isVerticallyCentered:i=!1,isContained:s=!1,isPadded:c=!1,isFadeIn:d=!0}=e;const u=s?p:l.Fragment;return(0,l.createElement)(_.Z,{type:d&&"fade-in",duration:"233ms",timingFunction:"ease-in-out"},(0,l.createElement)(m,{className:r()("nfd-onboarding-layout__common",t,{"is-bg-primary":n},{"is-centered":o},{"is-vertically-centered":i},{"is-padded":c})},(0,l.createElement)(u,null,a)))}},7004:function(e,t,a){a.d(t,{L:function(){return c},Y:function(){return i}});var l=a(9307),n=a(5791),r=a(4316),o=a(950),i=e=>{let{title:t,subtitle:a}=e;return(0,l.createElement)(n.Z,{className:"step-loader",isVerticallyCentered:!0},(0,l.createElement)(r.Z,{title:t,subtitle:a}),(0,l.createElement)("div",{className:"step-loader__logo-container"},(0,l.createElement)("div",{className:"step-loader__logo"})),(0,l.createElement)(o.Z,null))},s=a(682),c=()=>(0,l.createElement)("div",{className:"image-upload-loader--loading-box"},(0,l.createElement)(s.Z,{type:"load",className:"image-upload-loader--loading-box__loader"}))},950:function(e,t,a){var l=a(9307),n=a(9685),r=a(9818),o=a(5736);t.Z=e=>{let{question:t=(0,o.__)("Need Help?","wp-module-onboarding"),urlLabel:a=(0,o.__)("Hire our Experts","wp-module-onboarding")}=e;const i=(0,r.select)(n.h).getHireExpertsUrl();return(0,l.createElement)("div",{className:"nfd-card-need-help-tag"},t,(0,l.createElement)("a",{href:i,target:"_blank"},a))}},676:function(e,t,a){var l=a(9307),n=a(5736),r=a(5609),o=a(9818),i=a(6974),s=a(7533),c=a(9685),d=a(8395),u=a(2200);const m=(0,l.memo)((()=>{const e=(0,i.s0)(),t=(0,i.TH)(),{nextStep:a,currentData:m,socialData:_}=(0,o.useSelect)((e=>({nextStep:e(c.h).getNextStep(),currentData:e(c.h).getCurrentOnboardingData(),socialData:e(c.h).getOnboardingSocialData()})),[]),p=null===a||!1===a,{setOnboardingSocialData:b}=(0,o.useDispatch)(c.h);async function v(e){if(m){if(m.isComplete=(new Date).getTime(),null!=e&&e.includes("basic-info")){const e=await async function(){const e=await(0,d.Gw)(),t=await(0,d.I2)(_);return null!==(null==t?void 0:t.error)?null==e?void 0:e.body:null==t?void 0:t.body}();e&&b(e)}(0,s.kB)(m)}const t="ecommerce"===window.nfdOnboarding.currentFlow?u.Nj:u.hF;window.location.replace(t)}return p?(0,l.createElement)(r.Button,{className:"skip-button",onClick:()=>v(t.pathname)},(0,n.__)("Skip this Step","wp-module-onboarding")):(0,l.createElement)(r.Button,{className:"skip-button",onClick:()=>e(a.path)},(0,n.__)("Skip this Step","wp-module-onboarding"))}));t.Z=m},5154:function(e,t,a){a.r(t),a.d(t,{default:function(){return x}});var l=a(9307),n=a(5791),r=a(4316),o=a(9818),i=a(7798),s=a(5736),c=a(1392),d=(0,l.memo)((e=>{let{title:t,hint:a,placeholder:n,height:r,maxCharacters:o,textValue:i,textValueSetter:c}=e;const d=(0,l.useRef)(null),[u,m]=(0,l.useState)("nfd-input__field");return(0,l.useEffect)((()=>{d.current.style.height=r;const e=d.current.scrollHeight;d.current.style.height=e+"px"}),[i]),(0,l.createElement)("div",{className:"nfd-input"},(0,l.createElement)("label",null,(0,l.createElement)("div",{className:"nfd-input__label"},(0,l.createElement)("p",{className:"nfd-input__label_title"},(0,s.__)(t,"wp-module-onboarding")),(0,l.createElement)("p",{className:"nfd-input__label_maxChar"},`(${o-(null==i?void 0:i.length)} characters left)`)),(0,l.createElement)("textarea",{type:"text",className:u,ref:d,style:{height:r},placeholder:n,value:i,maxLength:o,onChange:e=>(e=>{e.preventDefault(),c(e.target.value),e.target.value.length==o?m("nfd-input__field nfd-input__field_error"):m("nfd-input__field")})(e)}),(0,l.createElement)("p",{className:"nfd-input__hint"},(0,s.__)(a,"wp-module-onboarding"))))})),u=a(676),m=JSON.parse('{"qv":"--default-logo-icon","TN":"WordPress %s","C8":"Just another WordPress %s","HQ":"https://bluehost.com"}'),_=(0,l.memo)((e=>{let{title:t,desc:a,icon:n,socialData:r,isSocialFormOpen:o,setIsSocialFormOpen:i}=e;const d=""==n||null==n?m.qv:n,u=""==t?(0,s.sprintf)((0,s.__)(m.TN,"wp-module-onboarding"),(0,c.I)("Site")):t,_=""==a?(0,s.sprintf)((0,s.__)(m.C8,"wp-module-onboarding"),(0,c.I)("Site")):a,p=""==t?m.HQ:function(e){return`https://${null==e?void 0:e.toLowerCase().replace(/\s/g,"").replace(/\W/g,"")}.com`}(t),[b,v]=(0,l.useState)(""),[g,w]=(0,l.useState)(""),[h,f]=(0,l.useState)(""),[E,N]=(0,l.useState)(""),[S,y]=(0,l.useState)(""),[k,D]=(0,l.useState)(""),[T,I]=(0,l.useState)("");(0,l.useEffect)((()=>{var e,t,a,l,n;if(v(null!==(e=null==r?void 0:r.facebook_site)&&void 0!==e?e:""),w(null!==(t=null==r?void 0:r.twitter_site)&&void 0!==t?t:""),f(null!==(a=null==r?void 0:r.instagram_url)&&void 0!==a?a:""),N(null!==(l=null==r?void 0:r.youtube_url)&&void 0!==l?l:""),y(null!==(n=null==r?void 0:r.linkedin_url)&&void 0!==n?n:""),r&&Object.keys(r).includes("other_social_urls")){var o,i;const e=r.other_social_urls;Object.keys(e).includes("yelp_url")&&D(null!==(o=e.yelp_url)&&void 0!==o?o:""),Object.keys(e).includes("tiktok_url")&&I(null!==(i=e.tiktok_url)&&void 0!==i?i:"")}}),[r]);const O=e=>{let t;try{t=new URL(e)}catch(e){return!1}return"http:"===t.protocol||"https:"===t.protocol},C=[{url:b,image:"var(--facebook-colored-icon)"},{url:g,image:"var(--twitter-colored-icon)"},{url:h,image:"var(--instagram-colored-icon)"},{url:E,image:"var(--youtube-colored-icon)"},{url:S,image:"var(--linkedin-colored-icon)"},{url:k,image:"var(--yelp-colored-icon)"},{url:T,image:"var(--tiktok-colored-icon)"}];return(0,l.createElement)("div",null,(0,l.createElement)("h4",{className:"mini-preview"},"Preview"),(0,l.createElement)("div",{className:"browser-container"},(0,l.createElement)("div",{className:"browser-row-title"},(0,l.createElement)("div",{className:"browser-row-title_main"},(0,l.createElement)("div",{className:"browser-row-title_buttons"},(0,l.createElement)("span",{className:"browser-dot",style:{background:"#ED594A"}}),(0,l.createElement)("span",{className:"browser-dot",style:{background:"#FDD800"}}),(0,l.createElement)("span",{className:"browser-dot",style:{background:"#5AC05A"}}))),(0,l.createElement)("div",{className:"browser-row-title_bar"},(0,l.createElement)("div",{className:"browser-row-title_bar_before"},(0,l.createElement)("div",{className:"browser-row-title_bar_before-curve"})),(0,l.createElement)("div",{className:"browser-row-title_bar_main"},(0==n||null==n)&&(0,l.createElement)("div",{className:"browser-icon-title",style:{content:"var(--default-logo-icon)"}}),0!=n&&null!=n&&(0,l.createElement)("img",{className:"browser-icon-title",src:d.url,alt:"Thumb"}),(0,l.createElement)("div",{className:"browser-row-title_bar_main-text"},(0,s.__)(null==u?void 0:u.substring(0,20),"wp-module-onboarding")),(0,l.createElement)("div",{className:"browser-row-title_bar_main-cross"},"x")),(0,l.createElement)("div",{className:"browser-row-title_bar_after"},(0,l.createElement)("div",{className:"browser-row-title_bar_after-curve"})))),(0,l.createElement)("div",{className:"browser-row-search"},(0,l.createElement)("div",{className:"browser-row-search__icons"},(0,l.createElement)("div",{className:"browser-icon",style:{backgroundImage:"var(--back-icon)"}}),(0,l.createElement)("div",{className:"browser-icon",style:{backgroundImage:"var(--forward-icon)"}}),(0,l.createElement)("div",{className:"browser-icon",style:{backgroundImage:"var(--reload-icon)"}})),(0,l.createElement)("div",{className:"browser-row-search__search-box"},(0,l.createElement)("input",{className:"browser-row-search__search-box_input",type:"text",onChange:e=>{},value:(0,s.__)(p,"wp-module-onboarding")})),(0,l.createElement)("div",{className:"browser-row-search__more"},(0,l.createElement)("div",{className:"browser-icon",style:{backgroundImage:"var(--more-icon)"}}))),(0,l.createElement)("div",{className:"browser-content"},(0,l.createElement)("div",{className:"browser-content_top-row"},(0,l.createElement)("h4",{className:"browser-content_top-row-name"},(0,s.__)(u,"wp-module-onboarding")),(0,l.createElement)("a",{className:"browser-content_top-row-link"},(0,s.__)(p,"wp-module-onboarding"))),(0,l.createElement)("h5",{className:"browser-content_desc"},(0,s.__)(_,"wp-module-onboarding")),(0,l.createElement)("div",{className:"browser-content_social"},C.map((e=>(0,l.createElement)("div",{key:e.image,onClick:e=>i(!o),className:`browser-content_social_icon ${e.url?O(e.url)||"--invalid-url":"--no-url"}`,style:{backgroundImage:e.image}})))))))})),p=a(682),b=a(8395),v=a(9685),g=a(7004),w=a(6329),h=a(4704),f=a(6989),E=a.n(f);var N=(0,l.memo)((e=>{let{icon:t,iconSetter:a}=e;const n=(0,l.useRef)(null),[r,o]=(0,l.useState)(!1);return(0,l.createElement)("div",{className:"image-uploader"},(0,l.createElement)("h4",{className:"image-uploader_heading"},"Logo"),r?(0,l.createElement)("div",{className:"image-uploader_window"},(0,l.createElement)(g.L,null)):(0,l.createElement)("div",{className:"image-uploader_window"},(0,l.createElement)("div",{className:"image-uploader_window-empty"}),(0,l.createElement)("div",{className:"image-uploader_window-logo"},(0==t||null==t)&&(0,l.createElement)("div",{className:"image-uploader_window-logo-icon-empty"}),0!=t&&null!=t&&(0,l.createElement)("img",{className:"image-uploader_window-logo-icon-selected",src:t.url,alt:"Thumb"})),(0,l.createElement)("div",{className:"image-uploader_window-reset"},0!=t&&null!=t&&(0,l.createElement)("button",{className:"image-uploader_window-reset-btn",onClick:()=>{var e;a(0),(null==n||null===(e=n.current)||void 0===e?void 0:e.files.length)>0&&(n.current.value="")}},(0,s.__)("RESET","wp-module-onboarding")),(0==t||null==t)&&(0,l.createElement)("button",{className:"image-uploader_window-reset-btn",onClick:()=>{null==n||n.current.click()}},(0,s.__)("UPLOAD","wp-module-onboarding")),(0,l.createElement)("input",{className:"image-uploader_window-select-btn",accept:"image/*",type:"file",ref:n,onChange:e=>{var t,l,n;null!=e&&null!==(t=e.target)&&void 0!==t&&t.files&&(null==e||null===(l=e.target)||void 0===l?void 0:l.files.length)>0&&async function(e){if(e){o(!0);const n=await async function(e){const t=await function(e){return new Promise(((t,a)=>{const l=new FileReader;l.addEventListener("loadend",(e=>t(e.target.result))),l.addEventListener("error",a),l.readAsArrayBuffer(e)}))}(e),a={"Content-Type":"image/png"};return a["Content-Disposition"]="attachment; filename="+e.name,await(0,w.D)(E()({url:(0,h.$)("media"),method:"POST",headers:a,body:t}))}(e);if(n){var t,l;const e=null==n||null===(t=n.body)||void 0===t?void 0:t.id,r=null==n||null===(l=n.body)||void 0===l?void 0:l.source_url;a({id:e,url:r})}else console.error("Image Upload Failed")}else console.error("No File Attached");o(!1)}(null==e||null===(n=e.target)||void 0===n?void 0:n.files[0])}}))))})),S=a(2819),y=a.n(S),k=a(9196),D=e=>{let t;const[a,n]=(0,k.useState)(!0);return"hide"==e.content?(0,l.createElement)("div",null,e.children):(0,l.createElement)("div",{className:"Tooltip-Wrapper",onMouseEnter:()=>{t=setTimeout((()=>{n(!0)}),e.delay||400)},onMouseLeave:()=>{clearInterval(t),n(!1)}},e.children,a&&(0,l.createElement)("div",{className:`Tooltip-Tip ${e.direction||"top"}`},e.content))},T=e=>{let{socialData:t,setSocialData:a,setIsValidSocials:n,isSocialFormOpen:r,setIsSocialFormOpen:o}=e;const[i,c]=(0,l.useState)(""),[d,u]=(0,l.useState)(""),[m,_]=(0,l.useState)(""),[p,b]=(0,l.useState)(""),[v,g]=(0,l.useState)(""),[w,h]=(0,l.useState)(""),[f,E]=(0,l.useState)(""),[N,S]=(0,l.useState)([]),k={FACEBOOK:"facebook",TWITTER:"twitter",INSTAGRAM:"instagram",YOUTUBE:"youtube",LINKEDIN:"linkedin",YELP:"yelp",TIKTOK:"tiktok"},T={FACEBOOK:i,TWITTER:d,INSTAGRAM:m,YOUTUBE:p,LINKEDIN:v,YELP:w,TIKTOK:f};var I={facebook_site:i,twitter_site:d,instagram_url:m,youtube_url:p,linkedin_url:v,other_social_urls:{yelp_url:w,tiktok_url:f}};(0,l.useEffect)((()=>{var e,a,l,n,r;if(c(null!==(e=null==t?void 0:t.facebook_site)&&void 0!==e?e:""),u(null!==(a=null==t?void 0:t.twitter_site)&&void 0!==a?a:""),_(null!==(l=null==t?void 0:t.instagram_url)&&void 0!==l?l:""),b(null!==(n=null==t?void 0:t.youtube_url)&&void 0!==n?n:""),g(null!==(r=null==t?void 0:t.linkedin_url)&&void 0!==r?r:""),t&&Object.keys(t).includes("other_social_urls")){var o,i;const e=t.other_social_urls;Object.keys(e).includes("yelp_url")&&h(null!==(o=e.yelp_url)&&void 0!==o?o:""),Object.keys(e).includes("tiktok_url")&&E(null!==(i=e.tiktok_url)&&void 0!==i?i:"")}}),[t]);const O=y().debounce((function(e,t){let a=!1;if(e===k.TWITTER?(t=t.substring(t.indexOf("@")+1),(t.match("^[A-Za-z0-9_]{1,25}$")||t.match("^http(?:s)?://(?:www.)?twitter.com/([A-Za-z0-9_]{1,25})/?$"))&&(a=!0)):(e=>{let t;try{t=new URL(e)}catch(e){return!1}return"http:"===t.protocol||"https:"===t.protocol})(t)&&(a=!0),a){var l=N.filter((function(t){return t!==e}));S(l)}else N.includes(e)||S([...N,e]);((e,t,a)=>{if(!e){var l=a.filter((function(e){return e!==t}));S(l)}0==a.length?n(!0):n(!1)})(t,e,N)}),1e3),C=e=>{const t=e.target.value;switch(e.target.id){case k.FACEBOOK:O(k.FACEBOOK,t),c(t),I.facebook_site=t;break;case k.TWITTER:O(k.TWITTER,t),u(t),I.twitter_site=t;break;case k.INSTAGRAM:O(k.INSTAGRAM,t),_(t),I.instagram_url=t;break;case k.YOUTUBE:O(k.YOUTUBE,t),b(t),I.youtube_url=t;break;case k.LINKEDIN:O(k.LINKEDIN,t),g(t),I.linkedin_url=t;break;case k.YELP:O(k.YELP,t),h(t),I.other_social_urls.yelp_url=t;break;case k.TIKTOK:O(k.TIKTOK,t),E(t),I.other_social_urls.tiktok_url=t}a(I)};return(0,l.createElement)("div",{className:"social-form"},(0,l.createElement)("div",{className:"social-form__top-row",onClick:e=>{o(!r)}},(0,l.createElement)("div",{className:"social-form__top-row_heading"},(0,s.__)("Social Media","wp-module-onboarding")),(0,l.createElement)("div",{className:"social-form__top-row_icon "+(r?"social-form__top-row_icon_opened":"")})),(0,l.createElement)("form",{className:r?"social-form__main-active":"social-form__main-hidden",onSubmit:e=>{handleSubmit(e)}},function(){var e,t=[];for(var a in k)t.push((0,l.createElement)("div",{key:k[a]},(0,l.createElement)("label",{className:`social-form__label social-form__label-${k[a]}`},(0,l.createElement)("div",{className:"social-form__label_icon",style:{backgroundImage:`var(--${k[a]}-icon)`}}),(0,l.createElement)("div",{className:"social-form__label_name"},(0,s.__)(k[a].replace(/\w\S*/g,(function(e){return e.charAt(0).toUpperCase()+e.substr(1).toLowerCase()})),"wp-module-onboarding"))),(0,l.createElement)(D,{content:N.includes(k[a])?(e=k[a],e===k.TWITTER?`Please enter a valid ${e} URL / username`:`Please enter a valid ${e} URL`):"hide",direction:"top"},(0,l.createElement)("input",{className:N.includes(k[a])?"social-form__box-error":"social-form__box",type:"url",id:`${k[a]}`,value:T[a],onChange:e=>{C(e)}}))));return t}()))},I=()=>{const e=(0,l.useRef)(null),[t,a]=(0,l.useState)(),[n,r]=(0,l.useState)(!1),[m,g]=(0,l.useState)(),[w,h]=(0,l.useState)(""),[f,E]=(0,l.useState)(""),[S,y]=(0,l.useState)(0),[k,D]=(0,l.useState)(),[I,O]=(0,l.useState)(!1),[C,x]=(0,l.useState)(!1),{setOnboardingSocialData:L,setCurrentOnboardingData:A}=(0,o.useDispatch)(v.h),{editEntityRecord:F}=(0,o.useDispatch)(i.store),{getEditedEntityRecord:R}=(0,o.useSelect)((e=>e(i.store)),[]),{currentData:P}=(0,o.useSelect)((e=>({currentData:e(v.h).getCurrentOnboardingData()})),[]),K={siteTitle:{title:(0,s.sprintf)(
/* translators: 1: site */
(0,s.__)("%s Title","wp-module-onboarding"),(0,c.I)("Site")),placeholder:(0,s.sprintf)(
/* translators: 1: site */
(0,s.__)("WordPress %s","wp-module-onboarding"),(0,c.I)("Site")),hint:(0,s.__)("Shown to visitors, search engine and social media posts.","wp-module-onboarding"),maxCharacters:(0,s.__)("80","wp-module-onboarding")},siteDesc:{title:(0,s.sprintf)(
/* translators: 1: site */
(0,s.__)("%s Description","wp-module-onboarding"),(0,c.I)("Site")),placeholder:(0,s.sprintf)(
/* translators: 1: site */
(0,s.__)("Just another WordPress %s.","wp-module-onboarding"),(0,c.I)("Site")),hint:(0,s.sprintf)(
/* translators: 1: site */
(0,s.__)("Tell people who you are, what you sell and why they should visit your %s.","wp-module-onboarding"),(0,c.I)("site")),maxCharacters:(0,s.__)("160","wp-module-onboarding")},error:{title:(0,s.__)("Error Saving Data, Try Again!","wp-module-onboarding")}};return(0,l.useEffect)((()=>{C&&e.current.scrollIntoView()}),[C]),(0,l.useEffect)((()=>{var e,l,o,i,s,c;n||async function(){const e=await(0,b.Gw)();D(null==e?void 0:e.body),a(P),g(t),r(!0),L(null==e?void 0:e.body)}(),R("root","site"),n&&(y(null!==(e=null==t||null===(l=t.data)||void 0===l?void 0:l.siteLogo)&&void 0!==e?e:0),h(null!==(o=null==t||null===(i=t.data)||void 0===i?void 0:i.blogName)&&void 0!==o?o:""),E(null!==(s=null==t||null===(c=t.data)||void 0===c?void 0:c.blogDescription)&&void 0!==s?s:""))}),[n]),(0,l.useEffect)((()=>{const e=setTimeout((()=>{n&&g({data:{siteLogo:S,blogName:w,blogDescription:f,socialData:k}})}),600);return()=>{clearTimeout(e)}}),[w,f,S,k,I]),(0,l.useEffect)((()=>{m&&(async()=>{var e,t,a,l;const n=P;var r,o,i;n.data.siteLogo=null!==(e=m.data.siteLogo)&&void 0!==e?e:n.data.siteLogo,n.data.blogName=null!==(t=m.data.blogName)&&void 0!==t?t:n.data.blogName,n.data.blogDescription=null!==(a=m.data.blogDescription)&&void 0!==a?a:n.data.blogDescription,r=n.data.siteLogo,o=n.data.blogName,i=n.data.blogDescription,F("root","site",void 0,{site_logo:null!=r&&r.id?r.id:null,description:i,title:o}),A(n),L(null!==(l=m.data.socialData)&&void 0!==l?l:k)})()}),[m]),(0,l.createElement)(p.Z,{type:"fade-in-disabled",after:"object"==typeof t&&"object"==typeof k},(0,l.createElement)("div",{className:"basic-info"},(0,l.createElement)("div",{className:"basic-info-form"},(0,l.createElement)("div",{className:"basic-info-form__left"},(0,l.createElement)(d,{title:K.siteTitle.title,hint:K.siteTitle.hint,placeholder:K.siteTitle.placeholder,maxCharacters:K.siteTitle.maxCharacters,height:"47px",textValue:w,textValueSetter:h}),(0,l.createElement)(d,{title:K.siteDesc.title,hint:K.siteDesc.hint,placeholder:K.siteDesc.placeholder,maxCharacters:K.siteDesc.maxCharacters,height:"100px",textValue:f,textValueSetter:E}),(0,l.createElement)("div",{ref:e},(0,l.createElement)(T,{socialData:k,setSocialData:D,isSocialFormOpen:C,setIsValidSocials:O,setIsSocialFormOpen:x}))),(0,l.createElement)("div",{className:"basic-info-form__right"},(0,l.createElement)(N,{icon:S,iconSetter:y}),(0,l.createElement)(_,{icon:S,title:w,desc:f,socialData:k,isSocialFormOpen:C,setIsSocialFormOpen:x}))),(0,l.createElement)(u.Z,null)))},O=a(2200),C=a(4333),x=()=>{const e=(0,C.useViewportMatch)("medium"),{setIsDrawerOpened:t,setDrawerActiveView:a,setSidebarActiveView:i,setIsDrawerSuppressed:s,setIsHeaderNavigationEnabled:c}=(0,o.useDispatch)(v.h),{currentStep:d}=(0,o.useSelect)((e=>({currentStep:e(v.h).getCurrentStep()})),[]);return(0,l.useEffect)((()=>{e&&t(!0),i(O.Jq),s(!1),a(O.tM),c(!0)}),[]),(0,l.createElement)(n.Z,{isVerticallyCentered:!0},(0,l.createElement)(r.Z,{title:null==d?void 0:d.heading,subtitle:null==d?void 0:d.subheading}),(0,l.createElement)(I,null))}}}]);