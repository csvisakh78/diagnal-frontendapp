(this["webpackJsonpfrontend-app"]=this["webpackJsonpfrontend-app"]||[]).push([[0],{29:function(e,t,a){e.exports=a(50)},34:function(e,t,a){},35:function(e,t,a){},36:function(e,t,a){},37:function(e,t,a){},38:function(e,t,a){},39:function(e,t,a){e.exports=a.p+"static/media/poster3.e242f037.jpg"},44:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAMxJREFUeNrsl9ENgzAMRGMm6AiM0JFgBCboKGaTsgFswAiwQWoQkfJRVQQhNQd3kpXf9+JEcZxjGOaUeO8fViUyfG81WT1R4UNwJL7A40j8gM9fYgd8vhIJ8CEjMnw+HSA84QlPeMJfEl5ieFveVilAjdXwd4GD8Fmk2NYXIvzagW33J9SvbIG687HAjCwQLvEys5eoHVhSIx8hJyIdskT8Elc+LUoJSlCCEpSgBCVOmIX2T38i7Z3GDkWWUOROKPJxUuQ7oY5hsPIRYABvzTavpLSmGQAAAABJRU5ErkJggg=="},45:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADYAAAA2CAYAAACMRWrdAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAkRJREFUeNrsmdFxwjAMhh0m8AjZoNmg2QBGSDdgg2YT6AShE4ROEJggbBA2cOU7p8dxiSxsyyE0utPlAbD5bOmPLCcigCmlJDyygY9OSZJcxQSWOIKk8NiAv4Pn4BL5ugY7gv+AHwD0Ip7NACgHr5Sf6d/nzwKUgtcqrFVm5yeDKsA7xWN63GIKqJ2KY7tXhGKBS8ag4EENkRP4t1G+e9MisR55FQzZHlTzg2unSmJulNTkN+JTEneu5JJzm9WuavaAuuahwdoYeUDI3za0rEcLEUJoFjF2azeB8rbcu9WaIpcDTFoWtPCdoGIPCbdFrXwH509ixzTgkvhtJLBtaOlfWaqCY6QKDpsncwUbFQYob05RTrv4PNI1DMYqgTrySSLo/1iJF7WXBrsGjW13k0gzyAnsHFKNPGxsvrMr2AV7x8XqfiEfX1zBMKldR9qtteWE7rxiHXJSlsy7JbH5fVXxgCQ0d1m1RYTjwNkS6Lgam6ZV0LG2CCznooYJrGGfEwbaxOz7Efoemxj12m2HSgYQC+s8sWO+bxXkHrncEnqWKUfcF8TGZk0NFxPm1NuaICE41uLWrbZP4hj9xd7ZVAnaU+Nvwn4xeG978K/+5Rz8RnSCS4lBZWQpEB4IS++blingMkLCu5oeNyMoMhucNC3pUDeb3X3LnCAuDVvdegPYeuxQOfQHiZf2DXdR3odoaVa6RUBq872MsGjNU8AxRcQCt8AtcAvcArfA/Xs4MTejwok5GgGuEHM1BG6+UAjcH9SvAAMAy5K2QTwDnF4AAAAASUVORK5CYII="},50:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(12),o=a.n(r),l=(a(34),a(35),a(36),a(4)),i=a(5),s=a(7),m=a(6),u=a(8),A=a(51),p=(a(37),a(38),function(e){function t(e){var a;return Object(l.a)(this,t),a=Object(s.a)(this,Object(m.a)(t).call(this,e)),console.log(a.props.data),a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"componentWillMount",value:function(){console.log("here in card page")}},{key:"render",value:function(){return n.createElement("div",{className:"ml-30 mb-90"},n.createElement("img",{className:"w-full",alt:"back",src:a(39)}),n.createElement("p",{className:"text-left font-light text-white tx-36"},"Sample name"))}}]),t}(n.Component));var h=a(14),d={searchDetailsActionFn:function(e){return{type:"SEARCH_DETAILS",payload:e}}},f=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(s.a)(this,Object(m.a)(t).call(this,e))).state=void 0,a.props=void 0,a.state={enableSearch:!1,dataLoading:!1,dataEnd:!1,content:[]},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"componentWillMount",value:function(){console.log("here in listing page")}},{key:"componentWillReceiveProps",value:function(e){alert("here in next props")}},{key:"toggleSearch",value:function(){var e=!this.state.enableSearch;this.setState({enableSearch:e})}},{key:"inputChange",value:function(e){0===this.state.content.length||this.state.dataEnd,this.props.searchDetailsActionFn()}},{key:"render",value:function(){var e=this;return n.createElement("div",{className:"container mx-auto"},n.createElement("div",{className:"container mx-auto fixed bg-black header-box"},n.createElement("div",{className:"float-left mt-24 ml-30"},n.createElement("img",{className:"cursor-pointer float-left  h-8",alt:"back",src:a(44)}),n.createElement("span",{className:" pl-4 leading-8 text-white font-bold"},"Romantic Comedy ",this.props.searchDetailsActionData)),n.createElement("div",{className:"float-right mt-24 mr-30"},this.state.enableSearch&&n.createElement("input",{onKeyUp:function(t){return e.inputChange(t)},className:"float-left h-8 w-32",type:"text",placeholder:"Search..."}),n.createElement("img",{onClick:function(t){return e.toggleSearch()},alt:"search",className:"cursor-pointer pl-4 float-left h-8",src:a(45)}))),n.createElement("div",{className:"container mx-auto mt-192 mb-30 contentbox min-h-full float-left bg-black"},n.createElement("div",{className:"grid grid-cols-3 mt-30 pr-30"},n.createElement(p,{data:"sample"}),n.createElement(p,{data:"sample"}),n.createElement(p,{data:"sample"}),n.createElement(p,{data:"sample"}),n.createElement(p,{data:"sample"}))))}}]),t}(n.Component),g=Object(h.b)((function(e){return{searchDetailsActionData:e.searchDetails}}),d)(f),b=function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return n.createElement("div",null,"Page Not Found")}}]),t}(n.Component),E=function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return n.createElement(A.c,null,n.createElement(A.a,{path:"/diagnal-frontendapp",component:g,exact:!0}),n.createElement(A.a,{path:"*",component:b}))}}]),t}(n.Component);var v=function(){return c.a.createElement("div",{className:"App"},c.a.createElement(E,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var O=a(27),S=a.n(O),j=a(15),x=a(22);var N=S()(),y=Object(j.b)((function(e,t){return"SEARCH_DETAILS"===t.type?Object(x.a)({},e,{searchDetails:Object(x.a)({},e.searchDetails,{},t.payload)}):e}),{searchDetails:[]});o.a.render(c.a.createElement(h.a,{store:y},c.a.createElement(A.b,{history:N},c.a.createElement(v,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[29,1,2]]]);
//# sourceMappingURL=main.730df3c5.chunk.js.map