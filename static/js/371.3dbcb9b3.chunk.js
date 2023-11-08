"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[371],{121:function(t,e,r){r(791);var n=r(184);e.Z=function(t){var e=t.message;return(0,n.jsx)("p",{className:"error",children:e})}},154:function(t,e,r){r.d(e,{U:function(){return c}});var n,a=r(168),c=r(444).ZP.div(n||(n=(0,a.Z)(["\n  max-width: 1200px;\n  width: 100%;\n  margin: 40px auto;\n  padding: 0px 15px;\n  display: flex;\n  gap: 40px;\n"])))},371:function(t,e,r){r.r(e),r.d(e,{default:function(){return w}});var n,a=r(861),c=r(439),u=r(757),i=r.n(u),s=r(791),o=["title","titleId"];function p(){return p=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t},p.apply(this,arguments)}function l(t,e){if(null==t)return{};var r,n,a=function(t,e){if(null==t)return{};var r,n,a={},c=Object.keys(t);for(n=0;n<c.length;n++)r=c[n],e.indexOf(r)>=0||(a[r]=t[r]);return a}(t,e);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(t);for(n=0;n<c.length;n++)r=c[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(a[r]=t[r])}return a}function f(t,e){var r=t.title,a=t.titleId,c=l(t,o);return s.createElement("svg",p({xmlns:"http://www.w3.org/2000/svg",width:14,height:14,viewBox:"0 0 1024 1024",ref:e,"aria-labelledby":a},c),r?s.createElement("title",{id:a},r):null,n||(n=s.createElement("path",{fill:"currentColor",d:"M1014.64 969.04L703.71 656.207c57.952-69.408 92.88-158.704 92.88-256.208c0-220.912-179.088-400-400-400s-400 179.088-400 400s179.088 400 400 400c100.368 0 192.048-37.056 262.288-98.144l310.496 312.448c12.496 12.497 32.769 12.497 45.265 0c12.48-12.496 12.48-32.752 0-45.263zM396.59 736.527c-185.856 0-336.528-150.672-336.528-336.528S210.734 63.471 396.59 63.471c185.856 0 336.528 150.672 336.528 336.528S582.446 736.527 396.59 736.527z"})))}var d=s.forwardRef(f),h=(r.p,r(121)),v=r(937),m=r(87),x=r(689),g=r(390),b=r(154),y=r(184),w=function(){var t=(0,m.lr)(),e=(0,c.Z)(t,2),r=e[0],n=e[1],u=(0,x.TH)(),o=(0,s.useState)([]),p=(0,c.Z)(o,2),l=p[0],f=p[1],w=(0,s.useState)(!1),j=(0,c.Z)(w,2),k=j[0],Z=j[1],O=(0,s.useState)(null),_=(0,c.Z)(O,2),S=_[0],P=_[1],q=r.get("query");(0,s.useEffect)((function(){if(q){var t=function(){var t=(0,a.Z)(i().mark((function t(){var e;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,Z(!0),t.next=4,(0,g.cK)(q);case 4:e=t.sent,console.log("search query",e),f(e.results),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(0),P(t.t0.message);case 12:return t.prev=12,Z(!1),t.finish(12);case 15:case"end":return t.stop()}}),t,null,[[0,9,12,15]])})));return function(){return t.apply(this,arguments)}}();t()}}),[q]);return(0,y.jsxs)("div",{children:[(0,y.jsx)(b.U,{children:(0,y.jsxs)("form",{onSubmit:function(t){t.preventDefault();var e=t.currentTarget.elements.searchPostId.value;n({query:e})},children:[(0,y.jsx)("label",{children:(0,y.jsx)("input",{type:"text",name:"searchPostId",required:!0})}),(0,y.jsxs)("button",{type:"submit",children:[(0,y.jsx)(d,{})," Search"]})]})}),(0,y.jsxs)("section",{children:[k&&(0,y.jsx)(v.Z,{}),S&&(0,y.jsx)(h.Z,{message:S}),0!==l.length&&(0,y.jsx)("ul",{children:l.map((function(t){return(0,y.jsx)(m.rU,{state:{from:u},to:"/movies/".concat(t.id),children:(0,y.jsx)("li",{children:t.title})},t.id)}))})]})]})}},390:function(t,e,r){r.d(e,{Rg:function(){return o},_k:function(){return s},cK:function(){return f},o8:function(){return p},rG:function(){return l}});var n=r(861),a=r(757),c=r.n(a),u=r(243),i="c733d5722025e30bc2b3b5d79114d6a2",s=function(){var t=(0,n.Z)(c().mark((function t(){var e,r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("https://api.themoviedb.org/3/trending/all/day?api_key=".concat(i));case 2:return e=t.sent,r=e.data,t.abrupt("return",r);case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),o=function(){var t=(0,n.Z)(c().mark((function t(e){var r,n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("https://api.themoviedb.org/3/movie/".concat(e,"?api_key=").concat(i));case 2:return r=t.sent,n=r.data,t.abrupt("return",n);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),p=function(){var t=(0,n.Z)(c().mark((function t(e){var r,n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("https://api.themoviedb.org/3/movie/".concat(e,"/credits?api_key=").concat(i));case 2:return r=t.sent,n=r.data,t.abrupt("return",n);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),l=function(){var t=(0,n.Z)(c().mark((function t(e){var r,n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("https://api.themoviedb.org/3/movie/".concat(e,"/reviews?api_key=").concat(i));case 2:return r=t.sent,n=r.data,t.abrupt("return",n);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),f=function(){var t=(0,n.Z)(c().mark((function t(e){var r,n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("https://api.themoviedb.org/3/search/movie?query=".concat(e,"&api_key=").concat(i));case 2:return r=t.sent,n=r.data,t.abrupt("return",n);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}}]);
//# sourceMappingURL=371.3dbcb9b3.chunk.js.map