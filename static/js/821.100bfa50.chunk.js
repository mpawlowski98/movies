"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[821],{821:function(e,r,t){t.r(r),t.d(r,{default:function(){return v}});var n=t(791),a=t(689),c=t(861),s=t(439),i=t(757),o=t.n(i),u=t(243),d=t(830),h=d[0].q1,l=d[0].FH;var f="Cast_header__a+MSu",p=t(184),v=function(){var e=function(e){var r=(0,n.useState)([]),t=(0,s.Z)(r,2),a=t[0],i=t[1],d=(0,n.useState)(!1),f=(0,s.Z)(d,2),p=f[0],v=f[1],m=(0,n.useState)(null),x=(0,s.Z)(m,2),g=x[0],k=x[1];return(0,n.useEffect)((function(){var r=function(){var r=(0,c.Z)(o().mark((function r(){var t;return o().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(e){r.next=3;break}return i([]),r.abrupt("return");case 3:return v(!0),r.prev=4,r.next=7,u.Z.get("".concat(l,"movie/").concat(e,"/credits?api_key=").concat(h,"&language=en-US"));case 7:200===(t=r.sent).status?i(t.data.cast):k("Error fetching movie actors."),r.next=14;break;case 11:r.prev=11,r.t0=r.catch(4),k(r.t0.message);case 14:v(!1);case 15:case"end":return r.stop()}}),r,null,[[4,11]])})));return function(){return r.apply(this,arguments)}}();r()}),[e]),{actors:a,isLoading:p,error:g}}((0,a.UO)().movieId),r=e.actors,t=e.isLoading,i=e.error,d=new Set,v=r&&r.map((function(e){return d.has(e.id)&&(e.id=Math.floor(1e6*Math.random())),d.add(e.id),e}));return t?(0,p.jsx)("div",{children:"Loading..."}):i?(0,p.jsxs)("div",{children:["Error: ",i]}):v&&0!==v.length?(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)("h1",{className:f,children:"Actors"}),(0,p.jsx)("ul",{children:v.map((function(e){return(0,p.jsxs)("li",{children:[e.name," as ",e.character]},e.id)}))})]}):(0,p.jsx)("div",{children:"No actors found.."})}}}]);
//# sourceMappingURL=821.100bfa50.chunk.js.map