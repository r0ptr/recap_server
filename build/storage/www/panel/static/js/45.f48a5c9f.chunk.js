(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{1163:function(e,t,a){"use strict";a.r(t);var n=a(228),c=a(229),r=a(231),l=a(230),s=a(233),o=a(232),i=a(3),u=a.n(i),m=a(177),f=a(901),p=a(889),d=a(890),g=a(892),h=a(894),E=a(893),b=a(945),v=a(956);function j(e){var t=e.user,a="/users/".concat(t.email);return u.a.createElement("tr",{key:t.email},u.a.createElement("th",{scope:"row"},u.a.createElement(m.Link,{to:a},t.email)),u.a.createElement("td",null,u.a.createElement(m.Link,{to:a},u.a.createElement(f.a,{color:function(e){return e.logged?"success":"primary"}(t)},function(e){return e.logged?"Logged":""}(t)))))}var y=function(e){function t(e){var a;Object(n.a)(this,t),(a=Object(r.a)(this,Object(l.a)(t).call(this,e))).state={};var c=Object(s.a)(a);return v.a.dlsApiGet({method:"api.panel.listUsers"},function(e){c.setState({usersList:e.data.users})},function(e){}),a}return Object(o.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return u.a.createElement("div",{className:"animated fadeIn"},u.a.createElement(p.a,null,u.a.createElement(d.a,{xl:6},u.a.createElement(g.a,null,u.a.createElement(h.a,null,u.a.createElement("i",{className:"fa fa-align-justify"})," Users"),u.a.createElement(E.a,null,u.a.createElement(b.a,{responsive:!0,hover:!0},u.a.createElement("thead",null,u.a.createElement("tr",null,u.a.createElement("th",{scope:"col"},"email"),u.a.createElement("th",{scope:"col"},"status"))),u.a.createElement("tbody",null,void 0===this.state.usersList?"Loading...":this.state.usersList.map(function(e,t){return u.a.createElement(j,{key:t,user:e})}))))))))}}]),t}(i.Component);t.default=y},901:function(e,t,a){"use strict";var n=a(35),c=a(100),r=a(3),l=a.n(r),s=a(112),o=a.n(s),i=a(884),u=a.n(i),m=a(885),f={color:o.a.string,pill:o.a.bool,tag:m.p,innerRef:o.a.oneOfType([o.a.object,o.a.func,o.a.string]),children:o.a.node,className:o.a.string,cssModule:o.a.object},p=function(e){var t=e.className,a=e.cssModule,r=e.color,s=e.innerRef,o=e.pill,i=e.tag,f=Object(c.a)(e,["className","cssModule","color","innerRef","pill","tag"]),p=Object(m.l)(u()(t,"badge","badge-"+r,!!o&&"badge-pill"),a);return f.href&&"span"===i&&(i="a"),l.a.createElement(i,Object(n.a)({},f,{className:p,ref:s}))};p.propTypes=f,p.defaultProps={color:"secondary",pill:!1,tag:"span"},t.a=p},956:function(e,t,a){"use strict";var n=a(228),c=a(229),r=a(985),l=a.n(r),s=function(){function e(){Object(n.a)(this,e)}return Object(c.a)(e,null,[{key:"dlsApiGet",value:function(e,t,a){var n="";for(var c in e)""!==n&&(n+="&"),n+=c+"="+encodeURIComponent(e[c]);l.a.get("/dls/api?"+n).then(function(e){t(e)}).catch(function(e){a(e)})}},{key:"dlsApiPost",value:function(e,t,a,n){l.a.post("/dls/api?method="+e,t).then(function(e){a(e)}).catch(function(e){n(e)})}},{key:"gameApiGet",value:function(e,t,a){var n="";for(var c in e)""!==n&&(n+="&"),n+=c+"="+encodeURIComponent(e[c]);l.a.get("/game/api?"+n).then(function(e){t(e)}).catch(function(e){a(e)})}}]),e}();t.a=s}}]);
//# sourceMappingURL=45.f48a5c9f.chunk.js.map