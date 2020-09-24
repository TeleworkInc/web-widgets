if("undefined"===typeof goog){let a={define:(b,d)=>d};"undefined"!==typeof global?global.goog=a:"undefined"!==typeof window&&(window.goog=a)}let c=(a,b)=>{a=document.createElement(a);a.id=b;return a},e=c("style","ww-stylesheet"),f=[];
function g(...a){return class extends h{static get classes(){return[...new Set([...a.map(a=>a.classes).flat(),...super.classes])]}static get styles(){return a.map(a=>a.styles).join("\n")}static get attributes(){let b={};a.forEach(a=>Object.assign(b,a.attributes))}}}
class k{constructor(){this.tag=this.constructor.tag;this.attributes={...this.constructor.attributes};this.classNames=[...this.constructor.classNames]}static get tag(){}static get attributes(){return{}}static get inheritedClasses(){return Object.getPrototypeOf(this).classes||[]}static get classes(){return[...[...new Set([this,...this.inheritedClasses])].filter(a=>a!==k)]}static get classNames(){return[...new Set(this.classes.map(a=>a.name))]}}
class h extends k{constructor(...a){super();window[this.constructor.name]=this.constructor;this.children=a;this.tag=this.constructor.tag||"w";this.styles=""}get html(){return this.element.outerHTML}static get styles(){return"\n      box-sizing: border-box;\n    "}static exportStyles(){let a=this.name,b=this.styles||"";e.sheet||document.head.appendChild(e);!f.includes(a)&&b&&(e.sheet.insertRule(`.${a} {${b}}`),f.push(a),this.inheritedClasses.forEach(a=>a.exportStyles()))}static from(a){let b=new this,
d={},v=["class","style"];b.element=a;b.tag=a.tagName.toLowerCase();b.classNames=Array.from(a.classList);for(let b of a.attributes){let [a,oa]=[b.name,b.value];v.includes(a)||(d[a]=oa)}b.setAttributes(d);return b}animate(a,b,d="0.2s ease-in"){requestAnimationFrame(()=>{this.element.style.setProperty("transition",`${a} ${d}`);this.element.style.setProperty(a,b)});return this}append(a){switch(typeof a){case "string":a=new aa(a)}this.element.appendChild(a.maybeBuild().element);return this}applyAttributes(){if(this.attributes)for(let [a,
b]of Object.entries(this.attributes))this.element.setAttribute(a,b);return this}applyClasses(){let a=this.classNames;a.length&&(this.element.className=a.join(" "));return this}applyStyles(){this.styles&&this.element.setAttribute("style",this.styles);return this}maybeBuild(){this.element||this.build();return this}build(){this.constructor.exportStyles();this.createElement().applyAttributes().applyClasses().applyStyles();this.children.length&&this.children.forEach(a=>this.append(a));return this}createElement(){let a=
document.createElement(this.tag);return this.replaceElement(a)}freeze(){return`<!DOCTYPE html>${this.maybeBuild().html}`}render(a=this.element){this.maybeBuild();console.log("target:",a);a.replaceWith(this.element);return this}replaceElement(a){this.element?this.element.replaceWith(a):this.element=a;return this}replaceText(a){a=document.createTextNode(a);return this.replaceElement(a)}setAttributes(a={}){Object.assign(this.attributes||{},a);return this}setClasses(...a){this.classNames.push(...a);return this}setStyles(a){this.styles+=
a;return this}}class aa extends h{constructor(a){super();this.text=a}build(){return this.replaceText(this.text)}}class l extends h{static get styles(){return"box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.14),0 2px 1px -1px rgba(0, 0, 0, 0.12),0 1px 3px 0 rgba(0, 0, 0, 0.20);"}}class m extends h{static get styles(){return"box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14),0 3px 1px -2px rgba(0, 0, 0, 0.12),0 1px 5px 0 rgba(0, 0, 0, 0.20);"}}
class n extends h{static get styles(){return"\n            display: block;\n        "}}class p extends h{static get styles(){return"\n            padding: 16px;\n        "}}class q extends h{static get styles(){return"\n            position: relative;\n         "}}class r extends h{static get styles(){return"position: absolute;"}}class t extends h{static get styles(){return"position: fixed;"}}class u extends h{static get styles(){return"width: 100%;"}}
class w extends h{static get styles(){return"height: 100%;"}}class x extends h{}class y extends x{static get tag(){return"h1"}static get styles(){}}class z extends x{static get tag(){return"h2"}static get styles(){}}class A extends h{static get styles(){return"\n            display: flex;\n            flex-direction: column;\n            align-items: center;\n        "}setFlex(a=1){return this.setStyles(`flex-grow: ${a};`)}}
class B extends A{static get styles(){return"\n            align-items: center;\n            justify-content: center;\n            text-align: center;\n        "}}class C extends g(y,B){}class D extends g(z,B){}
class E extends A{static get styles(){return"\n      flex-basis: 0;\n      flex-grow: 1;\n      flex-shrink: 0;\n\n      width: 100%;\n      height: 100%;\n\n      max-height: 100%;\n      max-height: -moz-available;\n      max-height: -webkit-fill-available;\n      max-height: fill-available;\n\n      margin: 0px;\n      padding: 0px;\n    "}}class F extends E{static get styles(){return"\n            flex-direction: column !important;\n        "}}
class G extends E{static get styles(){return"\n            flex-direction: row !important;\n        "}}class H extends E{}class I extends A{static get styles(){return"\n            background: rgba(255, 255, 255, 0.1);\n            border: 4px solid white;\n            margin: 10px;\n        "}}class J extends g(B,I,u){}class K extends x{static get styles(){return"\n            color: black;\n        "}}class L extends x{static get styles(){return"\n            font-weight: bold;\n        "}}
class M extends h{static get tag(){return"img"}constructor(a){super();this.setAttributes({src:a})}}class N extends E{constructor(a){super();this.setStyles(`
            background-image: url(${a});
        `)}}class O extends g(u,G){static get styles(){return"justify-content: space-around;"}}class P extends g(w,F){static get styles(){return"justify-content: space-around;"}}class ba extends h{static get styles(){return"\n            height: 80px;\n        "}}class Q extends K{static get styles(){return"opacity: 0.5;"}}function R(a,b){if(b.name)return b.name;for(let d in a)if(a[d]===b)return d}
