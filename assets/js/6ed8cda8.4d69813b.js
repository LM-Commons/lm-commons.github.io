"use strict";(self.webpackChunklm_commons=self.webpackChunklm_commons||[]).push([[5437],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>p});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=o.createContext({}),m=function(e){var t=o.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=m(e.components);return o.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=m(n),p=r,f=d["".concat(c,".").concat(p)]||d[p]||s[p]||i;return n?o.createElement(f,a(a({ref:t},u),{},{components:n})):o.createElement(f,a({ref:t},u))}));function p(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,a[1]=l;for(var m=2;m<i;m++)a[m]=n[m];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},7161:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>s,frontMatter:()=>i,metadata:()=>l,toc:()=>m});var o=n(7462),r=(n(7294),n(3905));const i={},a="Introduction",l={unversionedId:"lmc-admin/introduction",id:"lmc-admin/introduction",title:"Introduction",description:"This is work in progress to convert to Laminas",source:"@site/docs/lmc-admin/01-introduction.md",sourceDirName:"lmc-admin",slug:"/lmc-admin/introduction",permalink:"/docs/lmc-admin/introduction",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"LmcAdmin",permalink:"/docs/category/lmcadmin"}},c={},m=[{value:"Introduction",id:"introduction-1",level:2},{value:"Installation",id:"installation",level:2},{value:"Usage",id:"usage",level:2},{value:"Development",id:"development",level:2},{value:"Support",id:"support",level:2}],u={toc:m};function s(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,o.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"introduction"},"Introduction"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"This is work in progress to convert to Laminas"),(0,r.kt)("h1",{parentName:"blockquote",id:"lmcadmin-module-for-laminas-framework"},"LmcAdmin Module for Laminas Framework"),(0,r.kt)("p",{parentName:"blockquote"},"Created by ",(0,r.kt)("a",{parentName:"p",href:"http://juriansluiman.nl"},"Jurian Sluiman")," and ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/Hounddog"},"Martin Shwalbe"),".")),(0,r.kt)("h2",{id:"introduction-1"},"Introduction"),(0,r.kt)("p",null,"LmcAdmin is a minimal admin interface for generic administrative purposes. It is a common screen with navigation that hides behind authentication and authorization."),(0,r.kt)("h2",{id:"installation"},"Installation"),(0,r.kt)("p",null,"LmcAdmin is enabled to be installed via composer. Load ",(0,r.kt)("inlineCode",{parentName:"p"},"lm-commons/lmc-admin")," in your ",(0,r.kt)("inlineCode",{parentName:"p"},"composer.json")," file. You can specify its version (currently only 1.0.0 is recommended) or use ",(0,r.kt)("inlineCode",{parentName:"p"},"dev-master")," to load the latest version from master. Enable LmcAdmin in your ",(0,r.kt)("inlineCode",{parentName:"p"},"module.config.php")," configuration file."),(0,r.kt)("p",null,"If you do not want to use composer, clone this project (either as a git submodule or not) into ",(0,r.kt)("inlineCode",{parentName:"p"},"./vendor/")," directory."),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)("p",null,'LmcAdmin allows you to create routes under a single parent "admin" route. You can also use it to enable navigation in your admin layout. Furthermore integration of ',(0,r.kt)("a",{parentName:"p",href:"https://github.com/LM-Commons/LmcRbacMvc"},"LmcRbacMvc")," is provided."),(0,r.kt)("p",null,"The complete configuration is flexible, so you can update the zfcadmin parent route, its children, the navigation and all default provided view scripts. Read more in the ",(0,r.kt)("a",{parentName:"p",href:"/docs/lmc-admin/introduction"},"documentation")," about usage and customization of LmcAdmin."),(0,r.kt)("h2",{id:"development"},"Development"),(0,r.kt)("p",null,"LmcAdmin is currently under development. The authors feel LmcAdmin is stable enough for production versions and you can always fix your LmcAdmin version to a specific tag."),(0,r.kt)("h2",{id:"support"},"Support"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"File issues at ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/LM-Commons/LmcAdmin/issues"},"https://github.com/LM-Commons/LmcAdmin/issues"),"."),(0,r.kt)("li",{parentName:"ul"},"Ask questions in the ",(0,r.kt)("a",{parentName:"li",href:"https://gitter.im/LM-Commons/community"},"LM-Commons gitter")," chat.")))}s.isMDXComponent=!0}}]);