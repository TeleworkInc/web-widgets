if("undefined"===typeof goog){let a={define:(b,d)=>d};"undefined"!==typeof global?global.goog=a:"undefined"!==typeof window&&(window.goog=a)}let c=[],e=[];function f(a,b){if(b.name)return b.name;for(let d in a)if(a[d]===b)return d;return null}
function g(...a){return class extends h{static get classes(){return[...new Set([...a.map(a=>a.classes).flat(),...super.classes])]}static get styles(){return a.map(a=>a.styles).join("\n")}static get attributes(){let b={};for(let d of a)Object.assign(b,d.attributes);return b}}}
class k{constructor(){this.tag=this.constructor.tag;this.attributes={...this.constructor.attributes};this.classNames=[...this.constructor.classNames]}static get tag(){return""}static get attributes(){return{}}static get inheritedClasses(){return Object.getPrototypeOf(this).classes||[]}static get classes(){return[...[...new Set([this,...this.inheritedClasses])].filter(a=>a!==k)]}static get classNames(){return[...new Set(this.classes.map(a=>a.name))]}}
class h extends k{constructor(...a){super();this.constructor.name in window||(window[this.constructor.name]=this.constructor);this.children=a;this.tag=this.constructor.tag||"w";this.styles=""}static get styles(){return"\n    transition: all 1s ease-in-out;\n    box-sizing: border-box;\n  "}static exportStyles(){let a=this.name,b=this.styles||"";e.includes(a)||(b&&(c.push(`.${a} {${b}}`),e.push(a)),this.inheritedClasses.forEach(a=>a.exportStyles()))}static from(a){let b=new this,d={},n=["class","style"];
b.element=a;b.tag=a.tagName.toLowerCase();b.classNames=Array.from(a.classList);for(let b of a.attributes){let [a,na]=[b.name,b.value];n.includes(a)||(d[a]=na)}b.setAttributes(d);return b}async animate(a,b,d="0.2s ease-in"){await new Promise(n=>{requestAnimationFrame(()=>{this.element.style.setProperty("transform",`${a} ${d}`);this.element.style.setProperty(a,b);n()})});return this}append(a){switch(typeof a){case "string":a=new l(a)}let b=this.maybeBuild().element;a=a.maybeBuild().element;b.appendChild(a);
return this}applyAttributes(){if(this.attributes)for(let [a,b]of Object.entries(this.attributes))window.FREEZE_MODE&&"constructor"===a||this.element.setAttribute(a,b);return this}applyClasses(){let a=this.classNames;a.length&&(this.element.className=a.join(" "));return this}applyStyles(){let a=this.styles.replace(/(\s{2,}|\n+)/g," ").trim();this.styles&&this.element.setAttribute("style",a);return this}maybeBuild(){this.element||this.build();return this}build(){return this}buildTest(){return this}createElement(){let a=
document.createElement(this.tag);return this.replaceElement(a)}freeze(){return this.render().element.outerHTML}initState(){}constructElement(){this.constructor.exportStyles();this.createElement().applyAttributes().applyClasses().applyStyles();return this}render(a=this.element){this.constructElement();a=a||this.element;a.replaceWith(this.element);this.children.length&&this.children.forEach(a=>{switch(typeof a){case "string":case "number":a=new m(a.toString())}this.element.appendChild(a.render().element)});
return this}replaceElement(a){this.element?this.element.replaceWith(a):this.element=a;return this}replaceText(a){a=document.createTextNode(a);return this.replaceElement(a)}setAttributes(a={}){Object.assign(this.attributes||{},a);return this}setClasses(...a){this.classNames.push(...a);return this}setStyles(...a){for(let b of a)this.styles+=b;return this}}
class p extends h{constructor(...a){super(...a);this.state={}}render(a=this.element){super.render(a);a=document.createElement("script");var b=this.constructor;b="(function(){var el=document.currentScript.parentNode;requestAnimationFrame(function(){"+`${b.name}`+`.${f(b,b.from)}(el)`+`.${f(b.prototype,b.prototype.initState)}();});})();`;a.setAttribute("async",!0);a.appendChild(document.createTextNode(b));this.element.appendChild(a);return this}initState(){}}
class l extends h{constructor(a){super();this.text=a}build(){return this.replaceText(this.text)}}class m extends h{constructor(a){super();this.text=a}render(){this.element=document.createTextNode(this.text);return this}}class q extends h{static get styles(){return"box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.14),0 2px 1px -1px rgba(0, 0, 0, 0.12),0 1px 3px 0 rgba(0, 0, 0, 0.20);"}}
class r extends h{static get styles(){return"box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14),0 3px 1px -2px rgba(0, 0, 0, 0.12),0 1px 5px 0 rgba(0, 0, 0, 0.20);"}}class t extends h{static get styles(){return"display: block;"}}class u extends h{static get styles(){return"padding: 16px;"}}class v extends h{static get styles(){return"position: relative;"}}class w extends h{static get styles(){return"position: absolute;"}}class x extends h{static get styles(){return"position: fixed;"}}
class y extends h{static get styles(){return"width: 100%;"}}class z extends h{static get styles(){return"height: 100%;"}}class A extends h{}class B extends A{static get tag(){return"h1"}static get styles(){return"font-size: 2rem"}}class C extends A{static get tag(){return"h2"}static get styles(){return"font-size: 1rem"}}
class D extends h{static get styles(){return"\n            display: flex;\n            flex-direction: column;\n            align-items: center;\n        "}setFlex(a=1){return this.setStyles(`flex-grow: ${a};`)}}class E extends D{static get styles(){return"\n            margin: auto;\n            align-items: center;\n            justify-content: center;\n            text-align: center;\n        "}}
class F extends D{static get styles(){return"\n      flex-basis: 0;\n      flex-grow: 1;\n      flex-shrink: 0;\n\n      width: 100%;\n      height: 100%;\n\n      max-height: 100%;\n      max-height: -moz-available;\n      max-height: -webkit-fill-available;\n      max-height: fill-available;\n\n      margin: 0px;\n      padding: 0px;\n    "}}class G extends F{static get styles(){return"flex-direction: column !important;"}}
class H extends F{static get styles(){return"flex-direction: row !important;"}}class I extends F{}class J extends D{static get styles(){return"\n            background: rgba(255, 255, 255, 0.1);\n            border: 4px solid white;\n            margin: 10px;\n        "}}class K extends A{static get styles(){return"color: black;"}}class L extends A{static get styles(){return"font-weight: bold;"}}class M extends h{static get tag(){return"img"}constructor(a){super();this.setAttributes({src:a})}}
class N extends F{constructor(a){super();this.setStyles(`background-image: url(${a});`)}}class O extends h{static get styles(){return"height: 80px;"}}class P extends K{static get styles(){return"opacity: 0.5;"}}class Q extends p{static get styles(){return"\n            opacity: 0;\n            transition: opacity 0.5s ease-in-out;\n        "}initState(){super.initState();this.element.style.opacity=1}}
class R extends h{static get tag(){return"i"}static get styles(){return"\n            font-size: 36px;\n            user-select: none;\n        "}constructor(a){super(a);this.setClasses("material-icons")}}class aa extends y{static get styles(){return"\n            display: table;\n            overflow: scroll;\n        "}}class S extends h{render(a){this.classNames=[];return super.render(a)}}class ba extends S{static get tag(){return"head"}}class ca extends S{static get tag(){return"title"}}
class T extends S{static get tag(){return"link"}static get attributes(){return{rel:"stylesheet"}}constructor(a={}){super();this.setAttributes(a)}}class da extends S{static get tag(){return"meta"}constructor(a){super().setAttributes(a)}}
class ea extends h{static get tag(){return"html"}static get styles(){return"\n    -webkit-font-smoothing: antialiased;\n    scroll-behavior: smooth;\n    font-size: 100%;\n    height: 100%;\n    width: 100%;\n    padding: 0;\n    margin: 0;\n"}constructor(...a){super(...a)}exportStylesheet(){let a=document.createElement("style");a.setAttribute("defer",!0);a.appendChild(document.createTextNode(c.join("\n")));this.element.querySelector("head").appendChild(a);return this}render(){super.render(document.documentElement);
return this.exportStylesheet()}freeze(){return`<!DOCTYPE html>${super.freeze()}`}}class fa extends h{static get tag(){return"body"}static get styles(){return"\n    -webkit-font-smoothing: antialiased;\n    scroll-behavior: smooth;\n    font-size: 100%;\n    height: 100%;\n    width: 100%;\n    padding: 0;\n    margin: 0;\n"}}
class U extends h{createElement(){this.element=document.createDocumentFragment();return this}render(){this.constructElement();this.children.forEach(a=>this.element.appendChild(a.render().element));return this}}class V extends U{constructor(a={href:""}){super(new T({rel:"preload",as:"style",onload:"this.onload=null;this.rel='stylesheet'",...a}),new W(new T({...a})))}}
class ha extends V{constructor(a="Lato",b=[300,400,700]){super({href:`https://fonts.googleapis.com/css2?family=${a.replace(" ","+")}:wght@${b.join(";")}&display=swap`})}}class X extends h{static get tag(){return"input"}}class ia extends X{static get attributes(){return{type:"email"}}}class ja extends h{static get tag(){return"button"}}class ka extends X{static get attributes(){return{type:"submit"}}}class la extends F{static get styles(){return"justify-content: space-evenly;"}}
class W extends S{static get tag(){return"NoScript"}}class Y extends S{static get tag(){return"script"}static get attributes(){return{async:!0}}}class Z extends Y{static get attributes(){return{inline:!0}}}class ma extends Z{constructor(a,b){super();this.setAttributes({src:b,async:!0})}}
export default {Absolute:w,AsyncStylesheet:V,Block:t,BodyWidget:fa,BoldText:L,BottomBar:O,Button:ja,Card:J,Center:E,Column:G,DarkText:K,DebugScript:ma,DocumentFragmentWidget:U,Elevation1:q,Elevation2:r,EmailInput:ia,Expanded:F,FadeIn:Q,Fixed:x,Flex:D,FlexImg:N,FullHeight:z,FullWidth:y,GoogleFont:ha,GreyText:P,HTMLWidget:ea,Head:ba,Heading1:B,Heading2:C,Img:M,Inheritable:k,InlineScript:Z,InputWidget:X,Link:T,List:aa,MaterialIcon:R,Meta:da,Mix:g,NoScript:W,Padding:u,Relative:v,Row:H,Script:Y,Slide:I,
SpaceEvenly:la,StatefulWidget:p,SubmitButton:ka,TextNode:l,TextNodeTest:m,TextWidget:A,Title:ca,UnstyledWidget:S,Widget:h,WidgetLike:void 0};
var WidgetLike=void 0;export{w as Absolute,V as AsyncStylesheet,t as Block,fa as BodyWidget,L as BoldText,O as BottomBar,ja as Button,J as Card,E as Center,G as Column,K as DarkText,ma as DebugScript,U as DocumentFragmentWidget,q as Elevation1,r as Elevation2,ia as EmailInput,F as Expanded,Q as FadeIn,x as Fixed,D as Flex,N as FlexImg,z as FullHeight,y as FullWidth,ha as GoogleFont,P as GreyText,ea as HTMLWidget,ba as Head,B as Heading1,C as Heading2,M as Img,k as Inheritable,Z as InlineScript,X as InputWidget,T as Link,aa as List,R as MaterialIcon,da as Meta,g as Mix,W as NoScript,u as Padding,v as Relative,H as Row,Y as Script,I as Slide,la as SpaceEvenly,p as StatefulWidget,ka as SubmitButton,l as TextNode,m as TextNodeTest,A as TextWidget,ca as Title,S as UnstyledWidget,h as Widget,WidgetLike}
