(function(e){function t(t){for(var i,r,o=t[0],l=t[1],c=t[2],u=0,p=[];u<o.length;u++)r=o[u],a[r]&&p.push(a[r][0]),a[r]=0;for(i in l)Object.prototype.hasOwnProperty.call(l,i)&&(e[i]=l[i]);d&&d(t);while(p.length)p.shift()();return s.push.apply(s,c||[]),n()}function n(){for(var e,t=0;t<s.length;t++){for(var n=s[t],i=!0,o=1;o<n.length;o++){var l=n[o];0!==a[l]&&(i=!1)}i&&(s.splice(t--,1),e=r(r.s=n[0]))}return e}var i={},a={app:0},s=[];function r(t){if(i[t])return i[t].exports;var n=i[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=e,r.c=i,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)r.d(n,i,function(t){return e[t]}.bind(null,i));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/demo-transitions/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],l=o.push.bind(o);o.push=t,o=o.slice();for(var c=0;c<o.length;c++)t(o[c]);var d=l;s.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"0081":function(e,t,n){"use strict";n.r(t);var i=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"slide"},[i("div",{staticClass:"bg-cards"},[i("transition",{attrs:{name:e.currentTransition,mode:e.currentMode}},[e.toggle?i("div",{key:"rick",staticClass:"rick"},[i("img",{attrs:{src:n("3b21")}})]):i("div",{key:"picklerick",staticClass:"picklerick"},[i("img",{attrs:{src:n("d6c2")}})])])],1),i("h2",[e._v("Dynamic Named Transitions")]),i("p",[e._v("It is possible to change both transition names and modes with dynamic properties driven by data. The data can be reactive to the state of the app allowing for a great deal of control over switching elements and components.")]),i("div",{staticClass:"panel"},[i("div",{staticClass:"transitions"},[i("div",[e._v("Transitions")]),i("label",[e._v("None "),i("input",{directives:[{name:"model",rawName:"v-model",value:e.currentTransition,expression:"currentTransition"}],attrs:{type:"radio",value:""},domProps:{checked:e._q(e.currentTransition,"")},on:{change:function(t){e.currentTransition=""}}}),i("span")]),i("label",[e._v("Fade "),i("input",{directives:[{name:"model",rawName:"v-model",value:e.currentTransition,expression:"currentTransition"}],attrs:{type:"radio",value:"fade"},domProps:{checked:e._q(e.currentTransition,"fade")},on:{change:function(t){e.currentTransition="fade"}}}),i("span")]),i("label",[e._v("Slide "),i("input",{directives:[{name:"model",rawName:"v-model",value:e.currentTransition,expression:"currentTransition"}],attrs:{type:"radio",value:"slide"},domProps:{checked:e._q(e.currentTransition,"slide")},on:{change:function(t){e.currentTransition="slide"}}}),i("span")])]),i("div",{staticClass:"modes"},[i("div",[e._v("Modes")]),i("label",[i("input",{directives:[{name:"model",rawName:"v-model",value:e.currentMode,expression:"currentMode"}],attrs:{type:"radio",value:""},domProps:{checked:e._q(e.currentMode,"")},on:{change:function(t){e.currentMode=""}}}),i("span"),e._v(" None")]),i("label",[i("input",{directives:[{name:"model",rawName:"v-model",value:e.currentMode,expression:"currentMode"}],attrs:{type:"radio",value:"out-in"},domProps:{checked:e._q(e.currentMode,"out-in")},on:{change:function(t){e.currentMode="out-in"}}}),i("span"),e._v(" Out-In")]),i("label",[i("input",{directives:[{name:"model",rawName:"v-model",value:e.currentMode,expression:"currentMode"}],attrs:{type:"radio",value:"in-out"},domProps:{checked:e._q(e.currentMode,"in-out")},on:{change:function(t){e.currentMode="in-out"}}}),i("span"),e._v(" In-Out")])])]),i("div",{staticClass:"cards"},[i("transition",{attrs:{name:e.currentTransition,mode:e.currentMode}},[e.toggle?i("div",{key:"rick",staticClass:"rick"},[i("img",{attrs:{src:n("3b21")}})]):i("div",{key:"picklerick",staticClass:"picklerick"},[i("div",{staticClass:"pickle"},[i("img",{attrs:{src:n("d6c2")}}),i("div",{staticClass:"picklequote",class:"quote"+e.currentQuoteClass,attrs:{"data-quote":e.quotes[e.currentQuote]},on:{animationend:e.onQuoteEnd}})])])])],1),i("button",{staticClass:"example-button",on:{click:function(t){e.toggle=!e.toggle}}},[e._v("toggle")]),i("pre-code",{tag:"textarea"},[e._v('<transition :name="currentTransition" :mode="currentMode">\r\n  <div v-if="toggle" class="rick" key="rick"></div>\r\n  <div v-else class="picklerick" key="picklerick"></div>\r\n</transition>')])],1)},a=[],s=(n("ac6a"),{name:"slide-dynamic-named-transitions",data:function(){return{currentTransition:"",currentMode:"",currentQuote:0,currentQuoteClass:0,quotes:["I'm a pickle!","I'm Pickle Rick!","Look at me!","Flip the pickle!","BOOM!!"],toggle:!0}},methods:{onQuoteEnd:function(){this.currentQuote=Math.floor(Math.random()*this.quotes.length),this.currentQuoteClass=2===this.currentQuoteClass?0:this.currentQuoteClass+1}},mounted:function(){document.querySelectorAll("pre code").forEach(function(e){hljs.highlightBlock(e)})},activated:function(){document.body.style.setProperty("--bodyBgColor","#755e39")}}),r=s,o=(n("8f69"),n("2877")),l=Object(o["a"])(r,i,a,!1,null,"9e13cb66",null);t["default"]=l.exports},"0162":function(e,t,n){"use strict";n.r(t);var i=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},a=[function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"slide"},[i("img",{attrs:{alt:"Vue logo",src:n("cf05")}}),i("h1",[e._v("Making Things Go Away With <transition>")]),i("h2",[e._v("Repo | "),i("a",{attrs:{href:"https://github.com/talmand/demo-transitions"}},[e._v("https://github.com/talmand/demo-transitions")]),e._v(" |")]),i("h2",[e._v("Demo | "),i("a",{attrs:{href:"https://talmand.github.io/demo-transitions/"}},[e._v("https://talmand.github.io/demo-transitions/")]),e._v(" |")])])}],s={name:"slide-title",activated:function(){document.body.style.setProperty("--bodyBgColor","#274231")}},r=s,o=n("2877"),l=Object(o["a"])(r,i,a,!1,null,null,null);t["default"]=l.exports},"1d3b":function(e,t,n){"use strict";var i=n("8591"),a=n.n(i);a.a},"221b":function(e,t,n){"use strict";var i=n("3a41"),a=n.n(i);a.a},"28cd":function(e,t,n){"use strict";var i=n("478b"),a=n.n(i);a.a},3178:function(e,t,n){"use strict";n.r(t);var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"slide"},[n("h2",[e._v("List Transitions Code")]),n("pre-code",{tag:"textarea"},[e._v('<transition-group name="list" tag="ul" @leave="listLeave">\r\n  <li v-for="(state, index) in states" :key="state[5]" :data-index="index">\r\n    \x3c!-- looped content --\x3e\r\n  </li>\r\n</transition-group>')]),n("pre-code",{tag:"textarea"},[e._v(".list-enter-active, .list-leave-active {\r\n  transition: 0.5s;\r\n}\r\n.list-enter, .list-leave-to {\r\n  opacity: 0;\r\n  transform: translate3d(40px, 0, 0);\r\n}\r\n.list-move {\r\n  opacity: 0.5;\r\n  transition: transform 0.5s;\r\n}")]),n("pre-code",{tag:"textarea"},[e._v("listLeave: function (element) {\r\n  element.style.transitionDelay = `${element.dataset.index * 0.25}s`;\r\n}")])],1)},a=[],s=(n("ac6a"),{name:"slide-list-transitions-code",mounted:function(){document.querySelectorAll("pre code").forEach(function(e){hljs.highlightBlock(e)})},activated:function(){document.body.style.setProperty("--bodyBgColor","#274231")}}),r=s,o=n("2877"),l=Object(o["a"])(r,i,a,!1,null,"785ccaae",null);t["default"]=l.exports},"3a41":function(e,t,n){},"3b21":function(e,t,n){e.exports=n.p+"img/rick.c8d1ee14.png"},4252:function(e,t,n){"use strict";n.r(t);var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"slide"},[n("h2",[e._v("A Simple Example")]),n("button",{staticClass:"example-button",on:{click:function(t){e.ifToggle=!e.ifToggle}}},[e._v("toggle v-if")]),n("div",{staticClass:"example"},[n("transition",{attrs:{name:"fade"}},[e.ifToggle?n("div",[e._v("v-if example")]):e._e()])],1),n("p",[e._v("The most basic example is to wrap an element that has a v-if or v-show controlling its visibility with a transition component.")]),n("pre-code",{tag:"textarea"},[e._v('<transition>\r\n  <div v-if="ifToggle">v-if example</div>\r\n</transition>')]),n("p",[e._v("This, in turn, will apply v- based classes to the affected elements in a specific sequence.")]),n("pre-code",{tag:"textarea"},[e._v(".v-enter, .v-leave-to {\r\n  opacity: 0;\r\n}\r\n.v-enter-active, .v-leave-active {\r\n  transition: 0.5s;\r\n}")])],1)},a=[],s=(n("ac6a"),{name:"slide-simple-example",data:function(){return{ifToggle:!1}},mounted:function(){document.querySelectorAll("pre code").forEach(function(e){hljs.highlightBlock(e)})},activated:function(){document.body.style.setProperty("--bodyBgColor","#44364F")}}),r=s,o=(n("b9c2"),n("2877")),l=Object(o["a"])(r,i,a,!1,null,"353bf4aa",null);t["default"]=l.exports},"426e":function(e,t,n){"use strict";n.r(t);var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"slide"},[n("h2",[e._v("Javascript Hooks")]),e._m(0),n("div",{staticClass:"container"},[n("button",{staticClass:"example-button",on:{click:function(t){e.show=!e.show}}},[e._v("toggle")]),n("div",{staticClass:"box-container"},[n("transition",{on:{"before-enter":e.beforeEnter,enter:e.enter,leave:e.leave}},[n("div",{directives:[{name:"show",rawName:"v-show",value:e.show,expression:"show"}],staticClass:"box"})])],1)]),n("pre-code",{tag:"textarea"},[e._v('<transition @before-enter="beforeEnter" @enter="enter" @leave="leave">\r\n  <div v-show="show" class="box"></div>\r\n</transition>\r\n')]),n("pre-code",{tag:"textarea",staticClass:"js"},[e._v("beforeEnter: function (el) {\r\n  el.style.bottom = '500px';\r\n  el.style.opacity = 0;\r\n},\r\nenter: function (el) {\r\n  TweenLite.to(el, 1, { ease: Bounce.easeOut, bottom: 0 });\r\n  TweenLite.to(el, 1, { opacity: 1 });\r\n},\r\nleave: function (el) {\r\n  TweenLite.to(el, 1, { ease: Bounce.easeIn, bottom: 500 });\r\n  TweenLite.to(el, 1, { opacity: 0 });\r\n}\r\n")])],1)},a=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",[e._v("Much like custom CSS transition classes, Vue provides for Javascript hooks to be used with a third-party animation library. This example uses "),n("a",{attrs:{href:"https://greensock.com/"}},[e._v("Greensock")]),e._v(".")])}],s=(n("ac6a"),{name:"slide-javascript-hooks",data:function(){return{show:!1}},methods:{beforeEnter:function(e){e.style.bottom="500px",e.style.opacity=0},enter:function(e){TweenLite.to(e,1,{ease:Bounce.easeOut,bottom:0}),TweenLite.to(e,1,{opacity:1})},leave:function(e){TweenLite.to(e,1,{ease:Bounce.easeIn,bottom:500}),TweenLite.to(e,1,{opacity:0})}},mounted:function(){document.querySelectorAll("pre code").forEach(function(e){hljs.highlightBlock(e)})},activated:function(){document.body.style.setProperty("--bodyBgColor","#422827")}}),r=s,o=(n("1d3b"),n("2877")),l=Object(o["a"])(r,i,a,!1,null,"163425c2",null);t["default"]=l.exports},"42b3":function(e,t,n){},"478b":function(e,t,n){},"54ec":function(e,t,n){"use strict";n.r(t);var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"slide"},[n("h2",[e._v("Named Transitions")]),n("p",[e._v("Transitions can be named, which will apply custom classes prefixed with the name instead of the default v-classes. This is how different transition effects can be pre-built and applied as needed.")]),n("h3",[e._v("Generic Transition")]),n("pre-code",{tag:"textarea",staticClass:"pre-top"},[e._v("<transition>")]),n("pre-code",{tag:"textarea",staticClass:"pre-bottom"},[e._v(".v-enter, .v-enter-to, .v-enter-active,\r\n.v-leave, .v-leave-to, .v-leave-active")]),n("h3",[e._v("Named Transition")]),n("pre-code",{tag:"textarea",staticClass:"pre-top"},[e._v('<transition name="homer">')]),n("pre-code",{tag:"textarea",staticClass:"pre-bottom"},[e._v(".homer-enter, .homer-enter-to, .homer-enter-active,\r\n.homer-leave, .homer-leave-to, .homer-leave-active")])],1)},a=[],s=(n("ac6a"),{name:"slide-named-transitions",mounted:function(){document.querySelectorAll("pre code").forEach(function(e){hljs.highlightBlock(e)})},activated:function(){document.body.style.setProperty("--bodyBgColor","#274231")}}),r=s,o=n("2877"),l=Object(o["a"])(r,i,a,!1,null,null,null);t["default"]=l.exports},"56d7":function(e,t,n){"use strict";n.r(t);n("a481"),n("ac6a"),n("cadf"),n("551c"),n("f751"),n("097d");var i,a,s=n("2b0e"),r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{class:[e.slides[e.currentSlide],{"dark-mode":e.isDark}],attrs:{id:"container"}},[n("options-panel",{ref:"options",attrs:{animations:e.animations,isActive:e.activateOptionsPanel,slides:e.slides,styles:e.styles}}),n("button",{staticClass:"fullscreen",class:{active:e.isFullscreen},on:{click:e.toggleFullscreen}},[n("span",{staticClass:"arrow upper-left"}),n("span",{staticClass:"arrow upper-right"}),n("span",{staticClass:"arrow lower-right"}),n("span",{staticClass:"arrow lower-left"})]),n("transition",{attrs:{name:e.slideAnimation,mode:"out-in",appear:""}},[n("keep-alive",[n(e.currentComponent,{tag:"component"})],1)],1),n("div",{attrs:{id:"panel"}},[n("button",{staticClass:"slide-button prev-slide",class:{active:e.prevActive},attrs:{disabled:0===e.currentSlide},on:{click:e.prevSlide}},[e._v("prev slide")]),n("div",{staticClass:"slides"},[e._v(e._s(e.currentSlide+1)+" of "+e._s(e.slides.length))]),n("button",{staticClass:"slide-button next-slide",class:{active:e.nextActive},attrs:{disabled:e.currentSlide===e.slides.length-1},on:{click:e.nextSlide}},[e._v("next slide")])])],1)},o=[],l=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{class:{active:e.isActive},attrs:{id:"options"}},[n("button",{staticClass:"toggle-panel",on:{click:e.togglePanel}},[e._v("?")]),n("button",{on:{click:e.toggleDark}},[e._v("toggle light/dark mode")]),n("label",{attrs:{for:"slides"}},[e._v("skip to slide...")]),n("select",{directives:[{name:"model",rawName:"v-model",value:e.slide,expression:"slide"}],staticClass:"slides",attrs:{id:"slides"},on:{change:[function(t){var n=Array.prototype.filter.call(t.target.options,function(e){return e.selected}).map(function(e){var t="_value"in e?e._value:e.value;return t});e.slide=t.target.multiple?n:n[0]},function(t){e.$root.$emit("options:skipToSlide",parseInt(t.target.value))}]}},e._l(e.slides,function(t,i){return n("option",{key:i,domProps:{value:i}},[e._v(e._s(t))])}),0),n("label",{attrs:{for:"animations"}},[e._v("choose slide transition...")]),n("select",{directives:[{name:"model",rawName:"v-model",value:e.animation,expression:"animation"}],staticClass:"slide-animation",attrs:{id:"animations"},on:{change:[function(t){var n=Array.prototype.filter.call(t.target.options,function(e){return e.selected}).map(function(e){var t="_value"in e?e._value:e.value;return t});e.animation=t.target.multiple?n:n[0]},function(t){return e.$root.$emit("options:changeSlideTransition",t.target.value)}]}},e._l(e.animations,function(t,i){return n("option",{key:i,domProps:{value:i}},[e._v(e._s(t))])}),0),n("label",{attrs:{for:"styles"}},[e._v("change code highlight to...")]),n("select",{directives:[{name:"model",rawName:"v-model",value:e.style,expression:"style"}],staticClass:"hljs-styles",attrs:{id:"styles"},on:{change:[function(t){var n=Array.prototype.filter.call(t.target.options,function(e){return e.selected}).map(function(e){var t="_value"in e?e._value:e.value;return t});e.style=t.target.multiple?n:n[0]},e.changeStyle]}},e._l(e.styles,function(t,i){return n("option",{key:i,domProps:{value:t}},[e._v(e._s(t))])}),0),n("label",{attrs:{for:"speeds"}},[e._v("change speed factor...")]),n("select",{directives:[{name:"model",rawName:"v-model",value:e.speedFactor,expression:"speedFactor"}],staticClass:"speeds",attrs:{id:"speeds"},on:{change:[function(t){var n=Array.prototype.filter.call(t.target.options,function(e){return e.selected}).map(function(e){var t="_value"in e?e._value:e.value;return t});e.speedFactor=t.target.multiple?n:n[0]},e.changeSpeed]}},e._l(e.speeds,function(t,i){return n("option",{key:i,domProps:{value:t.factor}},[e._v(e._s(t.display))])}),0)])},c=[],d={name:"options-panel",props:{animations:Array,isActive:Boolean,slides:Array,styles:Array},data:function(){return{slide:0,animation:1,style:"atom-one-dark-reasonable",speedFactor:1,baseFontSize:"10px",speeds:[{factor:0,display:"0%"},{factor:2,display:"50%"},{factor:1,display:"100%"},{factor:.5,display:"200%"}],sizes:[{size:"8px",display:"small"},{size:"10px",display:"normal"},{size:"12px",display:"large"}]}},methods:{changeSpeed:function(){document.body.style.setProperty("--speedFactor",this.speedFactor)},changeStyle:function(){var e=this,t=document.querySelectorAll(".hljs");t.forEach(function(t){t.getAttribute("title")===e.style?(t.setAttribute("rel","stylesheet"),t.disabled=!1):(t.setAttribute("rel","alternate stylesheet"),t.disabled=!0)})},toggleDark:function(){document.body.classList.toggle("dark-mode",this.darkMode)},togglePanel:function(){this.$parent.activateOptionsPanel=!this.$parent.activateOptionsPanel}}},u=d,p=(n("28cd"),n("2877")),v=Object(p["a"])(u,l,c,!1,null,"77b05d7a",null),m=v.exports,h={name:"app",components:{OptionsPanel:m},data:function(){return{activateOptionsPanel:!1,animations:["inout","fade","slide","rotate","spin"],currentComponent:"slide-title",currentSlide:0,isDark:!1,isFullscreen:!1,nextActive:!1,prevActive:!1,slides:["slide-title","slide-explanation","slide-simple-example","slide-applied-classes","slide-named-transitions","slide-dynamic-named-transitions","slide-css-library","slide-javascript-hooks","slide-list-transitions","slide-list-transitions-code","slide-control-speed","slide-credits"],styles:["an-old-hope","atom-one-dark-reasonable","codepen-embed","default","ir-black","railscasts","sunburst"],slideAnimation:"fade"}},methods:{nextSlide:function(){this.currentSlide<this.slides.length-1&&(this.currentSlide++,window.location.hash=this.slides[this.currentSlide],document.body.style.setProperty("--slideEnter","400px"),document.body.style.setProperty("--slideLeave","-400px"),document.body.style.setProperty("--slideZEnter","100px"),document.body.style.setProperty("--slideZLeave","-300px"),document.body.style.setProperty("--rotateEnter","90deg"),document.body.style.setProperty("--rotateLeave","-90deg"),document.body.style.setProperty("--spinEnter","180deg"),document.body.style.setProperty("--spinLeave","-180deg"))},prevSlide:function(){!this.currentSlide<=0&&(this.currentSlide--,window.location.hash=this.slides[this.currentSlide],document.body.style.setProperty("--slideEnter","-400px"),document.body.style.setProperty("--slideLeave","400px"),document.body.style.setProperty("--slideZEnter","-300px"),document.body.style.setProperty("--slideZLeave","100px"),document.body.style.setProperty("--rotateEnter","-90deg"),document.body.style.setProperty("--rotateLeave","90deg"),document.body.style.setProperty("--spinEnter","-180deg"),document.body.style.setProperty("--spinLeave","180deg"))},getHash:function(){var e=window.location.hash.replace(/^#/,""),t=this.slides.indexOf(e);t>-1&&(this.currentComponent=e,this.currentSlide=t,this.$refs.options&&(this.$refs.options.slide=t))},toggleFullscreen:function(){var e=document.querySelector("#container");this.isFullscreen=!this.isFullscreen,this.isFullscreen?e.requestFullscreen():document.exitFullscreen()}},mounted:function(){var e=this;this.getHash(),this.$root.$on("options:skipToSlide",function(t){e.currentSlide=t,window.location.hash=e.slides[e.currentSlide]}),this.$root.$on("options:changeSlideTransition",function(t){return e.slideAnimation=e.animations[t]}),window.addEventListener("hashchange",this.getHash),document.body.addEventListener("keyup",function(t){"ArrowRight"===t.key&&e.currentSlide<e.slides.length-1&&(e.nextActive=!0,e.nextSlide(),setTimeout(function(){e.nextActive=!1},500)),"ArrowLeft"===t.key&&!e.currentSlide<=0&&(e.prevActive=!0,e.prevSlide(),setTimeout(function(){e.prevActive=!1},500)),"d"===t.key&&(e.isDark=!e.isDark),"`"===t.key&&(e.activateOptionsPanel=!e.activateOptionsPanel)," "===t.key&&e.toggleFullscreen()})}},f=h,g=(n("5c0b"),Object(p["a"])(f,r,o,!1,null,null,null)),y=g.exports,b={name:"pre-code",render:function(e){return e("pre",[e("code",this.$slots.default)])}},_=b,x=(n("bcc3"),Object(p["a"])(_,i,a,!1,null,null,null)),k=x.exports,S=n("fdba");S.keys().forEach(function(e){var t=S(e);s["a"].component(e.replace(/^\.\/(.*)\.\w+$/,"$1"),t.default||t)}),s["a"].component("pre-code",k),s["a"].config.productionTip=!1,new s["a"]({render:function(e){return e(y)}}).$mount("#app")},5880:function(e,t,n){"use strict";var i=n("8154"),a=n.n(i);a.a},5941:function(e,t,n){"use strict";n.r(t);var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"slide"},[n("h2",[e._v("Control Transition Speed")]),n("pre-code",{tag:"textarea"},[e._v("body {\r\n  --speedFactor: 1;\r\n  --speedFast: calc(100ms * var(--speedFactor));\r\n  --speedNormal: calc(300ms * var(--speedFactor));\r\n  --speedSlow: calc(500ms * var(--speedFactor));\r\n}\r\n")]),n("pre-code",{tag:"textarea"},[e._v("changeSpeed: function () {\r\n  document.body.style.setProperty('--speedFactor', this.speedFactor)\r\n}\r\n")]),n("pre-code",{tag:"textarea"},[e._v(".fade-enter,\r\n.fade-leave-to { opacity: 0; }\r\n.fade-enter-active,\r\n.fade-leave-active { transition: var(--speedNormal); }\r\n")])],1)},a=[],s=(n("ac6a"),{name:"slide-control-speed",mounted:function(){document.querySelectorAll("pre code").forEach(function(e){hljs.highlightBlock(e)})},activated:function(){document.body.style.setProperty("--bodyBgColor","#422827")}}),r=s,o=n("2877"),l=Object(o["a"])(r,i,a,!1,null,"4df62b14",null);t["default"]=l.exports},"5c0b":function(e,t,n){"use strict";var i=n("5e27"),a=n.n(i);a.a},"5e27":function(e,t,n){},"5eef":function(e,t,n){e.exports=n.p+"img/008.705e8465.png"},"79d3":function(e,t,n){"use strict";n.r(t);var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"slide"},[n("h2",[e._v("What is the transition component?")]),n("pre-code",{tag:"textarea"},[e._v('<transition>\r\n  <div v-show="isHidden"></div>\r\n</transition>\r\n\r\n<transition>\r\n  <div v-if="isHidden" key="if"></div>\r\n  <div v-else key="else"></div>\r\n</transition>')]),n("p",[e._v("Vue provides a variety of ways to apply transition effects when items are inserted, updated, or removed from the DOM. This includes tools to:")]),e._m(0)],1)},a=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ul",[n("li",[e._v("automatically apply classes for CSS transitions and animations")]),n("li",[e._v("integrate 3rd-party CSS animation libraries, such as Animate.css")]),n("li",[e._v("use JavaScript to directly manipulate the DOM during transition hooks")]),n("li",[e._v("integrate 3rd-party JavaScript animation libraries, such as Greensock")])])}],s=(n("ac6a"),{name:"slide-explanation",mounted:function(){document.querySelectorAll("pre code").forEach(function(e){hljs.highlightBlock(e)})},activated:function(){document.body.style.setProperty("--bodyBgColor","#755E39")}}),r=s,o=n("2877"),l=Object(o["a"])(r,i,a,!1,null,null,null);t["default"]=l.exports},8031:function(e,t,n){e.exports=n.p+"img/transition.5990c1df.png"},8154:function(e,t,n){},8591:function(e,t,n){},"8a8e":function(e,t,n){e.exports=n.p+"img/000.2c8b48eb.png"},"8b0a":function(e,t,n){"use strict";n.r(t);var i=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"slide"},[i("h2",[e._v("How Classes Are Applied")]),i("transition",{attrs:{name:"fade",mode:"out-in"}},[e.hideHomer?i("div",{key:"noHomer",staticClass:"img-container"},[i("img",{attrs:{alt:"CSS classes graphic",src:n("8031"),width:"75%"}}),i("button",{staticClass:"example-button",on:{click:function(t){e.hideHomer=!e.hideHomer}}},[e._v("another example")])]):i("div",{key:"homer",staticClass:"img-container"},[i("img",{attrs:{alt:"homer appears",src:e.homerSlides[e.currentHomer].img,width:"75%"}}),i("div",{domProps:{innerHTML:e._s(e.homerSlides[e.currentHomer].text)}}),i("div",[i("button",{staticClass:"prev",attrs:{disabled:0===e.currentHomer},on:{click:function(t){e.currentHomer--}}},[e._v("‹")]),i("button",{staticClass:"next",attrs:{disabled:e.currentHomer===e.homerSlides.length-1},on:{click:function(t){e.currentHomer++}}},[e._v("›")])])])])],1)},a=[],s={img1:n("cc88"),img2:n("f5c4"),img3:n("ac7c"),img4:n("5eef"),img5:n("8a8e")},r={name:"slide-applied-classes",data:function(){return{hideHomer:!0,currentHomer:0,homerSlides:[{img:s.img1,text:"&nbsp;"},{img:s.img1,text:".homer-enter .homer-enter-active"},{img:s.img2,text:".homer-enter-to .homer-enter-active"},{img:s.img3,text:".homer-enter-to .homer-enter-active"},{img:s.img4,text:".homer-enter-to .homer-enter-active"},{img:s.img5,text:"&nbsp;"},{img:s.img5,text:".homer-leave .homer-leave-active"},{img:s.img4,text:".homer-leave-to .homer-leave-active"},{img:s.img3,text:".homer-leave-to .homer-leave-active"},{img:s.img2,text:".homer-leave-to .homer-leave-active"},{img:s.img1,text:"&nbsp;"}]}},activated:function(){document.body.style.setProperty("--bodyBgColor","#422827")}},o=r,l=(n("221b"),n("2877")),c=Object(l["a"])(o,i,a,!1,null,"7652d7e2",null);t["default"]=c.exports},"8d48":function(e,t,n){"use strict";n.r(t);var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"slide"},[n("h2",[e._v("Using a CSS Animation Library")]),e._m(0),n("div",{staticClass:"example"},[n("transition",{attrs:{"enter-active-class":"animated jackInTheBox","leave-active-class":"animated hinge",mode:"out-in"}},[e.elseToggle?n("div",{key:"if"},[e._v("v-if example")]):n("div",{key:"else"},[e._v("v-else example")])]),n("button",{staticClass:"example-button",on:{click:function(t){e.elseToggle=!e.elseToggle}}},[e._v("toggle v-if/v-else")])],1),n("pre-code",{tag:"textarea"},[e._v('<transition\r\n  name="custom-else-transitions"\r\n  enter-active-class="animated jackInTheBox"\r\n  leave-active-class="animated hinge"\r\n  mode="out-in"\r\n>\r\n  <div v-if="elseToggle" key="if">v-if example</div>\r\n  <div v-else key="else">v-else example</div>\r\n</transition>')]),n("p",[e._v("No further CSS is required as the library handles that for us. We simply just tie the Vue transition classes to the library's animation classes.")])],1)},a=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",[e._v("The transition element provides a means to use custom transition classes that allows for using a third-party css animation library. In this example we are using "),n("a",{attrs:{href:"https://daneden.github.io/animate.css/"}},[e._v("Animate.css")])])}],s=(n("ac6a"),{name:"slide-css-library",data:function(){return{ifToggle:!1,elseToggle:!0,test:"test"}},mounted:function(){document.querySelectorAll("pre code").forEach(function(e){hljs.highlightBlock(e)})},activated:function(){document.body.style.setProperty("--bodyBgColor","#44364f")}}),r=s,o=(n("b7b1"),n("2877")),l=Object(o["a"])(r,i,a,!1,null,"74fc859d",null);t["default"]=l.exports},"8f69":function(e,t,n){"use strict";var i=n("c486"),a=n.n(i);a.a},"9a57":function(e,t,n){"use strict";var i=n("42b3"),a=n.n(i);a.a},a31d:function(e,t,n){"use strict";n.r(t);var i=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},a=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"slide"},[n("h2",[e._v("Credits")]),n("p",[e._v("More Info:"),n("br"),n("a",{attrs:{href:"https://css-tricks.com/the-power-of-named-transitions-in-vue/"}},[e._v("CSS-Tricks: The Power of Named Transitions")]),n("br"),n("a",{attrs:{href:"https://css-tricks.com/integrating-third-party-animation-libraries-to-a-project/"}},[e._v("CSS-Tricks: Integrating Third-Party Animation Libraries to a Project")])]),n("p",[e._v("Technologies:"),n("br"),n("a",{attrs:{href:"https://cli.vuejs.org/"}},[e._v("Vue CLI")]),e._v(" | "),n("a",{attrs:{href:"https://vuejs.org/v2/api/#transition"}},[e._v("Transition Component")]),e._v(" | "),n("a",{attrs:{href:"https://vuejs.org/v2/api/#transition-group"}},[e._v("Transition-Group")]),n("br"),n("a",{attrs:{href:"https://vuejs.org/v2/api/#is"}},[e._v("Is Attribute")]),e._v(" | "),n("a",{attrs:{href:"https://vuejs.org/v2/guide/components.html#Dynamic-Components"}},[e._v("Dynamic Components")]),e._v(" | "),n("a",{attrs:{href:"http://sass-lang.com/"}},[e._v("SASS")])]),n("p",[e._v("Libraries:"),n("br"),n("a",{attrs:{href:"https://greensock.com/"}},[e._v("greensock")]),e._v(" | "),n("a",{attrs:{href:"https://daneden.github.io/animate.css/"}},[e._v("animate.css")]),e._v(" | "),n("a",{attrs:{href:"https://highlightjs.org/"}},[e._v("highlight.js")])]),n("p",[e._v("CSS/DOM Techniques:"),n("br"),n("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/transition"}},[e._v("Transition")]),e._v(" | "),n("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/--*"}},[e._v("Custom Properties (variables)")]),e._v(" | "),n("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Glossary/Flexbox"}},[e._v("Flexbox")]),e._v(" | "),n("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/transform"}},[e._v("Transform")]),e._v(" | "),n("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/API/Fullscreen_API/Guide"}},[e._v("Fullscreen API")])]),n("p",[e._v("Imagery:"),n("br"),n("a",{attrs:{href:"https://www.fox.com/the-simpsons/"}},[e._v("The Simpsons")]),e._v(" | "),n("a",{attrs:{href:"https://www.adultswim.com/videos/rick-and-morty"}},[e._v("Rick and Morty")])]),n("p",[e._v("Special Note:"),n("br"),n("a",{attrs:{href:"https://meyerweb.com/eric/thoughts/2014/06/19/rebeccapurple/"}},[e._v("#rebeccapurple")])])])}],s={name:"slide-credits",activated:function(){document.body.style.setProperty("--bodyBgColor","#755e39")}},r=s,o=(n("9a57"),n("2877")),l=Object(o["a"])(r,i,a,!1,null,"a52c1490",null);t["default"]=l.exports},ab85:function(e,t,n){},ac7c:function(e,t,n){e.exports=n.p+"img/016.ae790cac.png"},ae22:function(e,t,n){},ae7b:function(e){e.exports=[["Alabama","4849377","58059","49793","7","01"],["Alaska","736732","11221","4245","7","02"],["Arizona","6731484","86868","51748","7","04"],["Arkansas","2966369","38049","29231","7","05"],["California","38802500","505903","255787","7","06"],["Colorado","5355866","66284","34337","7","08"],["Connecticut","3596677","36499","29579","7","09"],["Delaware","935614","11134","8278","7","10"],["District of Columbia","658893","9647","5228","7","11"],["Florida","19893297","214567","187102","7","12"],["Georgia","10097343","129389","75557","7","13"],["Hawaii","1419561","19125","11482","7","15"],["Idaho","1634464","22945","11628","7","16"],["Illinois","12880580","157330","103766","7","17"],["Indiana","6596855","83206","58212","7","18"],["Iowa","3107126","38673","27706","7","19"],["Kansas","2904021","40001","24023","7","20"],["Kentucky","4413457","55221","42647","7","21"],["Louisiana","4649676","62349","42896","7","22"],["Maine","1330089","12662","13137","7","23"],["Maryland","5976407","73047","47373","7","24"],["Massachusetts","6745408","73248","55020","7","25"],["Michigan","9909877","112748","90366","7","26"],["Minnesota","5457173","68982","39728","7","27"],["Mississippi","2994079","38206","29573","7","28"],["Missouri","6063589","74988","56033","7","29"],["Montana","1023579","12243","9089","7","30"],["Nebraska","1881503","25961","14658","7","31"],["Nevada","2839099","35153","21702","7","32"],["New Hampshire","1326813","12338","10834","7","33"],["New Jersey","8938175","103440","71699","7","34"],["New Mexico","2085572","26805","16863","7","35"],["New York","19746227","240710","154357","7","36"],["North Carolina","9943964","120099","83750","7","37"],["North Dakota","739482","10780","5879","7","38"],["Ohio","11594163","137999","111233","7","39"],["Oklahoma","3878051","53091","37703","7","40"],["Oregon","3970239","45209","33295","7","41"],["Pennsylvania","12787209","142032","128600","7","42"],["Rhode Island","1055173","10918","9543","7","44"],["South Carolina","4832482","57401","44230","7","45"],["South Dakota","853175","12217","6893","7","46"],["Tennessee","6549352","80172","61664","7","47"],["Texas","26956958","386786","178395","7","48"],["Utah","2942902","51447","15306","7","49"],["Vermont","626562","6006","5238","7","50"],["Virginia","8326289","103597","62485","7","51"],["Washington","7061530","87995","52257","7","53"],["West Virginia","1850326","20466","21735","7","54"],["Wisconsin","5757564","66735","47602","7","55"],["Wyoming","584153","7626","4511","7","56"],["Puerto Rico Commonwealth","3548397","36479","28829","7","72"]]},b7b1:function(e,t,n){"use strict";var i=n("c341"),a=n.n(i);a.a},b9c2:function(e,t,n){"use strict";var i=n("ae22"),a=n.n(i);a.a},bcc3:function(e,t,n){"use strict";var i=n("ab85"),a=n.n(i);a.a},c341:function(e,t,n){},c486:function(e,t,n){},cc88:function(e,t,n){e.exports=n.p+"img/030.5ba309f1.png"},ce9f:function(e,t,n){"use strict";n.r(t);var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"slide"},[n("h2",[e._v("List Transitions")]),n("p",[e._v("So far only single items or switching from one item to another has been covered with the transition component.")]),n("p",[e._v("For a list of items the transition-group component can be used to animate changes in the list. Whether adding, removing, or sorting the items in the list, these changes can be animated. This allows for a more pleasing transition than items just popping in and out of existence.")]),n("div",{staticClass:"select-button"},[n("select",{directives:[{name:"model",rawName:"v-model",value:e.stateOption,expression:"stateOption"}],staticClass:"states-select",on:{change:function(t){var n=Array.prototype.filter.call(t.target.options,function(e){return e.selected}).map(function(e){var t="_value"in e?e._value:e.value;return t});e.stateOption=t.target.multiple?n:n[0]}}},[n("option",{attrs:{value:"",selected:"",disabled:"",hidden:""}},[e._v("choose a state...")]),e._l(e.populations,function(t,i){return n("option",{key:i},[e._v(e._s(t[0]))])})],2),n("button",{staticClass:"example-button",on:{click:e.selectClickHandler}},[e._v("select")]),n("button",{staticClass:"example-button negative",on:{click:function(t){e.states=[]}}},[e._v("clear")])]),n("transition-group",{staticClass:"states-list",attrs:{name:"list",tag:"ul"},on:{leave:e.listLeave}},[n("li",{key:"header",staticClass:"header"},[n("span",{class:{active:"s"===e.currentSort},on:{click:function(t){return e.sortStates(0)}}},[e._v("state")]),n("span",{class:{active:"p"===e.currentSort},on:{click:function(t){return e.sortStates(1)}}},[e._v("population")]),n("span",{class:{active:"b"===e.currentSort},on:{click:function(t){return e.sortStates(2)}}},[e._v("births")]),n("span",{class:{active:"d"===e.currentSort},on:{click:function(t){return e.sortStates(3)}}},[e._v("deaths")])]),e._l(e.states,function(t,i){return n("li",{key:t[5],staticClass:"list-item",attrs:{"data-index":i}},[n("span",[e._v(e._s(t[0]))]),n("span",[e._v(e._s(t[1]))]),n("span",[e._v(e._s(t[2]))]),n("span",[e._v(e._s(t[3]))])])})],2)],1)},a=[],s=(n("55dd"),n("7514"),n("ae7b")),r={name:"slide-list-transitions",data:function(){return{currentSortIndex:0,sorts:["s","p","b","d"],populations:s,stateOption:"",states:[]}},computed:{currentSort:function(){return this.sorts[this.currentSortIndex]}},methods:{listLeave:function(e){e.style.transitionDelay="".concat(.25*e.dataset.index,"s")},selectClickHandler:function(){var e=this,t=this.states.find(function(t){return t[0]===e.stateOption});if(!t){var n=this.populations.find(function(t){return t[0]===e.stateOption});this.states.push(n),this.sortStates(0)}},sortStates:function(e){this.currentSortIndex=e,this.states=this.states.sort(function(t,n){var i=e>0?parseInt(t[e]):t[e],a=e>0?parseInt(n[e]):n[e];return e>0?i-a:i.localeCompare(a)})}},activated:function(){document.body.style.setProperty("--bodyBgColor","#274231")}},o=r,l=(n("5880"),n("2877")),c=Object(l["a"])(o,i,a,!1,null,"7fa59b62",null);t["default"]=c.exports},cf05:function(e,t,n){e.exports=n.p+"img/logo.82b9c7a5.png"},d6c2:function(e,t,n){e.exports=n.p+"img/picklerick.3ceb7853.png"},f5c4:function(e,t,n){e.exports=n.p+"img/024.f71e2bb8.png"},fdba:function(e,t,n){var i={"./SlideAppliedClasses.vue":"8b0a","./SlideControlSpeed.vue":"5941","./SlideCredits.vue":"a31d","./SlideCssLibrary.vue":"8d48","./SlideDynamicNamedTransitions.vue":"0081","./SlideExplanation.vue":"79d3","./SlideJavascriptHooks.vue":"426e","./SlideListTransitions.vue":"ce9f","./SlideListTransitionsCode.vue":"3178","./SlideNamedTransitions.vue":"54ec","./SlideSimpleExample.vue":"4252","./SlideTitle.vue":"0162"};function a(e){var t=s(e);return n(t)}function s(e){var t=i[e];if(!(t+1)){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}return t}a.keys=function(){return Object.keys(i)},a.resolve=s,e.exports=a,a.id="fdba"}});
//# sourceMappingURL=app.a86fec6c.js.map