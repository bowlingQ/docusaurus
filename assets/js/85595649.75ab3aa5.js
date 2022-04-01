"use strict";(self.webpackChunkwechaty_docusaurus=self.webpackChunkwechaty_docusaurus||[]).push([[1472,5863,2775,2076,9725,4562,9842,7574,313,196,9685,2826],{3905:function(t,e,n){n.d(e,{Zo:function(){return u},kt:function(){return h}});var o=n(67294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function s(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,o)}return n}function r(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?s(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function c(t,e){if(null==t)return{};var n,o,a=function(t,e){if(null==t)return{};var n,o,a={},s=Object.keys(t);for(o=0;o<s.length;o++)n=s[o],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);for(o=0;o<s.length;o++)n=s[o],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var l=o.createContext({}),i=function(t){var e=o.useContext(l),n=e;return t&&(n="function"==typeof t?t(e):r(r({},e),t)),n},u=function(t){var e=i(t.components);return o.createElement(l.Provider,{value:e},t.children)},p={inlineCode:"code",wrapper:function(t){var e=t.children;return o.createElement(o.Fragment,{},e)}},d=o.forwardRef((function(t,e){var n=t.components,a=t.mdxType,s=t.originalType,l=t.parentName,u=c(t,["components","mdxType","originalType","parentName"]),d=i(n),h=a,m=d["".concat(l,".").concat(h)]||d[h]||p[h]||s;return n?o.createElement(m,r(r({ref:e},u),{},{components:n})):o.createElement(m,r({ref:e},u))}));function h(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var s=n.length,r=new Array(s);r[0]=d;var c={};for(var l in e)hasOwnProperty.call(e,l)&&(c[l]=e[l]);c.originalType=t,c.mdxType="string"==typeof t?t:a,r[1]=c;for(var i=2;i<s;i++)r[i]=n[i];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},58215:function(t,e,n){n.d(e,{Z:function(){return a}});var o=n(67294);function a(t){var e=t.children,n=t.hidden,a=t.className;return o.createElement("div",{role:"tabpanel",hidden:n,className:a},e)}},9877:function(t,e,n){n.d(e,{Z:function(){return u}});var o=n(87462),a=n(67294),s=n(72389),r=n(17704),c=n(86010),l="tabItem_LplD";function i(t){var e,n,s,i=t.lazy,u=t.block,p=t.defaultValue,d=t.values,h=t.groupId,m=t.className,g=a.Children.map(t.children,(function(t){if((0,a.isValidElement)(t)&&void 0!==t.props.value)return t;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof t.type?t.type:t.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),y=null!=d?d:g.map((function(t){var e=t.props;return{value:e.value,label:e.label,attributes:e.attributes}})),f=(0,r.lx)(y,(function(t,e){return t.value===e.value}));if(f.length>0)throw new Error('Docusaurus error: Duplicate values "'+f.map((function(t){return t.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var b=null===p?p:null!=(e=null!=p?p:null==(n=g.find((function(t){return t.props.default})))?void 0:n.props.value)?e:null==(s=g[0])?void 0:s.props.value;if(null!==b&&!y.some((function(t){return t.value===b})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+b+'" but none of its children has the corresponding value. Available values are: '+y.map((function(t){return t.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var v=(0,r.UB)(),k=v.tabGroupChoices,w=v.setTabGroupChoices,N=(0,a.useState)(b),x=N[0],T=N[1],U=[],M=(0,r.o5)().blockElementScrollPositionUntilNextRender;if(null!=h){var C=k[h];null!=C&&C!==x&&y.some((function(t){return t.value===C}))&&T(C)}var j=function(t){var e=t.currentTarget,n=U.indexOf(e),o=y[n].value;o!==x&&(M(e),T(o),null!=h&&w(h,o))},S=function(t){var e,n=null;switch(t.key){case"ArrowRight":var o=U.indexOf(t.currentTarget)+1;n=U[o]||U[0];break;case"ArrowLeft":var a=U.indexOf(t.currentTarget)-1;n=U[a]||U[U.length-1]}null==(e=n)||e.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,c.Z)("tabs",{"tabs--block":u},m)},y.map((function(t){var e=t.value,n=t.label,s=t.attributes;return a.createElement("li",(0,o.Z)({role:"tab",tabIndex:x===e?0:-1,"aria-selected":x===e,key:e,ref:function(t){return U.push(t)},onKeyDown:S,onFocus:j,onClick:j},s,{className:(0,c.Z)("tabs__item",l,null==s?void 0:s.className,{"tabs__item--active":x===e})}),null!=n?n:e)}))),i?(0,a.cloneElement)(g.filter((function(t){return t.props.value===x}))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},g.map((function(t,e){return(0,a.cloneElement)(t,{key:e,hidden:t.props.value!==x})}))))}function u(t){var e=(0,s.Z)();return a.createElement(i,(0,o.Z)({key:String(e)},t))}},12775:function(t,e,n){n.r(e),n.d(e,{assets:function(){return p},contentTitle:function(){return i},default:function(){return m},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return d}});var o=n(87462),a=n(63366),s=(n(67294),n(3905)),r=(n(9877),n(58215),n(3569)),c=["components"],l={title:"World's Shortest Chatbot"},i=void 0,u={unversionedId:"examples/basic/the-worlds-shortest-chatbot-code-in-6-lines",id:"examples/basic/the-worlds-shortest-chatbot-code-in-6-lines",title:"World's Shortest Chatbot",description:"Powered by Wechaty",source:"@site/docs/examples/basic/the-worlds-shortest-chatbot-code-in-6-lines.mdx",sourceDirName:"examples/basic",slug:"/examples/basic/the-worlds-shortest-chatbot-code-in-6-lines",permalink:"/docs/examples/basic/the-worlds-shortest-chatbot-code-in-6-lines",editUrl:"https://github.com/wechaty/docusaurus/edit/main/docusaurus/docs/examples/basic/the-worlds-shortest-chatbot-code-in-6-lines.mdx",tags:[],version:"current",lastUpdatedBy:"Huan",lastUpdatedAt:1631608278,formattedLastUpdatedAt:"9/14/2021",frontMatter:{title:"World's Shortest Chatbot"},sidebar:"docs",previous:{title:"Starter Bot",permalink:"/docs/examples/basic/starter-bot"},next:{title:"Ding Dong Bot",permalink:"/docs/examples/basic/ding-dong-bot"}},p={},d=[{value:"Requirements",id:"requirements",level:2},{value:"Getting started",id:"getting-started",level:2},{value:"Usage",id:"usage",level:2},{value:"Reference",id:"reference",level:2}],h={toc:d};function m(t){var e=t.components,n=(0,a.Z)(t,c);return(0,s.kt)("wrapper",(0,o.Z)({},h,n,{components:e,mdxType:"MDXLayout"}),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://github.com/Wechaty/wechaty"},(0,s.kt)("img",{parentName:"a",src:"https://img.shields.io/badge/Powered%20By-Wechaty-brightgreen.svg",alt:"Powered by Wechaty"})),"\n",(0,s.kt)("a",{parentName:"p",href:"https://www.typescriptlang.org/"},(0,s.kt)("img",{parentName:"a",src:"https://img.shields.io/badge/%3C%2F%3E-TypeScript-blue.svg",alt:"TypeScript"}))),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"World's Shortest Chatbot")," is the very first example showcasing how easy it is to get started with Wechaty in minimum 6 lines of code."),(0,s.kt)("h2",{id:"requirements"},"Requirements"),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("a",{parentName:"li",href:"https://nodejs.org/en/download"},"Node.js")," v16+"),(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("a",{parentName:"li",href:"https://github.com/wechaty/wechaty"},"Wechaty")," v0.40+")),(0,s.kt)("h2",{id:"getting-started"},"Getting started"),(0,s.kt)("p",null,"You should have ",(0,s.kt)("inlineCode",{parentName:"p"},"Node.js")," installed on your system. If you do not have ",(0,s.kt)("inlineCode",{parentName:"p"},"Node.js")," installed (or have a version below 12), then you need to install the latest version of ",(0,s.kt)("inlineCode",{parentName:"p"},"Node.js")," by following the links below:"),(0,s.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,s.kt)("div",{parentName:"div",className:"admonition-heading"},(0,s.kt)("h5",{parentName:"div"},(0,s.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,s.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,s.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"Node.js installation docs")),(0,s.kt)("div",{parentName:"div",className:"admonition-content"},(0,s.kt)("ul",{parentName:"div"},(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://nodejs.org/en/download/package-manager/#windows"},"Windows")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://nodejs.org/en/download/package-manager/#debian-and-ubuntu-based-linux-distributions"},"Linux","(","Debian/Ubuntu",")")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://nodejs.org/en/download/package-manager/#macos"},"macOS"))),(0,s.kt)("blockquote",{parentName:"div"},(0,s.kt)("p",{parentName:"blockquote"},"Installation guide for ",(0,s.kt)("inlineCode",{parentName:"p"},"Node.js")," on other platforms can be found ",(0,s.kt)("a",{parentName:"p",href:"https://nodejs.org/en/download/package-manager/"},"here"),".")))),(0,s.kt)("h2",{id:"usage"},"Usage"),(0,s.kt)(r.default,{mdxType:"ShortestChatbots"}),(0,s.kt)("p",null,"For building a bot with Wechaty, you have to follow the steps below:"),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},"Import wechaty."),(0,s.kt)("li",{parentName:"ol"},"Create a function ",(0,s.kt)("inlineCode",{parentName:"li"},"main")," and initialize a bot by providing it a name."),(0,s.kt)("li",{parentName:"ol"},"Assign proper functions to call when an event is triggered.",(0,s.kt)("ul",{parentName:"li"},(0,s.kt)("li",{parentName:"ul"},"When ",(0,s.kt)("inlineCode",{parentName:"li"},"scan")," is triggered, it generates QR code."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"login")," will display ",(0,s.kt)("inlineCode",{parentName:"li"},"{user} logged in")," if the user has logged in."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"message")," will display message on console."))),(0,s.kt)("li",{parentName:"ol"},"Finally, start the bot with ",(0,s.kt)("inlineCode",{parentName:"li"},"bot.start"),".")),(0,s.kt)("h2",{id:"reference"},"Reference"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://github.com/wechaty/wechaty-getting-started/tree/master/examples"},"Wechaty Getting Started Github Repository")))}m.isMDXComponent=!0},88332:function(t,e,n){n.r(e),n.d(e,{assets:function(){return u},contentTitle:function(){return l},default:function(){return h},frontMatter:function(){return c},metadata:function(){return i},toc:function(){return p}});var o=n(87462),a=n(63366),s=(n(67294),n(3905)),r=["components"],c={},l=void 0,i={unversionedId:"polyglot/dotnet/transclusions/shortest-chatbot",id:"polyglot/dotnet/transclusions/shortest-chatbot",title:"shortest-chatbot",description:"",source:"@site/docs/polyglot/dotnet/transclusions/shortest-chatbot.mdx",sourceDirName:"polyglot/dotnet/transclusions",slug:"/polyglot/dotnet/transclusions/shortest-chatbot",permalink:"/docs/polyglot/dotnet/transclusions/shortest-chatbot",editUrl:"https://github.com/wechaty/docusaurus/edit/main/docusaurus/docs/polyglot/dotnet/transclusions/shortest-chatbot.mdx",tags:[],version:"current",lastUpdatedBy:"Huan LI (\u674e\u5353\u6853)",lastUpdatedAt:1616051830,formattedLastUpdatedAt:"3/18/2021",frontMatter:{}},u={},p=[],d={toc:p};function h(t){var e=t.components,n=(0,a.Z)(t,r);return(0,s.kt)("wrapper",(0,o.Z)({},d,n,{components:e,mdxType:"MDXLayout"}),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-csharp"},'var wechaty = new Wechaty(options, logger).onScan((qrcode, status) => {\n  Console.WriteLine($"Scan QR Code to login: {status} https://wechaty.js.org/qrcode/{(qrcode)}`");\n}).OnLogin( user => {\n  Console.WriteLine("User {user} logined");\n}).OnMessage( message => {\n  Console.WriteLine($"Message: {message}");\n}).Start();\n')))}h.isMDXComponent=!0},7230:function(t,e,n){n.r(e),n.d(e,{assets:function(){return u},contentTitle:function(){return l},default:function(){return h},frontMatter:function(){return c},metadata:function(){return i},toc:function(){return p}});var o=n(87462),a=n(63366),s=(n(67294),n(3905)),r=["components"],c={},l=void 0,i={unversionedId:"polyglot/go/transclusions/shortest-chatbot",id:"polyglot/go/transclusions/shortest-chatbot",title:"shortest-chatbot",description:"",source:"@site/docs/polyglot/go/transclusions/shortest-chatbot.mdx",sourceDirName:"polyglot/go/transclusions",slug:"/polyglot/go/transclusions/shortest-chatbot",permalink:"/docs/polyglot/go/transclusions/shortest-chatbot",editUrl:"https://github.com/wechaty/docusaurus/edit/main/docusaurus/docs/polyglot/go/transclusions/shortest-chatbot.mdx",tags:[],version:"current",lastUpdatedBy:"Huan LI (\u674e\u5353\u6853)",lastUpdatedAt:1616051830,formattedLastUpdatedAt:"3/18/2021",frontMatter:{}},u={},p=[],d={toc:p};function h(t){var e=t.components,n=(0,a.Z)(t,r);return(0,s.kt)("wrapper",(0,o.Z)({},d,n,{components:e,mdxType:"MDXLayout"}),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-go"},'package main\n\nimport (\n "fmt"\n\n  "github.com/wechaty/go-wechaty/wechaty"\n)\n\nfunc main() {\n  _ = wechaty.NewWechaty().\n    OnScan(func(qrCode, status string) {\n      fmt.Printf("Scan QR Code to login: %s\\nhttps://wechaty.js.org/qrcode/%s\\n", status, qrCode)\n    }).\n    OnLogin(func(user string) { fmt.Printf("User %s logged in\\n", user) }).\n    OnMessage(func(message string) { fmt.Printf("Message: %s\\n", message) }).\n    Start()\n}\n')))}h.isMDXComponent=!0},91791:function(t,e,n){n.r(e),n.d(e,{assets:function(){return u},contentTitle:function(){return l},default:function(){return h},frontMatter:function(){return c},metadata:function(){return i},toc:function(){return p}});var o=n(87462),a=n(63366),s=(n(67294),n(3905)),r=["components"],c={},l=void 0,i={unversionedId:"polyglot/java/transclusions/shortest-chatbot",id:"polyglot/java/transclusions/shortest-chatbot",title:"shortest-chatbot",description:"",source:"@site/docs/polyglot/java/transclusions/shortest-chatbot.mdx",sourceDirName:"polyglot/java/transclusions",slug:"/polyglot/java/transclusions/shortest-chatbot",permalink:"/docs/polyglot/java/transclusions/shortest-chatbot",editUrl:"https://github.com/wechaty/docusaurus/edit/main/docusaurus/docs/polyglot/java/transclusions/shortest-chatbot.mdx",tags:[],version:"current",lastUpdatedBy:"Huan LI (\u674e\u5353\u6853)",lastUpdatedAt:1616051830,formattedLastUpdatedAt:"3/18/2021",frontMatter:{}},u={},p=[],d={toc:p};function h(t){var e=t.components,n=(0,a.Z)(t,r);return(0,s.kt)("wrapper",(0,o.Z)({},d,n,{components:e,mdxType:"MDXLayout"}),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-java"},'package io.github.wechaty;\n\nclass Bot{\n  public static void main(String args[]){\n    Wechaty bot = Wechaty.instance()\n      .onScan((qrcode, statusScanStatus, data) -> System.out.println(QrcodeUtils.getQr(qrcode)))\n      .onLogin(user -> System.out.println("User logged in :" + user))\n      .onMessage(message -> System.out.println("Message:" + message))\n      .start(true);\n  }\n}\n')))}h.isMDXComponent=!0},55318:function(t,e,n){n.r(e),n.d(e,{assets:function(){return u},contentTitle:function(){return l},default:function(){return h},frontMatter:function(){return c},metadata:function(){return i},toc:function(){return p}});var o=n(87462),a=n(63366),s=(n(67294),n(3905)),r=["components"],c={},l=void 0,i={unversionedId:"polyglot/openapi/transclusions/shortest-chatbot",id:"polyglot/openapi/transclusions/shortest-chatbot",title:"shortest-chatbot",description:"",source:"@site/docs/polyglot/openapi/transclusions/shortest-chatbot.mdx",sourceDirName:"polyglot/openapi/transclusions",slug:"/polyglot/openapi/transclusions/shortest-chatbot",permalink:"/docs/polyglot/openapi/transclusions/shortest-chatbot",editUrl:"https://github.com/wechaty/docusaurus/edit/main/docusaurus/docs/polyglot/openapi/transclusions/shortest-chatbot.mdx",tags:[],version:"current",lastUpdatedBy:"Huan LI (\u674e\u5353\u6853)",lastUpdatedAt:1616054254,formattedLastUpdatedAt:"3/18/2021",frontMatter:{}},u={},p=[],d={toc:p};function h(t){var e=t.components,n=(0,a.Z)(t,r);return(0,s.kt)("wrapper",(0,o.Z)({},d,n,{components:e,mdxType:"MDXLayout"}),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sh"},"# To be add: curl ...\n")))}h.isMDXComponent=!0},29577:function(t,e,n){n.r(e),n.d(e,{assets:function(){return u},contentTitle:function(){return l},default:function(){return h},frontMatter:function(){return c},metadata:function(){return i},toc:function(){return p}});var o=n(87462),a=n(63366),s=(n(67294),n(3905)),r=["components"],c={},l=void 0,i={unversionedId:"polyglot/php/transclusions/shortest-chatbot",id:"polyglot/php/transclusions/shortest-chatbot",title:"shortest-chatbot",description:"",source:"@site/docs/polyglot/php/transclusions/shortest-chatbot.mdx",sourceDirName:"polyglot/php/transclusions",slug:"/polyglot/php/transclusions/shortest-chatbot",permalink:"/docs/polyglot/php/transclusions/shortest-chatbot",editUrl:"https://github.com/wechaty/docusaurus/edit/main/docusaurus/docs/polyglot/php/transclusions/shortest-chatbot.mdx",tags:[],version:"current",lastUpdatedBy:"Huan LI (\u674e\u5353\u6853)",lastUpdatedAt:1616051830,formattedLastUpdatedAt:"3/18/2021",frontMatter:{}},u={},p=[],d={toc:p};function h(t){var e=t.components,n=(0,a.Z)(t,r);return(0,s.kt)("wrapper",(0,o.Z)({},d,n,{components:e,mdxType:"MDXLayout"}),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-php"},'$wechaty = \\IO\\Github\\Wechaty\\Wechaty::getInstance($token, $endPoint);\n$wechaty->onScan(function($qrcode, $status, $data) {\n    $qr = \\IO\\Github\\Wechaty\\Util\\QrcodeUtils::getQr($qrcode);\n    echo "$qr\\n\\nOnline Image: https://wechaty.js.org/qrcode/$qrcode\\n";\n})->onLogin(function(\\IO\\Github\\Wechaty\\User\\ContactSelf $user) {\n})->onMessage(function(\\IO\\Github\\Wechaty\\User\\Message $message) {\n    $message->say("hello from PHP7.4");\n})->start();\n')))}h.isMDXComponent=!0},34608:function(t,e,n){n.r(e),n.d(e,{assets:function(){return u},contentTitle:function(){return l},default:function(){return h},frontMatter:function(){return c},metadata:function(){return i},toc:function(){return p}});var o=n(87462),a=n(63366),s=(n(67294),n(3905)),r=["components"],c={},l=void 0,i={unversionedId:"polyglot/python/transclusions/shortest-chatbot",id:"polyglot/python/transclusions/shortest-chatbot",title:"shortest-chatbot",description:"",source:"@site/docs/polyglot/python/transclusions/shortest-chatbot.mdx",sourceDirName:"polyglot/python/transclusions",slug:"/polyglot/python/transclusions/shortest-chatbot",permalink:"/docs/polyglot/python/transclusions/shortest-chatbot",editUrl:"https://github.com/wechaty/docusaurus/edit/main/docusaurus/docs/polyglot/python/transclusions/shortest-chatbot.mdx",tags:[],version:"current",lastUpdatedBy:"Huan LI (\u674e\u5353\u6853)",lastUpdatedAt:1616051830,formattedLastUpdatedAt:"3/18/2021",frontMatter:{}},u={},p=[],d={toc:p};function h(t){var e=t.components,n=(0,a.Z)(t,r);return(0,s.kt)("wrapper",(0,o.Z)({},d,n,{components:e,mdxType:"MDXLayout"}),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-py"},"from wechaty import Wechaty\nimport asyncio\n\nasync def main():\n    bot = Wechaty()\n    bot.on('scan', lambda status, qrcode, data: print('Scan QR Code to login: {}\\nhttps://wechaty.js.org/qrcode/{}'.format(status, qrcode)))\n    bot.on('login', lambda user: print('User {} logged in'.format(user)))\n    bot.on('message', lambda message: print('Message: {}'.format(message)))\n    await bot.start()\n\nasyncio.run(main())\n")))}h.isMDXComponent=!0},19001:function(t,e,n){n.r(e),n.d(e,{assets:function(){return u},contentTitle:function(){return l},default:function(){return h},frontMatter:function(){return c},metadata:function(){return i},toc:function(){return p}});var o=n(87462),a=n(63366),s=(n(67294),n(3905)),r=["components"],c={},l=void 0,i={unversionedId:"polyglot/rust/transclusions/shortest-chatbot",id:"polyglot/rust/transclusions/shortest-chatbot",title:"shortest-chatbot",description:"",source:"@site/docs/polyglot/rust/transclusions/shortest-chatbot.mdx",sourceDirName:"polyglot/rust/transclusions",slug:"/polyglot/rust/transclusions/shortest-chatbot",permalink:"/docs/polyglot/rust/transclusions/shortest-chatbot",editUrl:"https://github.com/wechaty/docusaurus/edit/main/docusaurus/docs/polyglot/rust/transclusions/shortest-chatbot.mdx",tags:[],version:"current",lastUpdatedBy:"Huan LI (\u674e\u5353\u6853)",lastUpdatedAt:1616051830,formattedLastUpdatedAt:"3/18/2021",frontMatter:{}},u={},p=[],d={toc:p};function h(t){var e=t.components,n=(0,a.Z)(t,r);return(0,s.kt)("wrapper",(0,o.Z)({},d,n,{components:e,mdxType:"MDXLayout"}),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-rust"},"let bot = Wechaty::new(PuppetService::new(options).await.unwrap());\n\nbot.on_scan(handle_scan)\n    .on_login(handle_login)\n    .on_logout(handle_logout)\n    .on_message(handle_message)\n    .start()\n    .await;\n")))}h.isMDXComponent=!0},23705:function(t,e,n){n.r(e),n.d(e,{assets:function(){return u},contentTitle:function(){return l},default:function(){return h},frontMatter:function(){return c},metadata:function(){return i},toc:function(){return p}});var o=n(87462),a=n(63366),s=(n(67294),n(3905)),r=["components"],c={},l=void 0,i={unversionedId:"polyglot/scala/transclusions/shortest-chatbot",id:"polyglot/scala/transclusions/shortest-chatbot",title:"shortest-chatbot",description:"",source:"@site/docs/polyglot/scala/transclusions/shortest-chatbot.mdx",sourceDirName:"polyglot/scala/transclusions",slug:"/polyglot/scala/transclusions/shortest-chatbot",permalink:"/docs/polyglot/scala/transclusions/shortest-chatbot",editUrl:"https://github.com/wechaty/docusaurus/edit/main/docusaurus/docs/polyglot/scala/transclusions/shortest-chatbot.mdx",tags:[],version:"current",lastUpdatedBy:"Huan LI (\u674e\u5353\u6853)",lastUpdatedAt:1616051830,formattedLastUpdatedAt:"3/18/2021",frontMatter:{}},u={},p=[],d={toc:p};function h(t){var e=t.components,n=(0,a.Z)(t,r);return(0,s.kt)("wrapper",(0,o.Z)({},d,n,{components:e,mdxType:"MDXLayout"}),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-scala"},'package wechaty\n\nobject DingDongBot {\n  def main(args: Array[String]): Unit = {\n    Wechaty.instance()\n      .onScan(payload     => { println("Scan QR Code to login: %s\\nhttps://wechaty.js.org/qrcode/%s\\n".format(payload.status, payload.qrcode)) })\n      .onLogin(payload    => { println("User %s logged in\\n".format(payload.id)) })\n      .onMessage(message  => { println(message) })\n      .start()\n    Thread.currentThread().join()\n  }\n}\n')))}h.isMDXComponent=!0},3569:function(t,e,n){n.r(e),n.d(e,{assets:function(){return N},contentTitle:function(){return k},default:function(){return U},frontMatter:function(){return v},metadata:function(){return w},toc:function(){return x}});var o=n(87462),a=n(63366),s=(n(67294),n(3905)),r=n(9877),c=n(58215),l=n(47650),i=n(55318),u=n(62570),p=n(34608),d=n(7230),h=n(91791),m=n(29577),g=n(23705),y=n(88332),f=n(19001),b=["components"],v={},k=void 0,w={unversionedId:"polyglot/transclusions/shortest-chatbots",id:"polyglot/transclusions/shortest-chatbots",title:"shortest-chatbots",description:"<Tabs",source:"@site/docs/polyglot/transclusions/shortest-chatbots.mdx",sourceDirName:"polyglot/transclusions",slug:"/polyglot/transclusions/shortest-chatbots",permalink:"/docs/polyglot/transclusions/shortest-chatbots",editUrl:"https://github.com/wechaty/docusaurus/edit/main/docusaurus/docs/polyglot/transclusions/shortest-chatbots.mdx",tags:[],version:"current",lastUpdatedBy:"shwetal",lastUpdatedAt:1630752945,formattedLastUpdatedAt:"9/4/2021",frontMatter:{}},N={},x=[],T={toc:x};function U(t){var e=t.components,n=(0,a.Z)(t,b);return(0,s.kt)("wrapper",(0,o.Z)({},T,n,{components:e,mdxType:"MDXLayout"}),(0,s.kt)(r.Z,{groupId:"programming-languages",defaultValue:"ts",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"},{label:"Python",value:"py"},{label:"Go",value:"go"},{label:"Java",value:"java"},{label:"PHP",value:"php"},{label:"Scala",value:"scala"},{label:"C#",value:"csharp"},{label:"Rust",value:"rust"},{label:"OpenAPI",value:"openapi"}],mdxType:"Tabs"},(0,s.kt)(c.Z,{value:"ts",mdxType:"TabItem"},(0,s.kt)(l.default,{mdxType:"ShortestChatbotTypeScript"})),(0,s.kt)(c.Z,{value:"js",mdxType:"TabItem"},(0,s.kt)(u.default,{mdxType:"ShortestChatbotJavaScript"})),(0,s.kt)(c.Z,{value:"py",mdxType:"TabItem"},(0,s.kt)(p.default,{mdxType:"ShortestChatbotPython"})),(0,s.kt)(c.Z,{value:"go",mdxType:"TabItem"},(0,s.kt)(d.default,{mdxType:"ShortestChatbotGo"})),(0,s.kt)(c.Z,{value:"java",mdxType:"TabItem"},(0,s.kt)(h.default,{mdxType:"ShortestChatbotJava"})),(0,s.kt)(c.Z,{value:"php",mdxType:"TabItem"},(0,s.kt)(m.default,{mdxType:"ShortestChatbotPhp"})),(0,s.kt)(c.Z,{value:"scala",mdxType:"TabItem"},(0,s.kt)(g.default,{mdxType:"ShortestChatbotScala"})),(0,s.kt)(c.Z,{value:"csharp",mdxType:"TabItem"},(0,s.kt)(y.default,{mdxType:"ShortestChatbotDotnet"})),(0,s.kt)(c.Z,{value:"rust",mdxType:"TabItem"},(0,s.kt)(f.default,{mdxType:"ShortestChatbotRust"})),(0,s.kt)(c.Z,{value:"openapi",mdxType:"TabItem"},(0,s.kt)(i.default,{mdxType:"ShortestChatbotOpenApi"}))))}U.isMDXComponent=!0},62570:function(t,e,n){n.r(e),n.d(e,{assets:function(){return u},contentTitle:function(){return l},default:function(){return h},frontMatter:function(){return c},metadata:function(){return i},toc:function(){return p}});var o=n(87462),a=n(63366),s=(n(67294),n(3905)),r=["components"],c={},l=void 0,i={unversionedId:"polyglot/typescript/transclusions/shortest-chatbot-js",id:"polyglot/typescript/transclusions/shortest-chatbot-js",title:"shortest-chatbot-js",description:"",source:"@site/docs/polyglot/typescript/transclusions/shortest-chatbot-js.mdx",sourceDirName:"polyglot/typescript/transclusions",slug:"/polyglot/typescript/transclusions/shortest-chatbot-js",permalink:"/docs/polyglot/typescript/transclusions/shortest-chatbot-js",editUrl:"https://github.com/wechaty/docusaurus/edit/main/docusaurus/docs/polyglot/typescript/transclusions/shortest-chatbot-js.mdx",tags:[],version:"current",lastUpdatedBy:"Huan (\u674e\u5353\u6853)",lastUpdatedAt:1631790719,formattedLastUpdatedAt:"9/16/2021",frontMatter:{}},u={},p=[],d={toc:p};function h(t){var e=t.components,n=(0,a.Z)(t,r);return(0,s.kt)("wrapper",(0,o.Z)({},d,n,{components:e,mdxType:"MDXLayout"}),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"import { Wechaty }  from 'wechaty'\n\nasync function main () {\n  const bot = new Wechaty()\n  bot\n    .on('scan', (qrcode, status) => console.log(`Scan QR Code to login: ${status}\\nhttps://wechaty.js.org/qrcode/${encodeURIComponent(qrcode)}`))\n    .on('login',            user => console.log(`User ${user} logged in`))\n    .on('message',       message => console.log(`Message: ${message}`))\n  await bot.start()\n}\n\nmain()\n  .catch(console.error)\n")))}h.isMDXComponent=!0},47650:function(t,e,n){n.r(e),n.d(e,{assets:function(){return u},contentTitle:function(){return l},default:function(){return h},frontMatter:function(){return c},metadata:function(){return i},toc:function(){return p}});var o=n(87462),a=n(63366),s=(n(67294),n(3905)),r=["components"],c={},l=void 0,i={unversionedId:"polyglot/typescript/transclusions/shortest-chatbot",id:"polyglot/typescript/transclusions/shortest-chatbot",title:"shortest-chatbot",description:"",source:"@site/docs/polyglot/typescript/transclusions/shortest-chatbot.mdx",sourceDirName:"polyglot/typescript/transclusions",slug:"/polyglot/typescript/transclusions/shortest-chatbot",permalink:"/docs/polyglot/typescript/transclusions/shortest-chatbot",editUrl:"https://github.com/wechaty/docusaurus/edit/main/docusaurus/docs/polyglot/typescript/transclusions/shortest-chatbot.mdx",tags:[],version:"current",lastUpdatedBy:"Xiaohan Li",lastUpdatedAt:1619007923,formattedLastUpdatedAt:"4/21/2021",frontMatter:{}},u={},p=[],d={toc:p};function h(t){var e=t.components,n=(0,a.Z)(t,r);return(0,s.kt)("wrapper",(0,o.Z)({},d,n,{components:e,mdxType:"MDXLayout"}),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts"},"import { Wechaty } from 'wechaty'\n\nasync function main () {\n  const bot = new Wechaty()\n  bot\n    .on('scan', (qrcode, status) => console.log(`Scan QR Code to login: ${status}\\nhttps://wechaty.js.org/qrcode/${encodeURIComponent(qrcode)}`))\n    .on('login',            user => console.log(`User ${user} logged in`))\n    .on('message',       message => console.log(`Message: ${message}`))\n  await bot.start()\n}\n\nmain()\n  .catch(console.error)\n")))}h.isMDXComponent=!0}}]);