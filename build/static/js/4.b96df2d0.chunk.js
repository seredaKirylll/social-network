(this["webpackJsonpreact-kabzda-1"]=this["webpackJsonpreact-kabzda-1"]||[]).push([[4],{297:function(e,s,a){"use strict";a.d(s,"a",(function(){return d}));var n=a(3),t=a(10),i=a(11),c=a(1),o=function(e){return{isAuth:e.auth.isAuth}},d=function(e){return Object(t.b)(o)((function(s){return s.isAuth?Object(c.jsx)(e,Object(n.a)({},s)):Object(c.jsx)(i.a,{to:"/login"})}))}},298:function(e,s,a){e.exports={dialogs:"Dialogs_dialogs__3GY6O",dialogs_items:"Dialogs_dialogs_items__p2kHp",active:"Dialogs_active__1genx",messages:"Dialogs_messages__1OeZK",message:"Dialogs_message__1PmSu",companion:"Dialogs_companion__rsRPj"}},304:function(e,s,a){"use strict";a.r(s);var n=a(10),t=a(12),i=a(297),c=a(129),o=(a(0),a(298)),d=a.n(o),r=a(27),l=a.n(r),j=a(1),u=function(e){return Object(j.jsxs)("div",{className:d.a.dialog,children:[" ",e.message]})},g=a(16),b=function(e){var s="/Dialogs/"+e.id;return Object(j.jsx)("div",{className:d.a.dialog+" "+d.a.active,children:Object(j.jsxs)(g.b,{className:d.a.companion,to:s,children:[e.name," "]})})},m=a(11),O=a(92),h=a(130),_=a(47),f=a(75),x=Object(f.a)(50),v=Object(h.a)({form:"dialogAddMessageForm"})((function(e){return Object(j.jsxs)("form",{onSubmit:e.handleSubmit,children:[Object(j.jsx)("div",{children:Object(j.jsx)(O.a,{component:_.b,validate:[f.b,x],name:"newMessageBody",placeholder:"enter your message"})}),Object(j.jsx)("div",{children:Object(j.jsx)("button",{className:l.a.btn,children:" Send"})})]})})),p=function(e){var s=e.dialogsPage.dialogs.map((function(e){return Object(j.jsx)(b,{name:e.name,id:e.id},e.id)})),a=e.dialogsPage.messages.map((function(e){return Object(j.jsx)(u,{message:e.message},e.id)}));return e.isAuth?Object(j.jsxs)("div",{className:d.a.dialogs,children:[Object(j.jsx)("div",{className:d.a.dialogs_items,children:s}),Object(j.jsxs)("div",{className:d.a.messages,children:[Object(j.jsx)("div",{children:a}),Object(j.jsx)(v,{onSubmit:function(s){e.sendMessage(s.newMessageBody)}})]})]}):Object(j.jsx)(m.a,{to:"/login"})};s.default=Object(t.d)(Object(n.b)((function(e){return{dialogsPage:e.dialogsPage}}),(function(e){return{sendMessage:function(s){e(Object(c.b)(s))}}})),i.a)(p)}}]);
//# sourceMappingURL=4.b96df2d0.chunk.js.map