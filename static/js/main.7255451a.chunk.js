(this.webpackJsonpyalantis=this.webpackJsonpyalantis||[]).push([[0],{12:function(n,t,e){n.exports=e(19)},19:function(n,t,e){"use strict";e.r(t);var r=e(1),o=e(0),a=e.n(o),i=e(7),c=e.n(i),u=e(11),l=e(2),s=function(n){return new Date(n).getMonth()+1},d=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,e=0;return n.map((function(n){return t===s(n.dob)?e++:e})),e};function f(){var n=Object(r.a)(["\n  margin: 3px auto;\n"]);return f=function(){return n},n}function p(){var n=Object(r.a)(["\n  width: 100px;\n  margin: 10px;\n  text-align: center;\n  border-radius: 10px;\n  border: 2px solid black;\n  position: relative;\n  background-color: ",";\n  outline: none;\n  &:hover {\n    border: 2px solid yellow;\n    "," {\n      display: flex;\n    }\n  }\n  :last-child {\n    @media (min-width: 1366px) {\n      ol {\n        top: 30px;\n        left: -60px;\n      }\n    }\n  }\n"]);return p=function(){return n},n}function m(){var n=Object(r.a)(["\n  position: absolute;\n  top: 0px;\n  left: 100px;\n  flex-wrap: wrap;\n  margin: 0;\n  display: none;\n  padding: 0;\n  @media (min-width: 1366px) {\n    top: 30px;\n    left: 0px;\n  }\n"]);return m=function(){return n},n}function b(){var n=Object(r.a)(["\n  display: flex;\n  width: 150px;\n  border: 1px solid black;\n  padding: 1px;\n  margin: 3px;\n  border-radius: 5px;\n  text-align: center;\n"]);return b=function(){return n},n}var h=l.b.li(b()),x=l.b.ol(m()),v=l.b.div(p(),(function(n){return n.count>0&&2>=n.count?"gray":n.count>2&&6>=n.count?"blue":n.count>7&&10>=n.count?"green":"red"}),x),g=l.b.p(f()),y=["January","February","March","April","May","June","July","August","September","October","November","December"],w=function(n){var t=n.users,e=n.month;return a.a.createElement(v,{count:d(t,e)},a.a.createElement(g,null,y[e-1]),a.a.createElement(x,null,t.map((function(n,t){return e===s(n.dob)?a.a.createElement(h,{key:t},n.firstName," ",n.lastName):null}))))};function j(){var n=Object(r.a)(["\n  display: flex;\n  flex-direction: column;\n  @media (min-width: 1366px) {\n    flex-direction: row;\n    justify-content: space-between;\n  }\n"]);return j=function(){return n},n}var E=l.b.div(j()),O=function(){var n=Object(o.useState)([]),t=Object(u.a)(n,2),e=t[0],r=t[1],i=function(){return fetch("https://yalantis-react-school-api.yalantis.com/api/task0/users").then((function(n){return n.json()})).then((function(n){r(n)}))};Object(o.useEffect)((function(){i()}),[]);return a.a.createElement(E,null,function(){var n=[];return e.forEach((function(t){n=n.concat(s(t.dob))})),n.filter((function(n,t,e){return e.indexOf(n)===t})).sort((function(n,t){return n-t}))}().map((function(n,t){return a.a.createElement(w,{key:t,users:e,month:n})})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function k(){var n=Object(r.a)(["\n  body {\n    margin: 0;\n    background-color: lightgray;\n  }\n"]);return k=function(){return n},n}var J=Object(l.a)(k());c.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(O,null),a.a.createElement(J,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(n){n.unregister()})).catch((function(n){console.error(n.message)}))}},[[12,1,2]]]);
//# sourceMappingURL=main.7255451a.chunk.js.map