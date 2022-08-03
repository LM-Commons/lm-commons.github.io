"use strict";(self.webpackChunklm_commons=self.webpackChunklm_commons||[]).push([[2418],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=p(n),d=r,f=m["".concat(s,".").concat(d)]||m[d]||u[d]||o;return n?a.createElement(f,l(l({ref:t},c),{},{components:n})):a.createElement(f,l({ref:t},c))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var p=2;p<o;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3184:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var a=n(7462),r=(n(7294),n(3905));const o={sidebar_position:2},l="Installation",i={unversionedId:"lmc-user/installation",id:"lmc-user/installation",title:"Installation",description:"Main Setup",source:"@site/docs/lmc-user/installation.md",sourceDirName:"lmc-user",slug:"/lmc-user/installation",permalink:"/docs/lmc-user/installation",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Introduction",permalink:"/docs/lmc-user/introduction"},next:{title:"Options",permalink:"/docs/lmc-user/options"}},s={},p=[{value:"Main Setup",id:"main-setup",level:2},{value:"With composer",id:"with-composer",level:3},{value:"Post installation",id:"post-installation",level:3},{value:"Post-Install: LaminasDb",id:"post-install-laminasdb",level:3},{value:"Password Security",id:"password-security",level:2},{value:"Migration from ZfcUser",id:"migration-from-zfcuser",level:2}],c={toc:p};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"installation"},"Installation"),(0,r.kt)("h2",{id:"main-setup"},"Main Setup"),(0,r.kt)("h3",{id:"with-composer"},"With composer"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Add this project in your composer.json:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-json"},'"require": {  \n    "lm-commons/lmc-user": "^3.1"  \n}  \n'))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Now tell composer to download LmcUser by running the command:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ php composer.phar update\n")))),(0,r.kt)("h3",{id:"post-installation"},"Post installation"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Enabling it in your ",(0,r.kt)("inlineCode",{parentName:"p"},"application.config.php"),"file."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-php"},"<?php\nreturn array(\n    'modules' => array(\n        // ...\n        'LmcUser',\n    ),\n    // ...\n);\n")))),(0,r.kt)("h3",{id:"post-install-laminasdb"},"Post-Install: Laminas\\Db"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"If you do not already have a valid Laminas\\Db\\Adapter\\Adapter in your service\nmanager configuration, put the following in ",(0,r.kt)("inlineCode",{parentName:"li"},"./config/autoload/database.local.php"),":")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php"},"<?php\nreturn array(\n    'db' => array(\n        'driver'    => 'PdoMysql',\n        'hostname'  => 'changeme',\n        'database'  => 'changeme',\n        'username'  => 'changeme',\n        'password'  => 'changeme',\n    ),\n    'service_manager' => array(\n        'factories' => array(\n            'Laminas\\Db\\Adapter\\Adapter' => 'Laminas\\Db\\Adapter\\AdapterServiceFactory',\n        ),\n    ),\n);\n\n")),(0,r.kt)("p",null,"Navigate to http://yourproject/user and you should land on a login page."),(0,r.kt)("h2",{id:"password-security"},"Password Security"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"DO NOT CHANGE THE PASSWORD HASH SETTINGS FROM THEIR DEFAULTS")," unless A) you\nhave done sufficient research and fully understand exactly what you are\nchanging, ",(0,r.kt)("strong",{parentName:"p"},"AND")," B) you have a ",(0,r.kt)("strong",{parentName:"p"},"very")," specific reason to deviate from the\ndefault settings."),(0,r.kt)("p",null,"If you are planning on changing the default password hash settings, please read\nthe following:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"http://php.net/manual/en/function.crypt.php"},"PHP Manual: crypt() function")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"http://www.syndicatetheory.com/labs/securely-storing-passwords-in-php"},"Securely Storing Passwords in PHP by Adrian Schneider"))),(0,r.kt)("p",null,"The password hash settings may be changed at any time without invalidating existing\nuser accounts. Existing user passwords will be re-hashed automatically on their next\nsuccessful login."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"WARNING:")," Changing the default password hash settings can cause serious\nproblems such as making your hashed passwords more vulnerable to brute force\nattacks or making hashing so expensive that login and registration is\nunacceptably slow for users and produces a large burden on your server(s). The\ndefault settings provided are a very reasonable balance between the two,\nsuitable for computing power in 2013."),(0,r.kt)("h2",{id:"migration-from-zfcuser"},"Migration from ZfcUser"),(0,r.kt)("p",null,"If using Zend DB update table name to lmc_user"),(0,r.kt)("p",null,"Replace all namespace references to ZfcUser to LmcUser"),(0,r.kt)("p",null,"Update references to the lowercase key zfcuser to lmcuser"))}u.isMDXComponent=!0}}]);