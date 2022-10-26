"use strict";(self.webpackChunklm_commons=self.webpackChunklm_commons||[]).push([[9671],{3905:(e,t,r)=>{r.d(t,{Zo:()=>m,kt:()=>p});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),l=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},m=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,m=c(e,["components","mdxType","originalType","parentName"]),u=l(r),p=o,f=u["".concat(s,".").concat(p)]||u[p]||d[p]||a;return r?n.createElement(f,i(i({ref:t},m),{},{components:r})):n.createElement(f,i({ref:t},m))}));function p(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=u;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var l=2;l<a;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},9881:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>c,toc:()=>l});var n=r(7462),o=(r(7294),r(3905));const a={sidebar_position:1},i="Introduction",c={unversionedId:"intro",id:"intro",title:"Introduction",description:"LM-Commons is a GitHub organization dedicated to the collaborative",source:"@site/docs/intro.md",sourceDirName:".",slug:"/intro",permalink:"/docs/intro",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",next:{title:"LmcUser",permalink:"/docs/category/lmcuser"}},s={},l=[{value:"LmcUser",id:"lmcuser",level:2},{value:"LmcRbacMvc",id:"lmcrbacmvc",level:2},{value:"LmcRbac",id:"lmcrbac",level:2},{value:"LmcCors",id:"lmccors",level:2},{value:"LmcUserDoctrineORM",id:"lmcuserdoctrineorm",level:2},{value:"LmcAdmin",id:"lmcadmin",level:2},{value:"Notices and Disclaimers",id:"notices-and-disclaimers",level:5}],m={toc:l};function d(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"introduction"},"Introduction"),(0,o.kt)("p",null,"LM-Commons is a GitHub organization dedicated to the collaborative\nand community-driven long-term maintenance of packages & libraries based on the Laminas MVC and Components."),(0,o.kt)("p",null,"Many of the packages found in the LM-Commons repositories are former ZF-Commons packages\nthat were migrated to the Laminas Project framework."),(0,o.kt)("h2",{id:"lmcuser"},"LmcUser"),(0,o.kt)("p",null,"LmcUser is a generic user registration and authentication module for Laminas. Supports Laminas\\Db and Doctrine2."),(0,o.kt)("h2",{id:"lmcrbacmvc"},"LmcRbacMvc"),(0,o.kt)("p",null,"LmcRbacMvc is a role-based access control Laminas MVC module to provide additional features on top of Laminas\\Permissions\\Rbac"),(0,o.kt)("h2",{id:"lmcrbac"},"LmcRbac"),(0,o.kt)("p",null,"LmcRbac is a role-based access control module to provide additional features on top of Laminas\\Permissions\\Rbac (formerly zfc-rbac)"),(0,o.kt)("h2",{id:"lmccors"},"LmcCors"),(0,o.kt)("p",null,"LmcCors is a simple Laminas MVC module that helps you to deal with Cross-Origin Resource Sharing (CORS)."),(0,o.kt)("h2",{id:"lmcuserdoctrineorm"},"LmcUserDoctrineORM"),(0,o.kt)("p",null,"LmcUserDoctrineORM is a Doctrine2 ORM storage adapter for LmcUser."),(0,o.kt)("h2",{id:"lmcadmin"},"LmcAdmin"),(0,o.kt)("p",null,"LmcAdmin is an admin interface for Laminas MVC framework."),(0,o.kt)("h5",{id:"notices-and-disclaimers"},"Notices and Disclaimers"),(0,o.kt)("p",null,"This is not an official Laminas Project organization.  "),(0,o.kt)("p",null,"Issues and questions related to the Laminas MVC and components\nshould be addressed to the Laminas Project organisation."),(0,o.kt)("p",null,"Laminas is a trademark of the Laminas Project, a Series of LF Projects, LLC."))}d.isMDXComponent=!0}}]);