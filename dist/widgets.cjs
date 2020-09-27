Object.defineProperty(exports,"__esModule",{value:!0});if("undefined"===typeof goog){let a={define:(b,d)=>d};"undefined"!==typeof global?global.goog=a:"undefined"!==typeof window&&(window.goog=a)}let c=(a,b)=>{a=document.createElement(a);a.id=b;return a},e=c("style","ww-stylesheet"),f=[];
function g(...a){return class extends h{static get classes(){return[...new Set([...a.map(a=>a.classes).flat(),...super.classes])]}static get styles(){return a.map(a=>a.styles).join("\n")}static get attributes(){let b={};a.forEach(a=>Object.assign(b,a.attributes))}}}
class k{constructor(){this.tag=this.constructor.tag;this.attributes={...this.constructor.attributes};this.classNames=[...this.constructor.classNames]}static get tag(){}static get attributes(){return{}}static get inheritedClasses(){return Object.getPrototypeOf(this).classes||[]}static get classes(){return[...[...new Set([this,...this.inheritedClasses])].filter(a=>a!==k)]}static get classNames(){return[...new Set(this.classes.map(a=>a.name))]}}
class h extends k{constructor(...a){super();this.constructor.name in window||(window[this.constructor.name]=this.constructor);this.children=a;this.tag=this.constructor.tag||"w";this.styles=""}get html(){return this.element.outerHTML}static get styles(){return"\n      box-sizing: border-box;\n    "}static exportStyles(){let a=this.name,b=this.styles||"";e.sheet||document.head.appendChild(e);!f.includes(a)&&b&&(e.sheet.insertRule(`.${a} {${b}}`),f.push(a),this.inheritedClasses.forEach(a=>a.exportStyles()))}static from(a){let b=
new this,d={},v=["class","style"];b.element=a;b.tag=a.tagName.toLowerCase();b.classNames=Array.from(a.classList);for(let b of a.attributes){let [a,qa]=[b.name,b.value];v.includes(a)||(d[a]=qa)}b.setAttributes(d);return b}animate(a,b,d="0.2s ease-in"){requestAnimationFrame(()=>{this.element.style.setProperty("transition",`${a} ${d}`);this.element.style.setProperty(a,b)});return this}append(a){switch(typeof a){case "string":a=new aa(a)}this.maybeBuild().element.appendChild(a.maybeBuild().element);return this}applyAttributes(){if(this.attributes)for(let [a,
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
        `)}}class ba extends g(u,G){static get styles(){return"justify-content: space-around;"}}class O extends g(w,F){static get styles(){return"justify-content: space-around;"}}class ca extends h{static get styles(){return"\n            height: 80px;\n        "}}class P extends K{static get styles(){return"opacity: 0.5;"}}function Q(a,b){if(b.name)return b.name;for(let d in a)if(a[d]===b)return d;return null}
class R extends h{build(){super.build();let a=document.createElement("script");var b=this.constructor;b=`${b.name}`+`.${Q(b,b.from)}(document.currentScript.parentNode)`+`.${Q(b.prototype,b.prototype.initState)}();`;a.appendChild(document.createTextNode(b));return this}initState(){}}class S extends R{static get styles(){return"\n            opacity: 0;\n            transition: opacity 0.5s ease-in-out;\n        "}initState(){super.initState();this.element.style.opacity=1}}
class da extends h{constructor(a){super(a);this.setClasses("material-icons")}static get styles(){return"\n            font-size: 36px;\n            user-select: none;\n        "}static get tag(){return"i"}}class ea extends u{static get styles(){return"\n            display: table;\n            overflow: scroll;\n        "}}class T extends O{static get styles(){return"\n            align-items: start !important;\n            justify-content: center;\n        "}}
class fa extends g(G,l){constructor({left:a,title:b,subtitle:d,right:v}){super(a,new T(new L(b),new P(d)),v)}static get styles(){return"\n            margin: 4px 0;\n            width: 100%;\n            height: 80px;\n            padding: 24px;\n        "}}class U extends h{build(){this.classNames=[];super.build();return this}}class ha extends U{static get tag(){return"head"}}class ia extends U{static get tag(){return"title"}}
class V extends U{constructor(a={}){super();this.setAttributes(a)}static get tag(){return"link"}static get attributes(){return{rel:"stylesheet"}}}class ja extends U{constructor(a){super().setAttributes(a)}static get tag(){return"meta"}}
class ka extends h{constructor(...a){super(...a)}static get tag(){return"html"}static get styles(){return"\n    -webkit-font-smoothing: antialiased;\n    scroll-behavior: smooth;\n    font-size: 100%;\n    height: 100%;\n    width: 100%;\n    padding: 0;\n    margin: 0;\n"}exportStylesheet(){let a=c("style","ww-stylesheet");for(let b of e.sheet.cssRules)a.textContent+=b.cssText;this.element.querySelector("head").appendChild(a);return this}build(){super.build();return this.exportStylesheet()}render(){document.documentElement.replaceWith(this.maybeBuild().element||
"ERROR");return this}}class la extends S{static get tag(){return"body"}static get styles(){return"\n    -webkit-font-smoothing: antialiased;\n    scroll-behavior: smooth;\n    font-size: 100%;\n    height: 100%;\n    width: 100%;\n    padding: 0;\n    margin: 0;\n"}build(){super.build();let a=document.createElement("script");a.type="module";a.src="dist/exe.initState.js";return this}}
class W extends h{constructor(a={href:""}){super();this.attributes=a}build(){super.build();this.element=document.createDocumentFragment();let a=new V({rel:"preload",as:"style",onload:"this.onload=null;this.rel='stylesheet'",...this.attributes}),b=new X(new V({...this.attributes}));this.element.appendChild(a.build().element);this.element.appendChild(b.build().element);return this}}
class ma extends W{constructor(a="Lato",b=[300,400,700]){super({href:`https://fonts.googleapis.com/css2?family=${a.replace(" ","+")}:wght@${b.join(";")}&display=swap`})}}class Y extends h{static get tag(){return"input"}}class na extends Y{static get attributes(){return{type:"email"}}}class oa extends Y{static get attributes(){return{type:"submit"}}}class pa extends E{static get styles(){return"\n      justify-content: space-evenly;\n    "}}class X extends U{static get tag(){return"NoScript"}}
class Z extends U{static get tag(){return"script"}}class ra extends Z{constructor(){super();this.setAttributes({src:"dist/exe.initState.js"})}}
var sa={Absolute:r,AsyncStylesheet:W,Block:n,BodyWidget:la,BoldText:L,BottomBar:ca,Card:I,Center:B,CenteredCard:J,CenteredHeading1:C,CenteredHeading2:D,Column:F,DarkText:K,DebugScript:ra,Elevation1:l,Elevation2:m,EmailInput:na,Expanded:E,FadeIn:S,Fixed:t,Flex:A,FlexImg:N,FullHeight:w,FullWidth:u,GoogleFont:ma,GreyText:P,HTMLWidget:ka,Head:ha,Heading1:y,Heading2:z,Horizontal:ba,Img:M,Inheritable:k,InputWidget:Y,Link:V,List:ea,ListItem:fa,ListItemContent:T,MaterialIcon:da,Meta:ja,Mix:g,NoScript:X,Padding:p,
Relative:q,Row:G,Script:Z,Slide:H,SpaceEvenly:pa,StatefulWidget:R,SubmitButton:oa,TextWidget:x,Title:ia,UnstyledWidget:U,Vertical:O,Widget:h,deanonymize:Q};exports.Absolute=r;exports.AsyncStylesheet=W;exports.Block=n;exports.BodyWidget=la;exports.BoldText=L;exports.BottomBar=ca;exports.Card=I;exports.Center=B;exports.CenteredCard=J;exports.CenteredHeading1=C;exports.CenteredHeading2=D;exports.Column=F;exports.DarkText=K;exports.DebugScript=ra;exports.Elevation1=l;exports.Elevation2=m;
exports.EmailInput=na;exports.Expanded=E;exports.FadeIn=S;exports.Fixed=t;exports.Flex=A;exports.FlexImg=N;exports.FullHeight=w;exports.FullWidth=u;exports.GoogleFont=ma;exports.GreyText=P;exports.HTMLWidget=ka;exports.Head=ha;exports.Heading1=y;exports.Heading2=z;exports.Horizontal=ba;exports.Img=M;exports.Inheritable=k;exports.InputWidget=Y;exports.Link=V;exports.List=ea;exports.ListItem=fa;exports.ListItemContent=T;exports.MaterialIcon=da;exports.Meta=ja;exports.Mix=g;exports.NoScript=X;
exports.Padding=p;exports.Relative=q;exports.Row=G;exports.Script=Z;exports.Slide=H;exports.SpaceEvenly=pa;exports.StatefulWidget=R;exports.SubmitButton=oa;exports.TextWidget=x;exports.Title=ia;exports.UnstyledWidget=U;exports.Vertical=O;exports.Widget=h;exports.deanonymize=Q;exports.default=sa
