(this.webpackJsonpnotepad=this.webpackJsonpnotepad||[]).push([[0],[,,,,,,,,,,,,,function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var c=n(8),a=n(4),i=n(1),s=n.n(i),r=n(6),l=n.n(r),o=(n(13),n(0)),j=function(e){var t=e.onChangeTitle,n=e.onChangeText,c=e.handleSave;return Object(o.jsxs)("div",{className:"container",children:[Object(o.jsx)("input",{type:"text",placeholder:"Title",onChange:t}),Object(o.jsx)("textarea",{placeholder:"Your text ...",onChange:n}),Object(o.jsx)("button",{type:"button",onClick:c,children:"Save"})]})},u=n(7),d=n.n(u),h=(n(15),function(e){var t=e.title,n=e.text,c=new d.a.Converter,a=c.makeHtml(t),i=c.makeHtml(n),s=function(e){return{__html:e}},r=function(e){return Object(o.jsx)("div",{dangerouslySetInnerHTML:s(e)})};return Object(o.jsxs)("div",{className:"displayScreen",children:[Object(o.jsx)("h1",{children:r(a)}),Object(o.jsx)("div",{className:"content",children:r(i)})]})}),x=(n(16),function(e){var t=e.savedNotes,n=t.map((function(e){return JSON.parse(e)}));return Object(o.jsx)("ul",{children:function(e){return e.map((function(e){return Object(o.jsxs)("li",{children:[Object(o.jsx)("h3",{children:e.title}),Object(o.jsx)("p",{children:e.text})]},e.id)}))}(n)})}),b=(n(17),function(){var e=s.a.useState(""),t=Object(a.a)(e,2),n=t[0],i=t[1],r=s.a.useState(""),l=Object(a.a)(r,2),u=l[0],d=l[1],b=s.a.useState([]),O=Object(a.a)(b,2),v=O[0],p=O[1];return Object(o.jsxs)("div",{className:"page",children:[Object(o.jsx)("div",{className:"menu",children:Object(o.jsx)(x,{savedNotes:v})}),Object(o.jsxs)("div",{className:"entries",children:[Object(o.jsx)("div",{className:"display",children:Object(o.jsx)(h,{title:u,text:n})}),Object(o.jsx)("div",{className:"input",children:Object(o.jsx)(j,{onChangeTitle:function(e){d(e.target.value)},onChangeText:function(e){i(e.target.value)},handleSave:function(){var e=v.length,t=JSON.stringify({id:e,title:u,text:n});localStorage.setItem("note",t),p((function(e){return[].concat(Object(c.a)(e),[t])}))}})})]})]})});l.a.render(Object(o.jsx)(b,{}),document.getElementById("root"))}],[[18,1,2]]]);
//# sourceMappingURL=main.fc82f253.chunk.js.map