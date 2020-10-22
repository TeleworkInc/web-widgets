(function(){/*
 MIT  MIT
*/
'use strict';function aa(a){var b=0;return function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}}}function h(a){var b="undefined"!=typeof Symbol&&Symbol.iterator&&a[Symbol.iterator];return b?b.call(a):{next:aa(a)}}function n(a){if(!(a instanceof Array)){a=h(a);for(var b,c=[];!(b=a.next()).done;)c.push(b.value);a=c}return a}
var ba="function"==typeof Object.create?Object.create:function(a){function b(){}b.prototype=a;return new b},p="function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,c){if(a==Array.prototype||a==Object.prototype)return a;a[b]=c.value;return a};
function ca(a){a=["object"==typeof globalThis&&globalThis,a,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof global&&global];for(var b=0;b<a.length;++b){var c=a[b];if(c&&c.Math==Math)return c}throw Error("Cannot find global object");}var q=ca(this);function t(a,b){if(b)a:{var c=q;a=a.split(".");for(var d=0;d<a.length-1;d++){var k=a[d];if(!(k in c))break a;c=c[k]}a=a[a.length-1];d=c[a];b=b(d);b!=d&&null!=b&&p(c,a,{configurable:!0,writable:!0,value:b})}}var da;
if("function"==typeof Object.setPrototypeOf)da=Object.setPrototypeOf;else{var ea;a:{var fa={B:!0},ha={};try{ha.__proto__=fa;ea=ha.B;break a}catch(a){}ea=!1}da=ea?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}var ia=da;
function u(a,b){a.prototype=ba(b.prototype);a.prototype.constructor=a;if(ia)ia(a,b);else for(var c in b)if("prototype"!=c)if(Object.defineProperties){var d=Object.getOwnPropertyDescriptor(b,c);d&&Object.defineProperty(a,c,d)}else a[c]=b[c]}
t("Symbol",function(a){function b(k){if(this instanceof b)throw new TypeError("Symbol is not a constructor");return new c("jscomp_symbol_"+(k||"")+"_"+d++,k)}function c(k,l){this.b=k;p(this,"description",{configurable:!0,writable:!0,value:l})}if(a)return a;c.prototype.toString=function(){return this.b};var d=0;return b});
t("Symbol.iterator",function(a){if(a)return a;a=Symbol("Symbol.iterator");for(var b="Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "),c=0;c<b.length;c++){var d=q[b[c]];"function"===typeof d&&"function"!=typeof d.prototype[a]&&p(d.prototype,a,{configurable:!0,writable:!0,value:function(){return ja(aa(this))}})}return a});function ja(a){a={next:a};a[Symbol.iterator]=function(){return this};return a}
function v(a,b){return Object.prototype.hasOwnProperty.call(a,b)}
t("WeakMap",function(a){function b(e){this.b=(f+=Math.random()+1).toString();if(e){e=h(e);for(var g;!(g=e.next()).done;)g=g.value,this.set(g[0],g[1])}}function c(){}function d(e){var g=typeof e;return"object"===g&&null!==e||"function"===g}function k(e){if(!v(e,r)){var g=new c;p(e,r,{value:g})}}function l(e){var g=Object[e];g&&(Object[e]=function(m){if(m instanceof c)return m;Object.isExtensible(m)&&k(m);return g(m)})}if(function(){if(!a||!Object.seal)return!1;try{var e=Object.seal({}),g=Object.seal({}),
m=new a([[e,2],[g,3]]);if(2!=m.get(e)||3!=m.get(g))return!1;m.delete(e);m.set(g,4);return!m.has(e)&&4==m.get(g)}catch(L){return!1}}())return a;var r="$jscomp_hidden_"+Math.random();l("freeze");l("preventExtensions");l("seal");var f=0;b.prototype.set=function(e,g){if(!d(e))throw Error("Invalid WeakMap key");k(e);if(!v(e,r))throw Error("WeakMap key fail: "+e);e[r][this.b]=g;return this};b.prototype.get=function(e){return d(e)&&v(e,r)?e[r][this.b]:void 0};b.prototype.has=function(e){return d(e)&&v(e,
r)&&v(e[r],this.b)};b.prototype.delete=function(e){return d(e)&&v(e,r)&&v(e[r],this.b)?delete e[r][this.b]:!1};return b});
t("Map",function(a){function b(){var f={};return f.i=f.next=f.head=f}function c(f,e){var g=f.b;return ja(function(){if(g){for(;g.head!=f.b;)g=g.i;for(;g.next!=g.head;)return g=g.next,{done:!1,value:e(g)};g=null}return{done:!0,value:void 0}})}function d(f,e){var g=e&&typeof e;"object"==g||"function"==g?l.has(e)?g=l.get(e):(g=""+ ++r,l.set(e,g)):g="p_"+e;var m=f.g[g];if(m&&v(f.g,g))for(f=0;f<m.length;f++){var L=m[f];if(e!==e&&L.key!==L.key||e===L.key)return{id:g,list:m,index:f,f:L}}return{id:g,list:m,
index:-1,f:void 0}}function k(f){this.g={};this.b=b();this.size=0;if(f){f=h(f);for(var e;!(e=f.next()).done;)e=e.value,this.set(e[0],e[1])}}if(function(){if(!a||"function"!=typeof a||!a.prototype.entries||"function"!=typeof Object.seal)return!1;try{var f=Object.seal({x:4}),e=new a(h([[f,"s"]]));if("s"!=e.get(f)||1!=e.size||e.get({x:4})||e.set({x:4},"t")!=e||2!=e.size)return!1;var g=e.entries(),m=g.next();if(m.done||m.value[0]!=f||"s"!=m.value[1])return!1;m=g.next();return m.done||4!=m.value[0].x||
"t"!=m.value[1]||!g.next().done?!1:!0}catch(L){return!1}}())return a;var l=new WeakMap;k.prototype.set=function(f,e){f=0===f?0:f;var g=d(this,f);g.list||(g.list=this.g[g.id]=[]);g.f?g.f.value=e:(g.f={next:this.b,i:this.b.i,head:this.b,key:f,value:e},g.list.push(g.f),this.b.i.next=g.f,this.b.i=g.f,this.size++);return this};k.prototype.delete=function(f){f=d(this,f);return f.f&&f.list?(f.list.splice(f.index,1),f.list.length||delete this.g[f.id],f.f.i.next=f.f.next,f.f.next.i=f.f.i,f.f.head=null,this.size--,
!0):!1};k.prototype.clear=function(){this.g={};this.b=this.b.i=b();this.size=0};k.prototype.has=function(f){return!!d(this,f).f};k.prototype.get=function(f){return(f=d(this,f).f)&&f.value};k.prototype.entries=function(){return c(this,function(f){return[f.key,f.value]})};k.prototype.keys=function(){return c(this,function(f){return f.key})};k.prototype.values=function(){return c(this,function(f){return f.value})};k.prototype.forEach=function(f,e){for(var g=this.entries(),m;!(m=g.next()).done;)m=m.value,
f.call(e,m[1],m[0],this)};k.prototype[Symbol.iterator]=k.prototype.entries;var r=0;return k});
t("Set",function(a){function b(c){this.b=new Map;if(c){c=h(c);for(var d;!(d=c.next()).done;)this.add(d.value)}this.size=this.b.size}if(function(){if(!a||"function"!=typeof a||!a.prototype.entries||"function"!=typeof Object.seal)return!1;try{var c=Object.seal({x:4}),d=new a(h([c]));if(!d.has(c)||1!=d.size||d.add(c)!=d||1!=d.size||d.add({x:4})!=d||2!=d.size)return!1;var k=d.entries(),l=k.next();if(l.done||l.value[0]!=c||l.value[1]!=c)return!1;l=k.next();return l.done||l.value[0]==c||4!=l.value[0].x||
l.value[1]!=l.value[0]?!1:k.next().done}catch(r){return!1}}())return a;b.prototype.add=function(c){c=0===c?0:c;this.b.set(c,c);this.size=this.b.size;return this};b.prototype.delete=function(c){c=this.b.delete(c);this.size=this.b.size;return c};b.prototype.clear=function(){this.b.clear();this.size=0};b.prototype.has=function(c){return this.b.has(c)};b.prototype.entries=function(){return this.b.entries()};b.prototype.values=function(){return this.b.values()};b.prototype.keys=b.prototype.values;b.prototype[Symbol.iterator]=
b.prototype.values;b.prototype.forEach=function(c,d){var k=this;this.b.forEach(function(l){return c.call(d,l,l,k)})};return b});var ka="function"==typeof Object.assign?Object.assign:function(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(d)for(var k in d)v(d,k)&&(a[k]=d[k])}return a};t("Object.assign",function(a){return a||ka});t("Object.is",function(a){return a?a:function(b,c){return b===c?0!==b||1/b===1/c:b!==b&&c!==c}});
t("Array.prototype.includes",function(a){return a?a:function(b,c){var d=this;d instanceof String&&(d=String(d));var k=d.length;c=c||0;for(0>c&&(c=Math.max(c+k,0));c<k;c++){var l=d[c];if(l===b||Object.is(l,b))return!0}return!1}});
t("String.prototype.includes",function(a){return a?a:function(b,c){if(null==this)throw new TypeError("The 'this' value for String.prototype.includes must not be null or undefined");if(b instanceof RegExp)throw new TypeError("First argument to String.prototype.includes must not be a regular expression");return-1!==this.indexOf(b,c||0)}});
t("Array.from",function(a){return a?a:function(b,c,d){c=null!=c?c:function(f){return f};var k=[],l="undefined"!=typeof Symbol&&Symbol.iterator&&b[Symbol.iterator];if("function"==typeof l){b=l.call(b);for(var r=0;!(l=b.next()).done;)k.push(c.call(d,l.value,r++))}else for(l=b.length,r=0;r<l;r++)k.push(c.call(d,b[r],r));return k}});t("Object.entries",function(a){return a?a:function(b){var c=[],d;for(d in b)v(b,d)&&c.push([d,b[d]]);return c}});
if("undefined"===typeof goog){var la={define:function(a,b){return b}};"undefined"!==typeof global?global.C=la:"undefined"!==typeof window&&(window.C=la)}var ma=[],na=[];function oa(a,b){if(b.name)return b.name;for(var c in a)if(a[c]===b)return c;return null}function w(){this.j=this.constructor.b;this.b=Object.assign({},this.constructor.g);this.g=n(this.constructor.m).concat()}
q.Object.defineProperties(w,{g:{configurable:!0,enumerable:!0,get:function(){return{}}},b:{configurable:!0,enumerable:!0,get:function(){return""}},j:{configurable:!0,enumerable:!0,get:function(){return Object.getPrototypeOf(this).v||[]}},v:{configurable:!0,enumerable:!0,get:function(){var a=new Set([this].concat(n(this.j)));a=n(a).concat().filter(function(b){return b!==w});return n(a).concat()}},m:{configurable:!0,enumerable:!0,get:function(){var a=new Set(this.v.map(function(b){return b.name}));
return n(a).concat()}}});function x(a){for(var b=[],c=0;c<arguments.length;++c)b[c]=arguments[c];w.call(this);this.constructor.name in window||(window[this.constructor.name]=this.constructor);this.u=[];this.element=null;this.m=b;this.j=this.constructor.b||"w";this.c=""}u(x,w);x.a=function(){var a=this.name,b=this.c||"";na.includes(a)||(b&&(ma.push("."+a+" {"+b+"}"),na.push(a)),this.j.forEach(function(c){return c.a()}))};
x.from=function(a){var b=new this,c={},d=["class","style"];b.element=a;b.j=a.tagName.toLowerCase();b.g=Array.from(a.classList);a=h(a.attributes);for(var k=a.next();!k.done;k=a.next()){k=k.value;var l=h([k.name,k.value]);k=l.next().value;l=l.next().value;d.includes(k)||(c[k]=l)}y(b,c);return b};function pa(a){var b=new qa("Press Me");b.u.push(["click",a]);return b}x.prototype.l=function(){return this};
x.prototype.A=function(){var a=document.createElement(this.j);this.element?this.element.replaceWith(a):this.element=a;return this};x.prototype.freeze=function(){return this.h().element.outerHTML};x.prototype.o=function(){this.l()};
function ra(a){a.constructor.a();a=a.A();if(a.b)for(var b=h(Object.entries(a.b)),c=b.next();!c.done;c=b.next()){var d=h(c.value);c=d.next().value;d=d.next().value;window.b&&"constructor"===c||a.element.setAttribute(c,d)}b=a.g;b.length&&(a.element.className=b.join(" "));b=a.c.replace(/(\s{2,}|\n+)/g," ").trim();a.c&&a.element.setAttribute("style",b);return a}
x.prototype.h=function(a){a=void 0===a?this.element:a;var b=this.l();sa(ra(b));a&&a.replaceWith(b.element);if(this.element=b.element){a=h(b.u);for(var c=a.next();!c.done;c=a.next()){var d=h(c.value);c=d.next().value;d=d.next().value;b.element.addEventListener(c,d)}}return b};function sa(a){a.m.length&&a.m.forEach(function(b){switch(typeof b){case "string":case "number":b=new z(b.toString())}a.element.appendChild(b.h().element)})}
function y(a,b){b=void 0===b?{}:b;Object.assign(a.b||{},b);return a}x.prototype.s=function(a){for(var b=[],c=0;c<arguments.length;++c)b[c]=arguments[c];b=h(b);for(c=b.next();!c.done;c=b.next())this.c+=c.value;return this};q.Object.defineProperties(x,{c:{configurable:!0,enumerable:!0,get:function(){return"\n    transition: all 1s ease-in-out;\n    box-sizing: border-box;\n  "}}});function A(a){for(var b=[],c=0;c<arguments.length;++c)b[c]=arguments[c];x.apply(this,n(b).concat());this.state={}}u(A,x);
A.from=x.from;A.a=x.a;A.prototype.h=function(a){a=void 0===a?this.element:a;x.prototype.h.call(this,a);a=document.createElement("script");var b=this.constructor;b="(function(){var el=document.currentScript.parentNode;requestAnimationFrame(function(){"+b.name+("."+oa(b,b.from)+"(el).")+(oa(b.prototype,b.prototype.o)+"();});})();");a.setAttribute("async",!0);a.appendChild(document.createTextNode(b));this.element.appendChild(a);return this};A.prototype.l=function(){this.o();return x.prototype.l.call(this)};
A.prototype.o=function(){};function z(a){x.call(this);this.text=a}u(z,x);z.from=x.from;z.a=x.a;z.prototype.h=function(){this.element=document.createTextNode(this.text);return this};function B(){x.apply(this,arguments)}u(B,x);B.from=x.from;B.a=x.a;q.Object.defineProperties(B,{c:{configurable:!0,enumerable:!0,get:function(){return"display: block;"}}});function C(){x.apply(this,arguments)}u(C,x);C.from=x.from;C.a=x.a;function D(){C.apply(this,arguments)}u(D,C);D.from=C.from;D.a=C.a;
q.Object.defineProperties(D,{b:{configurable:!0,enumerable:!0,get:function(){return"h1"}},c:{configurable:!0,enumerable:!0,get:function(){return"font-size: 2rem"}}});function E(){C.apply(this,arguments)}u(E,C);E.from=C.from;E.a=C.a;q.Object.defineProperties(E,{b:{configurable:!0,enumerable:!0,get:function(){return"h2"}},c:{configurable:!0,enumerable:!0,get:function(){return"font-size: 1rem"}}});function F(){x.apply(this,arguments)}u(F,x);F.from=x.from;F.a=x.a;
q.Object.defineProperties(F,{c:{configurable:!0,enumerable:!0,get:function(){return"\n            display: flex;\n            flex-direction: column;\n            align-items: center;\n        "}}});function G(){F.apply(this,arguments)}u(G,F);G.from=F.from;G.a=F.a;q.Object.defineProperties(G,{c:{configurable:!0,enumerable:!0,get:function(){return"\n            margin: auto;\n            align-items: center;\n            justify-content: center;\n            text-align: center;\n        "}}});
function H(){F.apply(this,arguments)}u(H,F);H.from=F.from;H.a=F.a;q.Object.defineProperties(H,{c:{configurable:!0,enumerable:!0,get:function(){return"\n      flex-basis: 0;\n      flex-grow: 1;\n      flex-shrink: 0;\n\n      width: 100%;\n      height: 100%;\n\n      max-height: 100%;\n      max-height: -moz-available;\n      max-height: -webkit-fill-available;\n      max-height: fill-available;\n\n      margin: 0px;\n      padding: 0px;\n    "}}});function I(){x.apply(this,arguments)}u(I,x);
I.from=x.from;I.a=x.a;I.prototype.h=function(a){this.g=[];return x.prototype.h.call(this,a)};function J(){I.apply(this,arguments)}u(J,I);J.from=I.from;J.a=I.a;q.Object.defineProperties(J,{b:{configurable:!0,enumerable:!0,get:function(){return"head"}}});function K(){I.apply(this,arguments)}u(K,I);K.from=I.from;K.a=I.a;q.Object.defineProperties(K,{b:{configurable:!0,enumerable:!0,get:function(){return"title"}}});function M(a){a=void 0===a?{}:a;I.call(this);y(this,a)}u(M,I);M.from=I.from;M.a=I.a;
q.Object.defineProperties(M,{b:{configurable:!0,enumerable:!0,get:function(){return"link"}},g:{configurable:!0,enumerable:!0,get:function(){return{rel:"stylesheet"}}}});function N(a){y((I.call(this),this),a)}u(N,I);N.from=I.from;N.a=I.a;q.Object.defineProperties(N,{b:{configurable:!0,enumerable:!0,get:function(){return"meta"}}});function O(a){for(var b=[],c=0;c<arguments.length;++c)b[c]=arguments[c];x.apply(this,n(b).concat())}u(O,x);O.from=x.from;O.a=x.a;
O.prototype.freeze=function(){return"<!DOCTYPE html>"+x.prototype.freeze.call(this)};O.prototype.h=function(){x.prototype.h.call(this,document.documentElement);var a=document.createElement("style");a.setAttribute("defer",!0);a.appendChild(document.createTextNode(ma.join("\n")));this.element.querySelector("head").appendChild(a);return this};q.Object.defineProperties(O,{b:{configurable:!0,enumerable:!0,get:function(){return"html"}},c:{configurable:!0,enumerable:!0,get:function(){return"\n    -webkit-font-smoothing: antialiased;\n    scroll-behavior: smooth;\n    font-size: 100%;\n    height: 100%;\n    width: 100%;\n    padding: 0;\n    margin: 0;\n"}}});
function P(){x.apply(this,arguments)}u(P,x);P.from=x.from;P.a=x.a;q.Object.defineProperties(P,{b:{configurable:!0,enumerable:!0,get:function(){return"body"}},c:{configurable:!0,enumerable:!0,get:function(){return"\n    -webkit-font-smoothing: antialiased;\n    scroll-behavior: smooth;\n    font-size: 100%;\n    height: 100%;\n    width: 100%;\n    padding: 0;\n    margin: 0;\n"}}});function Q(){x.apply(this,arguments)}u(Q,x);Q.from=x.from;Q.a=x.a;
Q.prototype.A=function(){this.element=document.createDocumentFragment();return this};Q.prototype.h=function(){var a=this;ra(this);this.m.forEach(function(b){return a.element.appendChild(b.h().element)});return this};function R(a){a=void 0===a?{href:""}:a;Q.call(this,new M(Object.assign({},{rel:"preload",as:"style",onload:"this.onload=null;this.rel='stylesheet'"},a)),new S(new M(Object.assign({},a))))}u(R,Q);R.from=Q.from;R.a=Q.a;
function T(a,b){b=void 0===b?[300,400,700]:b;R.call(this,{href:"https://fonts.googleapis.com/css2?family="+(void 0===a?"Lato":a).replace(" ","+")+":wght@"+b.join(";")+"&display=swap"})}u(T,R);T.from=R.from;T.a=R.a;function U(){x.apply(this,arguments)}u(U,x);U.from=x.from;U.a=x.a;q.Object.defineProperties(U,{b:{configurable:!0,enumerable:!0,get:function(){return"button"}}});function S(){I.apply(this,arguments)}u(S,I);S.from=I.from;S.a=I.a;
q.Object.defineProperties(S,{b:{configurable:!0,enumerable:!0,get:function(){return"NoScript"}}});function V(){I.apply(this,arguments)}u(V,I);V.from=I.from;V.a=I.a;q.Object.defineProperties(V,{b:{configurable:!0,enumerable:!0,get:function(){return"script"}},g:{configurable:!0,enumerable:!0,get:function(){return{async:!0}}}});function W(){V.apply(this,arguments)}u(W,V);W.from=V.from;W.a=V.a;q.Object.defineProperties(W,{g:{configurable:!0,enumerable:!0,get:function(){return{inline:!0}}}});
function ta(a,b){W.call(this);y(this,{src:b,async:!0})}u(ta,W);ta.from=W.from;ta.a=W.a;var ua=[new N({"http-equiv":"Content-Type",content:"text/html; charset=UTF-8"}),new N({"http-equiv":"X-UA-Compatible",content:"IE=edge,chrome=1"}),new N({name:"viewport",content:"width=device-width, initial-scale=1.0"})];function va(a){for(var b=[],c=0;c<arguments.length;++c)b[c]=arguments[c];J.apply(this,n(ua).concat([new ta("exports/exe.namespace.js","dist/exe.namespace.js")],n(b)))}u(va,J);va.from=J.from;
va.a=J.a;function X(){A.apply(this,arguments)}u(X,A);X.from=A.from;X.a=A.a;
X.prototype.o=function(){var a=this;A.prototype.o.call(this);var b=Math.max(document.body.scrollHeight,document.documentElement.scrollHeight,document.body.offsetHeight,document.documentElement.offsetHeight,document.body.clientHeight,document.documentElement.clientHeight),c=Math.max(document.body.clientHeight,document.documentElement.clientHeight),d=!1,k=0;document.addEventListener("scroll",function(){k=100*window.pageYOffset/(b-c);d||(d=!0,requestAnimationFrame(function(){a.element.style.setProperty("--scroll",
k+"%");d=!1}))},{passive:!0})};q.Object.defineProperties(X,{c:{configurable:!0,enumerable:!0,get:function(){return"\n      position: fixed;\n      height: 24px;\n      width: 100%;\n      \n      top: 0;\n      left: 0;\n\n      will-change: transform;\n      transform: translateZ(0);\n      -webkit-transform-style: preserve-3d;\n      -webkit-backface-visibility: hidden;\n      -webkit-transform:translate3d(0,0,0);\n      -webkit-transform-style: preserve-3d;\n      -webkit-perspective: 1000;\n      -webkit-transform: translateZ(0);\n\n      background: linear-gradient(to right, #bbdefb var(--scroll), transparent 0);\n    "}}});
function Y(){B.apply(this,arguments)}u(Y,B);Y.from=B.from;Y.a=B.a;q.Object.defineProperties(Y,{c:{configurable:!0,enumerable:!0,get:function(){return"\n    height: 100%;\n    max-width: 768px;\n    margin: 0 auto;\n  "}}});function qa(a){for(var b=[],c=0;c<arguments.length;++c)b[c]=arguments[c];U.apply(this,n(b).concat());this.u=[]}u(qa,U);qa.from=U.from;qa.a=U.a;function Z(a){A.call(this);this.state.count=a}u(Z,A);Z.from=A.from;Z.a=A.a;
Z.prototype.l=function(){var a=this,b=y(new D(this.state.count),{id:"cntBtn"});return new H(b,pa(function(){return console.log("state:",a.state.count++)}))};
var wa=new O(new va(new K("Web Widgets Demo"),new T("Work Sans",[800]),new T("Public Sans",[400]),new R({href:"https://fonts.googleapis.com/icon?family=Material+Icons&display=block"})),new P(new X,(new H(new G(new Y((new D("Welcome to Web Widgets")).s("\n                        color: white;\n                        font-family: 'Work Sans', sans-serif;\n                        font-weight: 800;\n                    "),(new E("This stateful layout was shipped as 7kB of static, gzipped data from the edge with Google Cloud CDN.")).s("\n                        color: white;\n                        font-family: 'Public Sans', sans-serif;\n                        font-weight: 400;\n                    "))))).s("\n            background: linear-gradient(to top left, #003c8f, #5e92f3); padding: 2rem;\n        "),
(new H(new G(new Y((new D("Thanks for checking it out!")).s("\n                        font-family: 'Work Sans', sans-serif;\n                        font-weight: 800;\n                    "),new Z(0))))).s("padding:2rem")));window.NO_RENDER||wa.h(document.documentElement);}).call(this);
