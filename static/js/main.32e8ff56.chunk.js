(this["webpackJsonpasistencia-poo"]=this["webpackJsonpasistencia-poo"]||[]).push([[0],{175:function(a,t,e){},176:function(a,t,e){"use strict";e.r(t);var n=e(0),c=e(56),r=e.n(c),s=e(33),i=e.n(s),o=e(57),l=e(61),u=e(58),f=e(1),d=function(){for(var a=Object(n.useState)({labelsGrafica:[],dataGrafica:[]}),t=Object(l.a)(a,2),e=t[0],c=t[1],r=[],s=0;s<e.dataGrafica.length;s++){var d=void 0;e.dataGrafica[s]>=0&&e.dataGrafica[s]<=70?d="green":e.dataGrafica[s]<=90?d="yellow":(d="red",e.dataGrafica[s]=100),r[s]=d}var p={labels:e.labelsGrafica,datasets:[{label:"Porcentaje de Faltas",data:e.dataGrafica,backgroundColor:r,borderColor:"#6610f2",borderWidth:1}]},b=function(){var a=Object(o.a)(i.a.mark((function a(){var t,e,n;return i.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return"https://us-central1-softwell-vm.cloudfunctions.net/api/tec/asistenciaspoo",a.next=3,fetch("https://us-central1-softwell-vm.cloudfunctions.net/api/tec/asistenciaspoo");case 3:return t=a.sent,a.next=6,t.json();case 6:e=a.sent,n=e.data,c({labelsGrafica:n.map((function(a){return a.noControl})),dataGrafica:n.map((function(a){return a.porcentajeFaltas}))});case 9:case"end":return a.stop()}}),a)})));return function(){return a.apply(this,arguments)}}();return Object(n.useEffect)((function(){b()}),[]),Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)("div",{className:"header",children:Object(f.jsx)("h1",{className:"title",children:"Asistencias POO"})}),Object(f.jsx)(u.a,{data:p,options:{scales:{yAxes:[{ticks:{beginAtZero:!0}}]}}})]})},p=function(){return Object(f.jsx)(d,{})};e(175);r.a.render(Object(f.jsx)(p,{}),document.getElementById("root"))}},[[176,1,2]]]);
//# sourceMappingURL=main.32e8ff56.chunk.js.map