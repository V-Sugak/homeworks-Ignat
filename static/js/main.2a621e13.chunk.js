(this["webpackJsonpmy-project"]=this["webpackJsonpmy-project"]||[]).push([[0],[,,,,,,,,,,function(e,t,n){e.exports={block:"HW7_block__t-ffv",selectBlock:"HW7_selectBlock__3a8F7",superSelect:"HW7_superSelect__1b7f1",option:"HW7_option__2PKL1",radio:"HW7_radio__1eDUx",label:"HW7_label__1mumQ"}},function(e,t,n){e.exports={link:"Header_link__1fdYh",active:"Header_active__1yVOJ",block:"Header_block__180ws",header:"Header_header__3CwYW"}},function(e,t,n){e.exports={button:"Affairs_button__1ygIs",active:"Affairs_active__2YIQ4",affair:"Affairs_affair__3aNWT",item:"Affairs_item__2jgbZ",high:"Affairs_high__1wEYX",middle:"Affairs_middle__3vQJd",low:"Affairs_low__3xXtV"}},,function(e,t,n){e.exports={message:"Message_message__2SbXH",avatar:"Message_avatar__8xhmk",angle:"Message_angle__3AFSq",content:"Message_content__3kgOU",name:"Message_name__36ZFL",text:"Message_text__3Q94X",time:"Message_time__4M9ug"}},,,function(e,t,n){e.exports={block:"HW8_block__P7Uvb",peopleBlock:"HW8_peopleBlock__20vNx",person:"HW8_person__11smP",name:"HW8_name__MJ_34",buttons:"HW8_buttons__16Hfj"}},,,function(e,t,n){e.exports={greeting:"Greeting_greeting__DjAPc",inputDiv:"Greeting_inputDiv__2OhpA",input:"Greeting_input__3QynL",errorInput:"Greeting_errorInput__20wWK",error:"Greeting_error__3flUl"}},,,,,,,function(e,t,n){e.exports={label:"SuperCheckbox_label__XOgSj",checkbox:"SuperCheckbox_checkbox__jNeoh",checkboxTick:"SuperCheckbox_checkboxTick__AEJc0",checkboxText:"SuperCheckbox_checkboxText__1qoX2"}},function(e,t,n){e.exports={block:"HW9_block__zxLxD",data:"HW9_data__9cLz_",buttons:"HW9_buttons__349n2"}},,,function(e,t,n){e.exports={input:"SuperInputText_input__3cXWM",errorInput:"SuperInputText_errorInput__1IJfn",superInput1:"SuperInputText_superInput1__3ghRQ",superInput2:"SuperInputText_superInput2__1i6Zy",error:"SuperInputText_error__2Ke4f",error1:"SuperInputText_error1__21DQ4",error2:"SuperInputText_error2__2RZE1",error3:"SuperInputText_error3__AI-dg"}},function(e,t,n){e.exports={block:"HW6_block__G0zIh",spanBlock:"HW6_spanBlock__oDzFs",img:"HW6_img__1dccO"}},,,function(e,t,n){e.exports={default:"SuperButton_default__2AJkr",btn:"SuperButton_btn__26Zno",red:"SuperButton_red__2UBd-"}},function(e,t,n){e.exports={blue:"HW4_blue__1b_QR",column:"HW4_column__SpnUS",testSpanError:"HW4_testSpanError__1nSiQ"}},,function(e,t,n){e.exports={block:"HW10_block__2gvDt",img:"HW10_img__3IfgX"}},,function(e,t,n){e.exports={App:"App_App__1WKyY"}},,,function(e,t,n){e.exports={errorBlock:"Error404_errorBlock__3o4lI"}},,,,,function(e,t,n){},,,,,,,,function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),r=n(29),s=n.n(r),i=(n(48),n(40)),o=n.n(i),l=n(15),j=n(3),u=n(14),b=n.n(u),d=n(0);function O(e){return Object(d.jsxs)("div",{className:b.a.message,children:[Object(d.jsx)("img",{src:e.avatar,className:b.a.avatar}),Object(d.jsx)("div",{className:b.a.angle}),Object(d.jsxs)("div",{className:b.a.content,children:[Object(d.jsx)("div",{className:b.a.name,children:e.name}),Object(d.jsx)("div",{className:b.a.text,children:e.message}),Object(d.jsx)("div",{className:b.a.time,children:e.time})]})]})}var h="https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg",x="Artem",_="npm start \u043d\u0430\u0436\u0438\u043c\u0430\u043b ?",m="22:00";var p=function(){return Object(d.jsxs)("div",{children:[Object(d.jsx)("hr",{}),"homeworks 1",Object(d.jsx)(O,{avatar:h,name:x,message:_,time:m}),Object(d.jsx)("hr",{}),Object(d.jsx)("hr",{})]})},f=n(4),v=n(12),g=n.n(v),k=n(8),N=n(9),C=n(35),S=n.n(C),y=function(e){var t=e.red,n=e.className,c=Object(N.a)(e,["red","className"]),a="".concat(t?S.a.red:""," ").concat(S.a.btn," ").concat(n);return Object(d.jsx)("button",Object(k.a)({className:a},c))};var w=function(e){var t=g.a.item+" "+g.a[e.affair.priority];return Object(d.jsxs)("div",{className:g.a.affair,children:[Object(d.jsx)("div",{className:g.a.item,children:e.affair.name}),Object(d.jsx)("div",{className:t,children:e.affair.priority}),Object(d.jsx)(y,{red:!0,onClick:function(){return e.deleteAffairCallback(e.affair._id)},children:" X "})]})};var A=function(e){var t=e.data.map((function(t){return Object(d.jsx)(w,{affair:t,deleteAffairCallback:e.deleteAffairCallback},t._id)})),n=function(t){return g.a.button+" "+(e.filter===t?g.a.active:"")};return Object(d.jsxs)("div",{children:[t,Object(d.jsx)(y,{className:n("all"),onClick:function(){e.setFilter("all")},children:"All"}),Object(d.jsx)(y,{className:n("high"),onClick:function(){e.setFilter("high")},children:"High"}),Object(d.jsx)(y,{className:n("middle"),onClick:function(){e.setFilter("middle")},children:"Middle"}),Object(d.jsx)(y,{className:n("low"),onClick:function(){e.setFilter("low")},children:"Low"})]})},H=[{_id:1,name:"React",priority:"high"},{_id:2,name:"anime",priority:"low"},{_id:3,name:"games",priority:"low"},{_id:4,name:"work",priority:"high"},{_id:5,name:"html & css",priority:"middle"}];var I=function(){var e=Object(c.useState)(H),t=Object(f.a)(e,2),n=t[0],a=t[1],r=Object(c.useState)("all"),s=Object(f.a)(r,2),i=s[0],o=s[1],l=function(e,t){return"all"===t?e:e.filter((function(e){return e.priority===t}))}(n,i);return Object(d.jsxs)("div",{children:[Object(d.jsx)("hr",{}),"homeworks 2",Object(d.jsx)(A,{data:l,setFilter:o,deleteAffairCallback:function(e){return a(function(e,t){return e.filter((function(e){return e._id!==t}))}(n,e))},filter:i}),Object(d.jsx)("hr",{}),Object(d.jsx)("hr",{})]})},T=n(7),W=n(20),B=n.n(W),E=n(31),D=n.n(E),F=function(e){e.type;var t=e.onChange,n=e.onChangeText,c=e.onKeyPress,a=e.onEnter,r=e.error,s=e.className,i=e.spanClassName,o=Object(N.a)(e,["type","onChange","onChangeText","onKeyPress","onEnter","error","className","spanClassName"]),l="".concat(D.a.error," ").concat(i||""),j="".concat(r?D.a.errorInput:D.a.input," ").concat(s);return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("input",Object(k.a)({type:"text",onChange:function(e){t&&t(e),n&&n(e.currentTarget.value)},onKeyPress:function(e){c&&c(e),a&&"Enter"===e.key&&a()},className:j},o)),r&&Object(d.jsx)("span",{className:l,children:r})]})},L=function(e){var t=e.name,n=e.setNameCallback,c=e.addUser,a=e.error,r=e.totalUsers,s=e.onEnter,i=e.onBlurHandler;a?B.a.errorInput:B.a.input;return Object(d.jsxs)("div",{className:B.a.greeting,children:[Object(d.jsx)("div",{className:B.a.inputDiv,children:Object(d.jsx)(F,{onBlur:i,onKeyDown:s,value:t,onChange:n,error:a})}),Object(d.jsx)(y,{onClick:c,children:"Add"}),Object(d.jsx)("span",{className:B.a.count,children:r})]})},J=function(e){var t=e.users,n=e.addUserCallback,a=Object(c.useState)(""),r=Object(f.a)(a,2),s=r[0],i=r[1],o=Object(c.useState)(""),l=Object(f.a)(o,2),j=l[0],u=l[1],b=function(){var e=s.trim();e?(n(e),alert("Hello ".concat(e,"!")),i("")):u("Enter your name")},O=t.length;return Object(d.jsx)(L,{name:s,setNameCallback:function(e){j&&u(""),i(e.currentTarget.value)},addUser:b,error:j,onEnter:function(e){"Enter"===e.key&&b()},totalUsers:O,onBlurHandler:function(){s.trim()||u("Enter your name")}})},M=n(58);var P=function(){var e=Object(c.useState)([]),t=Object(f.a)(e,2),n=t[0],a=t[1];return Object(d.jsxs)("div",{children:[Object(d.jsx)("hr",{}),"homeworks 3",Object(d.jsx)(J,{users:n,addUserCallback:function(e){a([].concat(Object(T.a)(n),[{_id:Object(M.a)(),name:e}]))}}),Object(d.jsx)("hr",{}),Object(d.jsx)("hr",{})]})},U=n(36),Q=n.n(U),X=n(27),G=n.n(X),K=function(e){e.type;var t=e.onChange,n=e.onChangeChecked,c=e.className,a=(e.spanClassName,e.children),r=Object(N.a)(e,["type","onChange","onChangeChecked","className","spanClassName","children"]),s="".concat(G.a.checkbox," ").concat(c||"");return Object(d.jsxs)("label",{className:G.a.label,children:[Object(d.jsx)("input",Object(k.a)({type:"checkbox",onChange:function(e){t&&t(e),n&&n(e.currentTarget.checked)},className:s},r)),Object(d.jsx)("span",{className:G.a.checkboxTick,children:" "}),a&&Object(d.jsx)("span",{className:G.a.checkboxText,children:a})]})};var Y=function(){var e=Object(c.useState)(""),t=Object(f.a)(e,2),n=t[0],a=t[1],r=n?"":"error",s=function(){r?alert("\u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0435\u043a\u0441\u0442..."):alert(n)},i=Object(c.useState)(!1),o=Object(f.a)(i,2),l=o[0],j=o[1];return Object(d.jsxs)("div",{children:[Object(d.jsx)("hr",{}),"homeworks 4",Object(d.jsxs)("div",{className:Q.a.column,children:[Object(d.jsx)(F,{value:n,onChangeText:a,onEnter:s,error:r}),Object(d.jsx)(F,{className:Q.a.blue}),Object(d.jsx)(y,{children:"default"}),Object(d.jsx)(y,{red:!0,onClick:s,children:"delete "}),Object(d.jsx)(y,{disabled:!0,children:"disabled"}),Object(d.jsx)(K,{checked:l,onChangeChecked:j,children:"some text "}),Object(d.jsx)(K,{checked:l,onChange:function(e){return j(e.currentTarget.checked)}})]}),Object(d.jsx)("hr",{}),Object(d.jsx)("hr",{})]})},Z=function(e){e.autoFocus;var t=e.onBlur,n=e.onEnter,a=e.spanProps,r=Object(N.a)(e,["autoFocus","onBlur","onEnter","spanProps"]),s=Object(c.useState)(!1),i=Object(f.a)(s,2),o=i[0],l=i[1],j=a||{},u=j.children,b=j.onDoubleClick,O=j.className,h=Object(N.a)(j,["children","onDoubleClick","className"]),x="\u0441\u0434\u0435\u043b\u0430\u0442\u044c \u043a\u0440\u0430\u0441\u0438\u0432\u044b\u0439 \u0441\u0442\u0438\u043b\u044c \u0434\u043b\u044f \u0441\u043f\u0430\u043d\u0430".concat(" ",O);return Object(d.jsx)(d.Fragment,{children:o?Object(d.jsx)(F,Object(k.a)({autoFocus:!0,onBlur:function(e){l(!1),t&&t(e)},onEnter:function(){l(!1),n&&n()}},r)):Object(d.jsx)("span",Object(k.a)(Object(k.a)({onDoubleClick:function(e){l(!0),b&&b(e)},className:x},h),{},{children:u||r.value}))})};function q(e,t){var n=JSON.stringify(t);localStorage.setItem(e,n)}function z(e,t){var n=t,c=localStorage.getItem(e);return null!==c&&(n=JSON.parse(c)),n}q("test",{x:"A",y:1});z("test",{x:"",y:0});var R=n(32),V=n.n(R);var $=function(){var e=Object(c.useState)(""),t=Object(f.a)(e,2),n=t[0],a=t[1];return Object(d.jsxs)("div",{children:[Object(d.jsx)("hr",{}),"homeworks 6",Object(d.jsxs)("div",{className:V.a.block,children:[Object(d.jsxs)("div",{className:V.a.spanBlock,children:[Object(d.jsx)(Z,{value:n,onChangeText:a,spanProps:{children:n?void 0:"enter text..."}}),Object(d.jsx)("img",{className:V.a.img,src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTy7KighJf74XBeg9alnuRn2icc3Q8M1kA5DQ&usqp=CAU",alt:"image"})]}),Object(d.jsxs)("div",{children:[Object(d.jsx)(y,{onClick:function(){q("editable-span-value",n)},children:"save"}),Object(d.jsx)(y,{onClick:function(){var e=z("editable-span-value","");a(e)},children:"restore"})]})]}),Object(d.jsx)("hr",{}),Object(d.jsx)("hr",{})]})};var ee=function(){return Object(d.jsxs)("div",{children:[Object(d.jsx)(p,{}),Object(d.jsx)(I,{}),Object(d.jsx)(P,{}),Object(d.jsx)(Y,{}),Object(d.jsx)($,{})]})},te=n(10),ne=n.n(te),ce=function(e){var t=e.options,n=e.onChange,c=e.onChangeOption,a=e.className,r=Object(N.a)(e,["options","onChange","onChangeOption","className"]),s=t?t.map((function(e,t){return Object(d.jsx)("option",{className:ne.a.option,value:e,children:e},t)})):[],i=ne.a.superSelect+(a?" "+a:"");return Object(d.jsx)("div",{className:ne.a.selectBlock,children:Object(d.jsx)("select",Object(k.a)(Object(k.a)({className:i,onChange:function(e){n&&n(e),c&&c(e.currentTarget.value)}},r),{},{children:s}))})},ae=function(e){e.type;var t=e.name,n=e.options,c=e.value,a=e.onChange,r=e.onChangeOption,s=e.className,i=(Object(N.a)(e,["type","name","options","value","onChange","onChangeOption","className"]),function(e){a&&a(e),r&&r(e.currentTarget.value)}),o=ne.a.radio+(s?" "+s:""),l=n?n.map((function(e,n){return Object(d.jsxs)("label",{className:ne.a.label,children:[Object(d.jsx)("input",{className:o,type:"radio",value:e,name:t,onChange:i,checked:c===e}),e]},t+"-"+n)})):[];return Object(d.jsx)(d.Fragment,{children:l})},re=["x","y","z"];var se=function(){var e=Object(c.useState)(re[1]),t=Object(f.a)(e,2),n=t[0],a=t[1];return Object(d.jsxs)("div",{children:[Object(d.jsx)("hr",{}),"homeworks 7",Object(d.jsxs)("div",{className:ne.a.block,children:[Object(d.jsx)("div",{className:ne.a.block1,children:Object(d.jsx)(ce,{options:re,value:n,onChangeOption:a})}),Object(d.jsx)("div",{children:Object(d.jsx)(ae,{name:"radio",options:re,value:n,onChangeOption:a})})]}),Object(d.jsx)("hr",{}),Object(d.jsx)("hr",{})]})},ie=function(e,t){switch(t.type){case"sort":var n=Object(T.a)(e).sort((function(e,t){return e.name<t.name?-1:e.name>t.name?1:0}));return"down"===t.payload?n:n.reverse();case"check":return e.filter((function(e){return e.age>=t.payload}));default:return e}},oe=function(e){return{type:"sort",payload:e}},le=n(17),je=n.n(le),ue=[{_id:0,name:"\u041a\u043e\u0442",age:3},{_id:1,name:"\u0410\u043b\u0435\u043a\u0441\u0430\u043d\u0434\u0440",age:66},{_id:2,name:"\u041a\u043e\u043b\u044f",age:16},{_id:3,name:"\u0412\u0438\u043a\u0442\u043e\u0440",age:44},{_id:4,name:"\u0414\u043c\u0438\u0442\u0440\u0438\u0439",age:40},{_id:5,name:"\u0418\u0440\u0438\u043d\u0430",age:55}];var be=function(){var e=Object(c.useState)(ue),t=Object(f.a)(e,2),n=t[0],a=t[1],r=n.map((function(e){return Object(d.jsxs)("div",{className:je.a.person,children:[Object(d.jsx)("div",{className:je.a.name,children:e.name}),Object(d.jsx)("div",{className:je.a.age,children:e.age})]},e._id)}));return Object(d.jsxs)("div",{children:[Object(d.jsx)("hr",{}),"homeworks 8",Object(d.jsxs)("div",{className:je.a.block,children:[Object(d.jsx)("div",{className:je.a.peopleBlock,children:r}),Object(d.jsxs)("div",{className:je.a.buttons,children:[Object(d.jsx)("div",{children:Object(d.jsx)(y,{onClick:function(){return a(ie(ue,oe("up")))},children:"sort up"})}),Object(d.jsx)("div",{children:Object(d.jsx)(y,{onClick:function(){return a(ie(ue,oe("down")))},children:"sort down"})}),Object(d.jsx)("div",{children:Object(d.jsx)(y,{onClick:function(){return a(ie(n,{type:"check",payload:18}))},children:"check 18"})})]})]}),Object(d.jsx)("hr",{}),Object(d.jsx)("hr",{})]})},de=n(28),Oe=n.n(de);var he=function(){var e=Object(c.useState)(0),t=Object(f.a)(e,2),n=t[0],a=t[1],r=Object(c.useState)(new Date),s=Object(f.a)(r,2),i=s[0],o=s[1],l=Object(c.useState)(!1),j=Object(f.a)(l,2),u=j[0],b=j[1],O=function(){clearInterval(n)},h=i.toLocaleTimeString(),x=i.toLocaleDateString();return Object(d.jsxs)("div",{className:Oe.a.block,children:[Object(d.jsx)("div",{onMouseEnter:function(){b(!0)},onMouseLeave:function(){b(!1)},className:Oe.a.data,children:h}),Object(d.jsx)("div",{className:Oe.a.data,children:u&&x}),Object(d.jsxs)("div",{className:Oe.a.buttons,children:[Object(d.jsx)(y,{onClick:function(){O();var e=window.setInterval((function(){o(new Date)}),1e3);a(e)},children:"start"}),Object(d.jsx)(y,{onClick:O,children:"stop"})]})]})};var xe=function(){return Object(d.jsxs)("div",{children:[Object(d.jsx)("hr",{}),"homeworks 9",Object(d.jsx)(he,{}),Object(d.jsx)("hr",{}),Object(d.jsx)("hr",{})]})},_e=n(25),me={isLoading:!1},pe=function(e){return{type:"SET-LOADING",isLoading:e}},fe=n.p+"static/media/loading.b74bb02b.gif",ve=n(38),ge=n.n(ve);var ke=function(){var e=Object(_e.b)(),t=Object(_e.c)((function(e){return e.loading.isLoading}));return Object(d.jsxs)("div",{children:[Object(d.jsx)("hr",{}),"homeworks 10",Object(d.jsx)("div",{className:ge.a.block,children:t?Object(d.jsx)("img",{className:ge.a.img,src:fe}):Object(d.jsx)(y,{onClick:function(){e(pe(!0)),setTimeout((function(){e(pe(!1))}),2e3)},children:"set loading..."})}),Object(d.jsx)("hr",{}),Object(d.jsx)("hr",{})]})};var Ne=function(){return Object(d.jsxs)("div",{children:[Object(d.jsx)(se,{}),Object(d.jsx)(be,{}),Object(d.jsx)(xe,{}),Object(d.jsx)(ke,{})]})};var Ce=function(){return Object(d.jsx)("div",{children:"Junior Plus"})},Se=n(43),ye=n.n(Se);var we=function(){return Object(d.jsxs)("div",{className:ye.a.errorBlock,children:[Object(d.jsx)("div",{children:"404"}),Object(d.jsx)("div",{children:"Page not found!"}),Object(d.jsx)("div",{children:"\u2014\u0e05/\u1420.\u032b .\u141f\\\u0e05\u2014"})]})},Ae="/pre-junior",He="/junior",Ie="/juniorPlus";var Te=function(){return Object(d.jsx)("div",{children:Object(d.jsxs)(j.d,{children:[Object(d.jsx)(j.b,{path:"/",element:Object(d.jsx)(j.a,{to:Ae})}),Object(d.jsx)(j.b,{path:Ae,element:Object(d.jsx)(ee,{})}),Object(d.jsx)(j.b,{path:He,element:Object(d.jsx)(Ne,{})}),Object(d.jsx)(j.b,{path:Ie,element:Object(d.jsx)(Ce,{})}),Object(d.jsx)(j.b,{path:"/404",element:Object(d.jsx)(we,{})}),Object(d.jsx)(j.b,{path:"/*",element:Object(d.jsx)(j.a,{to:"/404"})})]})})},We=n(11),Be=n.n(We);var Ee=function(){return Object(d.jsxs)("div",{className:Be.a.header,children:[Object(d.jsx)(l.b,{className:function(e){return e.isActive?Be.a.active:Be.a.link},to:Ae,children:"Pre-junior"}),Object(d.jsx)(l.b,{className:function(e){return e.isActive?Be.a.active:Be.a.link},to:He,children:"Junior"}),Object(d.jsx)(l.b,{className:function(e){return e.isActive?Be.a.active:Be.a.link},to:Ie,children:"Junior+"}),Object(d.jsx)("div",{className:Be.a.block})]})};var De=function(){return Object(d.jsx)("div",{children:Object(d.jsxs)(l.a,{children:[Object(d.jsx)(Ee,{}),Object(d.jsx)(Te,{})]})})};var Fe=function(){return Object(d.jsxs)("div",{className:o.a.App,children:[Object(d.jsx)("div",{children:"react homeworks:"}),Object(d.jsx)(De,{})]})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var Le=n(39),Je=Object(Le.a)({loading:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:me,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET-LOADING":return Object(k.a)(Object(k.a)({},e),{},{isLoading:t.isLoading});default:return e}}}),Me=Object(Le.b)(Je),Pe=Me;window.store=Me,s.a.render(Object(d.jsx)(a.a.StrictMode,{children:Object(d.jsx)(_e.a,{store:Pe,children:Object(d.jsx)(Fe,{})})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[56,1,2]]]);
//# sourceMappingURL=main.2a621e13.chunk.js.map