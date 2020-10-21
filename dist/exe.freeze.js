(function(){/*
 MIT  MIT
*/
'use strict';function aa(a){var b=0;return function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}}}function k(a){var b="undefined"!=typeof Symbol&&Symbol.iterator&&a[Symbol.iterator];return b?b.call(a):{next:aa(a)}}function n(a){if(!(a instanceof Array)){a=k(a);for(var b,c=[];!(b=a.next()).done;)c.push(b.value);a=c}return a}
var ba="function"==typeof Object.create?Object.create:function(a){function b(){}b.prototype=a;return new b},p="function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,c){if(a==Array.prototype||a==Object.prototype)return a;a[b]=c.value;return a};
function ca(a){a=["object"==typeof globalThis&&globalThis,a,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof global&&global];for(var b=0;b<a.length;++b){var c=a[b];if(c&&c.Math==Math)return c}throw Error("Cannot find global object");}var q=ca(this);function t(a,b){if(b)a:{var c=q;a=a.split(".");for(var d=0;d<a.length-1;d++){var h=a[d];if(!(h in c))break a;c=c[h]}a=a[a.length-1];d=c[a];b=b(d);b!=d&&null!=b&&p(c,a,{configurable:!0,writable:!0,value:b})}}var da;
if("function"==typeof Object.setPrototypeOf)da=Object.setPrototypeOf;else{var ea;a:{var fa={B:!0},ha={};try{ha.__proto__=fa;ea=ha.B;break a}catch(a){}ea=!1}da=ea?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}var ia=da;
function u(a,b){a.prototype=ba(b.prototype);a.prototype.constructor=a;if(ia)ia(a,b);else for(var c in b)if("prototype"!=c)if(Object.defineProperties){var d=Object.getOwnPropertyDescriptor(b,c);d&&Object.defineProperty(a,c,d)}else a[c]=b[c]}
t("Symbol",function(a){function b(h){if(this instanceof b)throw new TypeError("Symbol is not a constructor");return new c("jscomp_symbol_"+(h||"")+"_"+d++,h)}function c(h,l){this.a=h;p(this,"description",{configurable:!0,writable:!0,value:l})}if(a)return a;c.prototype.toString=function(){return this.a};var d=0;return b});
t("Symbol.iterator",function(a){if(a)return a;a=Symbol("Symbol.iterator");for(var b="Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "),c=0;c<b.length;c++){var d=q[b[c]];"function"===typeof d&&"function"!=typeof d.prototype[a]&&p(d.prototype,a,{configurable:!0,writable:!0,value:function(){return ja(aa(this))}})}return a});function ja(a){a={next:a};a[Symbol.iterator]=function(){return this};return a}
function v(a,b){return Object.prototype.hasOwnProperty.call(a,b)}
t("WeakMap",function(a){function b(e){this.a=(f+=Math.random()+1).toString();if(e){e=k(e);for(var g;!(g=e.next()).done;)g=g.value,this.set(g[0],g[1])}}function c(){}function d(e){var g=typeof e;return"object"===g&&null!==e||"function"===g}function h(e){if(!v(e,r)){var g=new c;p(e,r,{value:g})}}function l(e){var g=Object[e];g&&(Object[e]=function(m){if(m instanceof c)return m;Object.isExtensible(m)&&h(m);return g(m)})}if(function(){if(!a||!Object.seal)return!1;try{var e=Object.seal({}),g=Object.seal({}),
m=new a([[e,2],[g,3]]);if(2!=m.get(e)||3!=m.get(g))return!1;m.delete(e);m.set(g,4);return!m.has(e)&&4==m.get(g)}catch(J){return!1}}())return a;var r="$jscomp_hidden_"+Math.random();l("freeze");l("preventExtensions");l("seal");var f=0;b.prototype.set=function(e,g){if(!d(e))throw Error("Invalid WeakMap key");h(e);if(!v(e,r))throw Error("WeakMap key fail: "+e);e[r][this.a]=g;return this};b.prototype.get=function(e){return d(e)&&v(e,r)?e[r][this.a]:void 0};b.prototype.has=function(e){return d(e)&&v(e,
r)&&v(e[r],this.a)};b.prototype.delete=function(e){return d(e)&&v(e,r)&&v(e[r],this.a)?delete e[r][this.a]:!1};return b});
t("Map",function(a){function b(){var f={};return f.j=f.next=f.head=f}function c(f,e){var g=f.a;return ja(function(){if(g){for(;g.head!=f.a;)g=g.j;for(;g.next!=g.head;)return g=g.next,{done:!1,value:e(g)};g=null}return{done:!0,value:void 0}})}function d(f,e){var g=e&&typeof e;"object"==g||"function"==g?l.has(e)?g=l.get(e):(g=""+ ++r,l.set(e,g)):g="p_"+e;var m=f.c[g];if(m&&v(f.c,g))for(f=0;f<m.length;f++){var J=m[f];if(e!==e&&J.key!==J.key||e===J.key)return{id:g,list:m,index:f,g:J}}return{id:g,list:m,
index:-1,g:void 0}}function h(f){this.c={};this.a=b();this.size=0;if(f){f=k(f);for(var e;!(e=f.next()).done;)e=e.value,this.set(e[0],e[1])}}if(function(){if(!a||"function"!=typeof a||!a.prototype.entries||"function"!=typeof Object.seal)return!1;try{var f=Object.seal({x:4}),e=new a(k([[f,"s"]]));if("s"!=e.get(f)||1!=e.size||e.get({x:4})||e.set({x:4},"t")!=e||2!=e.size)return!1;var g=e.entries(),m=g.next();if(m.done||m.value[0]!=f||"s"!=m.value[1])return!1;m=g.next();return m.done||4!=m.value[0].x||
"t"!=m.value[1]||!g.next().done?!1:!0}catch(J){return!1}}())return a;var l=new WeakMap;h.prototype.set=function(f,e){f=0===f?0:f;var g=d(this,f);g.list||(g.list=this.c[g.id]=[]);g.g?g.g.value=e:(g.g={next:this.a,j:this.a.j,head:this.a,key:f,value:e},g.list.push(g.g),this.a.j.next=g.g,this.a.j=g.g,this.size++);return this};h.prototype.delete=function(f){f=d(this,f);return f.g&&f.list?(f.list.splice(f.index,1),f.list.length||delete this.c[f.id],f.g.j.next=f.g.next,f.g.next.j=f.g.j,f.g.head=null,this.size--,
!0):!1};h.prototype.clear=function(){this.c={};this.a=this.a.j=b();this.size=0};h.prototype.has=function(f){return!!d(this,f).g};h.prototype.get=function(f){return(f=d(this,f).g)&&f.value};h.prototype.entries=function(){return c(this,function(f){return[f.key,f.value]})};h.prototype.keys=function(){return c(this,function(f){return f.key})};h.prototype.values=function(){return c(this,function(f){return f.value})};h.prototype.forEach=function(f,e){for(var g=this.entries(),m;!(m=g.next()).done;)m=m.value,
f.call(e,m[1],m[0],this)};h.prototype[Symbol.iterator]=h.prototype.entries;var r=0;return h});
t("Set",function(a){function b(c){this.a=new Map;if(c){c=k(c);for(var d;!(d=c.next()).done;)this.add(d.value)}this.size=this.a.size}if(function(){if(!a||"function"!=typeof a||!a.prototype.entries||"function"!=typeof Object.seal)return!1;try{var c=Object.seal({x:4}),d=new a(k([c]));if(!d.has(c)||1!=d.size||d.add(c)!=d||1!=d.size||d.add({x:4})!=d||2!=d.size)return!1;var h=d.entries(),l=h.next();if(l.done||l.value[0]!=c||l.value[1]!=c)return!1;l=h.next();return l.done||l.value[0]==c||4!=l.value[0].x||
l.value[1]!=l.value[0]?!1:h.next().done}catch(r){return!1}}())return a;b.prototype.add=function(c){c=0===c?0:c;this.a.set(c,c);this.size=this.a.size;return this};b.prototype.delete=function(c){c=this.a.delete(c);this.size=this.a.size;return c};b.prototype.clear=function(){this.a.clear();this.size=0};b.prototype.has=function(c){return this.a.has(c)};b.prototype.entries=function(){return this.a.entries()};b.prototype.values=function(){return this.a.values()};b.prototype.keys=b.prototype.values;b.prototype[Symbol.iterator]=
b.prototype.values;b.prototype.forEach=function(c,d){var h=this;this.a.forEach(function(l){return c.call(d,l,l,h)})};return b});var ka="function"==typeof Object.assign?Object.assign:function(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(d)for(var h in d)v(d,h)&&(a[h]=d[h])}return a};t("Object.assign",function(a){return a||ka});t("Object.is",function(a){return a?a:function(b,c){return b===c?0!==b||1/b===1/c:b!==b&&c!==c}});
t("Array.prototype.includes",function(a){return a?a:function(b,c){var d=this;d instanceof String&&(d=String(d));var h=d.length;c=c||0;for(0>c&&(c=Math.max(c+h,0));c<h;c++){var l=d[c];if(l===b||Object.is(l,b))return!0}return!1}});
t("String.prototype.includes",function(a){return a?a:function(b,c){if(null==this)throw new TypeError("The 'this' value for String.prototype.includes must not be null or undefined");if(b instanceof RegExp)throw new TypeError("First argument to String.prototype.includes must not be a regular expression");return-1!==this.indexOf(b,c||0)}});
t("Array.from",function(a){return a?a:function(b,c,d){c=null!=c?c:function(f){return f};var h=[],l="undefined"!=typeof Symbol&&Symbol.iterator&&b[Symbol.iterator];if("function"==typeof l){b=l.call(b);for(var r=0;!(l=b.next()).done;)h.push(c.call(d,l.value,r++))}else for(l=b.length,r=0;r<l;r++)h.push(c.call(d,b[r],r));return h}});t("Object.entries",function(a){return a?a:function(b){var c=[],d;for(d in b)v(b,d)&&c.push([d,b[d]]);return c}});
if("undefined"===typeof goog){var la={define:function(a,b){return b}};"undefined"!==typeof global?global.C=la:"undefined"!==typeof window&&(window.C=la)}var ma=[],na=[];function oa(a,b){if(b.name)return b.name;for(var c in a)if(a[c]===b)return c;return null}function w(){this.o=this.constructor.c;this.l=Object.assign({},this.constructor.i);this.m=n(this.constructor.m).concat()}
q.Object.defineProperties(w,{i:{configurable:!0,enumerable:!0,get:function(){return{}}},c:{configurable:!0,enumerable:!0,get:function(){return""}},l:{configurable:!0,enumerable:!0,get:function(){return Object.getPrototypeOf(this).v||[]}},v:{configurable:!0,enumerable:!0,get:function(){var a=new Set([this].concat(n(this.l)));a=n(a).concat().filter(function(b){return b!==w});return n(a).concat()}},m:{configurable:!0,enumerable:!0,get:function(){var a=new Set(this.v.map(function(b){return b.name}));
return n(a).concat()}}});function x(a){for(var b=[],c=0;c<arguments.length;++c)b[c]=arguments[c];w.call(this);this.constructor.name in window||(window[this.constructor.name]=this.constructor);this.s=b;this.o=this.constructor.c||"w";this.f=""}u(x,w);x.b=function(){var a=this.name,b=this.f||"";na.includes(a)||(b&&(ma.push("."+a+" {"+b+"}"),na.push(a)),this.l.forEach(function(c){return c.b()}))};
x.a=function(a){var b=new this,c={},d=["class","style"];b.a=a;b.o=a.tagName.toLowerCase();b.m=Array.from(a.classList);a=k(a.attributes);for(var h=a.next();!h.done;h=a.next()){h=h.value;var l=k([h.name,h.value]);h=l.next().value;l=l.next().value;d.includes(h)||(c[h]=l)}y(b,c);return b};
x.prototype.i=function(){this.constructor.b();var a=this.A();if(a.l)for(var b=k(Object.entries(a.l)),c=b.next();!c.done;c=b.next()){var d=k(c.value);c=d.next().value;d=d.next().value;window.a&&"constructor"===c||a.a.setAttribute(c,d)}b=a.m;b.length&&(a.a.className=b.join(" "));b=a.f.replace(/(\s{2,}|\n+)/g," ").trim();a.f&&a.a.setAttribute("style",b)};x.prototype.A=function(){var a=document.createElement(this.o);this.a?this.a.replaceWith(a):this.a=a;return this};x.prototype.freeze=function(){return this.h().a.outerHTML};
x.prototype.u=function(){};x.prototype.h=function(a){var b=this;a=void 0===a?this.a:a;this.i();a=a||this.a;a.replaceWith(this.a);this.s.length&&this.s.forEach(function(c){switch(typeof c){case "string":case "number":c=new z(c.toString())}b.a.appendChild(c.h().a)});return this};function y(a,b){b=void 0===b?{}:b;Object.assign(a.l||{},b)}x.prototype.c=function(a){for(var b=[],c=0;c<arguments.length;++c)b[c]=arguments[c];b=k(b);for(c=b.next();!c.done;c=b.next())this.f+=c.value;return this};
q.Object.defineProperties(x,{f:{configurable:!0,enumerable:!0,get:function(){return"\n    transition: all 1s ease-in-out;\n    box-sizing: border-box;\n  "}}});function A(a){for(var b=[],c=0;c<arguments.length;++c)b[c]=arguments[c];x.apply(this,n(b).concat());this.D={}}u(A,x);A.a=x.a;A.b=x.b;
A.prototype.h=function(a){a=void 0===a?this.a:a;x.prototype.h.call(this,a);a=document.createElement("script");var b=this.constructor;b="(function(){var el=document.currentScript.parentNode;requestAnimationFrame(function(){"+b.name+("."+oa(b,b.a)+"(el).")+(oa(b.prototype,b.prototype.u)+"();});})();");a.setAttribute("async",!0);a.appendChild(document.createTextNode(b));this.a.appendChild(a);return this};A.prototype.u=function(){};function z(a){x.call(this);this.text=a}u(z,x);z.a=x.a;z.b=x.b;
z.prototype.h=function(){this.a=document.createTextNode(this.text);return this};function B(){x.apply(this,arguments)}u(B,x);B.a=x.a;B.b=x.b;q.Object.defineProperties(B,{f:{configurable:!0,enumerable:!0,get:function(){return"display: block;"}}});function C(){x.apply(this,arguments)}u(C,x);C.a=x.a;C.b=x.b;function D(){C.apply(this,arguments)}u(D,C);D.a=C.a;D.b=C.b;q.Object.defineProperties(D,{c:{configurable:!0,enumerable:!0,get:function(){return"h1"}},f:{configurable:!0,enumerable:!0,get:function(){return"font-size: 2rem"}}});
function E(){C.apply(this,arguments)}u(E,C);E.a=C.a;E.b=C.b;q.Object.defineProperties(E,{c:{configurable:!0,enumerable:!0,get:function(){return"h2"}},f:{configurable:!0,enumerable:!0,get:function(){return"font-size: 1rem"}}});function F(){x.apply(this,arguments)}u(F,x);F.a=x.a;F.b=x.b;q.Object.defineProperties(F,{f:{configurable:!0,enumerable:!0,get:function(){return"\n            display: flex;\n            flex-direction: column;\n            align-items: center;\n        "}}});
function G(){F.apply(this,arguments)}u(G,F);G.a=F.a;G.b=F.b;q.Object.defineProperties(G,{f:{configurable:!0,enumerable:!0,get:function(){return"\n            margin: auto;\n            align-items: center;\n            justify-content: center;\n            text-align: center;\n        "}}});function H(){F.apply(this,arguments)}u(H,F);H.a=F.a;H.b=F.b;q.Object.defineProperties(H,{f:{configurable:!0,enumerable:!0,get:function(){return"\n      flex-basis: 0;\n      flex-grow: 1;\n      flex-shrink: 0;\n\n      width: 100%;\n      height: 100%;\n\n      max-height: 100%;\n      max-height: -moz-available;\n      max-height: -webkit-fill-available;\n      max-height: fill-available;\n\n      margin: 0px;\n      padding: 0px;\n    "}}});
function I(){x.apply(this,arguments)}u(I,x);I.a=x.a;I.b=x.b;I.prototype.h=function(a){this.m=[];return x.prototype.h.call(this,a)};function K(){I.apply(this,arguments)}u(K,I);K.a=I.a;K.b=I.b;q.Object.defineProperties(K,{c:{configurable:!0,enumerable:!0,get:function(){return"head"}}});function L(){I.apply(this,arguments)}u(L,I);L.a=I.a;L.b=I.b;q.Object.defineProperties(L,{c:{configurable:!0,enumerable:!0,get:function(){return"title"}}});function M(a){a=void 0===a?{}:a;I.call(this);y(this,a)}u(M,I);
M.a=I.a;M.b=I.b;q.Object.defineProperties(M,{c:{configurable:!0,enumerable:!0,get:function(){return"link"}},i:{configurable:!0,enumerable:!0,get:function(){return{rel:"stylesheet"}}}});function N(a){y((I.call(this),this),a)}u(N,I);N.a=I.a;N.b=I.b;q.Object.defineProperties(N,{c:{configurable:!0,enumerable:!0,get:function(){return"meta"}}});function O(a){for(var b=[],c=0;c<arguments.length;++c)b[c]=arguments[c];x.apply(this,n(b).concat())}u(O,x);O.a=x.a;O.b=x.b;
O.prototype.h=function(){x.prototype.h.call(this,document.documentElement);var a=document.createElement("style");a.setAttribute("defer",!0);a.appendChild(document.createTextNode(ma.join("\n")));this.a.querySelector("head").appendChild(a);return this};O.prototype.freeze=function(){return"<!DOCTYPE html>"+x.prototype.freeze.call(this)};q.Object.defineProperties(O,{c:{configurable:!0,enumerable:!0,get:function(){return"html"}},f:{configurable:!0,enumerable:!0,get:function(){return"\n    -webkit-font-smoothing: antialiased;\n    scroll-behavior: smooth;\n    font-size: 100%;\n    height: 100%;\n    width: 100%;\n    padding: 0;\n    margin: 0;\n"}}});
function P(){x.apply(this,arguments)}u(P,x);P.a=x.a;P.b=x.b;q.Object.defineProperties(P,{c:{configurable:!0,enumerable:!0,get:function(){return"body"}},f:{configurable:!0,enumerable:!0,get:function(){return"\n    -webkit-font-smoothing: antialiased;\n    scroll-behavior: smooth;\n    font-size: 100%;\n    height: 100%;\n    width: 100%;\n    padding: 0;\n    margin: 0;\n"}}});function Q(){x.apply(this,arguments)}u(Q,x);Q.a=x.a;Q.b=x.b;
Q.prototype.A=function(){this.a=document.createDocumentFragment();return this};Q.prototype.h=function(){var a=this;this.i();this.s.forEach(function(b){return a.a.appendChild(b.h().a)});return this};function R(a){a=void 0===a?{href:""}:a;Q.call(this,new M(Object.assign({},{rel:"preload",as:"style",onload:"this.onload=null;this.rel='stylesheet'"},a)),new S(new M(Object.assign({},a))))}u(R,Q);R.a=Q.a;R.b=Q.b;
function T(a,b){b=void 0===b?[300,400,700]:b;R.call(this,{href:"https://fonts.googleapis.com/css2?family="+(void 0===a?"Lato":a).replace(" ","+")+":wght@"+b.join(";")+"&display=swap"})}u(T,R);T.a=R.a;T.b=R.b;function S(){I.apply(this,arguments)}u(S,I);S.a=I.a;S.b=I.b;q.Object.defineProperties(S,{c:{configurable:!0,enumerable:!0,get:function(){return"NoScript"}}});function U(){I.apply(this,arguments)}u(U,I);U.a=I.a;U.b=I.b;
q.Object.defineProperties(U,{c:{configurable:!0,enumerable:!0,get:function(){return"script"}},i:{configurable:!0,enumerable:!0,get:function(){return{async:!0}}}});function V(){U.apply(this,arguments)}u(V,U);V.a=U.a;V.b=U.b;q.Object.defineProperties(V,{i:{configurable:!0,enumerable:!0,get:function(){return{inline:!0}}}});function W(a,b){V.call(this);y(this,{src:b,async:!0})}u(W,V);W.a=V.a;W.b=V.b;
var pa=[new N({"http-equiv":"Content-Type",content:"text/html; charset=UTF-8"}),new N({"http-equiv":"X-UA-Compatible",content:"IE=edge,chrome=1"}),new N({name:"viewport",content:"width=device-width, initial-scale=1.0"})];function qa(a){for(var b=[],c=0;c<arguments.length;++c)b[c]=arguments[c];K.apply(this,n(pa).concat([new W("exports/exe.namespace.js","dist/exe.namespace.js")],n(b)))}u(qa,K);qa.a=K.a;qa.b=K.b;function X(){A.apply(this,arguments)}u(X,A);X.a=A.a;X.b=A.b;
X.prototype.u=function(){var a=this,b=Math.max(document.body.scrollHeight,document.documentElement.scrollHeight,document.body.offsetHeight,document.documentElement.offsetHeight,document.body.clientHeight,document.documentElement.clientHeight),c=Math.max(document.body.clientHeight,document.documentElement.clientHeight),d=!1,h=0;document.addEventListener("scroll",function(){h=100*window.pageYOffset/(b-c);d||(d=!0,requestAnimationFrame(function(){a.a.style.setProperty("--scroll",h+"%");d=!1}))},{passive:!0})};
q.Object.defineProperties(X,{f:{configurable:!0,enumerable:!0,get:function(){return"\n      position: fixed;\n      height: 24px;\n      width: 100%;\n      \n      top: 0;\n      left: 0;\n\n      will-change: transform;\n      transform: translateZ(0);\n      -webkit-transform-style: preserve-3d;\n      -webkit-backface-visibility: hidden;\n      -webkit-transform:translate3d(0,0,0);\n      -webkit-transform-style: preserve-3d;\n      -webkit-perspective: 1000;\n      -webkit-transform: translateZ(0);\n\n      background: linear-gradient(to right, #bbdefb var(--scroll), transparent 0);\n    "}}});
function Y(){B.apply(this,arguments)}u(Y,B);Y.a=B.a;Y.b=B.b;q.Object.defineProperties(Y,{f:{configurable:!0,enumerable:!0,get:function(){return"\n    height: 100%;\n    max-width: 768px;\n    margin: 0 auto;\n  "}}});function Z(a){A.call(this);this.D.counter=a}u(Z,A);Z.a=A.a;Z.b=A.b;Z.prototype.i=function(){A.prototype.i.call(this);new D("test")};
var ra=new O(new qa(new L("Web Widgets Demo"),new T("Work Sans",[800]),new T("Public Sans",[400]),new R({href:"https://fonts.googleapis.com/icon?family=Material+Icons&display=block"})),new P(new X,(new H(new G(new Y((new D("Welcome to Web Widgets")).c("\n                        color: white;\n                        font-family: 'Work Sans', sans-serif;\n                        font-weight: 800;\n                    "),(new E("This stateful layout was shipped as 7kB of static, gzipped data from the edge with Google Cloud CDN.")).c("\n                        color: white;\n                        font-family: 'Public Sans', sans-serif;\n                        font-weight: 400;\n                    "))))).c("\n            background: linear-gradient(to top left, #003c8f, #5e92f3); padding: 2rem;\n        "),
(new H(new G(new Y((new D("Thanks for checking it out!")).c("\n                        font-family: 'Work Sans', sans-serif;\n                        font-weight: 800;\n                    "),new Z(0))))).c("padding:2rem")));window.a=!0;window.NO_RENDER=!0;requestAnimationFrame(function(){return console.log(ra.freeze())});}).call(this);
