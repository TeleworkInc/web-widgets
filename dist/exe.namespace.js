(function(){/*
 MIT  MIT
*/
'use strict';function aa(a){var b=0;return function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}}}function k(a){var b="undefined"!=typeof Symbol&&Symbol.iterator&&a[Symbol.iterator];return b?b.call(a):{next:aa(a)}}function n(a){if(!(a instanceof Array)){a=k(a);for(var b,c=[];!(b=a.next()).done;)c.push(b.value);a=c}return a}
var ba="function"==typeof Object.create?Object.create:function(a){function b(){}b.prototype=a;return new b},q="function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,c){if(a==Array.prototype||a==Object.prototype)return a;a[b]=c.value;return a};
function ca(a){a=["object"==typeof globalThis&&globalThis,a,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof global&&global];for(var b=0;b<a.length;++b){var c=a[b];if(c&&c.Math==Math)return c}throw Error("Cannot find global object");}var r=ca(this);function t(a,b){if(b)a:{var c=r;a=a.split(".");for(var d=0;d<a.length-1;d++){var h=a[d];if(!(h in c))break a;c=c[h]}a=a[a.length-1];d=c[a];b=b(d);b!=d&&null!=b&&q(c,a,{configurable:!0,writable:!0,value:b})}}var u;
if("function"==typeof Object.setPrototypeOf)u=Object.setPrototypeOf;else{var v;a:{var da={v:!0},ea={};try{ea.__proto__=da;v=ea.v;break a}catch(a){}v=!1}u=v?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}var fa=u;
function w(a,b){a.prototype=ba(b.prototype);a.prototype.constructor=a;if(fa)fa(a,b);else for(var c in b)if("prototype"!=c)if(Object.defineProperties){var d=Object.getOwnPropertyDescriptor(b,c);d&&Object.defineProperty(a,c,d)}else a[c]=b[c]}
t("Symbol",function(a){function b(h){if(this instanceof b)throw new TypeError("Symbol is not a constructor");return new c("jscomp_symbol_"+(h||"")+"_"+d++,h)}function c(h,l){this.a=h;q(this,"description",{configurable:!0,writable:!0,value:l})}if(a)return a;c.prototype.toString=function(){return this.a};var d=0;return b});
t("Symbol.iterator",function(a){if(a)return a;a=Symbol("Symbol.iterator");for(var b="Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "),c=0;c<b.length;c++){var d=r[b[c]];"function"===typeof d&&"function"!=typeof d.prototype[a]&&q(d.prototype,a,{configurable:!0,writable:!0,value:function(){return ha(aa(this))}})}return a});function ha(a){a={next:a};a[Symbol.iterator]=function(){return this};return a}
function x(a,b){return Object.prototype.hasOwnProperty.call(a,b)}
t("WeakMap",function(a){function b(e){this.a=(f+=Math.random()+1).toString();if(e){e=k(e);for(var g;!(g=e.next()).done;)g=g.value,this.set(g[0],g[1])}}function c(){}function d(e){var g=typeof e;return"object"===g&&null!==e||"function"===g}function h(e){if(!x(e,p)){var g=new c;q(e,p,{value:g})}}function l(e){var g=Object[e];g&&(Object[e]=function(m){if(m instanceof c)return m;Object.isExtensible(m)&&h(m);return g(m)})}if(function(){if(!a||!Object.seal)return!1;try{var e=Object.seal({}),g=Object.seal({}),
m=new a([[e,2],[g,3]]);if(2!=m.get(e)||3!=m.get(g))return!1;m.delete(e);m.set(g,4);return!m.has(e)&&4==m.get(g)}catch(H){return!1}}())return a;var p="$jscomp_hidden_"+Math.random();l("freeze");l("preventExtensions");l("seal");var f=0;b.prototype.set=function(e,g){if(!d(e))throw Error("Invalid WeakMap key");h(e);if(!x(e,p))throw Error("WeakMap key fail: "+e);e[p][this.a]=g;return this};b.prototype.get=function(e){return d(e)&&x(e,p)?e[p][this.a]:void 0};b.prototype.has=function(e){return d(e)&&x(e,
p)&&x(e[p],this.a)};b.prototype.delete=function(e){return d(e)&&x(e,p)&&x(e[p],this.a)?delete e[p][this.a]:!1};return b});
t("Map",function(a){function b(){var f={};return f.h=f.next=f.head=f}function c(f,e){var g=f.a;return ha(function(){if(g){for(;g.head!=f.a;)g=g.h;for(;g.next!=g.head;)return g=g.next,{done:!1,value:e(g)};g=null}return{done:!0,value:void 0}})}function d(f,e){var g=e&&typeof e;"object"==g||"function"==g?l.has(e)?g=l.get(e):(g=""+ ++p,l.set(e,g)):g="p_"+e;var m=f.c[g];if(m&&x(f.c,g))for(f=0;f<m.length;f++){var H=m[f];if(e!==e&&H.key!==H.key||e===H.key)return{id:g,list:m,index:f,g:H}}return{id:g,list:m,
index:-1,g:void 0}}function h(f){this.c={};this.a=b();this.size=0;if(f){f=k(f);for(var e;!(e=f.next()).done;)e=e.value,this.set(e[0],e[1])}}if(function(){if(!a||"function"!=typeof a||!a.prototype.entries||"function"!=typeof Object.seal)return!1;try{var f=Object.seal({x:4}),e=new a(k([[f,"s"]]));if("s"!=e.get(f)||1!=e.size||e.get({x:4})||e.set({x:4},"t")!=e||2!=e.size)return!1;var g=e.entries(),m=g.next();if(m.done||m.value[0]!=f||"s"!=m.value[1])return!1;m=g.next();return m.done||4!=m.value[0].x||
"t"!=m.value[1]||!g.next().done?!1:!0}catch(H){return!1}}())return a;var l=new WeakMap;h.prototype.set=function(f,e){f=0===f?0:f;var g=d(this,f);g.list||(g.list=this.c[g.id]=[]);g.g?g.g.value=e:(g.g={next:this.a,h:this.a.h,head:this.a,key:f,value:e},g.list.push(g.g),this.a.h.next=g.g,this.a.h=g.g,this.size++);return this};h.prototype.delete=function(f){f=d(this,f);return f.g&&f.list?(f.list.splice(f.index,1),f.list.length||delete this.c[f.id],f.g.h.next=f.g.next,f.g.next.h=f.g.h,f.g.head=null,this.size--,
!0):!1};h.prototype.clear=function(){this.c={};this.a=this.a.h=b();this.size=0};h.prototype.has=function(f){return!!d(this,f).g};h.prototype.get=function(f){return(f=d(this,f).g)&&f.value};h.prototype.entries=function(){return c(this,function(f){return[f.key,f.value]})};h.prototype.keys=function(){return c(this,function(f){return f.key})};h.prototype.values=function(){return c(this,function(f){return f.value})};h.prototype.forEach=function(f,e){for(var g=this.entries(),m;!(m=g.next()).done;)m=m.value,
f.call(e,m[1],m[0],this)};h.prototype[Symbol.iterator]=h.prototype.entries;var p=0;return h});
t("Set",function(a){function b(c){this.a=new Map;if(c){c=k(c);for(var d;!(d=c.next()).done;)this.add(d.value)}this.size=this.a.size}if(function(){if(!a||"function"!=typeof a||!a.prototype.entries||"function"!=typeof Object.seal)return!1;try{var c=Object.seal({x:4}),d=new a(k([c]));if(!d.has(c)||1!=d.size||d.add(c)!=d||1!=d.size||d.add({x:4})!=d||2!=d.size)return!1;var h=d.entries(),l=h.next();if(l.done||l.value[0]!=c||l.value[1]!=c)return!1;l=h.next();return l.done||l.value[0]==c||4!=l.value[0].x||
l.value[1]!=l.value[0]?!1:h.next().done}catch(p){return!1}}())return a;b.prototype.add=function(c){c=0===c?0:c;this.a.set(c,c);this.size=this.a.size;return this};b.prototype.delete=function(c){c=this.a.delete(c);this.size=this.a.size;return c};b.prototype.clear=function(){this.a.clear();this.size=0};b.prototype.has=function(c){return this.a.has(c)};b.prototype.entries=function(){return this.a.entries()};b.prototype.values=function(){return this.a.values()};b.prototype.keys=b.prototype.values;b.prototype[Symbol.iterator]=
b.prototype.values;b.prototype.forEach=function(c,d){var h=this;this.a.forEach(function(l){return c.call(d,l,l,h)})};return b});var ia="function"==typeof Object.assign?Object.assign:function(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(d)for(var h in d)x(d,h)&&(a[h]=d[h])}return a};t("Object.assign",function(a){return a||ia});t("Object.is",function(a){return a?a:function(b,c){return b===c?0!==b||1/b===1/c:b!==b&&c!==c}});
t("Array.prototype.includes",function(a){return a?a:function(b,c){var d=this;d instanceof String&&(d=String(d));var h=d.length;c=c||0;for(0>c&&(c=Math.max(c+h,0));c<h;c++){var l=d[c];if(l===b||Object.is(l,b))return!0}return!1}});
t("String.prototype.includes",function(a){return a?a:function(b,c){if(null==this)throw new TypeError("The 'this' value for String.prototype.includes must not be null or undefined");if(b instanceof RegExp)throw new TypeError("First argument to String.prototype.includes must not be a regular expression");return-1!==this.indexOf(b,c||0)}});
t("Array.from",function(a){return a?a:function(b,c,d){c=null!=c?c:function(f){return f};var h=[],l="undefined"!=typeof Symbol&&Symbol.iterator&&b[Symbol.iterator];if("function"==typeof l){b=l.call(b);for(var p=0;!(l=b.next()).done;)h.push(c.call(d,l.value,p++))}else for(l=b.length,p=0;p<l;p++)h.push(c.call(d,b[p],p));return h}});t("Object.entries",function(a){return a?a:function(b){var c=[],d;for(d in b)x(b,d)&&c.push([d,b[d]]);return c}});
if("undefined"===typeof goog){var ja={define:function(a,b){return b}};"undefined"!==typeof global?global.A=ja:"undefined"!==typeof window&&(window.A=ja)}var ka=[];document.createElement("style").id="ww-stylesheet";var la=[];function ma(a,b){if(b.name)return b.name;for(var c in a)if(a[c]===b)return c;return null}function y(){this.l=this.constructor.f;this.i=Object.assign({},this.constructor.i);this.s=n(this.constructor.l).concat()}
r.Object.defineProperties(y,{f:{configurable:!0,enumerable:!0,get:function(){return""}},i:{configurable:!0,enumerable:!0,get:function(){return{}}},j:{configurable:!0,enumerable:!0,get:function(){return Object.getPrototypeOf(this).o||[]}},o:{configurable:!0,enumerable:!0,get:function(){var a=new Set([this].concat(n(this.j)));a=n(a).concat().filter(function(b){return b!==y});return n(a).concat()}},l:{configurable:!0,enumerable:!0,get:function(){var a=new Set(this.o.map(function(b){return b.name}));
return n(a).concat()}}});function z(a){for(var b=[],c=0;c<arguments.length;++c)b[c]=arguments[c];y.call(this);this.constructor.name in window||(window[this.constructor.name]=this.constructor);this.u=b;this.l=this.constructor.f||"w";this.j=""}w(z,y);z.b=function(){var a=this.name,b=this.c||"";la.includes(a)||(b&&(ka.push("."+a+" {"+b+"}"),la.push(a)),this.j.forEach(function(c){return c.b()}))};
z.a=function(a){var b=new this,c={},d=["class","style"];b.a=a;b.l=a.tagName.toLowerCase();b.s=Array.from(a.classList);a=k(a.attributes);for(var h=a.next();!h.done;h=a.next()){h=h.value;var l=k([h.name,h.value]);h=l.next().value;l=l.next().value;d.includes(h)||(c[h]=l)}A(b,c);return b};function na(a){if(a.i)for(var b=k(Object.entries(a.i)),c=b.next();!c.done;c=b.next()){var d=k(c.value);c=d.next().value;d=d.next().value;window.a&&"constructor"===c||a.a.setAttribute(c,d)}return a}
function oa(a){var b=a.s;b.length&&(a.a.className=b.join(" "));return a}function pa(a){var b=a.j.replace(/(\s{2,}|\n+)/g," ").trim();a.j&&a.a.setAttribute("style",b)}z.prototype.freeze=function(){return this.c().a.outerHTML};z.prototype.m=function(){};
z.prototype.c=function(a){var b=this;this.constructor.b();pa(oa(na(qa(this,document.createElement(this.l)))));a=a||this.a;a.replaceWith(this.a);this.u.length&&this.u.forEach(function(c){switch(typeof c){case "string":case "number":c=new B(c.toString())}b.a.appendChild(c.c().a)});return this};function qa(a,b){a.a?a.a.replaceWith(b):a.a=b;return a}function A(a,b){b=void 0===b?{}:b;Object.assign(a.i||{},b)}
z.prototype.f=function(a){for(var b=[],c=0;c<arguments.length;++c)b[c]=arguments[c];b=k(b);for(c=b.next();!c.done;c=b.next())this.j+=c.value;return this};r.Object.defineProperties(z,{c:{configurable:!0,enumerable:!0,get:function(){return"\n    transition: all 1s ease-in-out;\n    box-sizing: border-box;\n  "}}});function C(a){for(var b=[],c=0;c<arguments.length;++c)b[c]=arguments[c];z.apply(this,n(b).concat());this.B={}}w(C,z);C.a=z.a;C.b=z.b;
C.prototype.c=function(a){a=void 0===a?this.a:a;z.prototype.c.call(this,a);a=document.createElement("script");var b=this.constructor;b="(function(){var el=document.currentScript.parentNode;requestAnimationFrame(function(){"+b.name+("."+ma(b,b.a)+"(el).")+(ma(b.prototype,b.prototype.m)+"();});})();");a.setAttribute("async",!0);a.appendChild(document.createTextNode(b));this.a.appendChild(a);return this};C.prototype.m=function(){};function B(a){z.call(this);this.text=a}w(B,z);B.a=z.a;B.b=z.b;
B.prototype.c=function(){this.a=document.createTextNode(this.text);return this};function D(){z.apply(this,arguments)}w(D,z);D.a=z.a;D.b=z.b;r.Object.defineProperties(D,{c:{configurable:!0,enumerable:!0,get:function(){return"display: block;"}}});function E(){z.apply(this,arguments)}w(E,z);E.a=z.a;E.b=z.b;function F(){E.apply(this,arguments)}w(F,E);F.a=E.a;F.b=E.b;r.Object.defineProperties(F,{f:{configurable:!0,enumerable:!0,get:function(){return"h1"}},c:{configurable:!0,enumerable:!0,get:function(){return"font-size: 2rem"}}});
function G(){E.apply(this,arguments)}w(G,E);G.a=E.a;G.b=E.b;r.Object.defineProperties(G,{f:{configurable:!0,enumerable:!0,get:function(){return"h2"}},c:{configurable:!0,enumerable:!0,get:function(){return"font-size: 1rem"}}});function I(){z.apply(this,arguments)}w(I,z);I.a=z.a;I.b=z.b;r.Object.defineProperties(I,{c:{configurable:!0,enumerable:!0,get:function(){return"\n            display: flex;\n            flex-direction: column;\n            align-items: center;\n        "}}});
function J(){I.apply(this,arguments)}w(J,I);J.a=I.a;J.b=I.b;r.Object.defineProperties(J,{c:{configurable:!0,enumerable:!0,get:function(){return"\n            margin: auto;\n            align-items: center;\n            justify-content: center;\n            text-align: center;\n        "}}});function K(){I.apply(this,arguments)}w(K,I);K.a=I.a;K.b=I.b;r.Object.defineProperties(K,{c:{configurable:!0,enumerable:!0,get:function(){return"\n      flex-basis: 0;\n      flex-grow: 1;\n      flex-shrink: 0;\n\n      width: 100%;\n      height: 100%;\n\n      max-height: 100%;\n      max-height: -moz-available;\n      max-height: -webkit-fill-available;\n      max-height: fill-available;\n\n      margin: 0px;\n      padding: 0px;\n    "}}});
function L(){z.apply(this,arguments)}w(L,z);L.a=z.a;L.b=z.b;function M(){L.apply(this,arguments)}w(M,L);M.a=L.a;M.b=L.b;r.Object.defineProperties(M,{f:{configurable:!0,enumerable:!0,get:function(){return"head"}}});function N(){L.apply(this,arguments)}w(N,L);N.a=L.a;N.b=L.b;r.Object.defineProperties(N,{f:{configurable:!0,enumerable:!0,get:function(){return"title"}}});function O(a){A((L.call(this),this),a)}w(O,L);O.a=L.a;O.b=L.b;r.Object.defineProperties(O,{f:{configurable:!0,enumerable:!0,get:function(){return"meta"}}});
function P(a){for(var b=[],c=0;c<arguments.length;++c)b[c]=arguments[c];z.apply(this,n(b).concat())}w(P,z);P.a=z.a;P.b=z.b;P.prototype.c=function(){z.prototype.c.call(this,document.documentElement);var a=document.createElement("style");a.setAttribute("defer",!0);a.appendChild(document.createTextNode(ka.join("\n")));this.a.querySelector("head").appendChild(a);return this};P.prototype.freeze=function(){return"<!DOCTYPE html>"+z.prototype.freeze.call(this)};
r.Object.defineProperties(P,{f:{configurable:!0,enumerable:!0,get:function(){return"html"}},c:{configurable:!0,enumerable:!0,get:function(){return"\n    -webkit-font-smoothing: antialiased;\n    scroll-behavior: smooth;\n    font-size: 100%;\n    height: 100%;\n    width: 100%;\n    padding: 0;\n    margin: 0;\n"}}});function Q(){z.apply(this,arguments)}w(Q,z);Q.a=z.a;Q.b=z.b;
r.Object.defineProperties(Q,{f:{configurable:!0,enumerable:!0,get:function(){return"body"}},c:{configurable:!0,enumerable:!0,get:function(){return"\n    -webkit-font-smoothing: antialiased;\n    scroll-behavior: smooth;\n    font-size: 100%;\n    height: 100%;\n    width: 100%;\n    padding: 0;\n    margin: 0;\n"}}});function R(a){a=void 0===a?{href:""}:a;z.call(this);this.i=a}w(R,z);R.a=z.a;R.b=z.b;
function S(a,b){b=void 0===b?[300,400,700]:b;R.call(this,{href:"https://fonts.googleapis.com/css2?family="+(void 0===a?"Lato":a).replace(" ","+")+":wght@"+b.join(";")+"&display=swap"})}w(S,R);S.a=R.a;S.b=R.b;function T(){L.apply(this,arguments)}w(T,L);T.a=L.a;T.b=L.b;r.Object.defineProperties(T,{f:{configurable:!0,enumerable:!0,get:function(){return"script"}},i:{configurable:!0,enumerable:!0,get:function(){return{async:!0}}}});function U(){T.apply(this,arguments)}w(U,T);U.a=T.a;U.b=T.b;
r.Object.defineProperties(U,{i:{configurable:!0,enumerable:!0,get:function(){return{inline:!0}}}});function V(a,b){U.call(this);A(this,{src:b,async:!0})}w(V,U);V.a=U.a;V.b=U.b;var ra=[new O({"http-equiv":"Content-Type",content:"text/html; charset=UTF-8"}),new O({"http-equiv":"X-UA-Compatible",content:"IE=edge,chrome=1"}),new O({name:"viewport",content:"width=device-width, initial-scale=1.0"})];
function W(a){for(var b=[],c=0;c<arguments.length;++c)b[c]=arguments[c];M.apply(this,n(ra).concat([new V("exports/exe.namespace.js","dist/exe.namespace.js")],n(b)))}w(W,M);W.a=M.a;W.b=M.b;function X(){C.apply(this,arguments)}w(X,C);X.a=C.a;X.b=C.b;
X.prototype.m=function(){var a=this,b=Math.max(document.body.scrollHeight,document.documentElement.scrollHeight,document.body.offsetHeight,document.documentElement.offsetHeight,document.body.clientHeight,document.documentElement.clientHeight),c=Math.max(document.body.clientHeight,document.documentElement.clientHeight),d=!1,h=0;document.addEventListener("scroll",function(){h=100*window.pageYOffset/(b-c);d||(d=!0,requestAnimationFrame(function(){a.a.style.setProperty("--scroll",h+"%");d=!1}))},{passive:!0})};
r.Object.defineProperties(X,{c:{configurable:!0,enumerable:!0,get:function(){return"\n      position: fixed;\n      height: 24px;\n      width: 100%;\n      \n      top: 0;\n      left: 0;\n\n      will-change: transform;\n      transform: translateZ(0);\n      -webkit-transform-style: preserve-3d;\n      -webkit-backface-visibility: hidden;\n      -webkit-transform:translate3d(0,0,0);\n      -webkit-transform-style: preserve-3d;\n      -webkit-perspective: 1000;\n      -webkit-transform: translateZ(0);\n\n      background: linear-gradient(to right, #bbdefb var(--scroll), transparent 0);\n    "}}});
function Y(){D.apply(this,arguments)}w(Y,D);Y.a=D.a;Y.b=D.b;r.Object.defineProperties(Y,{c:{configurable:!0,enumerable:!0,get:function(){return"\n    height: 100%;\n    max-width: 768px;\n    margin: 0 auto;\n  "}}});function Z(a){C.call(this);this.B.counter=a}w(Z,C);Z.a=C.a;Z.b=C.b;
new P(new W(new N("Web Widgets Demo"),new S("Work Sans",[800]),new S("Public Sans",[400]),new R({href:"https://fonts.googleapis.com/icon?family=Material+Icons&display=block"})),new Q(new X,(new K(new J(new Y((new F("Welcome to Web Widgets")).f("\n                        color: white;\n                        font-family: 'Work Sans', sans-serif;\n                        font-weight: 800;\n                    "),(new G("This stateful layout was shipped as 7kB of static, gzipped data from the edge with Google Cloud CDN.")).f("\n                        color: white;\n                        font-family: 'Public Sans', sans-serif;\n                        font-weight: 400;\n                    "))))).f("\n            background: linear-gradient(to top left, #003c8f, #5e92f3); padding: 2rem;\n        "),
(new K(new J(new Y((new F("Thanks for checking it out!")).f("\n                        font-family: 'Work Sans', sans-serif;\n                        font-weight: 800;\n                    "),new Z(0))))).f("padding:2rem")));}).call(this);
