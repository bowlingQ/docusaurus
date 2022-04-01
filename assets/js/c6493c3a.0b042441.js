"use strict";(self.webpackChunkwechaty_docusaurus=self.webpackChunkwechaty_docusaurus||[]).push([[5348],{3905:function(e,t,a){a.d(t,{Zo:function(){return s},kt:function(){return y}});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var c=n.createContext({}),l=function(e){var t=n.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},s=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),d=l(a),y=r,m=d["".concat(c,".").concat(y)]||d[y]||u[y]||i;return a?n.createElement(m,o(o({ref:t},s),{},{components:a})):n.createElement(m,o({ref:t},s))}));function y(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=d;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p.mdxType="string"==typeof e?e:r,o[1]=p;for(var l=2;l<i;l++)o[l]=a[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},66263:function(e,t,a){a.r(t),a.d(t,{assets:function(){return s},contentTitle:function(){return c},default:function(){return y},frontMatter:function(){return p},metadata:function(){return l},toc:function(){return u}});var n=a(87462),r=a(63366),i=(a(67294),a(3905)),o=["components"],p={slug:"/specs/",title:"Wechaty Puppet Service Token Gateway",sidebar_label:"Gateway"},c=void 0,l={unversionedId:"specs/gateway",id:"specs/gateway",title:"Wechaty Puppet Service Token Gateway",description:"What is Wechaty Puppet Service Token Gateway?",source:"@site/docs/specs/gateway.mdx",sourceDirName:"specs",slug:"/specs/",permalink:"/docs/specs/",editUrl:"https://github.com/wechaty/docusaurus/edit/main/docusaurus/docs/specs/gateway.mdx",tags:[],version:"current",lastUpdatedBy:"Shraddha",lastUpdatedAt:1631969852,formattedLastUpdatedAt:"9/18/2021",frontMatter:{slug:"/specs/",title:"Wechaty Puppet Service Token Gateway",sidebar_label:"Gateway"},sidebar:"docs",previous:{title:"Token",permalink:"/docs/specs/token"},next:{title:"Breaking Changes",permalink:"/docs/references/breaking-changes"}},s={},u=[{value:"What is Wechaty Puppet Service Token Gateway?",id:"what-is-wechaty-puppet-service-token-gateway",level:2},{value:"Starting Wechaty Puppet Servcie Token Gateway",id:"starting-wechaty-puppet-servcie-token-gateway",level:2},{value:"Service Discovery",id:"service-discovery",level:2}],d={toc:u};function y(e){var t=e.components,a=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"what-is-wechaty-puppet-service-token-gateway"},"What is Wechaty Puppet Service Token Gateway?"),(0,i.kt)("p",null,"Wechaty Puppet Service Token Gateway is a gateway for converting the Wechaty Puppet Provider to a Wechaty Puppet Service."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Environment variable"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"),(0,i.kt)("th",{parentName:"tr",align:null},"Usage"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"WECHATY_PUPPET"),(0,i.kt)("td",{parentName:"tr",align:null},"defines the Wechaty Puppet Provider NPM name and its parameters"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},'bash export WECHATY_PUPPET=wechaty-puppet-service export WECHATY_PUPPET_SERVICE_TOKEN="__TOKEN__"'))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"WECHATY_TOKEN"),(0,i.kt)("td",{parentName:"tr",align:null},"intializes the unique Wechaty Puppet Service Token,that is generating  using the ",(0,i.kt)("a",{parentName:"td",href:"https://www.uuidgenerator.net/version4"},"UUID Generator"),"."),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"bash export WECHATY_TOKEN='2fdb00a5-5c31-4018-84ac-c64e5f995057'"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"WECHATY_PUPPET_SERVER_PORT"),(0,i.kt)("td",{parentName:"tr",align:null},"sets up the  free server port for the Wechaty Puppet Service,also used for docker port mapping"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"bash export WECHATY_PUPPET_SERVER_PORT=8788 // any available port can be visited from internet"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"WECHATY_LOG"),(0,i.kt)("td",{parentName:"tr",align:null},"sets up the log mode for the service. Usually initialize the variable to ",(0,i.kt)("inlineCode",{parentName:"td"},"Verbose")," mode as this gives more debug log messages. ",(0,i.kt)("inlineCode",{parentName:"td"},"verbose")," mode is an option available in many OS that gives details on what the computer is doing,which drivers and software are being installed or loaded and many more."),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},'bash export WECHATY_LOG="verbose"'))))),(0,i.kt)("h2",{id:"starting-wechaty-puppet-servcie-token-gateway"},"Starting Wechaty Puppet Servcie Token Gateway"),(0,i.kt)("p",null,"After the docker image has been created, use a docker command  to start the Wechaty Puppet Service Token Gateway with the below configuration:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-docker",metastring:"run -ti --rm \\",run:!0,"-ti":!0,"--rm":!0,"\\":!0},'  \\\n  -e WECHATY_PUPPET \\\n  -e WECHATY_PUPPET_PADLOCAL_TOKEN \\\n  \\\n  -e WECHATY_TOKEN \\\n  -e WECHATY_PUPPET_SERVER_PORT \\\n  \\\n  -e WECHATY_LOG \\\n  \\\n  -e WECHATY_PUPPET_SERVICE_NO_TLS_INSECURE_SERVER \\\n  \\\n  -p "$WECHATY_PUPPET_SERVER_PORT:$WECHATY_PUPPET_SERVER_PORT\u201d \\\n  wechaty/wechaty:0.56\n')),(0,i.kt)("h2",{id:"service-discovery"},"Service Discovery"),(0,i.kt)("p",null,"Use the command given below to check the running of the Wechaty Puppet Service."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"curl https://api.chatie.io/v0/hosties/${WECHATY_TOKEN}\n")),(0,i.kt)("p",null,"Replace ${WECHATY_TOKEN} to your real token in the above configuration"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u2705 If you get an HTTP/200 response with a JSON object body that includes your ",(0,i.kt)("inlineCode",{parentName:"li"},"ip")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"port"),", then you are all set."),(0,i.kt)("li",{parentName:"ul"},"\u274c If you get an HTTP/404 response, your Puppet Service Gateway has some issues and needs to be troubleshooted.")))}y.isMDXComponent=!0}}]);