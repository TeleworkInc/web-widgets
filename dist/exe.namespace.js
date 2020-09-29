(function(){/*
 MIT */
'use strict';function aa(a){var b=0;return function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}}}function n(a){var b="undefined"!=typeof Symbol&&Symbol.iterator&&a[Symbol.iterator];return b?b.call(a):{next:aa(a)}}function p(a){if(!(a instanceof Array)){a=n(a);for(var b,c=[];!(b=a.next()).done;)c.push(b.value);a=c}return a}
var ba="function"==typeof Object.create?Object.create:function(a){function b(){}b.prototype=a;return new b},q="function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,c){if(a==Array.prototype||a==Object.prototype)return a;a[b]=c.value;return a};
function ca(a){a=["object"==typeof globalThis&&globalThis,a,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof global&&global];for(var b=0;b<a.length;++b){var c=a[b];if(c&&c.Math==Math)return c}throw Error("Cannot find global object");}var r=ca(this);function t(a,b){if(b)a:{var c=r;a=a.split(".");for(var e=0;e<a.length-1;e++){var k=a[e];if(!(k in c))break a;c=c[k]}a=a[a.length-1];e=c[a];b=b(e);b!=e&&null!=b&&q(c,a,{configurable:!0,writable:!0,value:b})}}var u;
if("function"==typeof Object.setPrototypeOf)u=Object.setPrototypeOf;else{var da;a:{var ea={v:!0},ia={};try{ia.__proto__=ea;da=ia.v;break a}catch(a){}da=!1}u=da?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}var ja=u;
function v(a,b){a.prototype=ba(b.prototype);a.prototype.constructor=a;if(ja)ja(a,b);else for(var c in b)if("prototype"!=c)if(Object.defineProperties){var e=Object.getOwnPropertyDescriptor(b,c);e&&Object.defineProperty(a,c,e)}else a[c]=b[c]}function ka(){this.g=!1;this.b=null;this.m=void 0;this.a=1;this.j=0;this.f=null}function la(a){if(a.g)throw new TypeError("Generator is already running");a.g=!0}ka.prototype.i=function(a){this.m=a};function ma(a,b){a.f={A:b,C:!0};a.a=a.j}
ka.prototype.return=function(a){this.f={return:a};this.a=this.j};function na(a,b,c){a.a=c;return{value:b}}function oa(a){this.a=new ka;this.b=a}function pa(a,b){la(a.a);var c=a.a.b;if(c)return qa(a,"return"in c?c["return"]:function(e){return{value:e,done:!0}},b,a.a.return);a.a.return(b);return x(a)}
function qa(a,b,c,e){try{var k=b.call(a.a.b,c);if(!(k instanceof Object))throw new TypeError("Iterator result "+k+" is not an object");if(!k.done)return a.a.g=!1,k;var l=k.value}catch(g){return a.a.b=null,ma(a.a,g),x(a)}a.a.b=null;e.call(a.a,l);return x(a)}function x(a){for(;a.a.a;)try{var b=a.b(a.a);if(b)return a.a.g=!1,{value:b.value,done:!1}}catch(c){a.a.m=void 0,ma(a.a,c)}a.a.g=!1;if(a.a.f){b=a.a.f;a.a.f=null;if(b.C)throw b.A;return{value:b.return,done:!0}}return{value:void 0,done:!0}}
function ra(a){this.next=function(b){la(a.a);a.a.b?b=qa(a,a.a.b.next,b,a.a.i):(a.a.i(b),b=x(a));return b};this.throw=function(b){la(a.a);a.a.b?b=qa(a,a.a.b["throw"],b,a.a.i):(ma(a.a,b),b=x(a));return b};this.return=function(b){return pa(a,b)};this[Symbol.iterator]=function(){return this}}function sa(a){function b(e){return a.next(e)}function c(e){return a.throw(e)}return new Promise(function(e,k){function l(g){g.done?e(g.value):Promise.resolve(g.value).then(b,c).then(l,k)}l(a.next())})}
t("Symbol",function(a){function b(k){if(this instanceof b)throw new TypeError("Symbol is not a constructor");return new c("jscomp_symbol_"+(k||"")+"_"+e++,k)}function c(k,l){this.a=k;q(this,"description",{configurable:!0,writable:!0,value:l})}if(a)return a;c.prototype.toString=function(){return this.a};var e=0;return b});
t("Symbol.iterator",function(a){if(a)return a;a=Symbol("Symbol.iterator");for(var b="Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "),c=0;c<b.length;c++){var e=r[b[c]];"function"===typeof e&&"function"!=typeof e.prototype[a]&&q(e.prototype,a,{configurable:!0,writable:!0,value:function(){return ta(aa(this))}})}return a});function ta(a){a={next:a};a[Symbol.iterator]=function(){return this};return a}
t("Promise",function(a){function b(g){this.b=0;this.i=void 0;this.a=[];var d=this.f();try{g(d.resolve,d.reject)}catch(f){d.reject(f)}}function c(){this.a=null}function e(g){return g instanceof b?g:new b(function(d){d(g)})}if(a)return a;c.prototype.b=function(g){if(null==this.a){this.a=[];var d=this;this.f(function(){d.i()})}this.a.push(g)};var k=r.setTimeout;c.prototype.f=function(g){k(g,0)};c.prototype.i=function(){for(;this.a&&this.a.length;){var g=this.a;this.a=[];for(var d=0;d<g.length;++d){var f=
g[d];g[d]=null;try{f()}catch(h){this.g(h)}}}this.a=null};c.prototype.g=function(g){this.f(function(){throw g;})};b.prototype.f=function(){function g(h){return function(m){f||(f=!0,h.call(d,m))}}var d=this,f=!1;return{resolve:g(this.F),reject:g(this.g)}};b.prototype.F=function(g){if(g===this)this.g(new TypeError("A Promise cannot resolve to itself"));else if(g instanceof b)this.G(g);else{a:switch(typeof g){case "object":var d=null!=g;break a;case "function":d=!0;break a;default:d=!1}d?this.D(g):this.j(g)}};
b.prototype.D=function(g){var d=void 0;try{d=g.then}catch(f){this.g(f);return}"function"==typeof d?this.H(d,g):this.j(g)};b.prototype.g=function(g){this.m(2,g)};b.prototype.j=function(g){this.m(1,g)};b.prototype.m=function(g,d){if(0!=this.b)throw Error("Cannot settle("+g+", "+d+"): Promise already settled in state"+this.b);this.b=g;this.i=d;this.s()};b.prototype.s=function(){if(null!=this.a){for(var g=0;g<this.a.length;++g)l.b(this.a[g]);this.a=null}};var l=new c;b.prototype.G=function(g){var d=this.f();
g.o(d.resolve,d.reject)};b.prototype.H=function(g,d){var f=this.f();try{g.call(d,f.resolve,f.reject)}catch(h){f.reject(h)}};b.prototype.then=function(g,d){function f(y,G){return"function"==typeof y?function(fa){try{h(y(fa))}catch(ha){m(ha)}}:G}var h,m,w=new b(function(y,G){h=y;m=G});this.o(f(g,h),f(d,m));return w};b.prototype.catch=function(g){return this.then(void 0,g)};b.prototype.o=function(g,d){function f(){switch(h.b){case 1:g(h.i);break;case 2:d(h.i);break;default:throw Error("Unexpected state: "+
h.b);}}var h=this;null==this.a?l.b(f):this.a.push(f)};b.resolve=e;b.reject=function(g){return new b(function(d,f){f(g)})};b.race=function(g){return new b(function(d,f){for(var h=n(g),m=h.next();!m.done;m=h.next())e(m.value).o(d,f)})};b.all=function(g){var d=n(g),f=d.next();return f.done?e([]):new b(function(h,m){function w(fa){return function(ha){y[fa]=ha;G--;0==G&&h(y)}}var y=[],G=0;do y.push(void 0),G++,e(f.value).o(w(y.length-1),m),f=d.next();while(!f.done)})};return b});
function z(a,b){return Object.prototype.hasOwnProperty.call(a,b)}
t("WeakMap",function(a){function b(f){this.a=(d+=Math.random()+1).toString();if(f){f=n(f);for(var h;!(h=f.next()).done;)h=h.value,this.set(h[0],h[1])}}function c(){}function e(f){var h=typeof f;return"object"===h&&null!==f||"function"===h}function k(f){if(!z(f,g)){var h=new c;q(f,g,{value:h})}}function l(f){var h=Object[f];h&&(Object[f]=function(m){if(m instanceof c)return m;Object.isExtensible(m)&&k(m);return h(m)})}if(function(){if(!a||!Object.seal)return!1;try{var f=Object.seal({}),h=Object.seal({}),
m=new a([[f,2],[h,3]]);if(2!=m.get(f)||3!=m.get(h))return!1;m.delete(f);m.set(h,4);return!m.has(f)&&4==m.get(h)}catch(w){return!1}}())return a;var g="$jscomp_hidden_"+Math.random();l("freeze");l("preventExtensions");l("seal");var d=0;b.prototype.set=function(f,h){if(!e(f))throw Error("Invalid WeakMap key");k(f);if(!z(f,g))throw Error("WeakMap key fail: "+f);f[g][this.a]=h;return this};b.prototype.get=function(f){return e(f)&&z(f,g)?f[g][this.a]:void 0};b.prototype.has=function(f){return e(f)&&z(f,
g)&&z(f[g],this.a)};b.prototype.delete=function(f){return e(f)&&z(f,g)&&z(f[g],this.a)?delete f[g][this.a]:!1};return b});
t("Map",function(a){function b(){var d={};return d.l=d.next=d.head=d}function c(d,f){var h=d.a;return ta(function(){if(h){for(;h.head!=d.a;)h=h.l;for(;h.next!=h.head;)return h=h.next,{done:!1,value:f(h)};h=null}return{done:!0,value:void 0}})}function e(d,f){var h=f&&typeof f;"object"==h||"function"==h?l.has(f)?h=l.get(f):(h=""+ ++g,l.set(f,h)):h="p_"+f;var m=d.b[h];if(m&&z(d.b,h))for(d=0;d<m.length;d++){var w=m[d];if(f!==f&&w.key!==w.key||f===w.key)return{id:h,list:m,index:d,h:w}}return{id:h,list:m,
index:-1,h:void 0}}function k(d){this.b={};this.a=b();this.size=0;if(d){d=n(d);for(var f;!(f=d.next()).done;)f=f.value,this.set(f[0],f[1])}}if(function(){if(!a||"function"!=typeof a||!a.prototype.entries||"function"!=typeof Object.seal)return!1;try{var d=Object.seal({x:4}),f=new a(n([[d,"s"]]));if("s"!=f.get(d)||1!=f.size||f.get({x:4})||f.set({x:4},"t")!=f||2!=f.size)return!1;var h=f.entries(),m=h.next();if(m.done||m.value[0]!=d||"s"!=m.value[1])return!1;m=h.next();return m.done||4!=m.value[0].x||
"t"!=m.value[1]||!h.next().done?!1:!0}catch(w){return!1}}())return a;var l=new WeakMap;k.prototype.set=function(d,f){d=0===d?0:d;var h=e(this,d);h.list||(h.list=this.b[h.id]=[]);h.h?h.h.value=f:(h.h={next:this.a,l:this.a.l,head:this.a,key:d,value:f},h.list.push(h.h),this.a.l.next=h.h,this.a.l=h.h,this.size++);return this};k.prototype.delete=function(d){d=e(this,d);return d.h&&d.list?(d.list.splice(d.index,1),d.list.length||delete this.b[d.id],d.h.l.next=d.h.next,d.h.next.l=d.h.l,d.h.head=null,this.size--,
!0):!1};k.prototype.clear=function(){this.b={};this.a=this.a.l=b();this.size=0};k.prototype.has=function(d){return!!e(this,d).h};k.prototype.get=function(d){return(d=e(this,d).h)&&d.value};k.prototype.entries=function(){return c(this,function(d){return[d.key,d.value]})};k.prototype.keys=function(){return c(this,function(d){return d.key})};k.prototype.values=function(){return c(this,function(d){return d.value})};k.prototype.forEach=function(d,f){for(var h=this.entries(),m;!(m=h.next()).done;)m=m.value,
d.call(f,m[1],m[0],this)};k.prototype[Symbol.iterator]=k.prototype.entries;var g=0;return k});
t("Set",function(a){function b(c){this.a=new Map;if(c){c=n(c);for(var e;!(e=c.next()).done;)this.add(e.value)}this.size=this.a.size}if(function(){if(!a||"function"!=typeof a||!a.prototype.entries||"function"!=typeof Object.seal)return!1;try{var c=Object.seal({x:4}),e=new a(n([c]));if(!e.has(c)||1!=e.size||e.add(c)!=e||1!=e.size||e.add({x:4})!=e||2!=e.size)return!1;var k=e.entries(),l=k.next();if(l.done||l.value[0]!=c||l.value[1]!=c)return!1;l=k.next();return l.done||l.value[0]==c||4!=l.value[0].x||
l.value[1]!=l.value[0]?!1:k.next().done}catch(g){return!1}}())return a;b.prototype.add=function(c){c=0===c?0:c;this.a.set(c,c);this.size=this.a.size;return this};b.prototype.delete=function(c){c=this.a.delete(c);this.size=this.a.size;return c};b.prototype.clear=function(){this.a.clear();this.size=0};b.prototype.has=function(c){return this.a.has(c)};b.prototype.entries=function(){return this.a.entries()};b.prototype.values=function(){return this.a.values()};b.prototype.keys=b.prototype.values;b.prototype[Symbol.iterator]=
b.prototype.values;b.prototype.forEach=function(c,e){var k=this;this.a.forEach(function(l){return c.call(e,l,l,k)})};return b});var ua="function"==typeof Object.assign?Object.assign:function(a,b){for(var c=1;c<arguments.length;c++){var e=arguments[c];if(e)for(var k in e)z(e,k)&&(a[k]=e[k])}return a};t("Object.assign",function(a){return a||ua});t("Object.is",function(a){return a?a:function(b,c){return b===c?0!==b||1/b===1/c:b!==b&&c!==c}});
t("Array.prototype.includes",function(a){return a?a:function(b,c){var e=this;e instanceof String&&(e=String(e));var k=e.length;c=c||0;for(0>c&&(c=Math.max(c+k,0));c<k;c++){var l=e[c];if(l===b||Object.is(l,b))return!0}return!1}});
t("String.prototype.includes",function(a){return a?a:function(b,c){if(null==this)throw new TypeError("The 'this' value for String.prototype.includes must not be null or undefined");if(b instanceof RegExp)throw new TypeError("First argument to String.prototype.includes must not be a regular expression");return-1!==this.indexOf(b,c||0)}});
t("Array.from",function(a){return a?a:function(b,c,e){c=null!=c?c:function(d){return d};var k=[],l="undefined"!=typeof Symbol&&Symbol.iterator&&b[Symbol.iterator];if("function"==typeof l){b=l.call(b);for(var g=0;!(l=b.next()).done;)k.push(c.call(e,l.value,g++))}else for(l=b.length,g=0;g<l;g++)k.push(c.call(e,b[g],g));return k}});t("Object.entries",function(a){return a?a:function(b){var c=[],e;for(e in b)z(b,e)&&c.push([e,b[e]]);return c}});
function va(a,b){a instanceof String&&(a+="");var c=0,e={next:function(){if(c<a.length){var k=c++;return{value:b(k,a[k]),done:!1}}e.next=function(){return{done:!0,value:void 0}};return e.next()}};e[Symbol.iterator]=function(){return e};return e}t("Array.prototype.keys",function(a){return a?a:function(){return va(this,function(b){return b})}});if("undefined"===typeof goog){var wa={define:function(a,b){return b}};"undefined"!==typeof global?global.B=wa:"undefined"!==typeof window&&(window.B=wa)}
function xa(){var a=document.createElement("style");a.id="ww-stylesheet";return a}var A=xa(),ya=[];function za(a){for(var b=0;b<arguments.length;++b);}function Aa(a,b){if(b.name)return b.name;for(var c in a)if(a[c]===b)return c;return null};/*
 MIT
*/
function B(){this.j=this.constructor.a;this.b=Object.assign({},this.constructor.f);this.i=p(this.constructor.i).concat()}
r.Object.defineProperties(B,{a:{configurable:!0,enumerable:!0,get:function(){}},f:{configurable:!0,enumerable:!0,get:function(){return{}}},g:{configurable:!0,enumerable:!0,get:function(){return Object.getPrototypeOf(this).u||[]}},u:{configurable:!0,enumerable:!0,get:function(){var a=new Set([this].concat(p(this.g)));a=p(a).concat().filter(function(b){return b!==B});return p(a).concat()}},i:{configurable:!0,enumerable:!0,get:function(){var a=new Set(this.u.map(function(b){return b.name}));return p(a).concat()}}});
function C(a){for(var b=[],c=0;c<arguments.length;++c)b[c]=arguments[c];B.call(this);this.constructor.name in window||(window[this.constructor.name]=this.constructor);this.b.constructor=this.constructor.name;this.m=b;this.j=this.constructor.a||"w";this.g=""}v(C,B);C.c=function(){var a=this.name,b=this.b||"";A.sheet||document.head.appendChild(A);if(ya.includes(a))return za("Styles for",a,"already exported. Skipping.");b&&(A.sheet.insertRule("."+a+" {"+b+"}"),ya.push(a),this.g.forEach(function(c){return c.c()}))};
C.from=function(a){var b=this.name,c=a.getAttribute("constructor");if(c&&b!==c)return b=window[c],b[Aa(b,b.from)](a);b=new this;c={};var e=["class","style"];b.element=a;b.j=a.tagName.toLowerCase();b.i=Array.from(a.classList);a=n(a.attributes);for(var k=a.next();!k.done;k=a.next()){k=k.value;var l=n([k.name,k.value]);k=l.next().value;l=l.next().value;e.includes(k)||(c[k]=l)}D(b,c);return b};
C.prototype.animate=function(a,b,c){c=void 0===c?"0.2s ease-in":c;var e=this;return sa(new ra(new oa(function(k){return 1==k.a?na(k,new Promise(function(l){requestAnimationFrame(function(){e.element.style.setProperty("transition",a+" "+c);e.element.style.setProperty(a,b);l()})}),2):k.return(e)})))};function Ba(a,b){switch(typeof b){case "string":b=new E(b)}var c=Ca(a).element;b=Ca(b).element;c.appendChild(b);return a}
function Da(a){if(a.b)for(var b=n(Object.entries(a.b)),c=b.next();!c.done;c=b.next()){var e=n(c.value);c=e.next().value;e=e.next().value;window.a&&"constructor"===c||a.element.setAttribute(c,e)}return a}function Ea(a){var b=a.i;b.length&&(a.element.className=b.join(" "));return a}function Fa(a){a.g&&a.element.setAttribute("style",a.g)}function Ca(a){a.element||a.a();return a}
C.prototype.a=function(){var a=this;this.constructor.c();Fa(Ea(Da(Ga(this,document.createElement(this.j)))));this.m.length&&this.m.forEach(function(b){return Ba(a,b)});return this};C.prototype.freeze=function(){return"<!DOCTYPE html>"+this.a().s};C.prototype.f=function(){};function Ga(a,b){a.element?a.element.replaceWith(b):a.element=b;return a}
function D(a,b){b=void 0===b?{}:b;for(var c=n(Object.keys(b)),e=c.next();!e.done;e=c.next()){e=e.value;var k=b[e];null===k?delete a.b[e]:a.b[e]=k}return a}r.Object.defineProperties(C.prototype,{s:{configurable:!0,enumerable:!0,get:function(){return this.element.outerHTML}}});r.Object.defineProperties(C,{b:{configurable:!0,enumerable:!0,get:function(){return"\n      box-sizing: border-box;\n    "}}});function F(){C.apply(this,arguments)}v(F,C);F.from=C.from;F.c=C.c;
F.prototype.a=function(){C.prototype.a.call(this);var a=document.createElement("script"),b=this.constructor;a.appendChild(document.createTextNode("(function(){var el=document.currentScript.parentNode;requestAnimationFrame(function(){"+b.name+("."+Aa(b,b.from)+"(el).")+(Aa(b.prototype,b.prototype.f)+"();});})();")));this.element.appendChild(a);return this};F.prototype.f=function(){};function E(a){C.call(this);this.text=a}v(E,C);E.from=C.from;E.c=C.c;E.prototype.a=function(){return Ga(this,document.createTextNode(this.text))};function H(){C.apply(this,arguments)}v(H,C);H.from=C.from;H.c=C.c;r.Object.defineProperties(H,{b:{configurable:!0,enumerable:!0,get:function(){return"\n            display: block;\n        "}}});function I(){C.apply(this,arguments)}v(I,C);I.from=C.from;I.c=C.c;r.Object.defineProperties(I,{b:{configurable:!0,enumerable:!0,get:function(){return"\n            display: flex;\n            flex-direction: column;\n            align-items: center;\n        "}}});function J(){I.apply(this,arguments)}
v(J,I);J.from=I.from;J.c=I.c;r.Object.defineProperties(J,{b:{configurable:!0,enumerable:!0,get:function(){return"\n      flex-basis: 0;\n      flex-grow: 1;\n      flex-shrink: 0;\n\n      width: 100%;\n      height: 100%;\n\n      max-height: 100%;\n      max-height: -moz-available;\n      max-height: -webkit-fill-available;\n      max-height: fill-available;\n\n      margin: 0px;\n      padding: 0px;\n    "}}});function K(){F.apply(this,arguments)}v(K,F);K.from=F.from;K.c=F.c;
K.prototype.f=function(){F.prototype.f.call(this);this.element.style.opacity=1};r.Object.defineProperties(K,{b:{configurable:!0,enumerable:!0,get:function(){return"\n            opacity: 0;\n            transition: opacity 0.5s ease-in-out;\n        "}}});function L(){C.apply(this,arguments)}v(L,C);L.from=C.from;L.c=C.c;L.prototype.a=function(){this.i=[];C.prototype.a.call(this);return this};function M(){L.apply(this,arguments)}v(M,L);M.from=L.from;M.c=L.c;
M.prototype.a=function(){L.prototype.a.call(this);Ba(this,D(new N("exports/exe.namespace.js","dist/exe.namespace.js"),{defer:null}));return this};r.Object.defineProperties(M,{a:{configurable:!0,enumerable:!0,get:function(){return"head"}}});function O(){L.apply(this,arguments)}v(O,L);O.from=L.from;O.c=L.c;r.Object.defineProperties(O,{a:{configurable:!0,enumerable:!0,get:function(){return"title"}}});function P(a){a=void 0===a?{}:a;L.call(this);D(this,a)}v(P,L);P.from=L.from;P.c=L.c;
r.Object.defineProperties(P,{a:{configurable:!0,enumerable:!0,get:function(){return"link"}},f:{configurable:!0,enumerable:!0,get:function(){return{rel:"stylesheet"}}}});function Q(a){D((L.call(this),this),a)}v(Q,L);Q.from=L.from;Q.c=L.c;r.Object.defineProperties(Q,{a:{configurable:!0,enumerable:!0,get:function(){return"meta"}}});function R(a){for(var b=[],c=0;c<arguments.length;++c)b[c]=arguments[c];C.apply(this,p(b).concat())}v(R,C);R.from=C.from;R.c=C.c;
R.prototype.a=function(){C.prototype.a.call(this);for(var a=xa(),b=n(A.sheet.cssRules),c=b.next();!c.done;c=b.next())a.textContent+=c.value.cssText;this.element.querySelector("head").appendChild(a);return this};r.Object.defineProperties(R,{a:{configurable:!0,enumerable:!0,get:function(){return"html"}},b:{configurable:!0,enumerable:!0,get:function(){return"\n    -webkit-font-smoothing: antialiased;\n    scroll-behavior: smooth;\n    font-size: 100%;\n    height: 100%;\n    width: 100%;\n    padding: 0;\n    margin: 0;\n"}}});
function S(){K.apply(this,arguments)}v(S,K);S.from=K.from;S.c=K.c;r.Object.defineProperties(S,{a:{configurable:!0,enumerable:!0,get:function(){return"body"}},b:{configurable:!0,enumerable:!0,get:function(){return"\n    -webkit-font-smoothing: antialiased;\n    scroll-behavior: smooth;\n    font-size: 100%;\n    height: 100%;\n    width: 100%;\n    padding: 0;\n    margin: 0;\n"}}});function T(a){a=void 0===a?{href:""}:a;C.call(this);this.b=a}v(T,C);T.from=C.from;T.c=C.c;
T.prototype.a=function(){C.prototype.a.call(this);this.element=document.createDocumentFragment();var a=new P(Object.assign({},{rel:"preload",as:"style",onload:"this.onload=null;this.rel='stylesheet'"},this.b)),b=new U(new P(Object.assign({},this.b)));this.element.appendChild(a.a().element);this.element.appendChild(b.a().element);return this};
function V(a,b){b=void 0===b?[300,400,700]:b;T.call(this,{href:"https://fonts.googleapis.com/css2?family="+(void 0===a?"Lato":a).replace(" ","+")+":wght@"+b.join(";")+"&display=swap"})}v(V,T);V.from=T.from;V.c=T.c;function U(){L.apply(this,arguments)}v(U,L);U.from=L.from;U.c=L.c;r.Object.defineProperties(U,{a:{configurable:!0,enumerable:!0,get:function(){return"NoScript"}}});function W(){L.apply(this,arguments)}v(W,L);W.from=L.from;W.c=L.c;
r.Object.defineProperties(W,{a:{configurable:!0,enumerable:!0,get:function(){return"script"}}});function N(a,b){W.call(this);D(this,{src:b,defer:!0})}v(N,W);N.from=W.from;N.c=W.c;var Ha=[new Q({"http-equiv":"Content-Type",content:"text/html; charset=UTF-8"}),new Q({"http-equiv":"X-UA-Compatible",content:"IE=edge,chrome=1"}),new Q({name:"viewport",content:"width=device-width, initial-scale=1.0"})];function X(a){for(var b=[],c=0;c<arguments.length;++c)b[c]=arguments[c];M.apply(this,p(Ha).concat(p(b)))}v(X,M);X.from=M.from;X.c=M.c;function Y(){F.apply(this,arguments)}v(Y,F);Y.from=F.from;Y.c=F.c;
Y.prototype.f=function(){var a=this,b=Math.max(document.body.scrollHeight,document.documentElement.scrollHeight,document.body.offsetHeight,document.documentElement.offsetHeight,document.body.clientHeight,document.documentElement.clientHeight),c=Math.max(document.body.clientHeight,document.documentElement.clientHeight),e,k;document.addEventListener("scroll",function(){var l,g;return sa(new ra(new oa(function(d){if(1==d.a){l=window.pageYOffset;g=Math.round(100*l/(b-c));if(e||g===k){d.a=0;return}e=!0;
return na(d,a.animate("width",g+"%","0.1s linear"),3)}k=g;e=!1;d.a=0})))},{passive:!0})};r.Object.defineProperties(Y,{b:{configurable:!0,enumerable:!0,get:function(){return"\n      will-change: transform;\n      transform: translateZ(0);\n      -webkit-transform-style: preserve-3d;\n      -webkit-backface-visibility: hidden;\n      -webkit-transform:translate3d(0,0,0);\n      -webkit-transform-style: preserve-3d;\n      -webkit-perspective: 1000;\n      -webkit-transform: translateZ(0);\n\n      position: fixed;\n      background: #009688;\n      height: 24px;\n      width: 0%;\n      max-width: 100%;\n      \n      top: 0;\n      left: 0;\n    "}}});
function Z(){H.apply(this,arguments)}v(Z,H);Z.from=H.from;Z.c=H.c;r.Object.defineProperties(Z,{b:{configurable:!0,enumerable:!0,get:function(){return"\n      height: 100%;\n      max-width: 768px;\n      margin: 0 auto;\n    "}}});var Ia=new X(new O("Test Title"),new V("Playfair Display",[900]),new V("Libre Baskerville",[700]),new V("Raleway",[700]),new T({href:"https://fonts.googleapis.com/icon?family=Material+Icons&display=block"})),Ja=new Y,Ka=new J;Ka.g+="background: #555";
new R(Ia,new S(Ja,new Z(Ka,new J)));window.b=[];}).call(this);
