(this["webpackJsonpreact-practice"]=this["webpackJsonpreact-practice"]||[]).push([[0],{16:function(e,t,n){},23:function(e,t,n){e.exports=n(36)},28:function(e,t,n){},34:function(e,t,n){},35:function(e,t,n){},36:function(e,t,n){"use strict";n.r(t);var a=n(0),l=n.n(a),c=n(20),r=n.n(c),o=n(9),i=n(4),u=n(5),s=n(7),m=n(6),h=n(8),p=n(3),d=n(12),E=(n(28),function(){var e=Object(a.useState)({x:0,y:100}),t=Object(d.a)(e,2),n=t[0],l=t[1],c=function(){l({y:window.scrollY})};return Object(a.useEffect)((function(){return window.addEventListener("scroll",c),function(){return window.removeEventListener("scroll",c)}}),[]),n}),f={width:"100%",flexDirection:"row",textAlign:"center",padding:"0.3rem 5rem"},v={fontFamily:"nanumsquare",fontSize:"2.0rem",fontWeight:"700",color:"palevioletred"},g={marginTop:"1.0rem",fontSize:"1.3rem",fontWeight:"400"},b=function(){return E(),l.a.createElement("div",{style:{position:"fixed",top:"0px",opacity:(200-window.scrollY)/2+"%",width:"100%"}},l.a.createElement("div",{className:"header"},l.a.createElement("span",{style:f},l.a.createElement("div",{style:v},"SamplePage"),l.a.createElement("div",{style:g},l.a.createElement(o.b,{to:"Home",className:"aLink",activeClassName:"activeLink"},"HOME"),l.a.createElement(o.b,{to:"Page1",className:"aLink",activeClassName:"activeLink"},"PAGE1"),l.a.createElement(o.b,{to:"Page2",className:"aLink",activeClassName:"activeLink"},"PAGE2"))),l.a.createElement("div",{style:{height:"2px",background:"linear-gradient(to right, palevioletred, mediumpurple)"}})))},w={position:"fixed",bottom:"0px",left:"0px",width:"100%",backgroundColor:"white",color:"black",textAlign:"center",fontSize:"0.8rem",padding:"0.2rem",boxShadow:"0 -5px 5px rgba(0,0,0,0.12), 0 -1px 2px rgba(0,0,0,0.24)"},k=function(){return l.a.createElement("div",{className:"footer",style:w},l.a.createElement("span",{style:{}}," Copyirght \xa9d4n3tt all rights reserved. "))},y=n(13),x={position:"fixed",top:"20%",left:"10%",width:"250px",height:"400px",background:"gainsboro",fontFamily:"nanumsquare",boxShadow:"0 5px 5px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)",textAlign:"center"},O={position:"absolute",bottom:"0px",width:"100%",textAlign:"center",background:"white",padding:"3% 0%"},j={padding:"0% 5%",textDecoration:"none",background:"white",border:"0",color:"Palevioletred"},P=function(e){var t=new y.a,n=Object(a.useState)({isOpened:t.get("checkPopup"),isChecked:!1}),c=Object(d.a)(n,2),r=c[0],o=c[1];return console.log("cookie "+t.get("checkPopup")),console.log("state "+r.isOpened),r.isOpened?l.a.createElement("div",{style:x},l.a.createElement("h1",null,"\uacf5\uc9c0\uc0ac\ud56d"),l.a.createElement("p",null,"\uc9d1\uc5d0 \uac00\uae30 \uc2eb\ub2e4!"),l.a.createElement("p",null,"\uc9d1\uc5d0 \uac00\uae30 \uc2eb\ub2e4!"),l.a.createElement("p",null,"\uc9d1\uc5d0 \uac00\uae30 \uc2eb\ub2e4!"),l.a.createElement("p",null,"\uc9d1\uc5d0 \uac00\uae30 \uc2eb\ub2e4!"),l.a.createElement("p",null,"\uc9d1\uc5d0 \uac00\uae30 \uc2eb\ub2e4!"),l.a.createElement("p",null,"\uc9d1\uc5d0 \uac00\uae30 \uc2eb\ub2e4!"),l.a.createElement("p",null,"\uc9d1\uc5d0 \uac00\uae30 \uc2eb\ub2e4!"),l.a.createElement("div",{style:{position:"absolute",bottom:"10%",textAlign:"center",width:"100%"}},l.a.createElement("input",{type:"checkbox",checked:r.isChecked,onChange:function(){o({isOpened:!0,isChecked:!r.isChecked})}}),l.a.createElement("span",{style:{fontSize:"0.5rem"}},"\ub2e4\uc2dc \ubcf4\uc9c0 \uc54a\uae30")),l.a.createElement("div",{style:O},l.a.createElement("button",{style:j,onClick:function(){o({isOpened:!1}),t.set("checkPopup",!r.isChecked,{path:"/"})}},"\ub2eb\uae30"))):l.a.createElement("div",null)},C=(n(16),function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(e){window.scrollTo({top:0,behavior:"smooth"})}},{key:"render",value:function(){return l.a.createElement("div",{className:"Page Home"},l.a.createElement("div",null,l.a.createElement("h1",null,"\uc774"),l.a.createElement("h1",null,"\uc81c"),l.a.createElement("h1",null,"\uc5ec"),l.a.createElement("h1",null,"\uae30"),l.a.createElement("h1",null,"\ub2e4"),l.a.createElement("h1",null,"\uac00"),l.a.createElement("h1",null,"\ubb58"),l.a.createElement("h1",null,"\ud574"),l.a.createElement("h1",null,"\uc57c"),l.a.createElement("h1",null,"\uc88b"),l.a.createElement("h1",null,"\uc744"),l.a.createElement("h1",null,"\uae4c"),l.a.createElement("h1",null,"\uc694")))}}]),t}(a.Component)),N=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(e){window.scrollTo({top:0,behavior:"smooth"})}},{key:"render",value:function(){return l.a.createElement("div",{className:"Page Page1"},l.a.createElement("div",null,l.a.createElement("h1",null,"\uc0d8\ud50c"),l.a.createElement("h1",null,"\uc0d8\ud50c"),l.a.createElement("h1",null,"\uc0d8\ud50c"),l.a.createElement("h1",null,"\uc0d8\ud50c"),l.a.createElement("h1",null,"\uc0d8\ud50c"),l.a.createElement("h1",null,"\uc0d8\ud50c"),l.a.createElement("h1",null,"\uc0d8\ud50c"),l.a.createElement("h1",null,"\uc0d8\ud50c"),l.a.createElement("h1",null,"\uc0d8\ud50c"),l.a.createElement("h1",null,"\uc0d8\ud50c"),l.a.createElement("h1",null,"\uc0d8\ud50c"),l.a.createElement("h1",null,"\uc0d8\ud50c"),l.a.createElement("h1",null,"\uc0d8\ud50c"),l.a.createElement("h1",null,"\uc0d8\ud50c")))}}]),t}(a.Component),A=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(e){window.scrollTo({top:0,behavior:"smooth"})}},{key:"render",value:function(){return l.a.createElement("div",{className:"Page Page2"},l.a.createElement("div",null,l.a.createElement("h1",null,"\uc0d8\ud50c2"),l.a.createElement("h1",null,"\uc0d8\ud50c2"),l.a.createElement("h1",null,"\uc0d8\ud50c2"),l.a.createElement("h1",null,"\uc0d8\ud50c2"),l.a.createElement("h1",null,"\uc0d8\ud50c2"),l.a.createElement("h1",null,"\uc0d8\ud50c2"),l.a.createElement("h1",null,"\uc0d8\ud50c2"),l.a.createElement("h1",null,"\uc0d8\ud50c2"),l.a.createElement("h1",null,"\uc0d8\ud50c2"),l.a.createElement("h1",null,"\uc0d8\ud50c2"),l.a.createElement("h1",null,"\uc0d8\ud50c2"),l.a.createElement("h1",null,"\uc0d8\ud50c2"),l.a.createElement("h1",null,"\uc0d8\ud50c2"),l.a.createElement("h1",null,"\uc0d8\ud50c2")))}}]),t}(a.Component),S=(n(34),function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=new y.a;return null==e.get("checkPopup")&&e.set("checkPopup",!0,{path:"/"}),l.a.createElement("div",{className:"App"},l.a.createElement(b,null),l.a.createElement(P,null),l.a.createElement("div",null,l.a.createElement(p.a,{exact:!0,path:"/",component:C}),l.a.createElement(p.a,{exact:!0,path:"/Home",component:C}),l.a.createElement(p.a,{exact:!0,path:"/Page1",component:N}),l.a.createElement(p.a,{exact:!0,path:"/Page2",component:A})),l.a.createElement(k,null))}}]),t}(a.Component)),L=function(){return l.a.createElement(o.a,{basename:"/react-practice"},l.a.createElement(S,null))},W=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function T(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}n(35);r.a.render(l.a.createElement(L,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/react-practice",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/react-practice","/service-worker.js");W?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var a=n.headers.get("content-type");404===n.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):T(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):T(t,e)}))}}()}},[[23,1,2]]]);
//# sourceMappingURL=main.7b2a35ce.chunk.js.map