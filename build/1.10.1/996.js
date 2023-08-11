"use strict";(globalThis.webpackChunknewfold_Onboarding=globalThis.webpackChunknewfold_Onboarding||[]).push([[996],{1211:(e,t,n)=>{n.d(t,{Z:()=>b});var a=n(9307),o=n(9250),s=n(9818),i=n(6831);const r=e=>{let{text:t,handleClick:n,disabled:o,className:s}=e;return(0,a.createElement)("button",{type:"button",className:`${s} nfd-card-button`,onClick:()=>{n()},disabled:o},t)};var l=n(7533),c=n(2200),d=n(8297),m=n(6342),u=n(3421);const b=e=>{let{text:t,disabled:n}=e;const b=(0,o.s0)(),p=(0,o.TH)(),{nextStep:g,currentData:f}=(0,s.useSelect)((e=>({nextStep:e(i.h).getNextStep(),currentData:e(i.h).getCurrentOnboardingData()})),[p.path]),h=null===g||!1===g;return(0,a.createElement)(r,{className:"nfd-nav-card-button",text:t,handleClick:()=>h?async function(){f&&(f.isComplete=(new Date).getTime(),(0,l.kB)(f));const e="ecommerce"===window.nfdOnboarding.currentFlow?c.br:c.hF;(0,u.jd)(),(0,d.uW)(new d.Z_(m.pd)),window.location.replace(e)}():b(g.path),disabled:n})}},9519:(e,t,n)=>{n.d(t,{Z:()=>o});var a=n(9307);const o=(0,a.memo)((e=>{let{heading:t,subHeading:n,question:o}=e;return(0,a.createElement)("div",null,t&&(0,a.createElement)("h2",{className:"nfd-step-card-heading"},t),n&&(0,a.createElement)("h3",{className:o?"nfd-step-card-subheading-other":"nfd-step-card-subheading"},n),o&&(0,a.createElement)("h3",{className:"nfd-step-card-question"},o))}))},349:(e,t,n)=>{n.d(t,{Z:()=>i});var a=n(9307),o=n(4184),s=n.n(o);const i=e=>{let{className:t="",children:n}=e;return(0,a.createElement)("div",{className:s()("nfd-onboarding-large-card",t)},(0,a.createElement)("div",{className:"nfd-onboarding-large-card__logo"}),n)}},2452:(e,t,n)=>{n.d(t,{Z:()=>s});var a=n(9307),o=n(682);const s=e=>{let{title:t,text:n,imgType:s,className:i,animationName:r}=e;return(0,a.createElement)("div",{className:i},(0,a.createElement)("div",{className:"tab-text"},(0,a.createElement)("h4",null,t),n),(0,a.createElement)("div",{className:"tab-image"},(0,a.createElement)("div",{className:"tab-img"},(0,a.createElement)(o.Z,{type:r},(0,a.createElement)("div",{className:s})))))}},1056:(e,t,n)=>{n.d(t,{Z:()=>v});var a=n(7462),o=n(9307),s=(n(4184),n(2819)),i=n(4333),r=n(9630),l=n(5904);const c=()=>{},d=["menuitem","menuitemradio","menuitemcheckbox"];class m extends o.Component{constructor(){super(...arguments),this.onKeyDown=this.onKeyDown.bind(this),this.bindContainer=this.bindContainer.bind(this),this.getFocusableContext=this.getFocusableContext.bind(this),this.getFocusableIndex=this.getFocusableIndex.bind(this)}componentDidMount(){this.container.addEventListener("keydown",this.onKeyDown),this.container.addEventListener("focus",this.onFocus)}componentWillUnmount(){this.container.removeEventListener("keydown",this.onKeyDown),this.container.removeEventListener("focus",this.onFocus)}bindContainer(e){const{forwardedRef:t}=this.props;this.container=e,"function"==typeof t?t(e):t&&"current"in t&&(t.current=e)}getFocusableContext(e){const{onlyBrowserTabstops:t}=this.props,n=(t?l.focus.tabbable:l.focus.focusable).find(this.container),a=this.getFocusableIndex(n,e);return a>-1&&e?{index:a,target:e,focusables:n}:null}getFocusableIndex(e,t){const n=e.indexOf(t);if(-1!==n)return n}onKeyDown(e){this.props.onKeyDown&&this.props.onKeyDown(e);const{getFocusableContext:t}=this,{cycle:n=!0,eventToOffset:a,onNavigate:o=c,stopNavigationEvents:s}=this.props,i=a(e);if(void 0!==i&&s){e.stopImmediatePropagation();const t=e.target.getAttribute("role");d.includes(t)&&e.preventDefault()}if(!i)return;const r=t(e.target.ownerDocument.activeElement);if(!r)return;const{index:l,focusables:m}=r,u=n?function(e,t,n){const a=e+n;return a<0?t+a:a>=t?a-t:a}(l,m.length,i):l+i;u>=0&&u<m.length&&(m[u].focus(),o(u,m[u]))}render(){const{children:e,...t}=this.props;return(0,o.createElement)("div",(0,a.Z)({ref:this.bindContainer},(0,s.omit)(t,["stopNavigationEvents","eventToOffset","onNavigate","onKeyDown","cycle","onlyBrowserTabstops","forwardedRef"])),e)}}const u=(e,t)=>(0,o.createElement)(m,(0,a.Z)({},e,{forwardedRef:t}));u.displayName="NavigableContainer";const b=(0,o.forwardRef)(u),p=(0,o.forwardRef)((function(e,t){let{role:n="menu",orientation:i="vertical",...l}=e;return(0,o.createElement)(b,(0,a.Z)({ref:t,stopNavigationEvents:!0,onlyBrowserTabstops:!1,role:n,"aria-orientation":"presentation"===n?null:i,eventToOffset:e=>{const{keyCode:t}=e;let n=[r.DOWN],a=[r.UP];return"horizontal"===i&&(n=[r.RIGHT],a=[r.LEFT]),"both"===i&&(n=[r.RIGHT,r.DOWN],a=[r.LEFT,r.UP]),(0,s.includes)(n,t)?1:(0,s.includes)(a,t)?-1:(0,s.includes)([r.DOWN,r.UP,r.LEFT,r.RIGHT],t)?0:void 0}},l))}));(0,o.forwardRef)((function(e,t){let{eventToOffset:n,...s}=e;return(0,o.createElement)(b,(0,a.Z)({ref:t,stopNavigationEvents:!0,onlyBrowserTabstops:!0,eventToOffset:e=>{const{keyCode:t,shiftKey:a}=e;return r.TAB===t?a?-1:1:n?n(e):void 0}},s))}));var g=n(5609);const f=()=>{},h=e=>{let{tabId:t,onClick:n,children:s,selected:i,...r}=e;return(0,o.createElement)(g.Button,(0,a.Z)({role:"tab",tabIndex:i?null:-1,"aria-selected":i,id:t,onClick:n},r),s)};function v(e){var t;let{className:n,children:a,tabs:r,initialTabName:l,orientation:c="horizontal",activeClass:d="is-active",notActiveClass:m="is-not-active",onSelect:u=f}=e;const b=(0,i.useInstanceId)(v,"tab-panel"),[g,w]=(0,o.useState)(null),E=e=>{w(e),u(e)},N=(0,s.find)(r,{name:g}),y=`${b}-${null!==(t=null==N?void 0:N.name)&&void 0!==t?t:"none"}`;return(0,o.useEffect)((()=>{(0,s.find)(r,{name:g})||w(l||(r.length>0?r[0].name:null))}),[r]),(0,o.createElement)("div",{className:n},(0,o.createElement)(p,{role:"tablist",orientation:c,onNavigate:(e,t)=>{t.click()},className:"components-tab-panel__tabs"},r.map((e=>(0,o.createElement)(h,{className:`components-tab-panel__tabs-item ${e.name===g&&d} ${e.name!==g&&m}`,tabId:`${b}-${e.name}`,"aria-controls":`${b}-${e.name}-view`,selected:e.name===g,key:e.name,onMouseOver:(0,s.partial)(E,e.name)},e.title)))),N&&(0,o.createElement)("div",{key:y,"aria-labelledby":y,role:"tabpanel",id:`${y}-view`,className:"components-tab-panel__tab-content"},a(N)))}},7996:(e,t,n)=>{n.r(t),n.d(t,{default:()=>f});var a=n(9307),o=n(6831),s=n(9250),i=n(9818),r=n(5634),l=n(349),c=n(9519),d=n(1211),m=n(2452),u=n(1056),b=n(2200),p=n(5736),g=n(1392);const f=()=>{const e=(0,s.TH)(),{brandName:t}=(0,i.useSelect)((e=>({brandName:e(o.h).getNewfoldBrandName()})),[e.pathname]),{setDrawerActiveView:n,setSidebarActiveView:f,setIsDrawerSuppressed:h,setIsHeaderNavigationEnabled:v}=(0,i.useDispatch)(o.h);(0,a.useEffect)((()=>{f(b.Jq),v(!0),h(!0),n(b.mz)}),[]);const w=(e=>({heading:(0,p.sprintf)(
/* translators: %s: website or store */
(0,p.__)("Make your %s dreams a reality!","wp-module-onboarding"),(0,g.I)("website")),subheading:(0,p.sprintf)(
/* translators: %s: Brand */
(0,p.__)("with WordPress and %s.","wp-module-onboarding"),e),buttonText:(0,p.__)("Start Setup","wp-module-onboarding"),tabs:[{name:"tab1",title:(0,p.__)("YOUR CONTENT","wp-module-onboarding"),subtitle:(0,p.__)("Publish boldly with WordPress Blocks.","wp-module-onboarding"),text:(0,p.sprintf)(
/* translators: %s: Site */
(0,p.__)("Build a beautiful %s using a visual builder. Block Patterns accelerate telling your story or tending your store with professional designs.","wp-module-onboarding"),(0,g.I)("site")),imgType:"content-img",animationName:"fade-in-right"},{name:"tab2",title:(0,p.__)("POWERFUL FEATURES","wp-module-onboarding"),subtitle:(0,p.__)("Proven, easy-to-use solutions.","wp-module-onboarding"),text:(0,p.sprintf)(
/* translators: %s: Site */
(0,p.__)("Reach for your %1$s goals using proven WordPress Plugins & %2$s solutions. Send a newsletter, host a podcast, book clients, take payments and more.","wp-module-onboarding"),(0,g.I)("site"),e),imgType:"features-img",animationName:"fade-in-up"},{name:"tab3",title:(0,p.__)("MODERN DESIGN","wp-module-onboarding"),subtitle:(0,p.__)("Paint trim. Move walls. No sweat.","wp-module-onboarding"),text:(0,p.sprintf)(
/* translators: %s: site */
(0,p.__)("Establish your %s's unique design. Use the WordPress Editor to refine over time with professionally-designed patterns, parts, templates, colors and type.","wp-module-onboarding"),(0,g.I)("site")),imgType:"design-img",animationName:"fade-in-left"}]}))(t);return(0,a.createElement)(r.Z,{isBgPrimary:!0,isCentered:!0},(0,a.createElement)(l.Z,null,(0,a.createElement)("div",{className:"welcome-card"},(0,a.createElement)(c.Z,{heading:w.heading,subHeading:w.subheading}),(0,a.createElement)(u.Z,{className:"nfd-onboarding-overview__tab-panel",tabs:w.tabs.map((e=>({name:e.name,title:e.title,content:(0,a.createElement)(m.Z,{title:e.subtitle,text:e.text,imgType:e.imgType,animationName:e.animationName,className:"tab-data"})})))},(e=>(0,a.createElement)("div",null,e.content))),(0,a.createElement)(d.Z,{text:w.buttonText}))))}}}]);