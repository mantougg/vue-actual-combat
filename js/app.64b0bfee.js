(function(t){function e(e){for(var a,o,i=e[0],s=e[1],l=e[2],c=0,f=[];c<i.length;c++)o=i[c],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&f.push(r[o][0]),r[o]=0;for(a in s)Object.prototype.hasOwnProperty.call(s,a)&&(t[a]=s[a]);p&&p(e);while(f.length)f.shift()();return u.push.apply(u,l||[]),n()}function n(){for(var t,e=0;e<u.length;e++){for(var n=u[e],a=!0,o=1;o<n.length;o++){var s=n[o];0!==r[s]&&(a=!1)}a&&(u.splice(e--,1),t=i(i.s=n[0]))}return t}var a={},r={app:0},u=[];function o(t){return i.p+"js/"+({about:"about"}[t]||t)+"."+{about:"146f8559"}[t]+".js"}function i(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(t){var e=[],n=r[t];if(0!==n)if(n)e.push(n[2]);else{var a=new Promise((function(e,a){n=r[t]=[e,a]}));e.push(n[2]=a);var u,s=document.createElement("script");s.charset="utf-8",s.timeout=120,i.nc&&s.setAttribute("nonce",i.nc),s.src=o(t);var l=new Error;u=function(e){s.onerror=s.onload=null,clearTimeout(c);var n=r[t];if(0!==n){if(n){var a=e&&("load"===e.type?"missing":e.type),u=e&&e.target&&e.target.src;l.message="Loading chunk "+t+" failed.\n("+a+": "+u+")",l.name="ChunkLoadError",l.type=a,l.request=u,n[1](l)}r[t]=void 0}};var c=setTimeout((function(){u({type:"timeout",target:s})}),12e4);s.onerror=s.onload=u,document.head.appendChild(s)}return Promise.all(e)},i.m=t,i.c=a,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)i.d(n,a,function(e){return t[e]}.bind(null,a));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/vue-actual-combat/",i.oe=function(t){throw console.error(t),t};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=e,s=s.slice();for(var c=0;c<s.length;c++)e(s[c]);var p=l;u.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";n("85ec")},"0b2c":function(t,e,n){"use strict";n("d54b")},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("div",{attrs:{id:"nav"}},[n("router-link",{attrs:{to:"/"}},[t._v("Home")]),t._v(" | "),n("router-link",{attrs:{to:"/about"}},[t._v("About")]),t._v(" | "),n("router-link",{attrs:{to:"/input-number"}},[t._v("InputNumber")]),t._v(" | "),n("router-link",{attrs:{to:"/tabs"}},[t._v("Tabs")])],1),n("router-view")],1)},u=[],o=(n("034f"),n("2877")),i={},s=Object(o["a"])(i,r,u,!1,null,null,null),l=s.exports,c=(n("d3b7"),n("3ca3"),n("ddb0"),n("8c4f")),p=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"home"},[a("img",{attrs:{alt:"Vue logo",src:n("cf05")}}),a("HelloWorld",{attrs:{msg:t.msg}})],1)},f=[],h=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"hello"},[n("h1",[t._v(t._s(t.msg))]),t._m(0),n("h3",[t._v("Vue Study")]),t._m(1)])},m=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",[n("a",{attrs:{href:"https://mantougg.github.io/vue-actual-combat/#/",target:"_blank",rel:"noopener"}},[t._v("My Github Pages")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ul",[n("li",[n("a",{attrs:{href:"https://cn.vuejs.org/",target:"_blank",rel:"noopener"}},[t._v("Vue.js")])]),n("li",[n("a",{attrs:{href:"https://vuex.vuejs.org/zh/",target:"_blank",rel:"noopener"}},[t._v("Vuex")])]),n("li",[n("a",{attrs:{href:"https://router.vuejs.org/zh/",target:"_blank",rel:"noopener"}},[t._v("Vue Router")])])])}],d={name:"HelloWorld",props:{msg:String}},v=d,b=(n("0b2c"),Object(o["a"])(v,h,m,!1,null,"9cd651e4",null)),g=b.exports,_={name:"Home",components:{HelloWorld:g},data:function(){return{msg:"Welcome to My Vue.js App For 《Vue.js实战》"}}},y=_,V=Object(o["a"])(y,p,f,!1,null,null,null),w=V.exports,x=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"input-number"}},[n("input",{directives:[{name:"focus",rawName:"v-focus"}],attrs:{type:"text"},domProps:{value:t.currentValue},on:{change:t.handleChange}}),n("button",{attrs:{disabled:t.currentValue<=t.min},on:{click:t.handleDown}},[t._v("-")]),n("button",{attrs:{disabled:t.currentValue>=t.max},on:{click:t.handleUp}},[t._v("+")])])},j=[],$=(n("a9e3"),n("498a"),n("ac1f"),n("00b4"),function(t){return/(^-?[0-9]+\.{1}\d+$)|(^-?[1-9][0-9]*$)|(^-?0{1}$)/.test(t+"")}),k={name:"input-number",props:{max:{type:Number,default:1/0},min:{type:Number,default:-1/0},value:{type:Number,default:0}},data:function(){return{currentValue:this.value}},watch:{currentValue:function(t){this.$emit("input",t),this.$emit("on-change",t)},value:function(t){this.updateValue(t)}},methods:{updateValue:function(t){t>this.max&&(t=this.max),t<this.min&&(t=this.min),this.currentValue=t},handleUp:function(){this.currentValue>=this.max||(this.currentValue+=1)},handleDown:function(){this.currentValue<=this.min||(this.currentValue-=1)},handleChange:function(t){var e=t.target.value.trim(),n=this.max,a=this.min;$(e)?(e=Number(e),this.currentValue=e,e>n?this.currentValue=n:e<a&&(this.currentValue=a)):t.target.value=this.currentValue}},mounted:function(){this.updateValue(this.value)}},O=k,E=Object(o["a"])(O,x,j,!1,null,null,null),N=E.exports,S=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("tabs",{model:{value:t.activeKey,callback:function(e){t.activeKey=e},expression:"activeKey"}},[n("tabs-pane",{attrs:{label:"标签1",name:"1"}},[t._v("标签1的内容")]),n("tabs-pane",{attrs:{label:"标签2",name:"2"}},[t._v("标签2的内容")]),n("tabs-pane",{attrs:{label:"标签3",name:"3"}},[t._v("标签3的内容")])],1)},C=[],P=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}],staticClass:"pane"},[t._t("default")],2)},T=[],L={name:"tabs-pane",props:{name:{type:String},label:{type:String,default:""}},data:function(){return{show:!0}},methods:{updateNav:function(){this.$parent.updateNav()}},watch:{label:function(){this.updateNav()}},mounted:function(){this.updateNav()}},H=L,M=Object(o["a"])(H,P,T,!1,null,null,null),A=M.exports,K=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"tabs"}},[n("div",{staticClass:"tabs-bar"},t._l(t.navList,(function(e,a){return n("div",{key:e,class:t.tabCls(e),on:{click:function(e){return t.handleChange(a)}}},[t._v(" "+t._s(e.label)+" ")])})),0),n("div",{staticClass:"tabs-content"},[t._t("default")],2)])},W=[],z=(n("4de4"),n("b0c0"),n("159b"),{name:"tabs",data:function(){return{navList:[],currentValue:this.value}},props:{value:{type:[String,Number]}},watch:{value:function(t){this.currentValue=t},currentValue:function(){this.updateStatus()}},methods:{getTabs:function(){return this.$children.filter((function(t){return"tabs-pane"===t.$options.name}))},tabCls:function(t){return["tabs-tab",{"tabs-tab-active":t.name===this.currentValue}]},handleChange:function(t){var e=this.navList[t],n=e.name;this.currentValue=n,this.$emit("input",n),this.$emit("on-click",n)},updateNav:function(){this.navList=[];var t=this;t.getTabs().forEach((function(e,n){t.navList.push({label:e.label,name:e.name||n}),e.name||(e.name=n),0!==n||t.currentValue||(t.currentValue=e.name||n)})),t.updateStatus()},updateStatus:function(){var t=this,e=this,n=e.getTabs();n.forEach((function(e){return e.show=e.name===t.currentValue}))}}}),D=z,I=Object(o["a"])(D,K,W,!1,null,null,null),J=I.exports,U={name:"my-page-tabs-component",components:{tabsPane:A,tabs:J},data:function(){return{activeKey:"1"}}},q=U,F=Object(o["a"])(q,S,C,!1,null,null,null),G=F.exports;a["a"].use(c["a"]);var R=[{path:"/",name:"Home",component:w},{path:"/input-number",name:"InputNumber",component:N},{path:"/tabs",name:"Tabs",component:G},{path:"/about",name:"About",component:function(){return n.e("about").then(n.bind(null,"f820"))}}],B=new c["a"]({mode:"hash",base:"/vue-actual-combat/",routes:R}),Q=B,X=n("2f62");a["a"].use(X["a"]);var Y=new X["a"].Store({state:{},mutations:{},actions:{},modules:{}});a["a"].directive("focus",{inserted:function(t){t.focus()}});n("6672");a["a"].config.productionTip=!1,new a["a"]({router:Q,store:Y,render:function(t){return t(l)}}).$mount("#app")},6672:function(t,e,n){},"85ec":function(t,e,n){},cf05:function(t,e,n){t.exports=n.p+"img/logo.82b9c7a5.png"},d54b:function(t,e,n){}});
//# sourceMappingURL=app.64b0bfee.js.map