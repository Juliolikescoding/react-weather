(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,function(e,n,t){e.exports=t(17)},,,,,,function(e,n,t){},function(e,n,t){},function(e,n,t){},function(e,n,t){"use strict";t.r(n);var o=t(0),i=t.n(o),r=t(7),a=t.n(r),c=(t(14),t(1)),s=t(2),l=t(4),u=t(3),d=t(5),f=(t(15),t(16),function(e){function n(){return Object(c.a)(this,n),Object(l.a)(this,Object(u.a)(n).apply(this,arguments))}return Object(d.a)(n,e),Object(s.a)(n,[{key:"render",value:function(){var e="img/"+this.props.condition+".png";return i.a.createElement("div",{className:"main"},i.a.createElement("button",{className:"arr arrLeft"},"\u2989"),i.a.createElement("button",{className:"arr arrRight"},"\u298a"),i.a.createElement("h4",null,this.props.condition),i.a.createElement("img",{src:e,alt:"weather img"}),i.a.createElement("h3",null,this.props.temp,"\xb0 F"))}}]),n}(o.Component)),h=function(e){function n(){return Object(c.a)(this,n),Object(l.a)(this,Object(u.a)(n).apply(this,arguments))}return Object(d.a)(n,e),Object(s.a)(n,[{key:"render",value:function(){return i.a.createElement("div",{className:"App"},i.a.createElement("p",null,"Julio"),i.a.createElement(f,{condition:"rain",temp:"30"}))}}]),n}(o.Component),p=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function m(e,n){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var t=e.installing;null!=t&&(t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),n&&n.onUpdate&&n.onUpdate(e)):(console.log("Content is cached for offline use."),n&&n.onSuccess&&n.onSuccess(e)))})}}).catch(function(e){console.error("Error during service worker registration:",e)})}a.a.render(i.a.createElement(h,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",function(){var n="".concat("","/service-worker.js");p?(function(e,n){fetch(e).then(function(t){var o=t.headers.get("content-type");404===t.status||null!=o&&-1===o.indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):m(e,n)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(n,e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")})):m(n,e)})}}()}],[[8,1,2]]]);
//# sourceMappingURL=main.6ff9e00d.chunk.js.map