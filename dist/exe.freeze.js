(function(){/*
 MIT  MIT
*/
'use strict';var k;function aa(a){var b=0;return function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}}}function n(a){var b="undefined"!=typeof Symbol&&Symbol.iterator&&a[Symbol.iterator];return b?b.call(a):{next:aa(a)}}function p(a){if(!(a instanceof Array)){a=n(a);for(var b,c=[];!(b=a.next()).done;)c.push(b.value);a=c}return a}
var ba="function"==typeof Object.create?Object.create:function(a){function b(){}b.prototype=a;return new b},ca="function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,c){if(a==Array.prototype||a==Object.prototype)return a;a[b]=c.value;return a};
function da(a){a=["object"==typeof globalThis&&globalThis,a,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof global&&global];for(var b=0;b<a.length;++b){var c=a[b];if(c&&c.Math==Math)return c}throw Error("Cannot find global object");}var q=da(this);function t(a,b){if(b)a:{var c=q;a=a.split(".");for(var d=0;d<a.length-1;d++){var h=a[d];if(!(h in c))break a;c=c[h]}a=a[a.length-1];d=c[a];b=b(d);b!=d&&null!=b&&ca(c,a,{configurable:!0,writable:!0,value:b})}}var ea;
if("function"==typeof Object.setPrototypeOf)ea=Object.setPrototypeOf;else{var fa;a:{var ha={F:!0},ia={};try{ia.__proto__=ha;fa=ia.F;break a}catch(a){}fa=!1}ea=fa?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}var ja=ea;
function u(a,b){a.prototype=ba(b.prototype);a.prototype.constructor=a;if(ja)ja(a,b);else for(var c in b)if("prototype"!=c)if(Object.defineProperties){var d=Object.getOwnPropertyDescriptor(b,c);d&&Object.defineProperty(a,c,d)}else a[c]=b[c]}
t("Symbol",function(a){function b(h){if(this instanceof b)throw new TypeError("Symbol is not a constructor");return new c("jscomp_symbol_"+(h||"")+"_"+d++,h)}function c(h,l){this.a=h;ca(this,"description",{configurable:!0,writable:!0,value:l})}if(a)return a;c.prototype.toString=function(){return this.a};var d=0;return b});
t("Symbol.iterator",function(a){if(a)return a;a=Symbol("Symbol.iterator");for(var b="Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "),c=0;c<b.length;c++){var d=q[b[c]];"function"===typeof d&&"function"!=typeof d.prototype[a]&&ca(d.prototype,a,{configurable:!0,writable:!0,value:function(){return ka(aa(this))}})}return a});function ka(a){a={next:a};a[Symbol.iterator]=function(){return this};return a}
function v(a,b){return Object.prototype.hasOwnProperty.call(a,b)}
t("WeakMap",function(a){function b(e){this.a=(f+=Math.random()+1).toString();if(e){e=n(e);for(var g;!(g=e.next()).done;)g=g.value,this.set(g[0],g[1])}}function c(){}function d(e){var g=typeof e;return"object"===g&&null!==e||"function"===g}function h(e){if(!v(e,r)){var g=new c;ca(e,r,{value:g})}}function l(e){var g=Object[e];g&&(Object[e]=function(m){if(m instanceof c)return m;Object.isExtensible(m)&&h(m);return g(m)})}if(function(){if(!a||!Object.seal)return!1;try{var e=Object.seal({}),g=Object.seal({}),
m=new a([[e,2],[g,3]]);if(2!=m.get(e)||3!=m.get(g))return!1;m.delete(e);m.set(g,4);return!m.has(e)&&4==m.get(g)}catch(L){return!1}}())return a;var r="$jscomp_hidden_"+Math.random();l("freeze");l("preventExtensions");l("seal");var f=0;b.prototype.set=function(e,g){if(!d(e))throw Error("Invalid WeakMap key");h(e);if(!v(e,r))throw Error("WeakMap key fail: "+e);e[r][this.a]=g;return this};b.prototype.get=function(e){return d(e)&&v(e,r)?e[r][this.a]:void 0};b.prototype.has=function(e){return d(e)&&v(e,
r)&&v(e[r],this.a)};b.prototype.delete=function(e){return d(e)&&v(e,r)&&v(e[r],this.a)?delete e[r][this.a]:!1};return b});
t("Map",function(a){function b(){var f={};return f.i=f.next=f.head=f}function c(f,e){var g=f.a;return ka(function(){if(g){for(;g.head!=f.a;)g=g.i;for(;g.next!=g.head;)return g=g.next,{done:!1,value:e(g)};g=null}return{done:!0,value:void 0}})}function d(f,e){var g=e&&typeof e;"object"==g||"function"==g?l.has(e)?g=l.get(e):(g=""+ ++r,l.set(e,g)):g="p_"+e;var m=f.c[g];if(m&&v(f.c,g))for(f=0;f<m.length;f++){var L=m[f];if(e!==e&&L.key!==L.key||e===L.key)return{id:g,list:m,index:f,f:L}}return{id:g,list:m,
index:-1,f:void 0}}function h(f){this.c={};this.a=b();this.size=0;if(f){f=n(f);for(var e;!(e=f.next()).done;)e=e.value,this.set(e[0],e[1])}}if(function(){if(!a||"function"!=typeof a||!a.prototype.entries||"function"!=typeof Object.seal)return!1;try{var f=Object.seal({x:4}),e=new a(n([[f,"s"]]));if("s"!=e.get(f)||1!=e.size||e.get({x:4})||e.set({x:4},"t")!=e||2!=e.size)return!1;var g=e.entries(),m=g.next();if(m.done||m.value[0]!=f||"s"!=m.value[1])return!1;m=g.next();return m.done||4!=m.value[0].x||
"t"!=m.value[1]||!g.next().done?!1:!0}catch(L){return!1}}())return a;var l=new WeakMap;h.prototype.set=function(f,e){f=0===f?0:f;var g=d(this,f);g.list||(g.list=this.c[g.id]=[]);g.f?g.f.value=e:(g.f={next:this.a,i:this.a.i,head:this.a,key:f,value:e},g.list.push(g.f),this.a.i.next=g.f,this.a.i=g.f,this.size++);return this};h.prototype.delete=function(f){f=d(this,f);return f.f&&f.list?(f.list.splice(f.index,1),f.list.length||delete this.c[f.id],f.f.i.next=f.f.next,f.f.next.i=f.f.i,f.f.head=null,this.size--,
!0):!1};h.prototype.clear=function(){this.c={};this.a=this.a.i=b();this.size=0};h.prototype.has=function(f){return!!d(this,f).f};h.prototype.get=function(f){return(f=d(this,f).f)&&f.value};h.prototype.entries=function(){return c(this,function(f){return[f.key,f.value]})};h.prototype.keys=function(){return c(this,function(f){return f.key})};h.prototype.values=function(){return c(this,function(f){return f.value})};h.prototype.forEach=function(f,e){for(var g=this.entries(),m;!(m=g.next()).done;)m=m.value,
f.call(e,m[1],m[0],this)};h.prototype[Symbol.iterator]=h.prototype.entries;var r=0;return h});
t("Set",function(a){function b(c){this.a=new Map;if(c){c=n(c);for(var d;!(d=c.next()).done;)this.add(d.value)}this.size=this.a.size}if(function(){if(!a||"function"!=typeof a||!a.prototype.entries||"function"!=typeof Object.seal)return!1;try{var c=Object.seal({x:4}),d=new a(n([c]));if(!d.has(c)||1!=d.size||d.add(c)!=d||1!=d.size||d.add({x:4})!=d||2!=d.size)return!1;var h=d.entries(),l=h.next();if(l.done||l.value[0]!=c||l.value[1]!=c)return!1;l=h.next();return l.done||l.value[0]==c||4!=l.value[0].x||
l.value[1]!=l.value[0]?!1:h.next().done}catch(r){return!1}}())return a;b.prototype.add=function(c){c=0===c?0:c;this.a.set(c,c);this.size=this.a.size;return this};b.prototype.delete=function(c){c=this.a.delete(c);this.size=this.a.size;return c};b.prototype.clear=function(){this.a.clear();this.size=0};b.prototype.has=function(c){return this.a.has(c)};b.prototype.entries=function(){return this.a.entries()};b.prototype.values=function(){return this.a.values()};b.prototype.keys=b.prototype.values;b.prototype[Symbol.iterator]=
b.prototype.values;b.prototype.forEach=function(c,d){var h=this;this.a.forEach(function(l){return c.call(d,l,l,h)})};return b});var la="function"==typeof Object.assign?Object.assign:function(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(d)for(var h in d)v(d,h)&&(a[h]=d[h])}return a};t("Object.assign",function(a){return a||la});t("Object.is",function(a){return a?a:function(b,c){return b===c?0!==b||1/b===1/c:b!==b&&c!==c}});
t("Array.prototype.includes",function(a){return a?a:function(b,c){var d=this;d instanceof String&&(d=String(d));var h=d.length;c=c||0;for(0>c&&(c=Math.max(c+h,0));c<h;c++){var l=d[c];if(l===b||Object.is(l,b))return!0}return!1}});
t("String.prototype.includes",function(a){return a?a:function(b,c){if(null==this)throw new TypeError("The 'this' value for String.prototype.includes must not be null or undefined");if(b instanceof RegExp)throw new TypeError("First argument to String.prototype.includes must not be a regular expression");return-1!==this.indexOf(b,c||0)}});
t("Array.from",function(a){return a?a:function(b,c,d){c=null!=c?c:function(f){return f};var h=[],l="undefined"!=typeof Symbol&&Symbol.iterator&&b[Symbol.iterator];if("function"==typeof l){b=l.call(b);for(var r=0;!(l=b.next()).done;)h.push(c.call(d,l.value,r++))}else for(l=b.length,r=0;r<l;r++)h.push(c.call(d,b[r],r));return h}});t("Object.entries",function(a){return a?a:function(b){var c=[],d;for(d in b)v(b,d)&&c.push([d,b[d]]);return c}});
if("undefined"===typeof goog){var ma={define:function(a,b){return b}};"undefined"!==typeof global?global.G=ma:"undefined"!==typeof window&&(window.G=ma)}var na=[],oa=[];function pa(a,b){if(b.name)return b.name;for(var c in a)if(a[c]===b)return c;return null}function qa(){this.s=this.constructor.c;this.attributes=Object.assign({},this.constructor.attributes);this.o=p(this.constructor.o).concat()}
q.Object.defineProperties(qa,{attributes:{configurable:!0,enumerable:!0,get:function(){return{}}},c:{configurable:!0,enumerable:!0,get:function(){return""}},l:{configurable:!0,enumerable:!0,get:function(){return Object.getPrototypeOf(this).C||[]}},C:{configurable:!0,enumerable:!0,get:function(){var a=new Set([this].concat(p(this.l)));a=p(a).concat().filter(function(b){return b!==qa});return p(a).concat()}},o:{configurable:!0,enumerable:!0,get:function(){var a=new Set(this.C.map(function(b){return b.name}));
return p(a).concat()}}});function w(a){for(var b=[],c=0;c<arguments.length;++c)b[c]=arguments[c];qa.call(this);this.constructor.name in window||(window[this.constructor.name]=this.constructor);this.l=!1;this.D=[];this.a=null;this.v=b;this.s=this.constructor.c||"w";this.j=""}u(w,qa);w.b=function(){var a=this.name,b=this.j;oa.includes(a)||(b&&(na.push("."+a+" {"+b+"}"),oa.push(a)),this.l.forEach(function(c){return c.b()}))};
w.a=function(a){var b=new this,c={},d=["class","style"];b.a=a;b.s=a.tagName.toLowerCase();b.o=Array.from(a.classList);a=n(Array.from(a.attributes));for(var h=a.next();!h.done;h=a.next()){h=h.value;var l=n([h.name,h.value]);h=l.next().value;l=l.next().value;d.includes(h)||(c[h]=l)}x(b,c);return b};function ra(a,b){a.D.push(["click",b]);return a}k=w.prototype;k.set=function(a){a=void 0===a?{}:a;var b=a.attributes;return x(this.m(a.h||""),b||{})};k.B=function(){return this};
k.A=function(){this.a=document.createElement(this.s);return this};k.freeze=function(){this.l=!0;return this.g().a.outerHTML};k.u=function(){};
function sa(a){a.constructor.b();a=a.A();if(a.attributes)for(var b=n(Object.entries(a.attributes)),c=b.next();!c.done;c=b.next()){var d=n(c.value);c=d.next().value;d=d.next().value;window.a&&"constructor"===c||a.a.setAttribute(c,d)}b=a.o;b.length&&(a.a.className=b.join(" "));b=a.j.replace(/(\s{2,}|\n+)/g," ").trim();a.j&&a.a.setAttribute("style",b);return a}
k.g=function(a){a=void 0===a?this.a:a;var b=this.B();ta(sa(b));a&&a.replaceWith(b.a);if(this.a=b.a){a=n(b.D);for(var c=a.next();!c.done;c=a.next()){var d=n(c.value);c=d.next().value;d=d.next().value;b.a.addEventListener(c,d)}}return b};function ta(a){a.v.length&&a.v.forEach(function(b){switch(typeof b){case "string":case "number":b=new y(b.toString());break;case "undefined":case "null":return a}a.l&&(b.l=!0);a.a.appendChild(b.g().a)})}
function x(a,b){b=void 0===b?{}:b;Object.assign(a.attributes||{},b);return a}k.m=function(a){for(var b=[],c=0;c<arguments.length;++c)b[c]=arguments[c];b=n(b);for(c=b.next();!c.done;c=b.next())this.j+=c.value;return this};q.Object.defineProperties(w,{h:{configurable:!0,enumerable:!0,get:function(){return["transition: all 1s ease-in-out","box-sizing: border-box"]}},j:{configurable:!0,enumerable:!0,get:function(){return this.h.join(";")}}});
function z(a){for(var b=[],c=0;c<arguments.length;++c)b[c]=arguments[c];w.apply(this,p(b).concat());this.c={};this.u()}u(z,w);z.a=w.a;z.b=w.b;
z.prototype.g=function(a){a=void 0===a?this.a:a;w.prototype.g.call(this,a);if(this.l){a=document.createElement("script");var b=this.constructor;b="(function(){var el=document.currentScript.parentNode;requestAnimationFrame(function(){"+b.name+("."+pa(b,b.a)+"(el).")+(pa(b.prototype,b.prototype.g)+"();});})();");a.setAttribute("async",!0);a.appendChild(document.createTextNode(b));this.a.appendChild(a)}return this};z.prototype.u=function(){};function ua(a,b){return function(){return b(a.c),a.g()}}
function y(a){w.call(this);this.text=a}u(y,w);y.a=w.a;y.b=w.b;y.prototype.g=function(){this.a=document.createTextNode(this.text);return this};function A(){w.apply(this,arguments)}u(A,w);A.a=w.a;A.b=w.b;q.Object.defineProperties(A,{h:{configurable:!0,enumerable:!0,get:function(){return["display: block;"]}}});function B(){w.apply(this,arguments)}u(B,w);B.a=w.a;B.b=w.b;function C(){B.apply(this,arguments)}u(C,B);C.a=B.a;C.b=B.b;
q.Object.defineProperties(C,{c:{configurable:!0,enumerable:!0,get:function(){return"h1"}},h:{configurable:!0,enumerable:!0,get:function(){return["font-size: 2rem"]}}});function D(){B.apply(this,arguments)}u(D,B);D.a=B.a;D.b=B.b;q.Object.defineProperties(D,{c:{configurable:!0,enumerable:!0,get:function(){return"h2"}},h:{configurable:!0,enumerable:!0,get:function(){return["font-size: 1rem"]}}});function E(){w.apply(this,arguments)}u(E,w);E.a=w.a;E.b=w.b;
q.Object.defineProperties(E,{h:{configurable:!0,enumerable:!0,get:function(){return["\n      display: flex;\n      flex-direction: column;\n      align-items: center;\n  "]}}});function F(){E.apply(this,arguments)}u(F,E);F.a=E.a;F.b=E.b;q.Object.defineProperties(F,{h:{configurable:!0,enumerable:!0,get:function(){return["\n            margin: auto;\n            align-items: center;\n            justify-content: center;\n            text-align: center;\n        "]}}});
function G(){E.apply(this,arguments)}u(G,E);G.a=E.a;G.b=E.b;q.Object.defineProperties(G,{h:{configurable:!0,enumerable:!0,get:function(){return["\n      flex-basis: 0;\n      flex-grow: 1;\n      flex-shrink: 0;\n\n      width: 100%;\n      height: 100%;\n\n      max-height: 100%;\n      max-height: -moz-available;\n      max-height: -webkit-fill-available;\n      max-height: fill-available;\n\n      margin: 0px;\n      padding: 0px;\n    "]}}});function H(){w.apply(this,arguments)}u(H,w);H.a=w.a;
H.b=w.b;H.prototype.g=function(a){this.o=[];return w.prototype.g.call(this,a)};function I(){H.apply(this,arguments)}u(I,H);I.a=H.a;I.b=H.b;q.Object.defineProperties(I,{c:{configurable:!0,enumerable:!0,get:function(){return"head"}}});function J(){H.apply(this,arguments)}u(J,H);J.a=H.a;J.b=H.b;q.Object.defineProperties(J,{c:{configurable:!0,enumerable:!0,get:function(){return"title"}}});function K(a){a=void 0===a?{}:a;H.call(this);x(this,a)}u(K,H);K.a=H.a;K.b=H.b;
q.Object.defineProperties(K,{c:{configurable:!0,enumerable:!0,get:function(){return"link"}},attributes:{configurable:!0,enumerable:!0,get:function(){return{rel:"stylesheet"}}}});function M(a){x((H.call(this),this),a)}u(M,H);M.a=H.a;M.b=H.b;q.Object.defineProperties(M,{c:{configurable:!0,enumerable:!0,get:function(){return"meta"}}});function N(a){for(var b=[],c=0;c<arguments.length;++c)b[c]=arguments[c];w.apply(this,p(b).concat())}u(N,w);N.a=w.a;N.b=w.b;
N.prototype.freeze=function(){return"<!DOCTYPE html>"+w.prototype.freeze.call(this)};N.prototype.g=function(){w.prototype.g.call(this,document.documentElement);var a=document.createElement("style");a.setAttribute("defer",!0);a.appendChild(document.createTextNode(na.join("\n")));this.a.querySelector("head").appendChild(a);return this};q.Object.defineProperties(N,{c:{configurable:!0,enumerable:!0,get:function(){return"html"}},h:{configurable:!0,enumerable:!0,get:function(){return["\n    -webkit-font-smoothing: antialiased;\n    scroll-behavior: smooth;\n    font-size: 100%;\n    height: 100%;\n    width: 100%;\n    padding: 0;\n    margin: 0;\n"]}}});
function O(){w.apply(this,arguments)}u(O,w);O.a=w.a;O.b=w.b;q.Object.defineProperties(O,{c:{configurable:!0,enumerable:!0,get:function(){return"body"}},h:{configurable:!0,enumerable:!0,get:function(){return["\n    -webkit-font-smoothing: antialiased;\n    scroll-behavior: smooth;\n    font-size: 100%;\n    height: 100%;\n    width: 100%;\n    padding: 0;\n    margin: 0;\n"]}}});function P(){w.apply(this,arguments)}u(P,w);P.a=w.a;P.b=w.b;
P.prototype.A=function(){this.a=document.createDocumentFragment();return this};P.prototype.g=function(){var a=this;sa(this);this.v.forEach(function(b){return a.a.appendChild(b.g().a)});return this};function Q(a){a=void 0===a?{href:""}:a;P.call(this,new K(Object.assign({},{rel:"preload",as:"style",onload:"this.onload=null;this.rel='stylesheet'"},a)),new R(new K(Object.assign({},a))))}u(Q,P);Q.a=P.a;Q.b=P.b;
function S(a,b){b=void 0===b?[300,400,700]:b;Q.call(this,{href:"https://fonts.googleapis.com/css2?family="+(void 0===a?"Lato":a).replace(" ","+")+":wght@"+b.join(";")+"&display=swap"})}u(S,Q);S.a=Q.a;S.b=Q.b;function T(){w.apply(this,arguments)}u(T,w);T.a=w.a;T.b=w.b;q.Object.defineProperties(T,{c:{configurable:!0,enumerable:!0,get:function(){return"button"}}});function R(){H.apply(this,arguments)}u(R,H);R.a=H.a;R.b=H.b;q.Object.defineProperties(R,{c:{configurable:!0,enumerable:!0,get:function(){return"NoScript"}}});
function U(){H.apply(this,arguments)}u(U,H);U.a=H.a;U.b=H.b;q.Object.defineProperties(U,{c:{configurable:!0,enumerable:!0,get:function(){return"script"}},attributes:{configurable:!0,enumerable:!0,get:function(){return{async:!0}}}});function V(){U.apply(this,arguments)}u(V,U);V.a=U.a;V.b=U.b;q.Object.defineProperties(V,{attributes:{configurable:!0,enumerable:!0,get:function(){return{inline:!0}}}});function va(a,b){V.call(this);x(this,{src:b,async:!0})}u(va,V);va.a=V.a;va.b=V.b;
var wa=[new M({"http-equiv":"Content-Type",content:"text/html; charset=UTF-8"}),new M({"http-equiv":"X-UA-Compatible",content:"IE=edge,chrome=1"}),new M({name:"viewport",content:"width=device-width, initial-scale=1.0"})];function xa(a){for(var b=[],c=0;c<arguments.length;++c)b[c]=arguments[c];I.apply(this,p(wa).concat([new va("exports/exe.namespace.js","dist/exe.namespace.js")],p(b)))}u(xa,I);xa.a=I.a;xa.b=I.b;function W(){z.apply(this,arguments)}u(W,z);W.a=z.a;W.b=z.b;
W.prototype.g=function(a){var b=this;a=void 0===a?this.a:a;z.prototype.g.call(this,a);requestAnimationFrame(function(){var c=Math.max(document.body.scrollHeight,document.documentElement.scrollHeight,document.body.offsetHeight,document.documentElement.offsetHeight,document.body.clientHeight,document.documentElement.clientHeight),d=Math.max(document.body.clientHeight,document.documentElement.clientHeight),h=!1,l=0;document.addEventListener("scroll",function(){h||(l=100*window.pageYOffset/(c-d),h=!0,
requestAnimationFrame(function(){b.a.style.setProperty("--scroll",l+"%");h=!1}))},{passive:!0})});return this};q.Object.defineProperties(W,{h:{configurable:!0,enumerable:!0,get:function(){return"position: fixed;height: 24px;width: 100%;top: 0;left: 0;will-change: transform;transform: translateZ(0);-webkit-transform-style: preserve-3d;webkit-backface-visibility: hidden;-webkit-transform:translate3d(0,0,0);-webkit-transform-style: preserve-3d;-webkit-perspective: 1000;-webkit-transform: translateZ(0)".split(";")}}});
function X(){A.apply(this,arguments)}u(X,A);X.a=A.a;X.b=A.b;q.Object.defineProperties(X,{h:{configurable:!0,enumerable:!0,get:function(){return["height: 100%","max-width: 768px","margin: 0 auto"]}}});function Y(){w.apply(this,arguments)}u(Y,w);Y.a=w.a;Y.b=w.b;q.Object.defineProperties(Y,{h:{configurable:!0,enumerable:!0,get:function(){return["font-family: 'Work Sans', sans-serif","font-size: 4rem"]}}});function ya(){T.apply(this,arguments)}u(ya,T);ya.a=T.a;ya.b=T.b;
q.Object.defineProperties(ya,{j:{configurable:!0,enumerable:!0,get:function(){return"\n      cursor: pointer;\n\n      margin: 42px;\n      border-radius: 12px;\n      width: 120px;\n      height: 60px;\n\n      padding: 0 6px 0 6px;\n      min-width: 88px;\n      font-size: 14px;\n      text-align: center;\n      text-transform: uppercase;\n      text-decoration:none;\n      border: none;\n      outline: none;\n\n      background: #003c8f;\n      color: white;\n      box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);\n\n      font-size: 1.25rem;\n      font-family: 'Lato', sans-serif;\n      font-weight: bold;\n  "}}});
function Z(){z.apply(this,arguments)}u(Z,z);Z.a=z.a;Z.b=z.b;Z.prototype.u=function(){this.c={count:0}};Z.prototype.B=function(){var a=this;return new F(new Y(this.c.count),ra(new ya("PRESS ME"),ua(this,function(){return a.c.count++})))};
var za=new N(new xa(new J("Web Widgets Demo"),new S("Work Sans",[800]),new S("Public Sans",[400]),new Q({href:"https://fonts.googleapis.com/icon?family=Material+Icons&display=block"})),new O(new W,(new G(new F(new X((new C("Welcome to Web Widgets")).m("\n                        color: white;\n                        font-family: 'Work Sans', sans-serif;\n                        font-weight: 800;\n                    "),(new D("This stateful layout was shipped as 7kB of static, gzipped data from the edge with Google Cloud CDN.")).m("\n                        color: white;\n                        font-family: 'Public Sans', sans-serif;\n                        font-weight: 400;\n                    "))))).m("\n            background: linear-gradient(to top left, #003c8f, #5e92f3); padding: 2rem;\n        "),
(new G(new X(new G((new C("Thanks for checking it out!")).m("\n                        font-family: 'Work Sans', sans-serif;\n                        font-weight: 800;\n                    "),new Z)))).m("padding:2rem")));window.a=!0;window.NO_RENDER=!0;requestAnimationFrame(function(){return console.log(za.freeze())});}).call(this);
