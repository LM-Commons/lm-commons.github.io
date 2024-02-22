"use strict";(self.webpackChunklmc_github_io_docs=self.webpackChunklmc_github_io_docs||[]).push([[4495],{2649:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>o,contentTitle:()=>r,default:()=>h,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var n=t(4848),a=t(8453);const i={sidebar_position:5},r=void 0,l={id:"lmc-mail/advanced-customization",title:"advanced-customization",description:"LmcMail can be customized to the applications needs.",source:"@site/docs/lmc-mail/advanced-customization.md",sourceDirName:"lmc-mail",slug:"/lmc-mail/advanced-customization",permalink:"/docs/lmc-mail/advanced-customization",draft:!1,unlisted:!1,editUrl:"https://github.com/lm-commons/tree/master/docs/lmc-mail/advanced-customization.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Usage",permalink:"/docs/lmc-mail/Usage"}},o={},d=[{value:"Using view templates",id:"using-view-templates",level:4},{value:"Use alternate View Resolved and View Helper Manager",id:"use-alternate-view-resolved-and-view-helper-manager",level:4},{value:"Event Listening",id:"event-listening",level:3}];function c(e){const s={code:"code",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",ul:"ul",...(0,a.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.p,{children:"LmcMail can be customized to the applications needs."}),"\n",(0,n.jsx)(s.h4,{id:"using-view-templates",children:"Using view templates"}),"\n",(0,n.jsx)(s.p,{children:"LmcMail uses nested view models to render the body of HTML messages."}),"\n",(0,n.jsxs)(s.p,{children:["In a similar fashion to the view model structure of the Laminas MVC Skeleton,\nthe body is rendered using a layout view model to which the view model parameter (",(0,n.jsx)(s.code,{children:"$nameOrModel"}),") to the ",(0,n.jsx)(s.code,{children:"createHtmlMessage"})," method is added a child.\nThe rendered output of the ",(0,n.jsx)(s.code,{children:"$nameOrModel"})," view model is captured in the variable ",(0,n.jsx)(s.code,{children:"message"})," which is passed to the layout view model."]}),"\n",(0,n.jsxs)(s.p,{children:["A default template ",(0,n.jsx)(s.code,{children:"mail/layout"})," is supplied is ",(0,n.jsx)(s.code,{children:"view/layout/layout.phtml"}),". This template can be the starting point for your own layout template.\nThe layout template can be set using the ",(0,n.jsx)(s.code,{children:"setLayoutTemplate()"})," method. Alternatively,\nthe ",(0,n.jsx)(s.code,{children:"mail/layout"})," entry in the View Manager template map can be overridden to point to your template. Another alternative is to use a factory delegator to the ",(0,n.jsx)(s.code,{children:"MessageServiceFactory::class"})," to set the layout template after the Message Service is created."]}),"\n",(0,n.jsxs)(s.p,{children:["View Helpers can be used when rendering view models. A common use case is to use ",(0,n.jsx)(s.code,{children:"$this->url()"})," to render a link to your application."]}),"\n",(0,n.jsx)(s.h4,{id:"use-alternate-view-resolved-and-view-helper-manager",children:"Use alternate View Resolved and View Helper Manager"}),"\n",(0,n.jsx)(s.p,{children:"LmcMail uses Service Manager aliases to get the View Resolver and View Helper Manager which resolves to the Laminas MVC resolver and manager. This allows to use any view template and helpers already defined in the application."}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-php",children:"'aliases' => [\n    // These aliases are used by the MailViewRendererFactory\n    // by default, they resolve to the Laminas MVC View Helper manager and Resolver\n    'lmc_mail_view_helper_manager' => 'ViewHelperManager',\n    'lmc_mail_view_resolver' => 'ViewResolver',\n],\n"})}),"\n",(0,n.jsx)(s.p,{children:"If you want to use a different resolver and view helper manager, then update the aliases to point to your classes:"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-php",children:"'aliases' => [\n    'lmc_mail_view_helper_manager' => 'MyHelperManager',\n    'lmc_mail_view_resolver' => 'MyViewResolver',\n],\n"})}),"\n",(0,n.jsx)(s.p,{children:"If you want to use your own renderer, then you can override the Service Manager factory:"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-php",children:"'factories' => [\n    // Override the factory with your own\n    'lmc_mail_view_renderer' => MyViewRendererFactory::class,\n    /* ... */\n],\n"})}),"\n",(0,n.jsx)(s.h3,{id:"event-listening",children:"Event Listening"}),"\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.code,{children:"MessageService::send()"})," triggers two events:"]}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.code,{children:"MessageEvent::SEND"})," is triggered right before the message is sent by the transport service."]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.code,{children:"MessageEvent::SEND_POST"})," is triggered right after the message has been sent by the transport service."]}),"\n"]}),"\n",(0,n.jsxs)(s.p,{children:["The listener to these events will receive an event of class",(0,n.jsx)(s.code,{children:"MessageEvent"})," that extends the ",(0,n.jsx)(s.code,{children:"Event"})," class with:"]}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:["A ",(0,n.jsx)(s.code,{children:"$message"})," property containing the message. The message is also stored in an event parameter named 'message'."]}),"\n",(0,n.jsxs)(s.li,{children:["A ",(0,n.jsx)(s.code,{children:"getMessage()"})," method to get the ",(0,n.jsx)(s.code,{children:"$message"})," property."]}),"\n",(0,n.jsxs)(s.li,{children:["A ",(0,n.jsx)(s.code,{children:"setMessage(Message $message)"})," method to set the ",(0,n.jsx)(s.code,{children:"$message"})," property and the corresponding event parameters."]}),"\n"]}),"\n",(0,n.jsxs)(s.p,{children:["The ",(0,n.jsx)(s.code,{children:"MessageService::send()"})," method, after triggering the ",(0,n.jsx)(s.code,{children:"MessageEvent::SEND"})," event, will retrieve the message from the event and pass it to the transport service. This allows for the listener to modify the message if needed."]}),"\n",(0,n.jsx)(s.p,{children:"A typical use case for listening to the send events would be to log that a message was sent."})]})}function h(e={}){const{wrapper:s}={...(0,a.R)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}},8453:(e,s,t)=>{t.d(s,{R:()=>r,x:()=>l});var n=t(6540);const a={},i=n.createContext(a);function r(e){const s=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function l(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),n.createElement(i.Provider,{value:s},e.children)}}}]);