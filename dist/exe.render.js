(function(){/*
 MIT  MIT
*/
'use strict';function aa(a){var b=0;return function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}}}function k(a){var b="undefined"!=typeof Symbol&&Symbol.iterator&&a[Symbol.iterator];return b?b.call(a):{next:aa(a)}}function n(a){if(!(a instanceof Array)){a=k(a);for(var b,c=[];!(b=a.next()).done;)c.push(b.value);a=c}return a}
var ba="function"==typeof Object.create?Object.create:function(a){function b(){}b.prototype=a;return new b},p="function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,c){if(a==Array.prototype||a==Object.prototype)return a;a[b]=c.value;return a};
function ca(a){a=["object"==typeof globalThis&&globalThis,a,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof global&&global];for(var b=0;b<a.length;++b){var c=a[b];if(c&&c.Math==Math)return c}throw Error("Cannot find global object");}var r=ca(this);function t(a,b){if(b)a:{var c=r;a=a.split(".");for(var d=0;d<a.length-1;d++){var g=a[d];if(!(g in c))break a;c=c[g]}a=a[a.length-1];d=c[a];b=b(d);b!=d&&null!=b&&p(c,a,{configurable:!0,writable:!0,value:b})}}var u;
if("function"==typeof Object.setPrototypeOf)u=Object.setPrototypeOf;else{var v;a:{var da={u:!0},ea={};try{ea.__proto__=da;v=ea.u;break a}catch(a){}v=!1}u=v?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}var fa=u;
function w(a,b){a.prototype=ba(b.prototype);a.prototype.constructor=a;if(fa)fa(a,b);else for(var c in b)if("prototype"!=c)if(Object.defineProperties){var d=Object.getOwnPropertyDescriptor(b,c);d&&Object.defineProperty(a,c,d)}else a[c]=b[c]}
t("Symbol",function(a){function b(g){if(this instanceof b)throw new TypeError("Symbol is not a constructor");return new c("jscomp_symbol_"+(g||"")+"_"+d++,g)}function c(g,l){this.a=g;p(this,"description",{configurable:!0,writable:!0,value:l})}if(a)return a;c.prototype.toString=function(){return this.a};var d=0;return b});
t("Symbol.iterator",function(a){if(a)return a;a=Symbol("Symbol.iterator");for(var b="Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "),c=0;c<b.length;c++){var d=r[b[c]];"function"===typeof d&&"function"!=typeof d.prototype[a]&&p(d.prototype,a,{configurable:!0,writable:!0,value:function(){return ha(aa(this))}})}return a});function ha(a){a={next:a};a[Symbol.iterator]=function(){return this};return a}
function x(a,b){return Object.prototype.hasOwnProperty.call(a,b)}
t("WeakMap",function(a){function b(e){this.a=(f+=Math.random()+1).toString();if(e){e=k(e);for(var h;!(h=e.next()).done;)h=h.value,this.set(h[0],h[1])}}function c(){}function d(e){var h=typeof e;return"object"===h&&null!==e||"function"===h}function g(e){if(!x(e,q)){var h=new c;p(e,q,{value:h})}}function l(e){var h=Object[e];h&&(Object[e]=function(m){if(m instanceof c)return m;Object.isExtensible(m)&&g(m);return h(m)})}if(function(){if(!a||!Object.seal)return!1;try{var e=Object.seal({}),h=Object.seal({}),
m=new a([[e,2],[h,3]]);if(2!=m.get(e)||3!=m.get(h))return!1;m.delete(e);m.set(h,4);return!m.has(e)&&4==m.get(h)}catch(H){return!1}}())return a;var q="$jscomp_hidden_"+Math.random();l("freeze");l("preventExtensions");l("seal");var f=0;b.prototype.set=function(e,h){if(!d(e))throw Error("Invalid WeakMap key");g(e);if(!x(e,q))throw Error("WeakMap key fail: "+e);e[q][this.a]=h;return this};b.prototype.get=function(e){return d(e)&&x(e,q)?e[q][this.a]:void 0};b.prototype.has=function(e){return d(e)&&x(e,
q)&&x(e[q],this.a)};b.prototype.delete=function(e){return d(e)&&x(e,q)&&x(e[q],this.a)?delete e[q][this.a]:!1};return b});
t("Map",function(a){function b(){var f={};return f.h=f.next=f.head=f}function c(f,e){var h=f.a;return ha(function(){if(h){for(;h.head!=f.a;)h=h.h;for(;h.next!=h.head;)return h=h.next,{done:!1,value:e(h)};h=null}return{done:!0,value:void 0}})}function d(f,e){var h=e&&typeof e;"object"==h||"function"==h?l.has(e)?h=l.get(e):(h=""+ ++q,l.set(e,h)):h="p_"+e;var m=f.c[h];if(m&&x(f.c,h))for(f=0;f<m.length;f++){var H=m[f];if(e!==e&&H.key!==H.key||e===H.key)return{id:h,list:m,index:f,f:H}}return{id:h,list:m,
index:-1,f:void 0}}function g(f){this.c={};this.a=b();this.size=0;if(f){f=k(f);for(var e;!(e=f.next()).done;)e=e.value,this.set(e[0],e[1])}}if(function(){if(!a||"function"!=typeof a||!a.prototype.entries||"function"!=typeof Object.seal)return!1;try{var f=Object.seal({x:4}),e=new a(k([[f,"s"]]));if("s"!=e.get(f)||1!=e.size||e.get({x:4})||e.set({x:4},"t")!=e||2!=e.size)return!1;var h=e.entries(),m=h.next();if(m.done||m.value[0]!=f||"s"!=m.value[1])return!1;m=h.next();return m.done||4!=m.value[0].x||
"t"!=m.value[1]||!h.next().done?!1:!0}catch(H){return!1}}())return a;var l=new WeakMap;g.prototype.set=function(f,e){f=0===f?0:f;var h=d(this,f);h.list||(h.list=this.c[h.id]=[]);h.f?h.f.value=e:(h.f={next:this.a,h:this.a.h,head:this.a,key:f,value:e},h.list.push(h.f),this.a.h.next=h.f,this.a.h=h.f,this.size++);return this};g.prototype.delete=function(f){f=d(this,f);return f.f&&f.list?(f.list.splice(f.index,1),f.list.length||delete this.c[f.id],f.f.h.next=f.f.next,f.f.next.h=f.f.h,f.f.head=null,this.size--,
!0):!1};g.prototype.clear=function(){this.c={};this.a=this.a.h=b();this.size=0};g.prototype.has=function(f){return!!d(this,f).f};g.prototype.get=function(f){return(f=d(this,f).f)&&f.value};g.prototype.entries=function(){return c(this,function(f){return[f.key,f.value]})};g.prototype.keys=function(){return c(this,function(f){return f.key})};g.prototype.values=function(){return c(this,function(f){return f.value})};g.prototype.forEach=function(f,e){for(var h=this.entries(),m;!(m=h.next()).done;)m=m.value,
f.call(e,m[1],m[0],this)};g.prototype[Symbol.iterator]=g.prototype.entries;var q=0;return g});
t("Set",function(a){function b(c){this.a=new Map;if(c){c=k(c);for(var d;!(d=c.next()).done;)this.add(d.value)}this.size=this.a.size}if(function(){if(!a||"function"!=typeof a||!a.prototype.entries||"function"!=typeof Object.seal)return!1;try{var c=Object.seal({x:4}),d=new a(k([c]));if(!d.has(c)||1!=d.size||d.add(c)!=d||1!=d.size||d.add({x:4})!=d||2!=d.size)return!1;var g=d.entries(),l=g.next();if(l.done||l.value[0]!=c||l.value[1]!=c)return!1;l=g.next();return l.done||l.value[0]==c||4!=l.value[0].x||
l.value[1]!=l.value[0]?!1:g.next().done}catch(q){return!1}}())return a;b.prototype.add=function(c){c=0===c?0:c;this.a.set(c,c);this.size=this.a.size;return this};b.prototype.delete=function(c){c=this.a.delete(c);this.size=this.a.size;return c};b.prototype.clear=function(){this.a.clear();this.size=0};b.prototype.has=function(c){return this.a.has(c)};b.prototype.entries=function(){return this.a.entries()};b.prototype.values=function(){return this.a.values()};b.prototype.keys=b.prototype.values;b.prototype[Symbol.iterator]=
b.prototype.values;b.prototype.forEach=function(c,d){var g=this;this.a.forEach(function(l){return c.call(d,l,l,g)})};return b});var ia="function"==typeof Object.assign?Object.assign:function(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(d)for(var g in d)x(d,g)&&(a[g]=d[g])}return a};t("Object.assign",function(a){return a||ia});t("Object.is",function(a){return a?a:function(b,c){return b===c?0!==b||1/b===1/c:b!==b&&c!==c}});
t("Array.prototype.includes",function(a){return a?a:function(b,c){var d=this;d instanceof String&&(d=String(d));var g=d.length;c=c||0;for(0>c&&(c=Math.max(c+g,0));c<g;c++){var l=d[c];if(l===b||Object.is(l,b))return!0}return!1}});
t("String.prototype.includes",function(a){return a?a:function(b,c){if(null==this)throw new TypeError("The 'this' value for String.prototype.includes must not be null or undefined");if(b instanceof RegExp)throw new TypeError("First argument to String.prototype.includes must not be a regular expression");return-1!==this.indexOf(b,c||0)}});
t("Array.from",function(a){return a?a:function(b,c,d){c=null!=c?c:function(f){return f};var g=[],l="undefined"!=typeof Symbol&&Symbol.iterator&&b[Symbol.iterator];if("function"==typeof l){b=l.call(b);for(var q=0;!(l=b.next()).done;)g.push(c.call(d,l.value,q++))}else for(l=b.length,q=0;q<l;q++)g.push(c.call(d,b[q],q));return g}});t("Object.entries",function(a){return a?a:function(b){var c=[],d;for(d in b)x(b,d)&&c.push([d,b[d]]);return c}});
function ja(a,b){a instanceof String&&(a+="");var c=0,d={next:function(){if(c<a.length){var g=c++;return{value:b(g,a[g]),done:!1}}d.next=function(){return{done:!0,value:void 0}};return d.next()}};d[Symbol.iterator]=function(){return d};return d}t("Array.prototype.keys",function(a){return a?a:function(){return ja(this,function(b){return b})}});if("undefined"===typeof goog){var ka={define:function(a,b){return b}};"undefined"!==typeof global?global.v=ka:"undefined"!==typeof window&&(window.v=ka)}
function la(){var a=document.createElement("style");a.id="ww-stylesheet";return a}var y=la(),ma=[];function na(a){for(var b=0;b<arguments.length;++b);}function oa(a,b){if(b.name)return b.name;for(var c in a)if(a[c]===b)return c;return null}function z(){this.l=this.constructor.a;this.c=Object.assign({},this.constructor.g);this.j=n(this.constructor.j).concat()}
r.Object.defineProperties(z,{a:{configurable:!0,enumerable:!0,get:function(){}},g:{configurable:!0,enumerable:!0,get:function(){return{}}},i:{configurable:!0,enumerable:!0,get:function(){return Object.getPrototypeOf(this).m||[]}},m:{configurable:!0,enumerable:!0,get:function(){var a=new Set([this].concat(n(this.i)));a=n(a).concat().filter(function(b){return b!==z});return n(a).concat()}},j:{configurable:!0,enumerable:!0,get:function(){var a=new Set(this.m.map(function(b){return b.name}));return n(a).concat()}}});
function A(a){for(var b=[],c=0;c<arguments.length;++c)b[c]=arguments[c];z.call(this);this.constructor.name in window||(window[this.constructor.name]=this.constructor);this.c.constructor=this.constructor.name;this.o=b;this.l=this.constructor.a||"w";this.i=""}w(A,z);A.b=function(){var a=this.name,b=this.c||"";y.sheet||document.head.appendChild(y);if(ma.includes(a))return na("Styles for",a,"already exported. Skipping.");b&&(y.sheet.insertRule("."+a+" {"+b+"}"),ma.push(a),this.i.forEach(function(c){return c.b()}))};
A.from=function(a){var b=this.name,c=a.getAttribute("constructor");if(c&&b!==c)return b=window[c],b[oa(b,b.from)](a);b=new this;c={};var d=["class","style"];b.element=a;b.l=a.tagName.toLowerCase();b.j=Array.from(a.classList);a=k(a.attributes);for(var g=a.next();!g.done;g=a.next()){g=g.value;var l=k([g.name,g.value]);g=l.next().value;l=l.next().value;d.includes(g)||(c[g]=l)}B(b,c);return b};
function pa(a,b){switch(typeof b){case "string":b=new C(b)}var c=D(a).element;b=D(b).element;c.appendChild(b);return a}function qa(a){if(a.c)for(var b=k(Object.entries(a.c)),c=b.next();!c.done;c=b.next()){var d=k(c.value);c=d.next().value;d=d.next().value;window.a&&"constructor"===c||a.element.setAttribute(c,d)}return a}function ra(a){var b=a.j;b.length&&(a.element.className=b.join(" "));return a}function sa(a){a.i&&a.element.setAttribute("style",a.i)}function D(a){a.element||a.a();return a}
A.prototype.a=function(){var a=this;this.constructor.b();sa(ra(qa(ta(this,document.createElement(this.l)))));this.o.length&&this.o.forEach(function(b){return pa(a,b)});return this};A.prototype.freeze=function(){return"<!DOCTYPE html>"+this.a().A};A.prototype.g=function(){};A.prototype.s=function(){var a=void 0===a?this.element:a;D(this);a.replaceWith(this.element)};function ta(a,b){a.element?a.element.replaceWith(b):a.element=b;return a}
function B(a,b){b=void 0===b?{}:b;for(var c=k(Object.keys(b)),d=c.next();!d.done;d=c.next()){d=d.value;var g=b[d];null===g?delete a.c[d]:a.c[d]=g}return a}A.prototype.B=function(a){for(var b=[],c=0;c<arguments.length;++c)b[c]=arguments[c];b=k(b);for(c=b.next();!c.done;c=b.next())this.i+=c.value;return this};r.Object.defineProperties(A.prototype,{A:{configurable:!0,enumerable:!0,get:function(){return this.element.outerHTML}}});r.Object.defineProperties(A,{c:{configurable:!0,enumerable:!0,get:function(){return"\n      box-sizing: border-box;\n    "}}});
function E(){A.apply(this,arguments)}w(E,A);E.from=A.from;E.b=A.b;E.prototype.a=function(){A.prototype.a.call(this);var a=document.createElement("script"),b=this.constructor;a.appendChild(document.createTextNode("(function(){var el=document.currentScript.parentNode;requestAnimationFrame(function(){"+b.name+("."+oa(b,b.from)+"(el).")+(oa(b.prototype,b.prototype.g)+"();});})();")));this.element.appendChild(a);return this};E.prototype.g=function(){};function C(a){A.call(this);this.text=a}w(C,A);
C.from=A.from;C.b=A.b;C.prototype.a=function(){return ta(this,document.createTextNode(this.text))};function F(){A.apply(this,arguments)}w(F,A);F.from=A.from;F.b=A.b;r.Object.defineProperties(F,{c:{configurable:!0,enumerable:!0,get:function(){return"\n            display: block;\n        "}}});function G(){A.apply(this,arguments)}w(G,A);G.from=A.from;G.b=A.b;r.Object.defineProperties(G,{c:{configurable:!0,enumerable:!0,get:function(){return"\n            display: flex;\n            flex-direction: column;\n            align-items: center;\n        "}}});
function I(){G.apply(this,arguments)}w(I,G);I.from=G.from;I.b=G.b;r.Object.defineProperties(I,{c:{configurable:!0,enumerable:!0,get:function(){return"\n      flex-basis: 0;\n      flex-grow: 1;\n      flex-shrink: 0;\n\n      width: 100%;\n      height: 100%;\n\n      max-height: 100%;\n      max-height: -moz-available;\n      max-height: -webkit-fill-available;\n      max-height: fill-available;\n\n      margin: 0px;\n      padding: 0px;\n    "}}});function J(){E.apply(this,arguments)}w(J,E);
J.from=E.from;J.b=E.b;J.prototype.g=function(){E.prototype.g.call(this);this.element.style.opacity=1};r.Object.defineProperties(J,{c:{configurable:!0,enumerable:!0,get:function(){return"\n            opacity: 0;\n            transition: opacity 0.5s ease-in-out;\n        "}}});function K(){A.apply(this,arguments)}w(K,A);K.from=A.from;K.b=A.b;K.prototype.a=function(){this.j=[];A.prototype.a.call(this);return this};function L(){K.apply(this,arguments)}w(L,K);L.from=K.from;L.b=K.b;
L.prototype.a=function(){K.prototype.a.call(this);pa(this,B(new M("exports/exe.namespace.js","dist/exe.namespace.js"),{defer:null}));return this};r.Object.defineProperties(L,{a:{configurable:!0,enumerable:!0,get:function(){return"head"}}});function N(){K.apply(this,arguments)}w(N,K);N.from=K.from;N.b=K.b;r.Object.defineProperties(N,{a:{configurable:!0,enumerable:!0,get:function(){return"title"}}});function O(a){a=void 0===a?{}:a;K.call(this);B(this,a)}w(O,K);O.from=K.from;O.b=K.b;
r.Object.defineProperties(O,{a:{configurable:!0,enumerable:!0,get:function(){return"link"}},g:{configurable:!0,enumerable:!0,get:function(){return{rel:"stylesheet"}}}});function P(a){B((K.call(this),this),a)}w(P,K);P.from=K.from;P.b=K.b;r.Object.defineProperties(P,{a:{configurable:!0,enumerable:!0,get:function(){return"meta"}}});function Q(a){for(var b=[],c=0;c<arguments.length;++c)b[c]=arguments[c];A.apply(this,n(b).concat())}w(Q,A);Q.from=A.from;Q.b=A.b;
Q.prototype.a=function(){A.prototype.a.call(this);for(var a=la(),b=k(y.sheet.cssRules),c=b.next();!c.done;c=b.next())a.textContent+=c.value.cssText;this.element.querySelector("head").appendChild(a);return this};Q.prototype.s=function(){document.documentElement.replaceWith(D(this).element||"ERROR")};r.Object.defineProperties(Q,{a:{configurable:!0,enumerable:!0,get:function(){return"html"}},c:{configurable:!0,enumerable:!0,get:function(){return"\n    -webkit-font-smoothing: antialiased;\n    scroll-behavior: smooth;\n    font-size: 100%;\n    height: 100%;\n    width: 100%;\n    padding: 0;\n    margin: 0;\n"}}});
function R(){J.apply(this,arguments)}w(R,J);R.from=J.from;R.b=J.b;r.Object.defineProperties(R,{a:{configurable:!0,enumerable:!0,get:function(){return"body"}},c:{configurable:!0,enumerable:!0,get:function(){return"\n    -webkit-font-smoothing: antialiased;\n    scroll-behavior: smooth;\n    font-size: 100%;\n    height: 100%;\n    width: 100%;\n    padding: 0;\n    margin: 0;\n"}}});function S(a){a=void 0===a?{href:""}:a;A.call(this);this.c=a}w(S,A);S.from=A.from;S.b=A.b;
S.prototype.a=function(){A.prototype.a.call(this);this.element=document.createDocumentFragment();var a=new O(Object.assign({},{rel:"preload",as:"style",onload:"this.onload=null;this.rel='stylesheet'"},this.c)),b=new T(new O(Object.assign({},this.c)));this.element.appendChild(a.a().element);this.element.appendChild(b.a().element);return this};
function U(a,b){b=void 0===b?[300,400,700]:b;S.call(this,{href:"https://fonts.googleapis.com/css2?family="+(void 0===a?"Lato":a).replace(" ","+")+":wght@"+b.join(";")+"&display=swap"})}w(U,S);U.from=S.from;U.b=S.b;function T(){K.apply(this,arguments)}w(T,K);T.from=K.from;T.b=K.b;r.Object.defineProperties(T,{a:{configurable:!0,enumerable:!0,get:function(){return"NoScript"}}});function V(){K.apply(this,arguments)}w(V,K);V.from=K.from;V.b=K.b;
r.Object.defineProperties(V,{a:{configurable:!0,enumerable:!0,get:function(){return"script"}}});function W(){V.apply(this,arguments)}w(W,V);W.from=V.from;W.b=V.b;r.Object.defineProperties(W,{g:{configurable:!0,enumerable:!0,get:function(){return{inline:!0}}}});function M(a,b){W.call(this);B(this,{src:b,defer:!0})}w(M,W);M.from=W.from;M.b=W.b;
var ua=[new P({"http-equiv":"Content-Type",content:"text/html; charset=UTF-8"}),new P({"http-equiv":"X-UA-Compatible",content:"IE=edge,chrome=1"}),new P({name:"viewport",content:"width=device-width, initial-scale=1.0"})];function X(a){for(var b=[],c=0;c<arguments.length;++c)b[c]=arguments[c];L.apply(this,n(ua).concat(n(b)))}w(X,L);X.from=L.from;X.b=L.b;function Y(){E.apply(this,arguments)}w(Y,E);Y.from=E.from;Y.b=E.b;
Y.prototype.g=function(){var a=this,b=Math.max(document.body.scrollHeight,document.documentElement.scrollHeight,document.body.offsetHeight,document.documentElement.offsetHeight,document.body.clientHeight,document.documentElement.clientHeight),c=Math.max(document.body.clientHeight,document.documentElement.clientHeight),d=!1,g=0;document.addEventListener("scroll",function(){g=100*window.pageYOffset/(b-c);d||(d=!0,requestAnimationFrame(function(){a.element.style.setProperty("--scroll",g+"%");d=!1}))},
{passive:!0})};r.Object.defineProperties(Y,{c:{configurable:!0,enumerable:!0,get:function(){return"\n      position: fixed;\n      height: 24px;\n      width: 100%;\n      \n      top: 0;\n      left: 0;\n\n      will-change: transform;\n      transform: translateZ(0);\n      -webkit-transform-style: preserve-3d;\n      -webkit-backface-visibility: hidden;\n      -webkit-transform:translate3d(0,0,0);\n      -webkit-transform-style: preserve-3d;\n      -webkit-perspective: 1000;\n      -webkit-transform: translateZ(0);\n\n      background: linear-gradient(to right, #003C8F var(--scroll), transparent 0);\n    "}}});
function Z(){F.apply(this,arguments)}w(Z,F);Z.from=F.from;Z.b=F.b;r.Object.defineProperties(Z,{c:{configurable:!0,enumerable:!0,get:function(){return"\n    height: 100%;\n    max-width: 768px;\n    margin: 0 auto;\n  "}}});var va=new Q(new X(new N("Test Title"),new U("Playfair Display",[900]),new U("Libre Baskerville",[700]),new U("Raleway",[700]),new S({href:"https://fonts.googleapis.com/icon?family=Material+Icons&display=block"})),new R(new Y,new Z((new I).B("background: #555"),new I)));
window.c=[];window.NO_RENDER||va.s();}).call(this);
