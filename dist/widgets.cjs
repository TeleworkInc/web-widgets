Object.defineProperty(exports,"__esModule",{value:!0});if("undefined"===typeof goog){let a={define:(b,d)=>d};"undefined"!==typeof global?global.goog=a:"undefined"!==typeof window&&(window.goog=a)}let c=[],e=[];function f(a,b){if(b.name)return b.name;for(let d in a)if(a[d]===b)return d;return null}
function g(...a){return class extends h{static get classes(){return[...new Set([...a.map(a=>a.classes).flat(),...super.classes])]}static get styles(){return a.map(a=>a.styles).join("\n")}static get attributes(){let b={};for(let d of a)Object.assign(b,d.attributes);return b}}}
class k{constructor(){this.tag=this.constructor.tag;this.attributes={...this.constructor.attributes};this.classNames=[...this.constructor.classNames]}static get attributes(){return{}}static get tag(){return""}static get inheritedClasses(){return Object.getPrototypeOf(this).classes||[]}static get classes(){return[...[...new Set([this,...this.inheritedClasses])].filter(a=>a!==k)]}static get classNames(){return[...new Set(this.classes.map(a=>a.name))]}}
class h extends k{constructor(...a){super();this.constructor.name in window||(window[this.constructor.name]=this.constructor);this.frozen=!1;this.listeners=[];this.element=null;this.children=a;this.tag=this.constructor.tag||"w";this.styles=""}static get styles(){return"\n    transition: all 1s ease-in-out;\n    box-sizing: border-box;\n  "}static exportStyles(){let a=this.name,b=this.styles||"";e.includes(a)||(b&&(c.push(`.${a} {${b}}`),e.push(a)),this.inheritedClasses.forEach(a=>a.exportStyles()))}static from(a){let b=
new this,d={},n=["class","style"];b.element=a;b.tag=a.tagName.toLowerCase();b.classNames=Array.from(a.classList);for(let b of a.attributes){let [a,na]=[b.name,b.value];n.includes(a)||(d[a]=na)}b.setAttributes(d);return b}bindListeners(){if(this.element)for(let [a,b]of this.listeners)this.element.addEventListener(a,b);return this}on(a,b){this.listeners.push([a,b]);return this}async animate(a,b,d="0.2s ease-in"){await new Promise(n=>{requestAnimationFrame(()=>{this.element.style.setProperty("transform",
`${a} ${d}`);this.element.style.setProperty(a,b);n()})});return this}applyAttributes(){if(this.attributes)for(let [a,b]of Object.entries(this.attributes))window.FREEZE_MODE&&"constructor"===a||this.element.setAttribute(a,b);return this}applyClasses(){let a=this.classNames;a.length&&(this.element.className=a.join(" "));return this}applyStyles(){let a=this.styles.replace(/(\s{2,}|\n+)/g," ").trim();this.styles&&this.element.setAttribute("style",a);return this}build(){return this}buildTest(){return this}createElement(){this.element=
document.createElement(this.tag);return this}freeze(){return this.freezeMode().render().element.outerHTML}freezeMode(){this.frozen=!0;return this}initState(){}constructElement(){this.constructor.exportStyles();return this.createElement().applyAttributes().applyClasses().applyStyles()}render(a=this.element){let b=this.build();b.constructElement().renderChildren();a&&a.replaceWith(b.element);this.element=b.element;return b.bindListeners()}renderChildren(){this.children.length&&this.children.forEach(a=>
{switch(typeof a){case "string":case "number":a=new l(a.toString());break;case "undefined":case "null":return this}this.frozen&&(a=a.freezeMode());this.element.appendChild(a.render().element)});return this}replaceElement(a){this.element?this.element.replaceWith(a):this.element=a;return this}replaceText(a){a=document.createTextNode(a);return this.replaceElement(a)}setAttributes(a={}){Object.assign(this.attributes||{},a);return this}setClasses(...a){this.classNames.push(...a);return this}setStyles(...a){for(let b of a)this.styles+=
b;return this}}
class m extends h{constructor(...a){super(...a);this.state={};this.initState()}embedStateLogicIfFrozen(){if(this.frozen){let b=document.createElement("script");var a=this.constructor;a="(function(){var el=document.currentScript.parentNode;requestAnimationFrame(function(){"+`${a.name}`+`.${f(a,a.from)}(el)`+`.${f(a.prototype,a.prototype.render)}();});})();`;b.setAttribute("async",!0);b.appendChild(document.createTextNode(a));this.element.appendChild(b)}return this}render(a=this.element){super.render(a);return this.embedStateLogicIfFrozen()}initState(){}setState(a){return()=>
a(this.state)}}class p extends h{constructor(a){super();this.text=a}build(){return this.replaceText(this.text)}}class l extends h{constructor(a){super();this.text=a}render(){this.element=document.createTextNode(this.text);return this}}class q extends h{static get styles(){return"box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.14),0 2px 1px -1px rgba(0, 0, 0, 0.12),0 1px 3px 0 rgba(0, 0, 0, 0.20);"}}
class r extends h{static get styles(){return"box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14),0 3px 1px -2px rgba(0, 0, 0, 0.12),0 1px 5px 0 rgba(0, 0, 0, 0.20);"}}class t extends h{static get styles(){return"display: block;"}}class u extends h{static get styles(){return"padding: 16px;"}}class v extends h{static get styles(){return"position: relative;"}}class w extends h{static get styles(){return"position: absolute;"}}class x extends h{static get styles(){return"position: fixed;"}}
class y extends h{static get styles(){return"width: 100%;"}}class z extends h{static get styles(){return"height: 100%;"}}class A extends h{}class B extends A{static get tag(){return"h1"}static get styles(){return"font-size: 2rem"}}class C extends A{static get tag(){return"h2"}static get styles(){return"font-size: 1rem"}}
class D extends h{static get styles(){return"\n            display: flex;\n            flex-direction: column;\n            align-items: center;\n        "}setFlex(a=1){return this.setStyles(`flex-grow: ${a};`)}}class E extends D{static get styles(){return"\n            margin: auto;\n            align-items: center;\n            justify-content: center;\n            text-align: center;\n        "}}
class F extends D{static get styles(){return"\n      flex-basis: 0;\n      flex-grow: 1;\n      flex-shrink: 0;\n\n      width: 100%;\n      height: 100%;\n\n      max-height: 100%;\n      max-height: -moz-available;\n      max-height: -webkit-fill-available;\n      max-height: fill-available;\n\n      margin: 0px;\n      padding: 0px;\n    "}}class G extends F{static get styles(){return"flex-direction: column !important;"}}
class H extends F{static get styles(){return"flex-direction: row !important;"}}class I extends F{}class J extends D{static get styles(){return"\n            background: rgba(255, 255, 255, 0.1);\n            border: 4px solid white;\n            margin: 10px;\n        "}}class K extends A{static get styles(){return"color: black;"}}class L extends A{static get styles(){return"font-weight: bold;"}}class M extends h{static get tag(){return"img"}constructor(a){super();this.setAttributes({src:a})}}
class N extends F{constructor(a){super();this.setStyles(`background-image: url(${a});`)}}class O extends h{static get styles(){return"height: 80px;"}}class P extends K{static get styles(){return"opacity: 0.5;"}}class Q extends m{static get styles(){return"\n            opacity: 0;\n            transition: opacity 0.5s ease-in-out;\n        "}initState(){super.initState();this.element.style.opacity=1}}
class R extends h{static get tag(){return"i"}static get styles(){return"\n            font-size: 36px;\n            user-select: none;\n        "}constructor(a){super(a);this.setClasses("material-icons")}}class aa extends y{static get styles(){return"\n            display: table;\n            overflow: scroll;\n        "}}class S extends h{render(a){this.classNames=[];return super.render(a)}}class ba extends S{static get tag(){return"head"}}class ca extends S{static get tag(){return"title"}}
class T extends S{static get tag(){return"link"}static get attributes(){return{rel:"stylesheet"}}constructor(a={}){super();this.setAttributes(a)}}class da extends S{static get tag(){return"meta"}constructor(a){super().setAttributes(a)}}
class ea extends h{static get tag(){return"html"}static get styles(){return"\n    -webkit-font-smoothing: antialiased;\n    scroll-behavior: smooth;\n    font-size: 100%;\n    height: 100%;\n    width: 100%;\n    padding: 0;\n    margin: 0;\n"}constructor(...a){super(...a)}exportStylesheet(){let a=document.createElement("style");a.setAttribute("defer",!0);a.appendChild(document.createTextNode(c.join("\n")));this.element.querySelector("head").appendChild(a);return this}freeze(){return`<!DOCTYPE html>${super.freeze()}`}render(){super.render(document.documentElement);
return this.exportStylesheet()}}class fa extends h{static get tag(){return"body"}static get styles(){return"\n    -webkit-font-smoothing: antialiased;\n    scroll-behavior: smooth;\n    font-size: 100%;\n    height: 100%;\n    width: 100%;\n    padding: 0;\n    margin: 0;\n"}}class U extends h{createElement(){this.element=document.createDocumentFragment();return this}render(){this.constructElement();this.children.forEach(a=>this.element.appendChild(a.render().element));return this}}
class V extends U{constructor(a={href:""}){super(new T({rel:"preload",as:"style",onload:"this.onload=null;this.rel='stylesheet'",...a}),new W(new T({...a})))}}class ha extends V{constructor(a="Lato",b=[300,400,700]){super({href:`https://fonts.googleapis.com/css2?family=${a.replace(" ","+")}:wght@${b.join(";")}&display=swap`})}}class X extends h{static get tag(){return"input"}}class ia extends X{static get attributes(){return{type:"email"}}}class ja extends h{static get tag(){return"button"}}
class ka extends X{static get attributes(){return{type:"submit"}}}class la extends F{static get styles(){return"justify-content: space-evenly;"}}class W extends S{static get tag(){return"NoScript"}}class Y extends S{static get tag(){return"script"}static get attributes(){return{async:!0}}}class Z extends Y{static get attributes(){return{inline:!0}}}class ma extends Z{constructor(a,b){super();this.setAttributes({src:b,async:!0})}}
var oa={Absolute:w,AsyncStylesheet:V,Block:t,BodyWidget:fa,BoldText:L,BottomBar:O,Button:ja,Card:J,Center:E,Column:G,DarkText:K,DebugScript:ma,DocumentFragmentWidget:U,Elevation1:q,Elevation2:r,EmailInput:ia,Expanded:F,FadeIn:Q,Fixed:x,Flex:D,FlexImg:N,FullHeight:z,FullWidth:y,GoogleFont:ha,GreyText:P,HTMLWidget:ea,Head:ba,Heading1:B,Heading2:C,Img:M,Inheritable:k,InlineScript:Z,InputWidget:X,Link:T,List:aa,MaterialIcon:R,Meta:da,Mix:g,NoScript:W,Padding:u,Relative:v,Row:H,Script:Y,Slide:I,SpaceEvenly:la,
StatefulWidget:m,SubmitButton:ka,TextNode:p,TextNodeTest:l,TextWidget:A,Title:ca,UnstyledWidget:S,Widget:h,WidgetLike:void 0};exports.Absolute=w;exports.AsyncStylesheet=V;exports.Block=t;exports.BodyWidget=fa;exports.BoldText=L;exports.BottomBar=O;exports.Button=ja;exports.Card=J;exports.Center=E;exports.Column=G;exports.DarkText=K;exports.DebugScript=ma;exports.DocumentFragmentWidget=U;exports.Elevation1=q;exports.Elevation2=r;exports.EmailInput=ia;exports.Expanded=F;exports.FadeIn=Q;
exports.Fixed=x;exports.Flex=D;exports.FlexImg=N;exports.FullHeight=z;exports.FullWidth=y;exports.GoogleFont=ha;exports.GreyText=P;exports.HTMLWidget=ea;exports.Head=ba;exports.Heading1=B;exports.Heading2=C;exports.Img=M;exports.Inheritable=k;exports.InlineScript=Z;exports.InputWidget=X;exports.Link=T;exports.List=aa;exports.MaterialIcon=R;exports.Meta=da;exports.Mix=g;exports.NoScript=W;exports.Padding=u;exports.Relative=v;exports.Row=H;exports.Script=Y;exports.Slide=I;exports.SpaceEvenly=la;
exports.StatefulWidget=m;exports.SubmitButton=ka;exports.TextNode=p;exports.TextNodeTest=l;exports.TextWidget=A;exports.Title=ca;exports.UnstyledWidget=S;exports.Widget=h;exports.WidgetLike=void 0;exports.default=oa
