(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{5301:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return t(5075)}])},1641:function(e,n,t){"use strict";var s=t(5893),r=(t(7294),t(9008));n.Z=function(e){var n=e.children,t=e.title,a=void 0===t?"This is the default title":t;return(0,s.jsxs)("div",{children:[(0,s.jsxs)(r.default,{children:[(0,s.jsx)("title",{children:a}),(0,s.jsx)("meta",{charSet:"utf-8"}),(0,s.jsx)("meta",{name:"viewport",content:"initial-scale=1.0, width=device-width"})]}),(0,s.jsx)("header",{}),(0,s.jsx)("div",{className:"text-center",children:n}),(0,s.jsxs)("footer",{className:"text-center mt-5",children:[(0,s.jsx)("hr",{}),(0,s.jsx)("span",{children:"\u0645\u0631\u062d\u0628\u0627 \ud83d\udc4b"})]})]})}},5075:function(e,n,t){"use strict";t.r(n);var s=t(5666),r=t.n(s),a=t(5893),i=t(7294),c=t(1641);function d(e,n,t,s,r,a,i){try{var c=e[a](i),d=c.value}catch(l){return void t(l)}c.done?n(d):Promise.resolve(d).then(s,r)}function l(e){return function(){var n=this,t=arguments;return new Promise((function(s,r){var a=e.apply(n,t);function i(e){d(a,s,r,i,c,"next",e)}function c(e){d(a,s,r,i,c,"throw",e)}i(void 0)}))}}n.default=function(){var e=(0,i.useState)(""),n=e[0],t=e[1],s=(0,i.useState)([]),d=s[0],h=s[1],u=l(r().mark((function e(n,t){var s;return r().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s=void 0===t?"":t,e.next=3,fetch("http://localhost:3001/?q=".concat(n,"&dbs=").concat(s));case 3:return e.next=5,e.sent.json();case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}}),e)}))),o=l(r().mark((function e(){var n,s,a;return r().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=document.getElementById("q").value,s=document.querySelector('input[name="db"]:checked').value,!(n.length>2)){e.next=11;break}return e.next=5,u(n,s);case 5:a=e.sent,t("\u062c\u0627\u0631 \u0627\u0644\u0628\u062d\u062b .."),a.length<1?t("\u0644\u0627 \u062a\u0648\u062c\u062f \u0646\u062a\u0627\u0626\u062c \u0628\u062d\u062b \u0645\u0637\u0627\u0628\u0642\u0629"):t("\u062a\u0648\u062c\u062f ".concat(a.length," \u0646\u062a\u064a\u062c\u0629 \u0628\u062d\u062b \u0645\u062a\u0637\u0627\u0628\u0642\u0629")),h(a),e.next=12;break;case 11:t("");case 12:case"end":return e.stop()}}),e)})));return(0,a.jsxs)(c.Z,{title:"\u0627\u0644\u0641\u0647\u0631\u0633 \u0627\u0644\u0645\u062a\u0627\u062d \u0639\u0644\u0649 \u0627\u0644\u062e\u0637 - \u0639\u0644\u0648\u0645 \u0627\u0646\u0633\u0627\u0646\u064a\u0629 \u0648\u0627\u062c\u062a\u0645\u0627\u0639\u064a\u0629 - \u0634\u062a\u0645\u0629 \u0628\u0633\u0643\u0631\u0629",children:[(0,a.jsx)("br",{}),(0,a.jsx)("br",{}),(0,a.jsx)("strong",{className:"xs:text-sm mx-3 bg-green-100 py-5 px-7 rounded-md text-md",children:"\u064a\u062c\u0628 \u0627\u0646 \u062a\u0643\u0648\u0646 \u0639\u0628\u0627\u0631\u0629 \u0627\u0644\u0628\u062d\u062b \u0627\u0643\u062b\u0631 \u0645\u0646 \u062d\u0631\u0641\u064a\u0646 \u0644\u064a\u0628\u062f\u0626 \u0627\u0644\u0628\u062d\u062b"}),(0,a.jsx)("br",{}),(0,a.jsx)("br",{}),(0,a.jsx)("input",{type:"text",id:"q",placeholder:"\u0627\u062f\u062e\u0644 \u0639\u0628\u0627\u0631\u0629 \u0627\u0644\u0628\u062d\u062b \u062b\u0645 \u0627\u0636\u063a\u0637 Enter",className:"px-4 py-3 text-right w-3/6 xs:w-full",onChange:o}),(0,a.jsx)("p",{className:"pt-3 pb-5",children:n}),(0,a.jsxs)("div",{className:"grid grid-cols-3 xs:grid-cols-2 gap-6 w-3/6 m-auto ",children:[(0,a.jsxs)("span",{children:["\u0639\u0644\u0645 \u0645\u0643\u062a\u0628\u0627\u062a",(0,a.jsx)("input",{type:"radio",name:"db",value:"li",onChange:o})]}),(0,a.jsxs)("span",{children:["\u062a\u0627\u0631\u064a\u062e",(0,a.jsx)("input",{type:"radio",name:"db",value:"hs",onChange:o})]}),(0,a.jsxs)("span",{children:["\u0627\u062a\u0635\u0627\u0644",(0,a.jsx)("input",{type:"radio",name:"db",value:"co",onChange:o})]}),(0,a.jsxs)("span",{children:["\u062b\u0642\u0627\u0641\u0629 \u0639\u0627\u0645\u0629",(0,a.jsx)("input",{type:"radio",name:"db",value:"th",onChange:o})]}),(0,a.jsxs)("span",{children:["\u0639\u0644\u0645 \u0627\u0644\u0627\u062c\u062a\u0645\u0627\u0639",(0,a.jsx)("input",{type:"radio",name:"db",value:"so",onChange:o})]}),(0,a.jsxs)("span",{children:["\u0639\u0644\u0645 \u0627\u0644\u0646\u0641\u0633",(0,a.jsx)("input",{type:"radio",name:"db",value:"pc",onChange:o})]}),(0,a.jsxs)("span",{children:["\u0644\u063a\u0627\u062a \u0627\u062c\u0646\u0628\u064a\u0629 (\u0641\u0631\u0646\u0633\u064a\u0629 \u0641\u0642\u0637)",(0,a.jsx)("input",{type:"radio",name:"db",value:"fl",onChange:o})]})]}),d.length>0?(0,a.jsx)("div",{className:"text-right",children:(0,a.jsxs)("table",{dir:"rtl",className:"m-auto",children:[(0,a.jsx)("thead",{children:(0,a.jsxs)("tr",{className:"font-mono",children:[(0,a.jsx)("th",{children:"\u0627\u0644\u0645\u0639\u0631\u0641"}),(0,a.jsx)("th",{children:"\u0627\u0644\u0639\u0646\u0648\u0627\u0646"}),(0,a.jsx)("th",{children:"\u0627\u0644\u0643\u0627\u062a\u0628"}),(0,a.jsx)("th",{className:"xs:hidden",children:"\u062f\u0627\u0631 \u0627\u0644\u0646\u0634\u0631"}),(0,a.jsx)("th",{className:"xs:hidden",children:"\u0633\u0646\u0629 \u0627\u0644\u0646\u0634\u0631"}),(0,a.jsx)("th",{className:"xs:hidden",children:"\u0627\u0644\u062f\u0648\u0644\u0629"})]})}),(0,a.jsx)("tbody",{children:d.map((function(e,n){return(0,a.jsxs)("tr",{className:n%2==0?"bg-gray-200":"",children:[(0,a.jsx)("td",{children:e.ID}),(0,a.jsx)("td",{children:e.title}),(0,a.jsx)("td",{children:e.author}),(0,a.jsx)("td",{className:"xs:hidden",children:e.publisher}),(0,a.jsx)("td",{className:"xs:hidden",children:e.publishYear}),(0,a.jsx)("td",{className:"xs:hidden",children:e.country})]})}))})]})}):""]})}},9008:function(e,n,t){e.exports=t(5443)}},function(e){e.O(0,[774,888,179],(function(){return n=5301,e(e.s=n);var n}));var n=e.O();_N_E=n}]);