class S extends h{build(){super.build();requestAnimationFrame(()=>{var a=this.constructor;a=`${a.name}`+`.${R(a,a.from)}(document.currentScript.parentNode)`+`.${R(a.prototype,a.prototype.initState)}();`;let b=document.createElement("script");b.setAttribute("defer",!0);b.appendChild(document.createTextNode(a));this.element.appendChild(b)});requestAnimationFrame(()=>this.initState());return this}initState(){}}
class T extends S{static get styles(){return"\n            opacity: 0;\n            transition: opacity 0.5s ease-in-out;\n        "}initState(){super.initState();this.element.style.opacity=1}}class ca extends h{constructor(a){super(a);this.setClasses("material-icons")}static get styles(){return"\n            font-size: 36px;\n            user-select: none;\n        "}static get tag(){return"i"}}
class da extends u{static get styles(){return"\n            display: table;\n            overflow: scroll;\n        "}}class U extends P{static get styles(){return"\n            align-items: start !important;\n            justify-content: center;\n        "}}
class ea extends g(G,l){constructor({left:a,title:b,subtitle:d,right:v}){super(a,new U(new L(b),new Q(d)),v)}static get styles(){return"\n            margin: 4px 0;\n            width: 100%;\n            height: 80px;\n            padding: 24px;\n        "}}class V extends h{build(){this.classNames=[];super.build();return this}}class fa extends V{static get tag(){return"head"}}class ha extends V{static get tag(){return"title"}}
class W extends V{constructor(a={}){super();this.setAttributes(a)}static get tag(){return"link"}static get attributes(){return{rel:"stylesheet"}}}class ia extends V{constructor(a){super().setAttributes(a)}static get tag(){return"meta"}}
class ja extends h{constructor(...a){super(...a)}static get tag(){return"html"}static get styles(){return"\n    -webkit-font-smoothing: antialiased;\n    scroll-behavior: smooth;\n    font-size: 100%;\n    height: 100%;\n    width: 100%;\n    padding: 0;\n    margin: 0;\n"}exportStylesheet(){let a=c("style","ww-stylesheet");for(let b of e.sheet.cssRules)a.textContent+=b.cssText;this.element.querySelector("head").appendChild(a);return this}build(){super.build();return this.exportStylesheet()}render(){document.documentElement.replaceWith(this.maybeBuild().element||
"ERROR");return this}}class ka extends T{static get tag(){return"body"}static get styles(){return"\n    -webkit-font-smoothing: antialiased;\n    scroll-behavior: smooth;\n    font-size: 100%;\n    height: 100%;\n    width: 100%;\n    padding: 0;\n    margin: 0;\n"}build(){super.build();let a=document.createElement("script");a.type="module";a.src="dist/exe.initState.js";return this}}
class X extends h{constructor(a={href:""}){super();this.attributes=a}build(){super.build();this.element=document.createDocumentFragment();let a=new W({rel:"preload",as:"style",onload:"this.onload=null;this.rel='stylesheet'",...this.attributes}),b=new Y(new W({...this.attributes}));this.element.appendChild(a.build().element);this.element.appendChild(b.build().element);return this}}
class la extends X{constructor(a="Lato",b=[300,400,700]){super({href:`https://fonts.googleapis.com/css2?family=${a.replace(" ","+")}:wght@${b.join(";")}&display=swap`})}}class Z extends h{static get tag(){return"input"}}class ma extends Z{static get attributes(){return{type:"email"}}}class na extends Z{static get attributes(){return{type:"submit"}}}class pa extends E{static get styles(){return"\n      justify-content: space-evenly;\n    "}}class Y extends V{static get tag(){return"NoScript"}}
export default {Absolute:r,AsyncStylesheet:X,Block:n,BodyWidget:ka,BoldText:L,BottomBar:ba,Card:I,Center:B,CenteredCard:J,CenteredHeading1:C,CenteredHeading2:D,Column:F,DarkText:K,Elevation1:l,Elevation2:m,EmailInput:ma,FadeIn:T,Fixed:t,Flex:A,FlexImg:N,FullHeight:w,FullWidth:u,GoogleFont:la,GreyText:Q,HTMLWidget:ja,Head:fa,Heading1:y,Heading2:z,Horizontal:O,Img:M,Inflate:E,Inheritable:k,InputWidget:Z,Link:W,List:da,ListItem:ea,ListItemContent:U,MaterialIcon:ca,Meta:ia,Mix:g,NoScript:Y,Padding:p,
Relative:q,Row:G,Slide:H,SpaceEvenly:pa,StatefulWidget:S,SubmitButton:na,TextWidget:x,Title:ha,UnstyledWidget:V,Vertical:P,Widget:h,deanonymize:R};
export{r as Absolute,X as AsyncStylesheet,n as Block,ka as BodyWidget,L as BoldText,ba as BottomBar,I as Card,B as Center,J as CenteredCard,C as CenteredHeading1,D as CenteredHeading2,F as Column,K as DarkText,l as Elevation1,m as Elevation2,ma as EmailInput,T as FadeIn,t as Fixed,A as Flex,N as FlexImg,w as FullHeight,u as FullWidth,la as GoogleFont,Q as GreyText,ja as HTMLWidget,fa as Head,y as Heading1,z as Heading2,O as Horizontal,M as Img,E as Inflate,k as Inheritable,Z as InputWidget,W as Link,da as List,ea as ListItem,U as ListItemContent,ca as MaterialIcon,ia as Meta,g as Mix,Y as NoScript,p as Padding,q as Relative,G as Row,H as Slide,pa as SpaceEvenly,S as StatefulWidget,na as SubmitButton,x as TextWidget,ha as Title,V as UnstyledWidget,P as Vertical,h as Widget,R as deanonymize}
