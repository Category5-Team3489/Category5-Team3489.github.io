(this["webpackJsonpcategory5-team3489.github.io"]=this["webpackJsonpcategory5-team3489.github.io"]||[]).push([[0],{25:function(t,e,c){},26:function(t,e,c){},46:function(t,e,c){},47:function(t,e,c){"use strict";c.r(e);var n=c(0),s=c.n(n),i=c(20),j=c.n(i),r=(c(25),c(6)),a=c(1),b=(c(26),c(5)),o=c(11),u=c.n(o),d=c(2);function O(){var t=Object(n.useState)(""),e=Object(b.a)(t,2),c=e[0],s=e[1];return Object(n.useEffect)((function(){u.a.get("https://api.coinbase.com/v2/prices/spot?currency=USD").then((function(t){s(t.data.data.amount)}))}),[]),Object(d.jsxs)("div",{children:["Current Bitcoin Price: $",c]})}function h(){var t=Object(n.useState)(""),e=Object(b.a)(t,2),c=e[0],s=e[1];return Object(n.useEffect)((function(){u.a.get("https://db.team3489.tk").then((function(t){s(t.data)}))}),[]),Object(d.jsxs)("div",{children:["Test 3498 DB: $",c]})}c(46);var l=function(){return Object(d.jsxs)("div",{className:"Navbar",children:[Object(d.jsx)("span",{children:Object(d.jsx)(r.b,{to:"/",children:"Home"})}),Object(d.jsx)("span",{children:Object(d.jsx)(r.b,{to:"/bitcoin",children:"Bitcoin"})}),Object(d.jsx)("span",{children:Object(d.jsx)(r.b,{to:"/testdb",children:"Test DB"})})]})};function x(){var t=Object(a.f)().search,e=s.a.useMemo((function(){return new URLSearchParams(t)}),[t]).get("redirect");return null==e?Object(d.jsx)("div",{}):Object(d.jsx)(a.a,{to:e})}var f=function(){return Object(d.jsx)("div",{className:"App",children:Object(d.jsxs)(r.a,{children:[Object(d.jsx)(l,{}),Object(d.jsxs)(a.d,{children:[Object(d.jsx)(a.b,{path:"/bitcoin",element:Object(d.jsx)(O,{})}),Object(d.jsx)(a.b,{path:"/testdb",element:Object(d.jsx)(h,{})}),Object(d.jsx)(a.b,{path:"/",element:Object(d.jsxs)("div",{children:[Object(d.jsx)(x,{}),"Hello, World! ",Object(d.jsx)("br",{}),"Hola! Testing 123"]})})]})]})})},p=function(t){t&&t instanceof Function&&c.e(3).then(c.bind(null,48)).then((function(e){var c=e.getCLS,n=e.getFID,s=e.getFCP,i=e.getLCP,j=e.getTTFB;c(t),n(t),s(t),i(t),j(t)}))};j.a.render(Object(d.jsx)(s.a.StrictMode,{children:Object(d.jsx)(f,{})}),document.getElementById("root")),p()}},[[47,1,2]]]);
//# sourceMappingURL=main.3708c71c.chunk.js.map