#!/usr/bin/env node
var h=h||{};h.scope={};h.ASSUME_ES5=!1;h.ASSUME_NO_NATIVE_MAP=!1;h.ASSUME_NO_NATIVE_SET=!1;h.SIMPLE_FROUND_POLYFILL=!1;h.ISOLATE_POLYFILLS=!1;h.defineProperty=h.ASSUME_ES5||"function"==typeof Object.defineProperties?Object.defineProperty:function(d,e,k){if(d==Array.prototype||d==Object.prototype)return d;d[e]=k.value;return d};
h.getGlobal=function(d){d=["object"==typeof globalThis&&globalThis,d,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof global&&global];for(var e=0;e<d.length;++e){var k=d[e];if(k&&k.Math==Math)return k}throw Error("Cannot find global object");};h.global=h.getGlobal(this);h.IS_SYMBOL_NATIVE="function"===typeof Symbol&&"symbol"===typeof Symbol("x");h.TRUST_ES6_POLYFILLS=!h.ISOLATE_POLYFILLS||h.IS_SYMBOL_NATIVE;h.polyfills={};h.propertyToPolyfillSymbol={};
h.POLYFILL_PREFIX="$jscp$";h.polyfill=function(d,e,k,l){e&&(h.ISOLATE_POLYFILLS?h.polyfillIsolated(d,e,k,l):h.polyfillUnisolated(d,e,k,l))};h.polyfillUnisolated=function(d,e){var k=h.global;d=d.split(".");for(var l=0;l<d.length-1;l++){var m=d[l];m in k||(k[m]={});k=k[m]}d=d[d.length-1];l=k[d];e=e(l);e!=l&&null!=e&&h.defineProperty(k,d,{configurable:!0,writable:!0,value:e})};
h.polyfillIsolated=function(d,e,k){var l=d.split(".");d=1===l.length;var m=l[0];m=!d&&m in h.polyfills?h.polyfills:h.global;for(var p=0;p<l.length-1;p++){var r=l[p];r in m||(m[r]={});m=m[r]}l=l[l.length-1];k=h.IS_SYMBOL_NATIVE&&"es6"===k?m[l]:null;e=e(k);null!=e&&(d?h.defineProperty(h.polyfills,l,{configurable:!0,writable:!0,value:e}):e!==k&&(h.propertyToPolyfillSymbol[l]=h.IS_SYMBOL_NATIVE?h.global.Symbol(l):h.POLYFILL_PREFIX+l,l=h.propertyToPolyfillSymbol[l],h.defineProperty(m,l,{configurable:!0,
writable:!0,value:e})))};h.polyfill("String.prototype.trimRight",function(d){function e(){return this.replace(/[\s\xa0]+$/,"")}return d||e},"es_2019","es3");h.polyfill("Array.prototype.includes",function(d){return d?d:function(d,k){var e=this;e instanceof String&&(e=String(e));var m=e.length;k=k||0;for(0>k&&(k=Math.max(k+m,0));k<m;k++){var p=e[k];if(p===d||Object.is(p,d))return!0}return!1}},"es7","es3");Object.defineProperty(exports,"__esModule",{value:!0});
function q(d){return d&&"object"===typeof d&&"default"in d?d["default"]:d}
var t=q(require("fs")),v=q(require("path")),z=q(require("child_process")),D=q(require("events")),E=function(d,e,k){return k={path:e,exports:{},require:function(){throw Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs");}},d(k,k.exports),k.exports}(function(d,e){function k(a){return a.split("-").reduce((a,c)=>a+c[0].toUpperCase()+c.slice(1))}function l(a,b){return a+Array(Math.max(0,b-a.length)+1).join(" ")}function m(a,b,c){return(a.match(new RegExp(".{1,"+(b-1)+"}([\\s\u200b]|$)|[^\\s\u200b]+?([\\s\u200b]|$)",
"g"))||[]).map((a,b)=>{"\n"===a.slice(-1)&&(a=a.slice(0,a.length-1));return(0<b&&c?Array(c+1).join(" "):"")+a.trimRight()}).join("\n")}function p(a,b,c){return a.match(/[\n]\s+/)||40>b?a:m(a,b,c)}function r(a,b){b.find(b=>b===a._helpLongFlag||b===a._helpShortFlag)&&(a.outputHelp(),a._exit(0,"commander.helpDisplayed","(outputHelp)"))}function A(a){let b=a.name+(!0===a.variadic?"...":"");return a.required?"<"+b+">":"["+b+"]"}function B(a){let b;a=a.split(/[ |,]+/);1<a.length&&!/^[[<]/.test(a[1])&&(b=
a.shift());a=a.shift();!b&&/^-[^-]$/.test(a)&&(b=a,a=void 0);return{shortFlag:b,longFlag:a}}function C(a){return a.map(a=>{if(!a.startsWith("--inspect"))return a;let b,g="127.0.0.1",d="9229",f;null!==(f=a.match(/^(--inspect(-brk)?)$/))?b=f[1]:null!==(f=a.match(/^(--inspect(-brk|-port)?)=([^:]+)$/))?(b=f[1],/^\d+$/.test(f[3])?d=f[3]:g=f[3]):null!==(f=a.match(/^(--inspect(-brk|-port)?)=([^:]+):(\d+)$/))&&(b=f[1],g=f[3],d=f[4]);return b&&"0"!==d?`${b}=${g}:${parseInt(d)+1}`:a})}e=D.EventEmitter;let w=
z.spawn;class x{constructor(a,b){this.flags=a;this.required=a.includes("<");this.optional=a.includes("[");this.variadic=/\w\.\.\.[>\]]$/.test(a);this.mandatory=!1;a=B(a);this.short=a.shortFlag;this.long=a.longFlag;this.negate=!1;this.long&&(this.negate=this.long.startsWith("--no-"));this.description=b||"";this.defaultValue=void 0}name(){return this.long?this.long.replace(/^--/,""):this.short.replace(/^-/,"")}attributeName(){return k(this.name().replace(/^no-/,""))}is(a){return this.short===a||this.long===
a}}class u extends Error{constructor(a,b,c){super(c);Error.captureStackTrace(this,this.constructor);this.name=this.constructor.name;this.code=b;this.exitCode=a;this.nestedError=void 0}}class y extends e{constructor(a){super();this.commands=[];this.options=[];this.parent=null;this._allowUnknownOption=!1;this._args=[];this._scriptPath=this.rawArgs=null;this._name=a||"";this._optionValues={};this._storeOptionsAsProperties=!0;this._storeOptionsAsPropertiesCalled=!1;this._passCommandToAction=!0;this._actionResults=
[];this._actionHandler=null;this._executableHandler=!1;this._exitCallback=this._defaultCommandName=this._executableFile=null;this._aliases=[];this._hidden=!1;this._helpFlags="-h, --help";this._helpDescription="display help for command";this._helpShortFlag="-h";this._helpLongFlag="--help";this._hasImplicitHelpCommand=void 0;this._helpCommandName="help";this._helpCommandnameAndArgs="help [command]";this._helpCommandDescription="display help for command"}command(a,b,c){"object"===typeof b&&null!==b&&
(c=b,b=null);c=c||{};a=a.split(/ +/);let g=this.createCommand(a.shift());b&&(g.description(b),g._executableHandler=!0);c.isDefault&&(this._defaultCommandName=g._name);g._hidden=!(!c.noHelp&&!c.hidden);g._helpFlags=this._helpFlags;g._helpDescription=this._helpDescription;g._helpShortFlag=this._helpShortFlag;g._helpLongFlag=this._helpLongFlag;g._helpCommandName=this._helpCommandName;g._helpCommandnameAndArgs=this._helpCommandnameAndArgs;g._helpCommandDescription=this._helpCommandDescription;g._exitCallback=
this._exitCallback;g._storeOptionsAsProperties=this._storeOptionsAsProperties;g._passCommandToAction=this._passCommandToAction;g._executableFile=c.executableFile||null;this.commands.push(g);g._parseExpectedArgs(a);g.parent=this;return b?this:g}createCommand(a){return new y(a)}addCommand(a,b){function c(a){a.forEach(a=>{if(a._executableHandler&&!a._executableFile)throw Error(`Must specify executableFile for deeply nested executable: ${a.name()}`);c(a.commands)})}if(!a._name)throw Error("Command passed to .addCommand() must have a name");
c(a.commands);b=b||{};b.isDefault&&(this._defaultCommandName=a._name);if(b.noHelp||b.hidden)a._hidden=!0;this.commands.push(a);a.parent=this;return this}arguments(a){return this._parseExpectedArgs(a.split(/ +/))}addHelpCommand(a,b){!1===a?this._hasImplicitHelpCommand=!1:(this._hasImplicitHelpCommand=!0,"string"===typeof a&&(this._helpCommandName=a.split(" ")[0],this._helpCommandnameAndArgs=a),this._helpCommandDescription=b||this._helpCommandDescription);return this}_lazyHasImplicitHelpCommand(){void 0===
this._hasImplicitHelpCommand&&(this._hasImplicitHelpCommand=this.commands.length&&!this._actionHandler&&!this._findCommand("help"));return this._hasImplicitHelpCommand}_parseExpectedArgs(a){if(a.length)return a.forEach(a=>{let b={required:!1,name:"",variadic:!1};switch(a[0]){case "<":b.required=!0;b.name=a.slice(1,-1);break;case "[":b.name=a.slice(1,-1)}3<b.name.length&&"..."===b.name.slice(-3)&&(b.variadic=!0,b.name=b.name.slice(0,-3));b.name&&this._args.push(b)}),this._args.forEach((a,c)=>{if(a.variadic&&
c<this._args.length-1)throw Error(`only the last argument can be variadic '${a.name}'`);}),this}exitOverride(a){this._exitCallback=a?a:a=>{if("commander.executeSubCommandAsync"!==a.code)throw a;};return this}_exit(a,b,c){this._exitCallback&&this._exitCallback(new u(a,b,c));process.exit(a)}action(a){this._actionHandler=b=>{var c=this._args.length;let g=b.slice(0,c);g[c]=this._passCommandToAction?this:this.opts();b.length>c&&g.push(b.slice(c));b=a.apply(this,g);for(c=this;c.parent;)c=c.parent;c._actionResults.push(b)};
return this}_checkForOptionNameClash(a){if(this._storeOptionsAsProperties&&!this._storeOptionsAsPropertiesCalled&&"help"!==a.name()&&void 0!==this._getOptionValue(a.attributeName())){var b=!0;a.negate?(b=a.long.replace(/^--no-/,"--"),b=!this._findOption(b)):a.long&&(b=a.long.replace(/^--/,"--no-"),b=!this._findOption(b));if(b)throw Error(`option '${a.name()}' clashes with existing property '${a.attributeName()}' on Command
- call storeOptionsAsProperties(false) to store option values safely,
- or call storeOptionsAsProperties(true) to suppress this check,
- or change option name`);}}_optionEx(a,b,c,g,d){let f=new x(b,c);b=f.name();let n=f.attributeName();f.mandatory=!!a.mandatory;this._checkForOptionNameClash(f);if("function"!==typeof g)if(g instanceof RegExp){let a=g;g=(b,c)=>(b=a.exec(b))?b[0]:c}else d=g,g=null;if(f.negate||f.optional||f.required||"boolean"===typeof d)f.negate&&(a=f.long.replace(/^--no-/,"--"),d=this._findOption(a)?this._getOptionValue(n):!0),void 0!==d&&(this._setOptionValue(n,d),f.defaultValue=d);this.options.push(f);this.on("option:"+
b,a=>{let b=this._getOptionValue(n);null!==a&&g?a=g(a,void 0===b?d:b):null!==a&&f.variadic&&(a=b!==d&&Array.isArray(b)?b.concat(a):[a]);"boolean"===typeof b||"undefined"===typeof b?null==a?this._setOptionValue(n,f.negate?!1:d||!0):this._setOptionValue(n,a):null!==a&&this._setOptionValue(n,f.negate?!1:a)});return this}option(a,b,c,g){return this._optionEx({},a,b,c,g)}requiredOption(a,b,c,g){return this._optionEx({mandatory:!0},a,b,c,g)}allowUnknownOption(a){this._allowUnknownOption=void 0===a||a;return this}storeOptionsAsProperties(a){this._storeOptionsAsPropertiesCalled=
!0;this._storeOptionsAsProperties=void 0===a||a;if(this.options.length)throw Error("call .storeOptionsAsProperties() before adding options");return this}passCommandToAction(a){this._passCommandToAction=void 0===a||a;return this}_setOptionValue(a,b){this._storeOptionsAsProperties?this[a]=b:this._optionValues[a]=b}_getOptionValue(a){return this._storeOptionsAsProperties?this[a]:this._optionValues[a]}parse(a,b){if(void 0!==a&&!Array.isArray(a))throw Error("first parameter to parse must be array or undefined");
b=b||{};void 0===a&&(a=process.argv,process.versions&&process.versions.electron&&(b.from="electron"));this.rawArgs=a.slice();switch(b.from){case void 0:case "node":this._scriptPath=a[1];a=a.slice(2);break;case "electron":process.defaultApp?(this._scriptPath=a[1],a=a.slice(2)):a=a.slice(1);break;case "user":a=a.slice(0);break;default:throw Error(`unexpected parse option { from: '${b.from}' }`);}!this._scriptPath&&process.mainModule&&(this._scriptPath=process.mainModule.filename);this._name=this._name||
this._scriptPath&&v.basename(this._scriptPath,v.extname(this._scriptPath));this._parseCommand([],a);return this}parseAsync(a,b){this.parse(a,b);return Promise.all(this._actionResults).then(()=>this)}_executeSubCommand(a,b){b=b.slice();var c=!1;c=[".js",".ts",".mjs"];this._checkForMissingMandatoryOptions();let g=this._scriptPath,d;try{let a=t.realpathSync(g);d=v.dirname(a)}catch(F){d="."}let f=v.basename(g,v.extname(g))+"-"+a._name;a._executableFile&&(f=a._executableFile);let n=v.join(d,f);t.existsSync(n)?
f=n:c.forEach(a=>{t.existsSync(`${n}${a}`)&&(f=`${n}${a}`)});c=c.includes(v.extname(f));let e;"win32"!==process.platform?c?(b.unshift(f),b=C(process.execArgv).concat(b),e=w(process.argv[0],b,{stdio:"inherit"})):e=w(f,b,{stdio:"inherit"}):(b.unshift(f),b=C(process.execArgv).concat(b),e=w(process.execPath,b,{stdio:"inherit"}));["SIGUSR1","SIGUSR2","SIGTERM","SIGINT","SIGHUP"].forEach(a=>{process.on(a,()=>{!1===e.killed&&null===e.exitCode&&e.kill(a)})});let k=this._exitCallback;if(k)e.on("close",()=>
{k(new u(process.exitCode||0,"commander.executeSubCommandAsync","(close)"))});else e.on("close",process.exit.bind(process));e.on("error",b=>{if("ENOENT"===b.code)throw Error(`'${f}' does not exist
 - if '${a._name}' is not meant to be an executable command, remove description parameter from '.command()' and use '.description()' instead
 - if the default executable name is not suitable, use the executableFile option to supply a custom name`);if("EACCES"===b.code)throw Error(`'${f}' not executable`);if(k){let a=new u(1,"commander.executeSubCommandAsync","(error)");a.nestedError=b;k(a)}else process.exit(1)});this.runningCommand=e}_dispatchSubcommand(a,b,c){(a=this._findCommand(a))||this._helpAndError();a._executableHandler?this._executeSubCommand(a,b.concat(c)):a._parseCommand(b,c)}_parseCommand(a,b){let c=this.parseOptions(b);a=a.concat(c.operands);
b=c.unknown;this.args=a.concat(b);if(a&&this._findCommand(a[0]))this._dispatchSubcommand(a[0],a.slice(1),b);else if(this._lazyHasImplicitHelpCommand()&&a[0]===this._helpCommandName)1===a.length?this.help():this._dispatchSubcommand(a[1],[],[this._helpLongFlag]);else if(this._defaultCommandName)r(this,b),this._dispatchSubcommand(this._defaultCommandName,a,b);else if(!this.commands.length||0!==this.args.length||this._actionHandler||this._defaultCommandName||this._helpAndError(),r(this,c.unknown),this._checkForMissingMandatoryOptions(),
0<c.unknown.length&&this.unknownOption(c.unknown[0]),this._actionHandler){let c=this.args.slice();this._args.forEach((a,b)=>{a.required&&null==c[b]?this.missingArgument(a.name):a.variadic&&(c[b]=c.splice(b))});this._actionHandler(c);this.emit("command:"+this.name(),a,b)}else a.length?this._findCommand("*")?this._dispatchSubcommand("*",a,b):this.listenerCount("command:*")?this.emit("command:*",a,b):this.commands.length&&this.unknownCommand():this.commands.length&&this._helpAndError()}_findCommand(a){if(a)return this.commands.find(b=>
b._name===a||b._aliases.includes(a))}_findOption(a){return this.options.find(b=>b.is(a))}_checkForMissingMandatoryOptions(){for(let a=this;a;a=a.parent)a.options.forEach(b=>{b.mandatory&&void 0===a._getOptionValue(b.attributeName())&&a.missingMandatoryOptionValue(b)})}parseOptions(a){function b(a){return 1<a.length&&"-"===a[0]}let c=[],g=[],d=c;a=a.slice();for(var f=null;a.length;){let c=a.shift();if("--"===c){d===g&&d.push(c);d.push(...a);break}if(f&&!b(c))this.emit(`option:${f.name()}`,c);else{f=
null;if(b(c)){var e=this._findOption(c);if(e){e.required?(f=a.shift(),void 0===f&&this.optionMissingArgument(e),this.emit(`option:${e.name()}`,f)):e.optional?(f=null,0<a.length&&!b(a[0])&&(f=a.shift()),this.emit(`option:${e.name()}`,f)):this.emit(`option:${e.name()}`);f=e.variadic?e:null;continue}}if(2<c.length&&"-"===c[0]&&"-"!==c[1]&&(e=this._findOption(`-${c[1]}`)))e.required||e.optional?this.emit(`option:${e.name()}`,c.slice(2)):(this.emit(`option:${e.name()}`),a.unshift(`-${c.slice(2)}`));else{if(/^--[^=]+=/.test(c)){e=
c.indexOf("=");let a=this._findOption(c.slice(0,e));if(a&&(a.required||a.optional)){this.emit(`option:${a.name()}`,c.slice(e+1));continue}}1<c.length&&"-"===c[0]&&(d=g);d.push(c)}}}return{operands:c,unknown:g}}opts(){if(this._storeOptionsAsProperties){let a={},b=this.options.length;for(let c=0;c<b;c++){let b=this.options[c].attributeName();a[b]=b===this._versionOptionName?this._version:this[b]}return a}return this._optionValues}missingArgument(a){a=`error: missing required argument '${a}'`;console.error(a);
this._exit(1,"commander.missingArgument",a)}optionMissingArgument(a,b){a=b?`error: option '${a.flags}' argument missing, got '${b}'`:`error: option '${a.flags}' argument missing`;console.error(a);this._exit(1,"commander.optionMissingArgument",a)}missingMandatoryOptionValue(a){a=`error: required option '${a.flags}' not specified`;console.error(a);this._exit(1,"commander.missingMandatoryOptionValue",a)}unknownOption(a){this._allowUnknownOption||(a=`error: unknown option '${a}'`,console.error(a),this._exit(1,
"commander.unknownOption",a))}unknownCommand(){var a=[this.name()];for(let b=this.parent;b;b=b.parent)a.unshift(b.name());a=a.join(" ");a=`error: unknown command '${this.args[0]}'. See '${a} ${this._helpLongFlag}'.`;console.error(a);this._exit(1,"commander.unknownCommand",a)}version(a,b,c){if(void 0===a)return this._version;this._version=a;b=new x(b||"-V, --version",c||"output the version number");this._versionOptionName=b.attributeName();this.options.push(b);this.on("option:"+b.name(),()=>{process.stdout.write(a+
"\n");this._exit(0,"commander.version",a)});return this}description(a,b){if(void 0===a&&void 0===b)return this._description;this._description=a;this._argsDescription=b;return this}alias(a){if(void 0===a)return this._aliases[0];let b=this;0!==this.commands.length&&this.commands[this.commands.length-1]._executableHandler&&(b=this.commands[this.commands.length-1]);if(a===b._name)throw Error("Command alias can't be the same as its name");b._aliases.push(a);return this}aliases(a){if(void 0===a)return this._aliases;
a.forEach(a=>this.alias(a));return this}usage(a){if(void 0===a){if(this._usage)return this._usage;a=this._args.map(a=>A(a));return"[options]"+(this.commands.length?" [command]":"")+(this._args.length?" "+a.join(" "):"")}this._usage=a;return this}name(a){if(void 0===a)return this._name;this._name=a;return this}prepareCommands(){let a=this.commands.filter(a=>!a._hidden).map(a=>{let b=a._args.map(a=>A(a)).join(" ");return[a._name+(a._aliases[0]?"|"+a._aliases[0]:"")+(a.options.length?" [options]":"")+
(b?" "+b:""),a._description]});this._lazyHasImplicitHelpCommand()&&a.push([this._helpCommandnameAndArgs,this._helpCommandDescription]);return a}largestCommandLength(){return this.prepareCommands().reduce((a,b)=>Math.max(a,b[0].length),0)}largestOptionLength(){let a=[].slice.call(this.options);a.push({flags:this._helpFlags});return a.reduce((a,c)=>Math.max(a,c.flags.length),0)}largestArgLength(){return this._args.reduce((a,b)=>Math.max(a,b.name.length),0)}padWidth(){let a=this.largestOptionLength();
this._argsDescription&&this._args.length&&this.largestArgLength()>a&&(a=this.largestArgLength());this.commands&&this.commands.length&&this.largestCommandLength()>a&&(a=this.largestCommandLength());return a}optionHelp(){function a(a,d){return l(a,b)+"  "+p(d,c,b+2)}let b=this.padWidth(),c=(process.stdout.columns||80)-b-4,d=this.options.map(b=>{let c=b.description+(b.negate||void 0===b.defaultValue?"":" (default: "+JSON.stringify(b.defaultValue)+")");return a(b.flags,c)}),e=this._helpShortFlag&&!this._findOption(this._helpShortFlag),
f=!this._findOption(this._helpLongFlag);if(e||f){let b=this._helpFlags;e?f||(b=this._helpShortFlag):b=this._helpLongFlag;d.push(a(b,this._helpDescription))}return d.join("\n")}commandHelp(){if(!this.commands.length&&!this._lazyHasImplicitHelpCommand())return"";let a=this.prepareCommands(),b=this.padWidth(),c=(process.stdout.columns||80)-b-4;return["Commands:",a.map(a=>{let d=a[1]?"  "+a[1]:"";return(d?l(a[0],b):a[0])+p(d,c,b+2)}).join("\n").replace(/^/gm,"  "),""].join("\n")}helpInformation(){let a=
[];if(this._description){a=[this._description,""];let b=this._argsDescription;if(b&&this._args.length){let c=this.padWidth(),d=(process.stdout.columns||80)-c-5;a.push("Arguments:");a.push("");this._args.forEach(e=>{a.push("  "+l(e.name,c)+"  "+m(b[e.name],d,c+4))});a.push("")}}var b=this._name;this._aliases[0]&&(b=b+"|"+this._aliases[0]);for(var c="",d=this.parent;d;d=d.parent)c=d.name()+" "+c;b=["Usage: "+c+b+" "+this.usage(),""];c=[];(d=this.commandHelp())&&(c=[d]);d=["Options:",""+this.optionHelp().replace(/^/gm,
"  "),""];return b.concat(a).concat(d).concat(c).join("\n")}outputHelp(a){a||(a=a=>a);a=a(this.helpInformation());if("string"!==typeof a&&!Buffer.isBuffer(a))throw Error("outputHelp callback must return a string or a Buffer");process.stdout.write(a);this.emit(this._helpLongFlag)}helpOption(a,b){this._helpFlags=a||this._helpFlags;this._helpDescription=b||this._helpDescription;a=B(this._helpFlags);this._helpShortFlag=a.shortFlag;this._helpLongFlag=a.longFlag;return this}help(a){this.outputHelp(a);this._exit(process.exitCode||
0,"commander.help","(outputHelp)")}_helpAndError(){this.outputHelp();this._exit(1,"commander.help","(outputHelp)")}}e=d.exports=new y;e.program=e;e.Command=y;e.Option=x;e.CommanderError=u});E.command("say-hello [msg]").description("Say hello, or provide a special message instead.").action((d="Hello world!")=>console.log(d));try{E.exitOverride(),E.parse(process.argv)}catch(d){console.log("\n")}exports.default={}
