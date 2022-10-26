"use strict";(self.webpackChunklm_commons=self.webpackChunklm_commons||[]).push([[4061],{3905:(e,r,t)=>{t.d(r,{Zo:()=>s,kt:()=>u});var n=t(7294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function a(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var p=n.createContext({}),c=function(e){var r=n.useContext(p),t=r;return e&&(t="function"==typeof e?e(r):a(a({},r),e)),t},s=function(e){var r=c(e.components);return n.createElement(p.Provider,{value:r},e.children)},d={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},m=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,i=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),m=c(t),u=o,v=m["".concat(p,".").concat(u)]||m[u]||d[u]||i;return t?n.createElement(v,a(a({ref:r},s),{},{components:t})):n.createElement(v,a({ref:r},s))}));function u(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=m;var l={};for(var p in r)hasOwnProperty.call(r,p)&&(l[p]=r[p]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var c=2;c<i;c++)a[c]=t[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},4700:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>p,contentTitle:()=>a,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var n=t(7462),o=(t(7294),t(3905));const i={},a="Role providers",l={unversionedId:"lmc-rbac-mvc/guides/role-providers",id:"lmc-rbac-mvc/guides/role-providers",title:"Role providers",description:"In this section, you will learn:",source:"@site/docs/lmc-rbac-mvc/guides/03-role-providers.md",sourceDirName:"lmc-rbac-mvc/guides",slug:"/lmc-rbac-mvc/guides/role-providers",permalink:"/docs/lmc-rbac-mvc/guides/role-providers",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Quick Start",permalink:"/docs/lmc-rbac-mvc/guides/quick-start"},next:{title:"Guards",permalink:"/docs/lmc-rbac-mvc/guides/guards"}},p={},c=[{value:"What are role providers?",id:"what-are-role-providers",level:2},{value:"Identity providers?",id:"identity-providers",level:2},{value:"Create your own identity provider",id:"create-your-own-identity-provider",level:3},{value:"Built-in role providers",id:"built-in-role-providers",level:2},{value:"InMemoryRoleProvider",id:"inmemoryroleprovider",level:3},{value:"ObjectRepositoryRoleProvider",id:"objectrepositoryroleprovider",level:3},{value:"Creating custom role providers",id:"creating-custom-role-providers",level:2}],s={toc:c};function d(e){let{components:r,...t}=e;return(0,o.kt)("wrapper",(0,n.Z)({},s,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"role-providers"},"Role providers"),(0,o.kt)("p",null,"In this section, you will learn:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"What are role providers"),(0,o.kt)("li",{parentName:"ul"},"What are identity providers"),(0,o.kt)("li",{parentName:"ul"},"How to use and configure built-in providers"),(0,o.kt)("li",{parentName:"ul"},"How to create custom role providers")),(0,o.kt)("h2",{id:"what-are-role-providers"},"What are role providers?"),(0,o.kt)("p",null,"A role provider is an object that returns a list of roles. Each role provider must implement the\n",(0,o.kt)("inlineCode",{parentName:"p"},"LmcRbacMvc\\Role\\RoleProviderInterface")," interface. The only required method is ",(0,o.kt)("inlineCode",{parentName:"p"},"getRoles"),", and must return an array\nof ",(0,o.kt)("inlineCode",{parentName:"p"},"Rbac\\Role\\RoleInterface")," objects."),(0,o.kt)("p",null,"Roles can come from one of many sources: in memory, from a file, from a database... However, please note that\nyou can specify only one role provider per application. The reason is that having multiple role providers makes\nthe workflow harder and can lead to security problems that are very hard to spot."),(0,o.kt)("h2",{id:"identity-providers"},"Identity providers?"),(0,o.kt)("p",null,"Identity providers return the current identity. Most of the time, this means the logged in user. LmcRbacMvc comes with a\ndefault identity provider (",(0,o.kt)("inlineCode",{parentName:"p"},"LmcRbacMvc\\Identity\\AuthenticationIdentityProvider"),") that uses the\n",(0,o.kt)("inlineCode",{parentName:"p"},"Laminas\\Authentication\\AuthenticationService")," service."),(0,o.kt)("h3",{id:"create-your-own-identity-provider"},"Create your own identity provider"),(0,o.kt)("p",null,"If you want to implement your own identity provider, create a new class that implements\n",(0,o.kt)("inlineCode",{parentName:"p"},"LmcRbacMvc\\Identity\\IdentityProviderInterface")," class. Then, change the ",(0,o.kt)("inlineCode",{parentName:"p"},"identity_provider")," option in LmcRbacMvc config,\nas shown below:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-php"},"return [\n    'lmc_rbac' => [\n        'identity_provider' => 'MyCustomIdentityProvider'\n    ]\n];\n")),(0,o.kt)("p",null,"The identity provider is automatically pulled from the service manager."),(0,o.kt)("h2",{id:"built-in-role-providers"},"Built-in role providers"),(0,o.kt)("p",null,"LmcRbacMvc comes with two built-in role providers: ",(0,o.kt)("inlineCode",{parentName:"p"},"InMemoryRoleProvider")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"ObjectRepositoryRoleProvider"),". A role\nprovider must be added to the ",(0,o.kt)("inlineCode",{parentName:"p"},"role_provider")," subkey:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-php"},"return [\n    'lmc_rbac' => [\n        'role_provider' => [\n            // Role provider config here!\n        ]\n    ]\n];\n")),(0,o.kt)("h3",{id:"inmemoryroleprovider"},"InMemoryRoleProvider"),(0,o.kt)("p",null,"This provider is ideal for small/medium sites with few roles/permissions. All the data is specified in a simple\nPHP file, so you never hit a database."),(0,o.kt)("p",null,"Here is an example of the format you need to use:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-php"},"return [\n    'lmc_rbac' => [\n        'role_provider' => [\n            'LmcRbacMvc\\Role\\InMemoryRoleProvider' => [\n                'admin' => [\n                    'children'    => ['member'],\n                    'permissions' => ['article.delete']\n                ],\n                'member' => [\n                    'children'    => ['guest'],\n                    'permissions' => ['article.edit', 'article.archive']\n                ],\n                'guest' => [\n                    'permissions' => ['article.read']\n                ]\n            ]\n        ]\n    ]\n];\n")),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"children")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"permissions")," subkeys are entirely optional. Internally, the ",(0,o.kt)("inlineCode",{parentName:"p"},"InMemoryRoleProvider")," creates\neither a ",(0,o.kt)("inlineCode",{parentName:"p"},"Rbac\\Role\\Role")," object if the role does not have any children, or a ",(0,o.kt)("inlineCode",{parentName:"p"},"Rbac\\Role\\HierarchicalRole")," if\nthe role has at least one child."),(0,o.kt)("p",null,"If you are more confident with flat RBAC, the previous config can be re-written to remove any inheritence between roles:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-php"},"return [\n    'lmc_rbac' => [\n        'role_provider' => [\n            'LmcRbacMvc\\Role\\InMemoryRoleProvider' => [\n                'admin' => [\n                    'permissions' => [\n                        'article.delete',\n                        'article.edit',\n                        'article.archive',\n                        'article.read'\n                    ]\n                ],\n                'member' => [\n                    'permissions' => [\n                        'article.edit',\n                        'article.archive',\n                        'article.read'\n                    ]\n                ],\n                'guest' => [\n                    'permissions' => ['article.read']\n                ]\n            ]\n        ]\n    ]\n];\n")),(0,o.kt)("h3",{id:"objectrepositoryroleprovider"},"ObjectRepositoryRoleProvider"),(0,o.kt)("p",null,"This provider fetches roles from the database using ",(0,o.kt)("inlineCode",{parentName:"p"},"Doctrine\\Common\\Persistence\\ObjectRepository")," interface."),(0,o.kt)("p",null,"You can configure this provider by giving an object repository service name that is fetched from the service manager\nusing the ",(0,o.kt)("inlineCode",{parentName:"p"},"object_repository")," key:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-php"},"return [\n    'lmc_rbac' => [\n        'role_provider' => [\n            'LmcRbacMvc\\Role\\ObjectRepositoryRoleProvider' => [\n                'object_repository'  => 'App\\Repository\\RoleRepository',\n                'role_name_property' => 'name'\n            ]\n        ]\n    ]\n];\n")),(0,o.kt)("p",null,"Or you can specify the ",(0,o.kt)("inlineCode",{parentName:"p"},"object_manager")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"class_name")," options:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-php"},"return [\n    'lmc_rbac' => [\n        'role_provider' => [\n            'LmcRbacMvc\\Role\\ObjectRepositoryRoleProvider' => [\n                'object_manager'     => 'doctrine.entitymanager.orm_default',\n                'class_name'         => 'App\\Entity\\Role',\n                'role_name_property' => 'name'\n            ]\n        ]\n    ]\n];\n")),(0,o.kt)("p",null,"In both cases, you need to specify the ",(0,o.kt)("inlineCode",{parentName:"p"},"role_name_property")," value, which is the name of the entity's property\nthat holds the actual role name. This is used internally to only load the identity roles, instead of loading\nthe whole table every time."),(0,o.kt)("p",null,"Please note that your entity fetched from the table MUST implement the ",(0,o.kt)("inlineCode",{parentName:"p"},"Rbac\\Role\\RoleInterface")," interface."),(0,o.kt)("h2",{id:"creating-custom-role-providers"},"Creating custom role providers"),(0,o.kt)("p",null,"To create a custom role provider, you first need to create a class that implements the ",(0,o.kt)("inlineCode",{parentName:"p"},"LmcRbacMvc\\Role\\RoleProviderInterface"),"\ninterface."),(0,o.kt)("p",null,"Then, you need to add it to the role provider manager:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-php"},"return [\n    'lmc_rbac' => [\n        'role_provider_manager' => [\n            'factories' => [\n                'Application\\Role\\CustomRoleProvider' => 'Application\\Factory\\CustomRoleProviderFactory'\n            ]\n        ]    \n    ]\n];\n")),(0,o.kt)("p",null,"You can now use it like any other role provider:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-php"},"return [\n    'lmc_rbac' => [\n        'role_provider' => [\n            'Application\\Role\\CustomRoleProvider' => [\n                // Options\n            ]\n        ]\n    ]\n];\n")))}d.isMDXComponent=!0}}]);