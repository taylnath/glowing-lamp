(this["webpackJsonpreact-test"]=this["webpackJsonpreact-test"]||[]).push([[0],{13:function(t,e,n){},15:function(t,e,n){"use strict";n.r(e);var o=n(1),c=n.n(o),r=n(7),l=n.n(r),a=(n(13),n(6)),i=n(8),s=n(2),u=n(0);var d=function(t){var e=t.side,n="background-color ".concat(String(t.transitionTime),"s ease-in-out");return Object(u.jsx)("div",{style:{backgroundColor:t.backgroundColor,width:"".concat(e-22,"px"),height:"".concat(e-22,"px"),textAlign:"center",border:"2px solid black",position:"absolute",left:"".concat(t.xPos,"px"),top:"".concat(t.yPos,"px"),padding:"10px",transition:n},onClick:t.changeColor,children:t.text})};function b(t,e){return(t%e+e)%e}var g=function(){for(var t=["red","orange","yellow","green","blue","indigo","violet"],e=Object(o.useState)(1),n=Object(s.a)(e,2),c=n[0],r=n[1],l=Object(o.useState)(!1),g=Object(s.a)(l,2),h=g[0],f=g[1],j=Object(o.useState)(""),x=Object(s.a)(j,2),k=x[0],v=x[1],O=Object(o.useState)(!1),p=Object(s.a)(O,2),y=p[0],C=p[1],S={},I=[],m=[],M=0;M<5;M++)for(var P=0;P<5;P++)S[String(M)+String(P)]={backgroundColor:"",clicked:!1,count:c,colorIndex:-1,index:-1},I.push([M,P]),m.push(String(M)+String(P));var w=Object(o.useState)(S),F=Object(s.a)(w,2),T=F[0],A=F[1],B=function(e){return function(){var n=Object(i.a)({},T);T[e].clicked||(n[e].count=c,n[e].clicked=!0,r(c+1)),m.forEach((function(e){if(n[e].clicked){var o=b(n[e].colorIndex+n[e].count,t.length);o===n[e].colorIndex&&(o=b(o+1,t.length));var c=t[o];n[e].backgroundColor=c,n[e].colorIndex=o}})),A(n)}},E=function(){C(!1),clearInterval(k);var t=setInterval((function(){console.log("bleah");var t=Object(a.a)(Array(m.length).keys()).filter((function(t){return!T[m[t]].clicked})),e=Math.max(0,Math.floor(Math.random()*(t.length-1))),n=m[t[e]]||m[0];try{B(n)()}catch(o){console.log("bad index?"),console.log(e)}}),1e3);f(!0),v(t)},J=I.map((function(t){var e=Object(s.a)(t,2),n=e[0],o=e[1],c=String(n)+String(o);return Object(u.jsx)(d,{backgroundColor:T[c].backgroundColor,xPos:60*n,yPos:60*o,side:60,changeColor:B(c),transitionTime:y?.1:.5,text:""},c)})),L="calc(50% - 180px)";return console.log(typeof T),console.log(L),Object(u.jsxs)("div",{children:[Object(u.jsx)("div",{style:{position:"absolute",top:L,left:L,backgroundColor:"red"},children:J}),Object(u.jsxs)("div",{style:{margin:"100px"},children:[Object(u.jsx)("button",{onClick:h?function(){clearInterval(k),f(!1),v("")}:E,style:{float:"right",clear:"left"},children:h?"stop clicking":"auto clicking"}),Object(u.jsx)("button",{onClick:y?E:function(){C(!0),clearInterval(k);var t=setInterval((function(){console.log("bleah");var t=Object(a.a)(Array(m.length).keys()).filter((function(t){return!T[m[t]].clicked})),e=Math.max(0,Math.floor(Math.random()*(t.length-1))),n=m[t[e]]||m[0];try{B(n)()}catch(o){console.log("bad index?"),console.log(e)}}),100);f(!0),v(t)},style:{float:"right",clear:"both"},children:y?"click slower":"click faster"}),Object(u.jsx)("button",{onClick:function(){f(!1),r(1),clearInterval(k),v(""),C(!1),A(S)},style:{float:"right",clear:"both"},children:"reset"})]})]})},h=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,16)).then((function(e){var n=e.getCLS,o=e.getFID,c=e.getFCP,r=e.getLCP,l=e.getTTFB;n(t),o(t),c(t),r(t),l(t)}))};l.a.render(Object(u.jsx)(c.a.StrictMode,{children:Object(u.jsx)(g,{})}),document.getElementById("root")),h()}},[[15,1,2]]]);
//# sourceMappingURL=main.22e1bff7.chunk.js.map