"use strict";(self.webpackChunkwechaty_docusaurus=self.webpackChunkwechaty_docusaurus||[]).push([[9229],{3905:function(t,e,n){n.d(e,{Zo:function(){return s},kt:function(){return u}});var a=n(67294);function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function r(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?r(Object(n),!0).forEach((function(e){o(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,a,o=function(t,e){if(null==t)return{};var n,a,o={},r=Object.keys(t);for(a=0;a<r.length;a++)n=r[a],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(a=0;a<r.length;a++)n=r[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}var c=a.createContext({}),p=function(t){var e=a.useContext(c),n=e;return t&&(n="function"==typeof t?t(e):l(l({},e),t)),n},s=function(t){var e=p(t.components);return a.createElement(c.Provider,{value:e},t.children)},h={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},y=a.forwardRef((function(t,e){var n=t.components,o=t.mdxType,r=t.originalType,c=t.parentName,s=i(t,["components","mdxType","originalType","parentName"]),y=p(n),u=o,m=y["".concat(c,".").concat(u)]||y[u]||h[u]||r;return n?a.createElement(m,l(l({ref:e},s),{},{components:n})):a.createElement(m,l({ref:e},s))}));function u(t,e){var n=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var r=n.length,l=new Array(r);l[0]=y;var i={};for(var c in e)hasOwnProperty.call(e,c)&&(i[c]=e[c]);i.originalType=t,i.mdxType="string"==typeof t?t:o,l[1]=i;for(var p=2;p<r;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}y.displayName="MDXCreateElement"},50701:function(t,e,n){n.r(e),n.d(e,{assets:function(){return s},contentTitle:function(){return c},default:function(){return u},frontMatter:function(){return i},metadata:function(){return p},toc:function(){return h}});var a=n(87462),o=n(63366),r=(n(67294),n(3905)),l=["components"],i={slug:"/polyglot/python/",title:"Python Wechaty",sidebar_label:"Python"},c=void 0,p={unversionedId:"polyglot/python/overview",id:"polyglot/python/overview",title:"Python Wechaty",description:"Python Wechaty",source:"@site/docs/polyglot/python/overview.md",sourceDirName:"polyglot/python",slug:"/polyglot/python/",permalink:"/docs/polyglot/python/",editUrl:"https://github.com/wechaty/docusaurus/edit/main/docusaurus/docs/polyglot/python/overview.md",tags:[],version:"current",lastUpdatedBy:"Huan",lastUpdatedAt:1631612614,formattedLastUpdatedAt:"9/14/2021",frontMatter:{slug:"/polyglot/python/",title:"Python Wechaty",sidebar_label:"Python"},sidebar:"docs",previous:{title:"TypeScript",permalink:"/docs/polyglot/typescript/"},next:{title:"Go",permalink:"/docs/polyglot/go/"}},s={},h=[{value:"Features of Python-Wechaty",id:"features-of-python-wechaty",level:2},{value:"Getting Started",id:"getting-started",level:2},{value:"Translation of TypeScript to Python",id:"translation-of-typescript-to-python",level:2},{value:"History",id:"history",level:2},{value:"Blogs",id:"blogs",level:2},{value:"Maintainers",id:"maintainers",level:2}],y={toc:h};function u(t){var e=t.components,n=(0,o.Z)(t,l);return(0,r.kt)("wrapper",(0,a.Z)({},y,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/wechaty/python-wechaty"},(0,r.kt)("img",{parentName:"a",src:"https://img.shields.io/badge/Wechaty-Python-blue",alt:"Python Wechaty"}))),(0,r.kt)("p",null,"Python-wechaty is a Python programming language client derived from the Wechaty ecosystem, allowing developers to connect to various instant messaging software platforms with a small amount of code.Python-wechaty has been committed to improve code robustness, add community out-of-the-box tools, and improve the software development documentation."),(0,r.kt)("h2",{id:"features-of-python-wechaty"},"Features of Python-Wechaty"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Send and receive messages."),(0,r.kt)("li",{parentName:"ul"},"Accept friendship from contact."),(0,r.kt)("li",{parentName:"ul"},"Create rooms and invites members."),(0,r.kt)("li",{parentName:"ul"},"Support Wechaty-plugin system."),(0,r.kt)("li",{parentName:"ul"},"Provides powerful sample code library for robots."),(0,r.kt)("li",{parentName:"ul"},"Easy to implement.")),(0,r.kt)("p",null,"You can find more information on ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/wechaty/python-wechaty-getting-started"},"Python-Wechaty-getting started"),".The ",(0,r.kt)("a",{parentName:"p",href:"https://wechaty.js.org/docs/polyglot/diy/"},"General Architecture Diagram")," illustrates on how the Python-Wechaty can be implemented on the existing TypeScript Wechaty ecosystem."),(0,r.kt)("h2",{id:"getting-started"},"Getting Started"),(0,r.kt)("p",null,"You can run the below commands for starting the Wechaty-Python."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"git clone git@github.com:wechaty/python-wechaty-getting-started.git\ncd python-wechaty-getting-started\nmake install\nmake bot\n")),(0,r.kt)("h2",{id:"translation-of-typescript-to-python"},"Translation of TypeScript to Python"),(0,r.kt)("p",null,"As the basic ecosystem of Wechaty is in TypeScript, we only need to translate it to Python. There is a hundred (100) lines of code in class named Image in charge of downloading the WeChat image to different sizes.\nBelow are the links to ",(0,r.kt)("inlineCode",{parentName:"p"},"Image")," class for both TypeScript and Python for better understanding of the code and the translation."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"TypeScript: ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/wechaty/wechaty/blob/main/src/user/image.ts"},"https://github.com/wechaty/wechaty/blob/main/src/user/image.ts")),(0,r.kt)("li",{parentName:"ul"},"Python: ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/wechaty/python-wechaty/blob/master/src/wechaty/user/image.py"},"https://github.com/wechaty/python-wechaty/blob/master/src/wechaty/user/image.py"))),(0,r.kt)("h2",{id:"history"},"History"),(0,r.kt)("p",null,"For more information on the Python-Wechaty releases and history, visit the link below."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://wechaty.js.org/2020/06/17/python-wechaty-beta-released/"},"Python Wechaty Beta Released: A Simple Bot, wj-Mcat, Jun 17, 2020"))),(0,r.kt)("h2",{id:"blogs"},"Blogs"),(0,r.kt)("p",null,"The blogs related to Python-Wechaty are also listed below."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://wechaty.js.org/2021/04/17/python-wechaty-use-web/"},"\u6559\u4f60\u7528python-wecahty\u548cweb\u534f\u8bae\u5f00\u53d1\u673a\u5668\u4eba, @wj-Mcat, Apr 17, 2021")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://wechaty.js.org/2021/03/08/python-wechaty-and-wechaty-puppet-padlocal/"},"Python-wechaty & wechaty-puppet-padlocal\u7684\u521d\u63a2, iivveess, Mar 8, 2021")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://wechaty.js.org/2021/02/03/python-wechaty-for-padlocal-puppet-service/"},"Python Wechaty\u5982\u4f55\u4f7f\u7528PadLocal Puppet Service, Biofer, Feb, 3, 2021"))),(0,r.kt)("h2",{id:"maintainers"},"Maintainers"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://wechaty.js.org/contributors/wj-mcat"},"@wj-Mcat"))))}u.isMDXComponent=!0}}]);