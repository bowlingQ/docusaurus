"use strict";(self.webpackChunkwechaty_docusaurus=self.webpackChunkwechaty_docusaurus||[]).push([[4927],{3905:function(e,a,t){t.d(a,{Zo:function(){return c},kt:function(){return d}});var n=t(67294);function o(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function l(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function r(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?l(Object(t),!0).forEach((function(a){o(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function s(e,a){if(null==e)return{};var t,n,o=function(e,a){if(null==e)return{};var t,n,o={},l=Object.keys(e);for(n=0;n<l.length;n++)t=l[n],a.indexOf(t)>=0||(o[t]=e[t]);return o}(e,a);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)t=l[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var m=n.createContext({}),u=function(e){var a=n.useContext(m),t=a;return e&&(t="function"==typeof e?e(a):r(r({},a),e)),t},c=function(e){var a=u(e.components);return n.createElement(m.Provider,{value:a},e.children)},i={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},p=n.forwardRef((function(e,a){var t=e.components,o=e.mdxType,l=e.originalType,m=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=u(t),d=o,g=p["".concat(m,".").concat(d)]||p[d]||i[d]||l;return t?n.createElement(g,r(r({ref:a},c),{},{components:t})):n.createElement(g,r({ref:a},c))}));function d(e,a){var t=arguments,o=a&&a.mdxType;if("string"==typeof e||o){var l=t.length,r=new Array(l);r[0]=p;var s={};for(var m in a)hasOwnProperty.call(a,m)&&(s[m]=a[m]);s.originalType=e,s.mdxType="string"==typeof e?e:o,r[1]=s;for(var u=2;u<l;u++)r[u]=t[u];return n.createElement.apply(null,r)}return n.createElement.apply(null,t)}p.displayName="MDXCreateElement"},58215:function(e,a,t){t.d(a,{Z:function(){return o}});var n=t(67294);function o(e){var a=e.children,t=e.hidden,o=e.className;return n.createElement("div",{role:"tabpanel",hidden:t,className:o},a)}},9877:function(e,a,t){t.d(a,{Z:function(){return c}});var n=t(87462),o=t(67294),l=t(72389),r=t(17704),s=t(86010),m="tabItem_LplD";function u(e){var a,t,l,u=e.lazy,c=e.block,i=e.defaultValue,p=e.values,d=e.groupId,g=e.className,v=o.Children.map(e.children,(function(e){if((0,o.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),h=null!=p?p:v.map((function(e){var a=e.props;return{value:a.value,label:a.label,attributes:a.attributes}})),f=(0,r.lx)(h,(function(e,a){return e.value===a.value}));if(f.length>0)throw new Error('Docusaurus error: Duplicate values "'+f.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var y=null===i?i:null!=(a=null!=i?i:null==(t=v.find((function(e){return e.props.default})))?void 0:t.props.value)?a:null==(l=v[0])?void 0:l.props.value;if(null!==y&&!h.some((function(e){return e.value===y})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+y+'" but none of its children has the corresponding value. Available values are: '+h.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var k=(0,r.UB)(),b=k.tabGroupChoices,T=k.setTabGroupChoices,w=(0,o.useState)(y),N=w[0],O=w[1],R=[],x=(0,r.o5)().blockElementScrollPositionUntilNextRender;if(null!=d){var I=b[d];null!=I&&I!==N&&h.some((function(e){return e.value===I}))&&O(I)}var P=function(e){var a=e.currentTarget,t=R.indexOf(a),n=h[t].value;n!==N&&(x(a),O(n),null!=d&&T(d,n))},Z=function(e){var a,t=null;switch(e.key){case"ArrowRight":var n=R.indexOf(e.currentTarget)+1;t=R[n]||R[0];break;case"ArrowLeft":var o=R.indexOf(e.currentTarget)-1;t=R[o]||R[R.length-1]}null==(a=t)||a.focus()};return o.createElement("div",{className:"tabs-container"},o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":c},g)},h.map((function(e){var a=e.value,t=e.label,l=e.attributes;return o.createElement("li",(0,n.Z)({role:"tab",tabIndex:N===a?0:-1,"aria-selected":N===a,key:a,ref:function(e){return R.push(e)},onKeyDown:Z,onFocus:P,onClick:P},l,{className:(0,s.Z)("tabs__item",m,null==l?void 0:l.className,{"tabs__item--active":N===a})}),null!=t?t:a)}))),u?(0,o.cloneElement)(v.filter((function(e){return e.props.value===N}))[0],{className:"margin-vert--md"}):o.createElement("div",{className:"margin-vert--md"},v.map((function(e,a){return(0,o.cloneElement)(e,{key:a,hidden:e.props.value!==N})}))))}function c(e){var a=(0,l.Z)();return o.createElement(u,(0,n.Z)({key:String(a)},e))}},54926:function(e,a,t){t.r(a),t.d(a,{assets:function(){return p},contentTitle:function(){return c},default:function(){return v},frontMatter:function(){return u},metadata:function(){return i},toc:function(){return d}});var n=t(87462),o=t(63366),l=(t(67294),t(3905)),r=t(9877),s=t(58215),m=["components"],u={title:"Managing rooms"},c=void 0,i={unversionedId:"howto/room",id:"howto/room",title:"Managing rooms",description:'Managing room is one of the important features in Wechaty. The word "room" here refers to Wechat rooms (also called groups).',source:"@site/docs/howto/room.md",sourceDirName:"howto",slug:"/howto/room",permalink:"/docs/howto/room",editUrl:"https://github.com/wechaty/docusaurus/edit/main/docusaurus/docs/howto/room.md",tags:[],version:"current",lastUpdatedBy:"Abhishek Jaiswal",lastUpdatedAt:1634541176,formattedLastUpdatedAt:"10/18/2021",frontMatter:{title:"Managing rooms"},sidebar:"docs",previous:{title:"Manage contacts",permalink:"/docs/howto/contact"},next:{title:"Send and accept friend requests",permalink:"/docs/howto/friendship"}},p={},d=[{value:"Creating New Room",id:"creating-new-room",level:2},{value:"Adding contact to room",id:"adding-contact-to-room",level:2},{value:"Remove contact from room",id:"remove-contact-from-room",level:2},{value:"Changing topic of the room",id:"changing-topic-of-the-room",level:2},{value:"Mention(@) others in the room",id:"mention-others-in-the-room",level:2},{value:"Moniting room events",id:"moniting-room-events",level:2}],g={toc:d};function v(e){var a=e.components,t=(0,o.Z)(e,m);return(0,l.kt)("wrapper",(0,n.Z)({},g,t,{components:a,mdxType:"MDXLayout"}),(0,l.kt)("p",null,'Managing room is one of the important features in Wechaty. The word "room" here refers to Wechat rooms (also called groups).\nYou can instruct the bot to create a new room, change the topic (or name) of the room, add a contact to a specific room, remove a contact from a room, and mention(@) someone in the room.'),(0,l.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"A Room can be identified by either groupId or room topic (room name)"))),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"creating-new-room"},"Creating New Room"),(0,l.kt)(r.Z,{groupId:"programming-languages",defaultValue:"ts",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"},{label:"Python",value:"py"},{label:"Go",value:"go"},{label:"Java",value:"java"},{label:"PHP",value:"php"},{label:"Scala",value:"scala"},{label:"C#",value:"csharp"},{label:"Rust",value:"rust"}],mdxType:"Tabs"},(0,l.kt)(s.Z,{value:"ts",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"// TODO: Pull Request is welcome!\n"))),(0,l.kt)(s.Z,{value:"js",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"// TODO: Pull Request is welcome!\n"))),(0,l.kt)(s.Z,{value:"py",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-py"},"from __future__ import annotations\nfrom typing import List\n\nfrom wechaty import (\n    Wechaty,\n    Contact,\n    Room,\n    Message\n)\n\n\nclass MyBot(Wechaty):\n    async def on_ready(self, _):\n        \"\"\"creating room\"\"\"\n        # 1. filter friend\n        friends: List[Contact] = await self.Contact.find_all()\n        # find my python-wechaty related friends\n        friends = [friend for friend in friends if friend.alias().startswith('python-wechaty')]\n\n        # 2. create room and invite them\n        room: Room = await self.Room.create(friends, topic='Python\u2764Wechaty')\n        if room:\n            room.say('hello, python-wechaty is ready for you.')\n"))),(0,l.kt)(s.Z,{value:"go",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-go"},"// TODO: Pull Request is welcome!\n"))),(0,l.kt)(s.Z,{value:"java",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"// TODO: Pull Request is welcome!\n"))),(0,l.kt)(s.Z,{value:"php",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-php"},"// TODO: Pull Request is welcome!\n"))),(0,l.kt)(s.Z,{value:"scala",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-scala"},"// TODO: Pull Request is welcome!\n"))),(0,l.kt)(s.Z,{value:"csharp",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-csharp"},"// TODO: Pull Request is welcome!\n"))),(0,l.kt)(s.Z,{value:"rust",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-rust"},"// TODO: Pull Request is welcome!\n")))),(0,l.kt)("h2",{id:"adding-contact-to-room"},"Adding contact to room"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"add")," accepts 'Contact' as an argument. You can get the Contact by using ",(0,l.kt)("inlineCode",{parentName:"p"},"msg.talker()"),"."),(0,l.kt)(r.Z,{groupId:"programming-languages",defaultValue:"ts",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"},{label:"Python",value:"py"},{label:"Go",value:"go"},{label:"Java",value:"java"},{label:"PHP",value:"php"},{label:"Scala",value:"scala"},{label:"C#",value:"csharp"},{label:"Rust",value:"rust"}],mdxType:"Tabs"},(0,l.kt)(s.Z,{value:"ts",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"import {\n  Contact,\n  Wechaty,\n  log,\n  Room,\n} from 'wechaty'\n\n//helper function\nasync function putInRoom(person: Contact, room: Room) {\n  //Add a log\n  log.info(\"Bot\", 'putInRoom(\"%s\", \"%s\")', contact.name(), await room.topic());\n\n  try {\n    //Try put the person into the room\n    await room.add(person);\n  } catch (e) {\n    //any error will be here\n    log.error(\"Bot\", \"putInRoom() exception: \" + e.stack);\n  }\n}\n\n//in the main code\n//If the secrete code is ding\nif (msg.text() === 'ding') {\n  //get the Person/Contact\n  const from = msg.talker();\n\n  //find the targetRoom from the bot's room list\n  //Option1: by group id\n  //set the targetRoomId\n  const tagetRoomId = '12345678910@chatroom'\n  const targetRoom = await bot.Room.find({id: tagetRoomId})\n  //Option2: by group name\n  // const tagetRoomTopic =  'testGroup'\n  // const targetRoom = await bot.Room.find({topic:tagetRoomTopic})\n  if (targetRoom instanceof Room) {\n    await putInRoom(from, targetRoom);\n  } else {\n    log.info('Cannot find room, unable to put the person into the room')\n  }\n}\n"))),(0,l.kt)(s.Z,{value:"js",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"// TODO: Pull Request is welcome!\n"))),(0,l.kt)(s.Z,{value:"py",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-py"},'from __future__ import annotations\nfrom typing import List\n\nfrom wechaty import (\n    Wechaty,\n    Contact,\n    Room,\n    Message\n)\n\n\nclass MyBot(Wechaty):\n\n    async def on_message(self, msg: Message):\n        """add friend to room if they send `python-wechaty` keyword to be"""\n\n        # invite someone to the room by keyword<python-wechaty>\n        if msg.text() == \'python-wechaty\':\n            talker: Contact = await msg.talker()\n            room: Room = await msg.room()\n            mention_self: bool = await msg.mention_self()\n            python_wechaty_room: Room = await self.Room.find(query=\'id-of-your-room\')\n            if room:\n                if mention_self:\n                    await python_wechaty_room.add(talker)\n            else:\n                await python_wechaty_room.add(talker)\n'))),(0,l.kt)(s.Z,{value:"go",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-go"},"// TODO: Pull Request is welcome!\n"))),(0,l.kt)(s.Z,{value:"java",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"// TODO: Pull Request is welcome!\n"))),(0,l.kt)(s.Z,{value:"php",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-php"},"// TODO: Pull Request is welcome!\n"))),(0,l.kt)(s.Z,{value:"scala",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-scala"},"// TODO: Pull Request is welcome!\n"))),(0,l.kt)(s.Z,{value:"csharp",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-csharp"},"// TODO: Pull Request is welcome!\n"))),(0,l.kt)(s.Z,{value:"rust",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-rust"},"// TODO: Pull Request is welcome!\n")))),(0,l.kt)("h2",{id:"remove-contact-from-room"},"Remove contact from room"),(0,l.kt)(r.Z,{groupId:"programming-languages",defaultValue:"ts",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"},{label:"Python",value:"py"},{label:"Go",value:"go"},{label:"Java",value:"java"},{label:"PHP",value:"php"},{label:"Scala",value:"scala"},{label:"C#",value:"csharp"},{label:"Rust",value:"rust"}],mdxType:"Tabs"},(0,l.kt)(s.Z,{value:"ts",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"// TODO: Pull Request is welcome!\n"))),(0,l.kt)(s.Z,{value:"js",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"// TODO: Pull Request is welcome!\n"))),(0,l.kt)(s.Z,{value:"py",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-py"},"from __future__ import annotations\nfrom typing import List\n\nfrom wechaty import (\n    Wechaty,\n    Contact,\n    Room,\n    Message\n)\n\n\nclass MyBot(Wechaty):\n\n    async def on_message(self, msg: Message):\n        room: Room = await msg.room()\n        if room:\n            # func<is_dangerous_words> is to detect whether the content is dangerous\n            if is_dangerous_words(msg.text()):\n                talker: Contact = await msg.talker()\n                room.delete(talker)\n"))),(0,l.kt)(s.Z,{value:"go",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-go"},"// TODO: Pull Request is welcome!\n"))),(0,l.kt)(s.Z,{value:"java",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"// TODO: Pull Request is welcome!\n"))),(0,l.kt)(s.Z,{value:"php",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-php"},"// TODO: Pull Request is welcome!\n"))),(0,l.kt)(s.Z,{value:"scala",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-scala"},"// TODO: Pull Request is welcome!\n"))),(0,l.kt)(s.Z,{value:"csharp",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-csharp"},"// TODO: Pull Request is welcome!\n"))),(0,l.kt)(s.Z,{value:"rust",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-rust"},"// TODO: Pull Request is welcome!\n")))),(0,l.kt)("h2",{id:"changing-topic-of-the-room"},"Changing topic of the room"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"topic")," accepts a ",(0,l.kt)("inlineCode",{parentName:"p"},"String")," as an argument.\nYou can find the ",(0,l.kt)("inlineCode",{parentName:"p"},"Room")," by either room name (a ",(0,l.kt)("inlineCode",{parentName:"p"},"String"),") or room id (format '12345678910@chatroom')"),(0,l.kt)(r.Z,{groupId:"programming-languages",defaultValue:"ts",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"},{label:"Python",value:"py"},{label:"Go",value:"go"},{label:"Java",value:"java"},{label:"PHP",value:"php"},{label:"Scala",value:"scala"},{label:"C#",value:"csharp"},{label:"Rust",value:"rust"}],mdxType:"Tabs"},(0,l.kt)(s.Z,{value:"ts",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"import {\n  Wechaty,\n  log,\n  Room,\n} from 'wechaty'\n//helper function\nasync function changeRoomTopic(room: Room) {\n  log.info(\"Bot\", 'changing room topic for group', await room.topic());\n  const newName =\"newName\"\n  try {\n    await room.topic(newName);\n    \n  } catch (e) {\n    log.error(\"Bot\", \"changeRoomTopic() exception: \" + e.stack);\n  }\n\n  //Option1: by group id\n  //set the targetRoomId\n  const tagetRoomId = '12345678910@chatroom'\n  const targetRoom = await bot.Room.find({id: tagetRoomId})\n  //Option2: by group name\n  // const tagetRoomTopic = 'ceshiqun'\n  // const targetRoom = await bot.Room.find({topic:tagetRoomTopic})\n  if (targetRoom instanceof Room) {\n    await changeRoomTopic(targetRoom);\n  } else {\n    log.info('cannot find room, unable to changeRoomTopic')\n  }\n  \n}\n\n"))),(0,l.kt)(s.Z,{value:"js",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"// TODO: Pull Request is welcome!\n"))),(0,l.kt)(s.Z,{value:"py",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-py"},"from __future__ import annotations\nfrom typing import List\n\nfrom wechaty import (\n    Wechaty,\n    Room,\n    Message\n)\n\n\nclass MyBot(Wechaty):\n\n    async def on_message(self, msg: Message):\n        \"\"\"change room topic by token\"\"\"\n        room: Room = await msg.room()\n        if not room:\n            return\n\n        text: str = await msg.text()\n        talker: Contact = await msg.talker()\n        keyword = 'new-topic:'\n        if talker.alias() == 'admin' and text.startswith(keyword):\n            new_topic: str = text[len(keyword):]\n            old_topic: str = await room.topic()\n            await room.say(f'ok, I will change old_topic<{old_topic}> to new_topic<{new_topic}>')\n            \n            # change the topic of room\n            await room.topic(new_topic)\n"))),(0,l.kt)(s.Z,{value:"go",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-go"},"// TODO: Pull Request is welcome!\n"))),(0,l.kt)(s.Z,{value:"java",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"// TODO: Pull Request is welcome!\n"))),(0,l.kt)(s.Z,{value:"php",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-php"},"// TODO: Pull Request is welcome!\n"))),(0,l.kt)(s.Z,{value:"scala",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-scala"},"// TODO: Pull Request is welcome!\n"))),(0,l.kt)(s.Z,{value:"csharp",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-csharp"},"// TODO: Pull Request is welcome!\n"))),(0,l.kt)(s.Z,{value:"rust",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-rust"},"// TODO: Pull Request is welcome!\n")))),(0,l.kt)("h2",{id:"mention-others-in-the-room"},"Mention(@) others in the room"),(0,l.kt)(r.Z,{groupId:"programming-languages",defaultValue:"ts",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"},{label:"Python",value:"py"},{label:"Go",value:"go"},{label:"Java",value:"java"},{label:"PHP",value:"php"},{label:"Scala",value:"scala"},{label:"C#",value:"csharp"},{label:"Rust",value:"rust"}],mdxType:"Tabs"},(0,l.kt)(s.Z,{value:"ts",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"await room.say`Hello, ${contact}`\n"))),(0,l.kt)(s.Z,{value:"js",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"await room.say`Hello, ${contact}`\n"))),(0,l.kt)(s.Z,{value:"py",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-py"},"# TODO: Pull Request is welcome!\n"))),(0,l.kt)(s.Z,{value:"go",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-go"},"// TODO: Pull Request is welcome!\n"))),(0,l.kt)(s.Z,{value:"java",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"// TODO: Pull Request is welcome!\n"))),(0,l.kt)(s.Z,{value:"php",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-php"},"// TODO: Pull Request is welcome!\n"))),(0,l.kt)(s.Z,{value:"scala",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-scala"},"// TODO: Pull Request is welcome!\n"))),(0,l.kt)(s.Z,{value:"csharp",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-csharp"},"// TODO: Pull Request is welcome!\n"))),(0,l.kt)(s.Z,{value:"rust",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-rust"},"// TODO: Pull Request is welcome!\n")))),(0,l.kt)("h2",{id:"moniting-room-events"},"Moniting room events"),(0,l.kt)("p",null,"TBW ..."))}v.isMDXComponent=!0}}]);