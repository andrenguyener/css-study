(function(e){function t(t){for(var n,o,i=t[0],l=t[1],c=t[2],p=0,h=[];p<i.length;p++)o=i[p],s[o]&&h.push(s[o][0]),s[o]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(e[n]=l[n]);u&&u(t);while(h.length)h.shift()();return r.push.apply(r,c||[]),a()}function a(){for(var e,t=0;t<r.length;t++){for(var a=r[t],n=!0,i=1;i<a.length;i++){var l=a[i];0!==s[l]&&(n=!1)}n&&(r.splice(t--,1),e=o(o.s=a[0]))}return e}var n={},s={app:0},r=[];function o(t){if(n[t])return n[t].exports;var a=n[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.m=e,o.c=n,o.d=function(e,t,a){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)o.d(a,n,function(t){return e[t]}.bind(null,n));return a},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],l=i.push.bind(i);i.push=t,i=i.slice();for(var c=0;c<i.length;c++)t(i[c]);var u=l;r.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},1987:function(e,t,a){e.exports=a.p+"img/step2.3ed12c7a.png"},"1afc":function(e,t,a){e.exports=a.p+"img/step11.58fe6571.png"},"2c8c":function(e,t,a){"use strict";var n=a("4dfb"),s=a.n(n);s.a},"4dfb":function(e,t,a){},"56d7":function(e,t,a){"use strict";a.r(t);a("cadf"),a("551c"),a("097d");var n=a("2b0e"),s=a("ce5b"),r=a.n(s),o=(a("5363"),a("bf40"),function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"app"}},[a("Header",{on:{"toggle-drawer":function(t){e.$refs.drawer.drawer=!e.$refs.drawer.drawer}}}),a("Sidebar",{ref:"drawer",attrs:{routes:e.routes}}),a("router-view")],1)}),i=[],l=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-toolbar-side-icon",{on:{click:function(t){t.stopPropagation(),e.$emit("toggle-drawer")}}})},c=[],u=a("2877"),p={},h=Object(u["a"])(p,l,c,!1,null,null,null);h.options.__file="Header.vue";var d=h.exports,g=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-navigation-drawer",{attrs:{absolute:""},model:{value:e.drawer,callback:function(t){e.drawer=t},expression:"drawer"}},[n("v-container",{attrs:{fluid:""}},[n("v-layout",{attrs:{"align-center":"","justify-center":""}},[n("router-link",{attrs:{to:"/",exact:""}},[n("img",{attrs:{id:"logo",src:a("d092"),alt:"logo"}})])],1)],1),n("v-divider"),n("v-list",{staticClass:"pt-0",attrs:{dense:""}},e._l(e.activeRoutes,function(t){return n("v-list-tile",{key:t.name},[n("v-list-tile-content",[n("v-list-tile-title"),n("router-link",{attrs:{to:t.path,exact:""}},[e._v(e._s(t.name))])],1)],1)}))],1)},f=[],v={props:{routes:Array},data:function(){return{drawer:!0}},computed:{activeRoutes:function(){return this.routes.filter(function(e){return e.show})}}},b=v,m=(a("e152"),Object(u["a"])(b,g,f,!1,null,"a2dc178a",null));m.options.__file="Sidebar.vue";var w=m.exports,A=a("8c4f"),E=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"home"}},[a("Page",{attrs:{title:"Home"}},[a("h1",[e._v("This is the home page")])])],1)},S=[],C=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"page"},[a("h1",{staticClass:"page-title"},[e._v(e._s(e.title))]),e._t("default")],2)},V=[],q={props:{title:String}},y=q,k=(a("2c8c"),Object(u["a"])(y,C,V,!1,null,null,null));k.options.__file="Page.vue";var G=k.exports,Q={components:{Page:G}},x=Q,T=Object(u["a"])(x,E,S,!1,null,null,null);T.options.__file="Home.vue";var j=T.exports,O=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"page-not-found"}},[a("Page",{attrs:{title:"Page Not Found"}},[a("h1",[e._v("This is the page not found page")])])],1)},K=[],Y={components:{Page:G}},B=Y,I=Object(u["a"])(B,O,K,!1,null,null,null);I.options.__file="PageNotFound.vue";var U=I.exports,J=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"behind-the-scenes"}},[n("Page",{attrs:{title:"How CSS Works Behind the Scene"}},[n("h3",[e._v("What happens to CSS when we load up a webpage?")]),n("p",[e._v("\n      Now a bunch of stuff happen behind the scene of the internet until the browser can start loading up the web page we requested. Things like HTTP requests, figuring right domain name servers and what not. I won’t be focusing on all that though but instead what happens in the browser on a computer when the user opens up a page.  \n    ")]),n("br"),n("p",[e._v("\n      So, a good starting point is when the browser starts to load the initial HTML file. \n    ")]),n("img",{staticClass:"page-image",attrs:{src:a("853a"),alt:""}}),n("p",[e._v("\n      It then takes the loaded HTML code and parses it, which basically means it decodes the code line by line. \n    ")]),n("img",{staticClass:"page-image",attrs:{src:a("1987"),alt:""}}),n("p",[e._v("\n      From this process, the browser builds the so-called direct object model or DOM which basically describe the entire web document like a family tree with parents, children, and sibling elements. \n    ")]),n("img",{staticClass:"page-image",attrs:{src:"src/assets/behind-the-scenes-diagram/step3.png",alt:""}}),n("p",[e._v("\n      This DOM is where the entire decoded HML code is stored. Now as the browser parses the HTML, it also finds the style sheets included in the HTML head and it starts loading them as well and just like the HTML. \n    ")]),n("img",{staticClass:"page-image",attrs:{src:"/src/assets/behind-the-scenes-diagram/step4.png",alt:""}}),n("p",[e._v("\n      CSS also is parsed but parsing of CSS is a bit more complex. I will talk about this in greater details later. \n    ")]),n("img",{staticClass:"page-image",attrs:{src:"/assets/behind-the-scenes-diagram/step5.png",alt:""}}),n("p",[e._v("\n      For now, let me tell you that during the CSS parsing phase there are 2 main steps. First off conflicting CSS declarations are resolved through a process known as cascade, the second step in the CSS parsing is to process final CSS values.        \n      "),n("br"),n("br"),e._v("\n      Like for instance, converting a margin defined in percentage units to pixels. Imagine that we define a left margin as 50% but that 50% on a smart phone is completely different than the 50% on a large screen right. That’s why these percentages and other relative units can only be calculated on the user’s device in the parsing phase. I will talk more about this later.\n      "),n("br"),n("br"),e._v("\n      Now after all of this is done, the final CSS is also stored in a tree like structure called the CSS object model, similar to the DOM.\n    ")]),n("img",{staticClass:"page-image",attrs:{src:"/css-study/@/assets/behind-the-scenes-diagram/step8.png",alt:""}}),n("p",[e._v("\n      These together form the so-called render tree and with that we finally have everything we need to render the page.\n    ")]),n("img",{staticClass:"page-image",attrs:{src:a("f780"),alt:""}}),n("p",[e._v("\n      Now to actually render the page, the browser uses something called the visual formatting model. This algorithm calculates and uses a bunch of stuff that you already know about like box models, floats, positioning, etc. I’ll talk about a little how this visual formatting model works later.\n    ")]),n("img",{staticClass:"page-image",attrs:{src:a("8dc8"),alt:""}}),n("br"),n("br"),n("p",[e._v("\n      So finally, after the visual formatting model has done its work the website is finally rendered or painted to the screen and the process is finished. \n    ")]),n("img",{staticClass:"page-image",attrs:{src:a("1afc"),alt:""}}),n("br"),n("br"),n("p",[e._v("\n      Great! Now you know what happens behind the scenes of a page load in a browser.\n    ")])])],1)},N=[],R={components:{Page:G}},W=R,F=Object(u["a"])(W,J,N,!1,null,null,null);F.options.__file="BehindTheScenes.vue";var H=F.exports,L=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"layouts"}},[a("Page",{attrs:{title:"Layout"}},[a("h1",[e._v("This is the layout page")])])],1)},P=[],M={components:{Page:G}},D=M,X=Object(u["a"])(D,L,P,!1,null,null,null);X.options.__file="Layout.vue";var _=X.exports;n["default"].use(A["a"]);var Z=new A["a"]({routes:[{path:"/",name:"Home",show:!1,component:j},{path:"/behind-the-scenes",name:"Behind the Scenes",show:!0,component:H},{path:"/cssgrids-flexbox",name:"CSS Grids vs Flexbox",show:!0,component:_},{path:"/*",name:"Page Not Found",show:!1,component:U}]}),z={components:{Sidebar:w,Header:d},data:function(){return{routes:Z.options.routes}}},$=z,ee=(a("cf25"),Object(u["a"])($,o,i,!1,null,null,null));ee.options.__file="App.vue";var te=ee.exports;n["default"].use(r.a,{iconfont:"mdi"}),n["default"].config.productionTip=!1,new n["default"]({router:Z,render:function(e){return e(te)}}).$mount("#app")},7386:function(e,t,a){},"853a":function(e,t,a){e.exports=a.p+"img/step1.58690d62.png"},"8dc8":function(e,t,a){e.exports=a.p+"img/step10.354f2ec0.png"},ba75:function(e,t,a){},cf25:function(e,t,a){"use strict";var n=a("7386"),s=a.n(n);s.a},d092:function(e,t){e.exports="data:image/png;base64,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"},e152:function(e,t,a){"use strict";var n=a("ba75"),s=a.n(n);s.a},f780:function(e,t,a){e.exports=a.p+"img/step9.7022139c.png"}});
//# sourceMappingURL=app.ca5eb485.js.map