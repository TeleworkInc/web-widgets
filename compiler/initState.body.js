/*
 MIT */
'use strict';function u(a){if(!(a instanceof Array)){a=k(a);for(var b,c=[];!(b=a.next()).done;)c.push(b.value);a=c}return a}function v(a,b){a.prototype=ba(b.prototype);a.prototype.constructor=a;if(ia)ia(a,b);else for(var c in b)if("prototype"!=c)if(Object.defineProperties){var d=Object.getOwnPropertyDescriptor(b,c);d&&Object.defineProperty(a,c,d)}else a[c]=b[c]}
if("undefined"===typeof goog){var la={define:function(a,b){return b}};"undefined"!==typeof global?global.o=la:"undefined"!==typeof window&&(window.o=la)}function ma(){var a=document.createElement("style");a.id="ww-stylesheet";return a}var w=ma(),na=[];function oa(a){for(var b=0;b<arguments.length;++b);};/*
 MIT
*/
function x(a){function b(){y.apply(this,arguments)}for(var c=[],d=0;d<arguments.length;++d)c[d]=arguments[d];v(b,y);p.Object.defineProperties(b,{i:{configurable:!0,enumerable:!0,get:function(){var h=new Set(u(c.map(function(n){return n.i}).flat()).concat(u(y.i)));return u(h).concat()}},c:{configurable:!0,enumerable:!0,get:function(){return c.map(function(h){return h.c}).join("\n")}},attributes:{configurable:!0,enumerable:!0,get:function(){var h={};c.forEach(function(n){return Object.assign(h,n.attributes)})}}})}
function z(){this.j=this.constructor.b;this.attributes=Object.assign({},this.constructor.attributes);this.g=u(this.constructor.j).concat()}
p.Object.defineProperties(z,{b:{configurable:!0,enumerable:!0,get:function(){}},attributes:{configurable:!0,enumerable:!0,get:function(){return{}}},g:{configurable:!0,enumerable:!0,get:function(){return Object.getPrototypeOf(this).i||[]}},i:{configurable:!0,enumerable:!0,get:function(){var a=new Set([this].concat(u(this.g)));a=u(a).concat().filter(function(b){return b!==z});return u(a).concat()}},j:{configurable:!0,enumerable:!0,get:function(){var a=new Set(this.i.map(function(b){return b.name}));
return u(a).concat()}}});function y(a){for(var b=[],c=0;c<arguments.length;++c)b[c]=arguments[c];z.call(this);window[this.constructor.name]=this.constructor;this.l=b;this.j=this.constructor.b||"w";this.c=""}v(y,z);y.a=function(){var a=this.name,b=this.c||"";w.sheet||document.head.appendChild(w);if(na.includes(a))return oa("Styles for",a,"already exported. Skipping.");b&&(w.sheet.insertRule("."+a+" {"+b+"}"),na.push(a),this.g.forEach(function(c){return c.a()}))};
function pa(a){if(a.attributes)for(var b=k(Object.entries(a.attributes)),c=b.next();!c.done;c=b.next()){var d=k(c.value);c=d.next().value;d=d.next().value;a.element.setAttribute(c,d)}return a}function qa(a){var b=a.g;b.length&&(a.element.className=b.join(" "));return a}function ra(a){a.c&&a.element.setAttribute("style",a.c)}function sa(a){a.element||a.b();return a}
y.prototype.b=function(){var a=this;this.constructor.a();ra(qa(pa(ta(this,document.createElement(this.j)))));this.l.length&&this.l.forEach(function(b){b="string"!==typeof b?b:new A(b);b.b();a.element.appendChild(b.element)});return this};y.prototype.freeze=function(){console.log("<!DOCTYPE html>"+sa(this).s);return this};function ta(a,b){a.element?a.element.replaceWith(b):a.element=b;return a}function ua(a,b){b=void 0===b?{}:b;Object.assign(a.attributes||{},b)}
p.Object.defineProperties(y.prototype,{s:{configurable:!0,enumerable:!0,get:function(){return this.element.outerHTML}}});p.Object.defineProperties(y,{c:{configurable:!0,enumerable:!0,get:function(){return"\n      box-sizing: border-box;\n    "}}});function A(a){y.call(this);this.text=a}v(A,y);A.a=y.a;A.prototype.b=function(){return ta(this,document.createTextNode(this.text))};function B(){y.apply(this,arguments)}v(B,y);B.a=y.a;p.Object.defineProperties(B,{c:{configurable:!0,enumerable:!0,get:function(){return"box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.14),0 2px 1px -1px rgba(0, 0, 0, 0.12),0 1px 3px 0 rgba(0, 0, 0, 0.20);"}}});function D(){y.apply(this,arguments)}v(D,y);D.a=y.a;p.Object.defineProperties(D,{c:{configurable:!0,enumerable:!0,get:function(){return"\n            display: block;\n        "}}});function E(){y.apply(this,arguments)}v(E,y);E.a=y.a;
p.Object.defineProperties(E,{c:{configurable:!0,enumerable:!0,get:function(){return"width: 100%;"}}});function F(){y.apply(this,arguments)}v(F,y);F.a=y.a;p.Object.defineProperties(F,{c:{configurable:!0,enumerable:!0,get:function(){return"height: 100%;"}}});function G(){y.apply(this,arguments)}v(G,y);G.a=y.a;function H(){G.apply(this,arguments)}v(H,G);H.a=G.a;p.Object.defineProperties(H,{b:{configurable:!0,enumerable:!0,get:function(){return"h1"}},c:{configurable:!0,enumerable:!0,get:function(){}}});
function I(){G.apply(this,arguments)}v(I,G);I.a=G.a;p.Object.defineProperties(I,{b:{configurable:!0,enumerable:!0,get:function(){return"h2"}},c:{configurable:!0,enumerable:!0,get:function(){}}});function J(){y.apply(this,arguments)}v(J,y);J.a=y.a;p.Object.defineProperties(J,{c:{configurable:!0,enumerable:!0,get:function(){return"\n            display: flex;\n            flex-direction: column;\n            align-items: center;\n        "}}});function K(){J.apply(this,arguments)}v(K,J);K.a=J.a;
p.Object.defineProperties(K,{c:{configurable:!0,enumerable:!0,get:function(){return"\n            align-items: center;\n            justify-content: center;\n            text-align: center;\n        "}}});x(H,K);x(I,K);function L(){J.apply(this,arguments)}v(L,J);L.a=J.a;p.Object.defineProperties(L,{c:{configurable:!0,enumerable:!0,get:function(){return"\n      flex-basis: 0;\n      flex-grow: 1;\n      flex-shrink: 0;\n\n      width: 100%;\n      height: 100%;\n\n      max-height: 100%;\n      max-height: -moz-available;\n      max-height: -webkit-fill-available;\n      max-height: fill-available;\n\n      margin: 0px;\n      padding: 0px;\n    "}}});
function M(){L.apply(this,arguments)}v(M,L);M.a=L.a;p.Object.defineProperties(M,{c:{configurable:!0,enumerable:!0,get:function(){return"\n            flex-direction: column !important;\n        "}}});function N(){L.apply(this,arguments)}v(N,L);N.a=L.a;p.Object.defineProperties(N,{c:{configurable:!0,enumerable:!0,get:function(){return"\n            flex-direction: row !important;\n        "}}});function O(){J.apply(this,arguments)}v(O,J);O.a=J.a;
p.Object.defineProperties(O,{c:{configurable:!0,enumerable:!0,get:function(){return"\n            background: rgba(255, 255, 255, 0.1);\n            border: 4px solid white;\n            margin: 10px;\n        "}}});x(K,O,E);x(E,N);x(F,M);function P(){y.apply(this,arguments)}v(P,y);P.a=y.a;
P.prototype.b=function(){var a=this;y.prototype.b.call(this);requestAnimationFrame(function(){var b=a.constructor.name+".from(document.currentScript.parentNode).initState();",c=document.createElement("script");c.setAttribute("defer",!0);c.appendChild(document.createTextNode(b));a.element.appendChild(c)});return this};function Q(){P.apply(this,arguments)}v(Q,P);Q.a=P.a;p.Object.defineProperties(Q,{c:{configurable:!0,enumerable:!0,get:function(){return"\n            opacity: 0;\n            transition: opacity 0.5s ease-in-out;\n        "}}});
x(N,B);function R(){y.apply(this,arguments)}v(R,y);R.a=y.a;R.prototype.b=function(){this.g=[];y.prototype.b.call(this);return this};function S(){R.apply(this,arguments)}v(S,R);S.a=R.a;p.Object.defineProperties(S,{b:{configurable:!0,enumerable:!0,get:function(){return"head"}}});function T(){R.apply(this,arguments)}v(T,R);T.a=R.a;p.Object.defineProperties(T,{b:{configurable:!0,enumerable:!0,get:function(){return"title"}}});function U(a){a=void 0===a?{}:a;R.call(this);ua(this,a)}v(U,R);U.a=R.a;
p.Object.defineProperties(U,{b:{configurable:!0,enumerable:!0,get:function(){return"link"}},attributes:{configurable:!0,enumerable:!0,get:function(){return{rel:"stylesheet"}}}});function V(a){ua((R.call(this),this),a)}v(V,R);V.a=R.a;p.Object.defineProperties(V,{b:{configurable:!0,enumerable:!0,get:function(){return"meta"}}});function W(a){for(var b=[],c=0;c<arguments.length;++c)b[c]=arguments[c];y.apply(this,u(b).concat())}v(W,y);W.a=y.a;
W.prototype.b=function(){y.prototype.b.call(this);for(var a=ma(),b=k(w.sheet.cssRules),c=b.next();!c.done;c=b.next())a.textContent+=c.value.cssText;this.element.querySelector("head").appendChild(a);return this};p.Object.defineProperties(W,{b:{configurable:!0,enumerable:!0,get:function(){return"html"}},c:{configurable:!0,enumerable:!0,get:function(){return"\n    -webkit-font-smoothing: antialiased;\n    scroll-behavior: smooth;\n    font-size: 100%;\n    height: 100%;\n    width: 100%;\n    padding: 0;\n    margin: 0;\n"}}});
function X(){Q.apply(this,arguments)}v(X,Q);X.a=Q.a;p.Object.defineProperties(X,{b:{configurable:!0,enumerable:!0,get:function(){return"body"}},c:{configurable:!0,enumerable:!0,get:function(){return"\n    -webkit-font-smoothing: antialiased;\n    scroll-behavior: smooth;\n    font-size: 100%;\n    height: 100%;\n    width: 100%;\n    padding: 0;\n    margin: 0;\n"}}});function Y(a){a=void 0===a?{href:""}:a;y.call(this);this.attributes=a}v(Y,y);Y.a=y.a;
Y.prototype.b=function(){y.prototype.b.call(this);this.element=document.createDocumentFragment();var a=new U(Object.assign({},{rel:"preload",as:"style",onload:"this.onload=null;this.rel='stylesheet'"},this.attributes)),b=new va(new U(Object.assign({},this.attributes)));this.element.appendChild(a.b().element);this.element.appendChild(b.b().element);return this};
function Z(a,b){b=void 0===b?[300,400,700]:b;Y.call(this,{href:"https://fonts.googleapis.com/css2?family="+(void 0===a?"Lato":a).replace(" ","+")+":wght@"+b.join(";")+"&display=swap"})}v(Z,Y);Z.a=Y.a;function va(){R.apply(this,arguments)}v(va,R);va.a=R.a;p.Object.defineProperties(va,{b:{configurable:!0,enumerable:!0,get:function(){return"NoScript"}}});var wa=[new V({"http-equiv":"Content-Type",content:"text/html; charset=UTF-8"}),new V({"http-equiv":"X-UA-Compatible",content:"IE=edge,chrome=1"}),new V({name:"viewport",content:"width=device-width, initial-scale=1.0"})];function xa(a){for(var b=[],c=0;c<arguments.length;++c)b[c]=arguments[c];S.apply(this,u(wa).concat(u(b)))}v(xa,S);xa.a=S.a;function ya(){P.apply(this,arguments)}v(ya,P);ya.a=P.a;p.Object.defineProperties(ya,{c:{configurable:!0,enumerable:!0,get:function(){return"\n      will-change: transform;\n      transform: translateZ(0);\n      -webkit-transform-style: preserve-3d;\n      -webkit-backface-visibility: hidden;\n\n      position: fixed;\n      background: #009688;\n      height: 24px;\n      width: 0%;\n      max-width: 100%;\n      \n      top: 0;\n      left: 0;\n    "}}});
function za(){D.apply(this,arguments)}v(za,D);za.a=D.a;p.Object.defineProperties(za,{c:{configurable:!0,enumerable:!0,get:function(){return"\n      height: 100%;\n      max-width: 768px;\n      margin: 0 auto;\n    "}}});var Aa=new xa(new T("Test Title"),new Z("Playfair Display",[900]),new Z("Libre Baskerville",[700]),new Z("Raleway",[700]),new Y({href:"https://fonts.googleapis.com/icon?family=Material+Icons&display=block"})),Ba=new ya,Ca=new L;Ca.c+="background: #555";
new W(Aa,new X(Ba,new za(Ca,new L)));