"use strict";(self.webpackChunkawesome_engineering_leadership=self.webpackChunkawesome_engineering_leadership||[]).push([[485],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>d});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},m=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),u=p(n),d=a,f=u["".concat(s,".").concat(d)]||u[d]||c[d]||i;return n?r.createElement(f,o(o({ref:t},m),{},{components:n})):r.createElement(f,o({ref:t},m))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},1133:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var r=n(7462),a=(n(7294),n(3905));const i={},o="Template - Incident Title (duplicate)",l={unversionedId:"platform/incident-management/ir-template-example-1",id:"platform/incident-management/ir-template-example-1",title:"Template - Incident Title (duplicate)",description:"Owner: who created this incident log?",source:"@site/docs/platform/incident-management/ir-template-example-1.md",sourceDirName:"platform/incident-management",slug:"/platform/incident-management/ir-template-example-1",permalink:"/awesome-engineering-leadership/docs/platform/incident-management/ir-template-example-1",draft:!1,editUrl:"https://github.com/httpoz/awesome-engineering-leadership/tree/main/docs/platform/incident-management/ir-template-example-1.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Incident Management",permalink:"/awesome-engineering-leadership/docs/platform/incident-management/"}},s={},p=[{value:"Issue Summary",id:"issue-summary",level:2},{value:"Timeline",id:"timeline",level:2},{value:"Root Cause",id:"root-cause",level:2},{value:"Mitigation, resolution and recovery",id:"mitigation-resolution-and-recovery",level:2},{value:"Corrective and Preventive Measures",id:"corrective-and-preventive-measures",level:2}],m={toc:p};function c(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"template---incident-title-duplicate"},"Template - Incident Title (duplicate)"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Owner:")," ",(0,a.kt)("em",{parentName:"p"},"who created this incident log?"),"\n",(0,a.kt)("strong",{parentName:"p"},"Squad Responsible:")," ",(0,a.kt)("em",{parentName:"p"},"What squad is responsible for the main functionality that\nfailed?")),(0,a.kt)("h2",{id:"issue-summary"},"Issue Summary"),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"Short description of the issue and what impact it had. It should be understandable by non-tech employees.")),(0,a.kt)("h2",{id:"timeline"},"Timeline"),(0,a.kt)("p",null,"11:00 AM (GMT): An event happened\n11:13 AM (GMT): An action took place\n11:13 AM (GMT): Another event happened 11:20 AM (GMT): Yet another event took place 12:05 AM (GMT): Issue was mitigated\n12:09 AM (GMT): Another action took place 12:15 AM (GMT): Issue was resolved"),(0,a.kt)("h2",{id:"root-cause"},"Root Cause"),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"Describe the identified root cause of the issue. Try to go as deep as possible so the real root cause is identified (use ",(0,a.kt)("a",{parentName:"em",href:"https://www.isixsigma.com/tools-templates/cause-effect/determine-root-cause-5-whys/"},"The 5 Whys"),")")),(0,a.kt)("h2",{id:"mitigation-resolution-and-recovery"},"Mitigation, resolution and recovery"),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"Describe what was done immediately to mitigate the issue. Then define what was done finally to resolve the situation, it may or may not be a long term solution. And last, describe how was the recovery and how it was evaluated.")),(0,a.kt)("h2",{id:"corrective-and-preventive-measures"},"Corrective and Preventive Measures"),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"Describe any tasks or measured that must happen in the near future for the issue to be fundamentally fixed and, to the best of our knowledge, not happen again the same way.")))}c.isMDXComponent=!0}}]);