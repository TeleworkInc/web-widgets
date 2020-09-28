(function(){/*
 MIT */
'use strict';function aa(a){var b=0;return function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}}}function k(a){var b="undefined"!=typeof Symbol&&Symbol.iterator&&a[Symbol.iterator];return b?b.call(a):{next:aa(a)}}function n(a){if(!(a instanceof Array)){a=k(a);for(var b,c=[];!(b=a.next()).done;)c.push(b.value);a=c}return a}
var ba="function"==typeof Object.create?Object.create:function(a){function b(){}b.prototype=a;return new b},p="function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,c){if(a==Array.prototype||a==Object.prototype)return a;a[b]=c.value;return a};
function ca(a){a=["object"==typeof globalThis&&globalThis,a,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof global&&global];for(var b=0;b<a.length;++b){var c=a[b];if(c&&c.Math==Math)return c}throw Error("Cannot find global object");}var r=ca(this);function t(a,b){if(b)a:{var c=r;a=a.split(".");for(var d=0;d<a.length-1;d++){var h=a[d];if(!(h in c))break a;c=c[h]}a=a[a.length-1];d=c[a];b=b(d);b!=d&&null!=b&&p(c,a,{configurable:!0,writable:!0,value:b})}}var u;
if("function"==typeof Object.setPrototypeOf)u=Object.setPrototypeOf;else{var v;a:{var da={s:!0},ea={};try{ea.__proto__=da;v=ea.s;break a}catch(a){}v=!1}u=v?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}var fa=u;
function w(a,b){a.prototype=ba(b.prototype);a.prototype.constructor=a;if(fa)fa(a,b);else for(var c in b)if("prototype"!=c)if(Object.defineProperties){var d=Object.getOwnPropertyDescriptor(b,c);d&&Object.defineProperty(a,c,d)}else a[c]=b[c]}
t("Symbol",function(a){function b(h){if(this instanceof b)throw new TypeError("Symbol is not a constructor");return new c("jscomp_symbol_"+(h||"")+"_"+d++,h)}function c(h,l){this.a=h;p(this,"description",{configurable:!0,writable:!0,value:l})}if(a)return a;c.prototype.toString=function(){return this.a};var d=0;return b});
t("Symbol.iterator",function(a){if(a)return a;a=Symbol("Symbol.iterator");for(var b="Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "),c=0;c<b.length;c++){var d=r[b[c]];"function"===typeof d&&"function"!=typeof d.prototype[a]&&p(d.prototype,a,{configurable:!0,writable:!0,value:function(){return ha(aa(this))}})}return a});function ha(a){a={next:a};a[Symbol.iterator]=function(){return this};return a}
function x(a,b){return Object.prototype.hasOwnProperty.call(a,b)}
t("WeakMap",function(a){function b(e){this.a=(f+=Math.random()+1).toString();if(e){e=k(e);for(var g;!(g=e.next()).done;)g=g.value,this.set(g[0],g[1])}}function c(){}function d(e){var g=typeof e;return"object"===g&&null!==e||"function"===g}function h(e){if(!x(e,q)){var g=new c;p(e,q,{value:g})}}function l(e){var g=Object[e];g&&(Object[e]=function(m){if(m instanceof c)return m;Object.isExtensible(m)&&h(m);return g(m)})}if(function(){if(!a||!Object.seal)return!1;try{var e=Object.seal({}),g=Object.seal({}),
m=new a([[e,2],[g,3]]);if(2!=m.get(e)||3!=m.get(g))return!1;m.delete(e);m.set(g,4);return!m.has(e)&&4==m.get(g)}catch(F){return!1}}())return a;var q="$jscomp_hidden_"+Math.random();l("freeze");l("preventExtensions");l("seal");var f=0;b.prototype.set=function(e,g){if(!d(e))throw Error("Invalid WeakMap key");h(e);if(!x(e,q))throw Error("WeakMap key fail: "+e);e[q][this.a]=g;return this};b.prototype.get=function(e){return d(e)&&x(e,q)?e[q][this.a]:void 0};b.prototype.has=function(e){return d(e)&&x(e,
q)&&x(e[q],this.a)};b.prototype.delete=function(e){return d(e)&&x(e,q)&&x(e[q],this.a)?delete e[q][this.a]:!1};return b});
t("Map",function(a){function b(){var f={};return f.g=f.next=f.head=f}function c(f,e){var g=f.a;return ha(function(){if(g){for(;g.head!=f.a;)g=g.g;for(;g.next!=g.head;)return g=g.next,{done:!1,value:e(g)};g=null}return{done:!0,value:void 0}})}function d(f,e){var g=e&&typeof e;"object"==g||"function"==g?l.has(e)?g=l.get(e):(g=""+ ++q,l.set(e,g)):g="p_"+e;var m=f.c[g];if(m&&x(f.c,g))for(f=0;f<m.length;f++){var F=m[f];if(e!==e&&F.key!==F.key||e===F.key)return{id:g,list:m,index:f,f:F}}return{id:g,list:m,
index:-1,f:void 0}}function h(f){this.c={};this.a=b();this.size=0;if(f){f=k(f);for(var e;!(e=f.next()).done;)e=e.value,this.set(e[0],e[1])}}if(function(){if(!a||"function"!=typeof a||!a.prototype.entries||"function"!=typeof Object.seal)return!1;try{var f=Object.seal({x:4}),e=new a(k([[f,"s"]]));if("s"!=e.get(f)||1!=e.size||e.get({x:4})||e.set({x:4},"t")!=e||2!=e.size)return!1;var g=e.entries(),m=g.next();if(m.done||m.value[0]!=f||"s"!=m.value[1])return!1;m=g.next();return m.done||4!=m.value[0].x||
"t"!=m.value[1]||!g.next().done?!1:!0}catch(F){return!1}}())return a;var l=new WeakMap;h.prototype.set=function(f,e){f=0===f?0:f;var g=d(this,f);g.list||(g.list=this.c[g.id]=[]);g.f?g.f.value=e:(g.f={next:this.a,g:this.a.g,head:this.a,key:f,value:e},g.list.push(g.f),this.a.g.next=g.f,this.a.g=g.f,this.size++);return this};h.prototype.delete=function(f){f=d(this,f);return f.f&&f.list?(f.list.splice(f.index,1),f.list.length||delete this.c[f.id],f.f.g.next=f.f.next,f.f.next.g=f.f.g,f.f.head=null,this.size--,
!0):!1};h.prototype.clear=function(){this.c={};this.a=this.a.g=b();this.size=0};h.prototype.has=function(f){return!!d(this,f).f};h.prototype.get=function(f){return(f=d(this,f).f)&&f.value};h.prototype.entries=function(){return c(this,function(f){return[f.key,f.value]})};h.prototype.keys=function(){return c(this,function(f){return f.key})};h.prototype.values=function(){return c(this,function(f){return f.value})};h.prototype.forEach=function(f,e){for(var g=this.entries(),m;!(m=g.next()).done;)m=m.value,
f.call(e,m[1],m[0],this)};h.prototype[Symbol.iterator]=h.prototype.entries;var q=0;return h});
t("Set",function(a){function b(c){this.a=new Map;if(c){c=k(c);for(var d;!(d=c.next()).done;)this.add(d.value)}this.size=this.a.size}if(function(){if(!a||"function"!=typeof a||!a.prototype.entries||"function"!=typeof Object.seal)return!1;try{var c=Object.seal({x:4}),d=new a(k([c]));if(!d.has(c)||1!=d.size||d.add(c)!=d||1!=d.size||d.add({x:4})!=d||2!=d.size)return!1;var h=d.entries(),l=h.next();if(l.done||l.value[0]!=c||l.value[1]!=c)return!1;l=h.next();return l.done||l.value[0]==c||4!=l.value[0].x||
l.value[1]!=l.value[0]?!1:h.next().done}catch(q){return!1}}())return a;b.prototype.add=function(c){c=0===c?0:c;this.a.set(c,c);this.size=this.a.size;return this};b.prototype.delete=function(c){c=this.a.delete(c);this.size=this.a.size;return c};b.prototype.clear=function(){this.a.clear();this.size=0};b.prototype.has=function(c){return this.a.has(c)};b.prototype.entries=function(){return this.a.entries()};b.prototype.values=function(){return this.a.values()};b.prototype.keys=b.prototype.values;b.prototype[Symbol.iterator]=
b.prototype.values;b.prototype.forEach=function(c,d){var h=this;this.a.forEach(function(l){return c.call(d,l,l,h)})};return b});var ia="function"==typeof Object.assign?Object.assign:function(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(d)for(var h in d)x(d,h)&&(a[h]=d[h])}return a};t("Object.assign",function(a){return a||ia});t("Object.is",function(a){return a?a:function(b,c){return b===c?0!==b||1/b===1/c:b!==b&&c!==c}});
t("Array.prototype.includes",function(a){return a?a:function(b,c){var d=this;d instanceof String&&(d=String(d));var h=d.length;c=c||0;for(0>c&&(c=Math.max(c+h,0));c<h;c++){var l=d[c];if(l===b||Object.is(l,b))return!0}return!1}});
t("String.prototype.includes",function(a){return a?a:function(b,c){if(null==this)throw new TypeError("The 'this' value for String.prototype.includes must not be null or undefined");if(b instanceof RegExp)throw new TypeError("First argument to String.prototype.includes must not be a regular expression");return-1!==this.indexOf(b,c||0)}});
t("Array.from",function(a){return a?a:function(b,c,d){c=null!=c?c:function(f){return f};var h=[],l="undefined"!=typeof Symbol&&Symbol.iterator&&b[Symbol.iterator];if("function"==typeof l){b=l.call(b);for(var q=0;!(l=b.next()).done;)h.push(c.call(d,l.value,q++))}else for(l=b.length,q=0;q<l;q++)h.push(c.call(d,b[q],q));return h}});t("Object.entries",function(a){return a?a:function(b){var c=[],d;for(d in b)x(b,d)&&c.push([d,b[d]]);return c}});
function ja(a,b){a instanceof String&&(a+="");var c=0,d={next:function(){if(c<a.length){var h=c++;return{value:b(h,a[h]),done:!1}}d.next=function(){return{done:!0,value:void 0}};return d.next()}};d[Symbol.iterator]=function(){return d};return d}t("Array.prototype.keys",function(a){return a?a:function(){return ja(this,function(b){return b})}});if("undefined"===typeof goog){var ka={define:function(a,b){return b}};"undefined"!==typeof global?global.u=ka:"undefined"!==typeof window&&(window.u=ka)}
function la(){var a=document.createElement("style");a.id="ww-stylesheet";return a}var y=la(),ma=[];function na(a){for(var b=0;b<arguments.length;++b);}function z(a,b){if(b.name)return b.name;for(var c in a)if(a[c]===b)return c;return null};/*
 MIT
*/
function A(){this.l=this.constructor.a;this.c=Object.assign({},this.constructor.h);this.j=n(this.constructor.j).concat()}
r.Object.defineProperties(A,{a:{configurable:!0,enumerable:!0,get:function(){}},h:{configurable:!0,enumerable:!0,get:function(){return{}}},i:{configurable:!0,enumerable:!0,get:function(){return Object.getPrototypeOf(this).m||[]}},m:{configurable:!0,enumerable:!0,get:function(){var a=new Set([this].concat(n(this.i)));a=n(a).concat().filter(function(b){return b!==A});return n(a).concat()}},j:{configurable:!0,enumerable:!0,get:function(){var a=new Set(this.m.map(function(b){return b.name}));return n(a).concat()}}});
function B(a){for(var b=[],c=0;c<arguments.length;++c)b[c]=arguments[c];A.call(this);this.constructor.name in window||(window[this.constructor.name]=this.constructor);this.c.constructor=this.constructor.name;this.o=b;this.l=this.constructor.a||"w";this.i=""}w(B,A);B.b=function(){var a=this.name,b=this.c||"";y.sheet||document.head.appendChild(y);if(ma.includes(a))return na("Styles for",a,"already exported. Skipping.");b&&(y.sheet.insertRule("."+a+" {"+b+"}"),ma.push(a),this.i.forEach(function(c){return c.b()}))};
B.from=function(a){var b=this.name,c=a.getAttribute("constructor");if(c&&b!==c)return b=window[c],b[z(b,b.from)](a);b=new this;c={};var d=["class","style"];b.element=a;b.l=a.tagName.toLowerCase();b.j=Array.from(a.classList);a=k(a.attributes);for(var h=a.next();!h.done;h=a.next()){h=h.value;var l=k([h.name,h.value]);h=l.next().value;l=l.next().value;d.includes(h)||(c[h]=l)}C(b,c);return b};
function oa(a,b){switch(typeof b){case "string":b=new D(b)}var c=pa(a).element;b=pa(b).element;c.appendChild(b);return a}function qa(a){if(a.c)for(var b=k(Object.entries(a.c)),c=b.next();!c.done;c=b.next()){var d=k(c.value);c=d.next().value;d=d.next().value;window.a&&"constructor"===c||a.element.setAttribute(c,d)}return a}function ra(a){var b=a.j;b.length&&(a.element.className=b.join(" "));return a}function sa(a){a.i&&a.element.setAttribute("style",a.i)}function pa(a){a.element||a.a();return a}
B.prototype.a=function(){var a=this;this.constructor.b();sa(ra(qa(ta(this,document.createElement(this.l)))));this.o.length&&this.o.forEach(function(b){return oa(a,b)});return this};B.prototype.freeze=function(){return"<!DOCTYPE html>"+this.a().v};B.prototype.h=function(){};function ta(a,b){a.element?a.element.replaceWith(b):a.element=b;return a}
function C(a,b){b=void 0===b?{}:b;for(var c=k(Object.keys(b)),d=c.next();!d.done;d=c.next()){d=d.value;var h=b[d];null===h?delete a.c[d]:a.c[d]=h}return a}r.Object.defineProperties(B.prototype,{v:{configurable:!0,enumerable:!0,get:function(){return this.element.outerHTML}}});r.Object.defineProperties(B,{c:{configurable:!0,enumerable:!0,get:function(){return"\n      box-sizing: border-box;\n    "}}});function E(){B.apply(this,arguments)}w(E,B);E.from=B.from;E.b=B.b;
E.prototype.a=function(){B.prototype.a.call(this);var a=document.createElement("script"),b=this.constructor;a.appendChild(document.createTextNode("(function(){var el=document.currentScript.parentNode;requestAnimationFrame(function(){"+b.name+("."+z(b,b.from)+"(el).")+(z(b.prototype,b.prototype.h)+"();});})();")));this.element.appendChild(a);return this};E.prototype.h=function(){};function D(a){B.call(this);this.text=a}w(D,B);D.from=B.from;D.b=B.b;D.prototype.a=function(){return ta(this,document.createTextNode(this.text))};function G(){B.apply(this,arguments)}w(G,B);G.from=B.from;G.b=B.b;r.Object.defineProperties(G,{c:{configurable:!0,enumerable:!0,get:function(){return"\n            display: block;\n        "}}});function H(){B.apply(this,arguments)}w(H,B);H.from=B.from;H.b=B.b;r.Object.defineProperties(H,{c:{configurable:!0,enumerable:!0,get:function(){return"\n            display: flex;\n            flex-direction: column;\n            align-items: center;\n        "}}});function I(){H.apply(this,arguments)}
w(I,H);I.from=H.from;I.b=H.b;r.Object.defineProperties(I,{c:{configurable:!0,enumerable:!0,get:function(){return"\n      flex-basis: 0;\n      flex-grow: 1;\n      flex-shrink: 0;\n\n      width: 100%;\n      height: 100%;\n\n      max-height: 100%;\n      max-height: -moz-available;\n      max-height: -webkit-fill-available;\n      max-height: fill-available;\n\n      margin: 0px;\n      padding: 0px;\n    "}}});function J(){E.apply(this,arguments)}w(J,E);J.from=E.from;J.b=E.b;
J.prototype.h=function(){E.prototype.h.call(this);this.element.style.opacity=1};r.Object.defineProperties(J,{c:{configurable:!0,enumerable:!0,get:function(){return"\n            opacity: 0;\n            transition: opacity 0.5s ease-in-out;\n        "}}});function K(){B.apply(this,arguments)}w(K,B);K.from=B.from;K.b=B.b;K.prototype.a=function(){this.j=[];B.prototype.a.call(this);return this};function L(){K.apply(this,arguments)}w(L,K);L.from=K.from;L.b=K.b;
L.prototype.a=function(){K.prototype.a.call(this);oa(this,C(new M("exports/exe.namespace.js","dist/exe.namespace.js"),{defer:null}));return this};r.Object.defineProperties(L,{a:{configurable:!0,enumerable:!0,get:function(){return"head"}}});function N(){K.apply(this,arguments)}w(N,K);N.from=K.from;N.b=K.b;r.Object.defineProperties(N,{a:{configurable:!0,enumerable:!0,get:function(){return"title"}}});function O(a){a=void 0===a?{}:a;K.call(this);C(this,a)}w(O,K);O.from=K.from;O.b=K.b;
r.Object.defineProperties(O,{a:{configurable:!0,enumerable:!0,get:function(){return"link"}},h:{configurable:!0,enumerable:!0,get:function(){return{rel:"stylesheet"}}}});function P(a){C((K.call(this),this),a)}w(P,K);P.from=K.from;P.b=K.b;r.Object.defineProperties(P,{a:{configurable:!0,enumerable:!0,get:function(){return"meta"}}});function Q(a){for(var b=[],c=0;c<arguments.length;++c)b[c]=arguments[c];B.apply(this,n(b).concat())}w(Q,B);Q.from=B.from;Q.b=B.b;
Q.prototype.a=function(){B.prototype.a.call(this);for(var a=la(),b=k(y.sheet.cssRules),c=b.next();!c.done;c=b.next())a.textContent+=c.value.cssText;this.element.querySelector("head").appendChild(a);return this};r.Object.defineProperties(Q,{a:{configurable:!0,enumerable:!0,get:function(){return"html"}},c:{configurable:!0,enumerable:!0,get:function(){return"\n    -webkit-font-smoothing: antialiased;\n    scroll-behavior: smooth;\n    font-size: 100%;\n    height: 100%;\n    width: 100%;\n    padding: 0;\n    margin: 0;\n"}}});
function R(){J.apply(this,arguments)}w(R,J);R.from=J.from;R.b=J.b;r.Object.defineProperties(R,{a:{configurable:!0,enumerable:!0,get:function(){return"body"}},c:{configurable:!0,enumerable:!0,get:function(){return"\n    -webkit-font-smoothing: antialiased;\n    scroll-behavior: smooth;\n    font-size: 100%;\n    height: 100%;\n    width: 100%;\n    padding: 0;\n    margin: 0;\n"}}});function S(a){a=void 0===a?{href:""}:a;B.call(this);this.c=a}w(S,B);S.from=B.from;S.b=B.b;
S.prototype.a=function(){B.prototype.a.call(this);this.element=document.createDocumentFragment();var a=new O(Object.assign({},{rel:"preload",as:"style",onload:"this.onload=null;this.rel='stylesheet'"},this.c)),b=new T(new O(Object.assign({},this.c)));this.element.appendChild(a.a().element);this.element.appendChild(b.a().element);return this};
function U(a,b){b=void 0===b?[300,400,700]:b;S.call(this,{href:"https://fonts.googleapis.com/css2?family="+(void 0===a?"Lato":a).replace(" ","+")+":wght@"+b.join(";")+"&display=swap"})}w(U,S);U.from=S.from;U.b=S.b;function T(){K.apply(this,arguments)}w(T,K);T.from=K.from;T.b=K.b;r.Object.defineProperties(T,{a:{configurable:!0,enumerable:!0,get:function(){return"NoScript"}}});function V(){K.apply(this,arguments)}w(V,K);V.from=K.from;V.b=K.b;
r.Object.defineProperties(V,{a:{configurable:!0,enumerable:!0,get:function(){return"script"}}});function M(a,b){V.call(this);C(this,{src:b,defer:!0})}w(M,V);M.from=V.from;M.b=V.b;var ua=[new P({"http-equiv":"Content-Type",content:"text/html; charset=UTF-8"}),new P({"http-equiv":"X-UA-Compatible",content:"IE=edge,chrome=1"}),new P({name:"viewport",content:"width=device-width, initial-scale=1.0"})];function W(a){for(var b=[],c=0;c<arguments.length;++c)b[c]=arguments[c];L.apply(this,n(ua).concat(n(b)))}w(W,L);W.from=L.from;W.b=L.b;function X(){E.apply(this,arguments)}w(X,E);X.from=E.from;X.b=E.b;
X.prototype.h=function(){var a=this,b=Math.max(document.body.scrollHeight,document.documentElement.scrollHeight,document.body.offsetHeight,document.documentElement.offsetHeight,document.body.clientHeight,document.documentElement.clientHeight),c=Math.max(document.body.clientHeight,document.documentElement.clientHeight),d=!1;document.addEventListener("scroll",function(){if(!d){d=!0;var h=window.pageYOffset;requestAnimationFrame(function(){a.element.style.setProperty("width",100*h/(b-c)+"%");setTimeout(function(){return d=
!1},0)})}},{passive:!0})};r.Object.defineProperties(X,{c:{configurable:!0,enumerable:!0,get:function(){return"\n      will-change: transform;\n      transform: translateZ(0);\n      -webkit-transform-style: preserve-3d;\n      -webkit-backface-visibility: hidden;\n\n      position: fixed;\n      background: #009688;\n      height: 24px;\n      width: 0%;\n      max-width: 100%;\n      \n      top: 0;\n      left: 0;\n    "}}});function Y(){G.apply(this,arguments)}w(Y,G);Y.from=G.from;Y.b=G.b;
r.Object.defineProperties(Y,{c:{configurable:!0,enumerable:!0,get:function(){return"\n      height: 100%;\n      max-width: 768px;\n      margin: 0 auto;\n    "}}});var va=new W(new N("Test Title"),new U("Playfair Display",[900]),new U("Libre Baskerville",[700]),new U("Raleway",[700]),new S({href:"https://fonts.googleapis.com/icon?family=Material+Icons&display=block"})),wa=new X,Z=new I;Z.i+="background: #555";new Q(va,new R(wa,new Y(Z,new I)));window.c=[];}).call(this);
