(function(t){function e(e){for(var r,o,s=e[0],c=e[1],u=e[2],f=0,l=[];f<s.length;f++)o=s[f],a[o]&&l.push(a[o][0]),a[o]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(t[r]=c[r]);d&&d(e);while(l.length)l.shift()();return i.push.apply(i,u||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],r=!0,o=1;o<n.length;o++){var s=n[o];0!==a[s]&&(r=!1)}r&&(i.splice(e--,1),t=c(c.s=n[0]))}return t}var r={},o={app:0},a={app:0},i=[];function s(t){return c.p+"js/"+({about:"about"}[t]||t)+"."+{about:"9ee287f9"}[t]+".js"}function c(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(t){var e=[],n={about:1};o[t]?e.push(o[t]):0!==o[t]&&n[t]&&e.push(o[t]=new Promise(function(e,n){for(var r="css/"+({about:"about"}[t]||t)+"."+{about:"4c3116f4"}[t]+".css",o=c.p+r,a=document.getElementsByTagName("link"),i=0;i<a.length;i++){var s=a[i],u=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(u===r||u===o))return e()}var f=document.getElementsByTagName("style");for(i=0;i<f.length;i++){s=f[i],u=s.getAttribute("data-href");if(u===r||u===o)return e()}var l=document.createElement("link");l.rel="stylesheet",l.type="text/css",l.onload=e,l.onerror=function(e){var r=e&&e.target&&e.target.src||o,a=new Error("Loading CSS chunk "+t+" failed.\n("+r+")");a.request=r,n(a)},l.href=o;var d=document.getElementsByTagName("head")[0];d.appendChild(l)}).then(function(){o[t]=0}));var r=a[t];if(0!==r)if(r)e.push(r[2]);else{var i=new Promise(function(e,n){r=a[t]=[e,n]});e.push(r[2]=i);var u,f=document.getElementsByTagName("head")[0],l=document.createElement("script");l.charset="utf-8",l.timeout=120,c.nc&&l.setAttribute("nonce",c.nc),l.src=s(t),u=function(e){l.onerror=l.onload=null,clearTimeout(d);var n=a[t];if(0!==n){if(n){var r=e&&("load"===e.type?"missing":e.type),o=e&&e.target&&e.target.src,i=new Error("Loading chunk "+t+" failed.\n("+r+": "+o+")");i.type=r,i.request=o,n[1](i)}a[t]=void 0}};var d=setTimeout(function(){u({type:"timeout",target:l})},12e4);l.onerror=l.onload=u,f.appendChild(l)}return Promise.all(e)},c.m=t,c.c=r,c.d=function(t,e,n){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)c.d(n,r,function(e){return t[e]}.bind(null,r));return n},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/chs.icd10.client/",c.oe=function(t){throw console.error(t),t};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],f=u.push.bind(u);u.push=e,u=u.slice();for(var l=0;l<u.length;l++)e(u[l]);var d=f;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";var r=n("c21b"),o=n.n(r);o.a},"107f":function(t,e,n){"use strict";var r=n("90d8"),o=n.n(r);o.a},2154:function(t,e,n){"use strict";var r=n("762a"),o=n.n(r);o.a},"41cb":function(t,e,n){"use strict";var r=n("2b0e"),o=n("8c4f"),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",{attrs:{fluid:"","grid-list-lg":""}},t._l(t.menus,function(e){return n("v-layout",{key:e.title,attrs:{row:""}},[n("v-flex",[n("v-card",[n("v-card-title",{staticClass:"justify-center hover",on:{click:function(n){t.routerSelection(e.route,e.params)}}},[e.icon?n("v-icon",{staticClass:"icon-yellow",attrs:{large:""}},[t._v("star")]):t._e(),"Alerts"===e.title?n("v-badge",{attrs:{right:"",color:"red"}},[n("span",{attrs:{slot:"badge"},slot:"badge"},[t._v(t._s(t.alerts))]),n("h2",[t._v(t._s(e.title))])]):t._e(),"Alerts"!=e.title?n("h2",[t._v(t._s(e.title))]):t._e()],1)],1)],1)],1)}))},i=[],s={name:"Home",data:function(){return{menus:[{title:"Alerts",route:"alerts",params:{}},{title:"Favorites",route:"favorites",icon:"star",params:{}},{title:"Diagnosis",route:"diagnosis-list",params:{}},{title:"Additional Resources",route:"resources",params:{type:"resources"}},{title:"CHS Resources",route:"resources",params:{type:"chsresources"}},{title:"Coding Talk",route:"coding-talk",params:{}}]}},computed:{alerts:function(){var t=this.$store.getters.RESOURCES.find(function(t){return"alerts"===t.category});return t?t.alerts.length:null}},methods:{routerSelection:function(t,e){d.push({name:t,params:e})}}},c=s,u=(n("107f"),n("2154"),n("2877")),f=Object(u["a"])(c,a,i,!1,null,"cd317e4c",null);f.options.__file="Home.vue";var l=f.exports;r["default"].use(o["a"]);var d=e["a"]=new o["a"]({mode:"history",base:"/chs.icd10.client/",routes:[{path:"/",name:"home",component:l},{path:"/alerts",name:"alerts",component:function(){return n.e("about").then(n.bind(null,"9413"))}},{path:"/favorites",name:"favorites",component:function(){return n.e("about").then(n.bind(null,"48d5"))}},{path:"/diagnosis/:id",name:"diagnosis",component:function(){return n.e("about").then(n.bind(null,"0452"))},props:!0},{path:"/diagnosis-list",name:"diagnosis-list",component:function(){return n.e("about").then(n.bind(null,"c8b7"))}},{path:"/resources/:type",name:"resources",component:function(){return n.e("about").then(n.bind(null,"93b9"))},props:!0},{path:"/coding-talk",name:"coding-talk",component:function(){return n.e("about").then(n.bind(null,"fc6d"))}}]})},"56d7":function(t,e,n){"use strict";n.r(e);n("744f"),n("6c7b"),n("7514"),n("20d6"),n("1c4c"),n("6762"),n("cadf"),n("e804"),n("55dd"),n("d04f"),n("c8ce"),n("217b"),n("7f7f"),n("f400"),n("7f25"),n("536b"),n("d9ab"),n("f9ab"),n("32d7"),n("25c9"),n("9f3c"),n("042e"),n("c7c6"),n("f4ff"),n("049f"),n("7872"),n("a69f"),n("0b21"),n("6c1a"),n("c7c62"),n("84b4"),n("c5f6"),n("2e37"),n("fca0"),n("7cdf"),n("ee1d"),n("b1b1"),n("87f3"),n("9278"),n("5df2"),n("04ff"),n("f751"),n("4504"),n("fee7"),n("ffc1"),n("0d6d"),n("9986"),n("8e6e"),n("25db"),n("e4f7"),n("b9a1"),n("64d5"),n("9aea"),n("db97"),n("66c8"),n("57f0"),n("165b"),n("456d"),n("cf6a"),n("fd24"),n("8615"),n("551c"),n("097d"),n("df1b"),n("2397"),n("88ca"),n("ba16"),n("d185"),n("ebde"),n("2d34"),n("f6b3"),n("2251"),n("c698"),n("a19f"),n("9253"),n("9275"),n("3b2b"),n("3846"),n("4917"),n("a481"),n("28a5"),n("386d"),n("6b54"),n("4f7f"),n("8a81"),n("ac4d"),n("8449"),n("9c86"),n("fa83"),n("48c0"),n("a032"),n("aef6"),n("d263"),n("6c37"),n("9ec8"),n("5695"),n("2fdb"),n("d0b0"),n("b54a"),n("f576"),n("ed50"),n("788d"),n("14b9"),n("f386"),n("f559"),n("1448"),n("673e"),n("242a"),n("c66f"),n("b05c"),n("34ef"),n("6aa2"),n("15ac"),n("af56"),n("b6e4"),n("9c29"),n("63d9"),n("4dda"),n("10ad"),n("c02b"),n("4795"),n("130f"),n("ac6a"),n("96cf");var r=n("2b0e"),o=n("ce5b"),a=n.n(o);n("bf40");r["default"].use(a.a,{iconfont:"md"});var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",[n("v-toolbar",{attrs:{app:""}},[n("v-img",{attrs:{height:"30","max-width":"30",contain:"",src:"./img/icons/chsli-logo-trans.png"}}),n("v-toolbar-title",{domProps:{textContent:t._s(t.title)}}),n("v-toolbar-title",{staticClass:"search-bar",attrs:{slot:"extension"},slot:"extension"},[n("v-autocomplete",{attrs:{items:t.diagnosisForSearch,"persistent-hint":"","item-text":"name","item-value":"id",solo:"","full-width":"","prepend-icon":"search"},on:{change:function(e){t.itemSelection(t.search)}},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}})],1)],1),n("v-content",[n("router-view")],1),n("v-footer",{attrs:{height:"50",fixed:"",app:""}},[n("v-container",{attrs:{fluid:"","pa-0":""}},[n("v-layout",{attrs:{row:"","align-center":""}},[n("v-flex",{staticClass:"text-xs-center"},[n("v-icon",{staticClass:"hover",attrs:{large:"",color:"white"},on:{click:function(e){t.routerSelection("home")}}},[t._v("home")])],1)],1)],1)],1)],1)},s=[],c=n("41cb"),u={name:"App",data:function(){return{title:"ICD-10 Pocket Guide 1",search:null}},computed:{diagnosis:function(){return this.$store.getters.DIAGNOSIS},diagnosisForSearch:function(){return this.diagnosis.map(function(t){return{id:t.id,name:decodeURIComponent(t.name)}})}},beforeMount:function(){this.$store.dispatch("FETCH_DIAGNOSIS"),this.$store.dispatch("FETCH_FAVORITES"),this.$store.dispatch("FETCH_RESOURCES")},methods:{routerSelection:function(t){c["a"].push({name:t})},itemSelection:function(t){c["a"].push({name:"diagnosis",params:{id:t}})}}},f=u,l=(n("034f"),n("2877")),d=Object(l["a"])(f,i,s,!1,null,null,null);d.options.__file="App.vue";var p=d.exports,m=n("2f62"),h=n("a34a"),v=n.n(h),b=n("bc3a"),g=n.n(b),S=n("7dc5");function E(t){return function(){var e=this,n=arguments;return new Promise(function(r,o){var a=t.apply(e,n);function i(t,e){try{var n=a[t](e),i=n.value}catch(t){return void o(t)}n.done?r(i):Promise.resolve(i).then(s,c)}function s(t){i("next",t)}function c(t){i("throw",t)}s()})}}var y={diagnosis:[]},_={DIAGNOSIS:function(t){return t.diagnosis}},T={SET_DIAGNOSIS:function(t,e){t.diagnosis=e}},w={FETCH_DIAGNOSIS:function(){var t=E(v.a.mark(function t(e){var n,r,o;return v.a.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,g.a.get("".concat(S.apiRoot,"/admin"));case 2:n=t.sent,r=n.data,o=r.message.sort(function(t,e){return t.name.toLowerCase().localeCompare(e.name.toLowerCase())}),e.commit("SET_DIAGNOSIS",o);case 6:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}()},O={state:y,getters:_,mutations:T,actions:w},x={favorites:[]},I={FAVORITES:function(t){return t.favorites}},R={SET_FAVORITES:function(t,e){t.favorites=e},NEW_FAVORITES:function(t,e){t.favorites.push(e)},DELETE_FAVORITES:function(t,e){t.favorites=t.favorites.filter(function(t){return t!=e})}},C={FETCH_FAVORITES:function(t){var e,n=localStorage.getItem(S.localStorePrefix);try{e=JSON.parse(n),e?"number"===typeof e&&(e=[],e.push(parseInt(n,10))):e=[]}catch(t){e=n.split(",");for(var r=0;r<e.length;r++)e[r]=parseInt(e[r],10)}return t.commit("SET_FAVORITES",e),!0},NEW_FAVORITES:function(t,e){var n=t.commit,r=t.state;return n("NEW_FAVORITES",e),localStorage.setItem(S.localStorePrefix,JSON.stringify(r.favorites)),!0},DELETE_FAVORITES:function(t,e){var n=t.commit,r=t.state;n("DELETE_FAVORITES",e),localStorage.setItem(S.localStorePrefix,JSON.stringify(r.favorites))}},A={state:x,getters:I,mutations:R,actions:C};function k(t){return function(){var e=this,n=arguments;return new Promise(function(r,o){var a=t.apply(e,n);function i(t,e){try{var n=a[t](e),i=n.value}catch(t){return void o(t)}n.done?r(i):Promise.resolve(i).then(s,c)}function s(t){i("next",t)}function c(t){i("throw",t)}s()})}}var F={resources:[]},P={RESOURCES:function(t){return t.resources}},N={SET_RESOURCES:function(t,e){t.resources=e},SET_ALERTS:function(t,e){t.resources.push(e)}},j={FETCH_RESOURCES:function(){var t=k(v.a.mark(function t(e){var n,r;return v.a.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,g.a.get("".concat(S.apiRoot,"/other"));case 2:return n=t.sent,r=n.data,e.commit("SET_RESOURCES",r.message),t.next=7,g.a.get("".concat(S.apiRoot,"/alerts"));case 7:r=t.sent,e.commit("SET_ALERTS",{category:"alerts",alerts:r.data.message});case 9:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}()},D={state:F,getters:P,mutations:N,actions:j};r["default"].use(m["a"]);var V=new m["a"].Store({modules:{diagnosis:O,favorites:A,resources:D}});r["default"].config.productionTip=!1,new r["default"]({router:c["a"],store:V,render:function(t){return t(p)}}).$mount("#app")},"762a":function(t,e,n){},"7dc5":function(t){t.exports={projectName:"ICD-10 Pocket Guide",framework:"vue",apiRoot:"https://api-dev.chsli.org:8000",localStorePrefix:"CHSLIPocketGuideFavorites"}},"90d8":function(t,e,n){},c21b:function(t,e,n){}});
//# sourceMappingURL=app.ca186c64.js.map