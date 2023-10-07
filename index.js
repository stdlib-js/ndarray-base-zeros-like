// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(r,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e(require("buffer")):"function"==typeof define&&define.amd?define(["buffer"],e):(r="undefined"!=typeof globalThis?globalThis:r||self).zerosLike=e(r.require$$0)}(this,(function(r){"use strict";var e="function"==typeof Object.defineProperty?Object.defineProperty:null;var t=Object.defineProperty;function n(r){return"number"==typeof r}function i(r){var e,t="";for(e=0;e<r;e++)t+="0";return t}function o(r,e,t){var n=!1,o=e-r.length;return o<0||(function(r){return"-"===r[0]}(r)&&(n=!0,r=r.substr(1)),r=t?r+i(o):i(o)+r,n&&(r="-"+r)),r}var a=String.prototype.toLowerCase,u=String.prototype.toUpperCase;function f(r){var e,t,i;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(t=r.arg,i=parseInt(t,10),!isFinite(i)){if(!n(t))throw new Error("invalid integer. Value: "+t);i=0}return i<0&&("u"===r.specifier||10!==e)&&(i=4294967295+i+1),i<0?(t=(-i).toString(e),r.precision&&(t=o(t,r.precision,r.padRight)),t="-"+t):(t=i.toString(e),i||r.precision?r.precision&&(t=o(t,r.precision,r.padRight)):t="",r.sign&&(t=r.sign+t)),16===e&&(r.alternate&&(t="0x"+t),t=r.specifier===u.call(r.specifier)?u.call(t):a.call(t)),8===e&&r.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}function l(r){return"string"==typeof r}var c=Math.abs,s=String.prototype.toLowerCase,h=String.prototype.toUpperCase,y=String.prototype.replace,p=/e\+(\d)$/,g=/e-(\d)$/,m=/^(\d+)$/,w=/^(\d+)e/,b=/\.0$/,v=/\.0*e/,d=/(\..*[^0])0*e/;function E(r){var e,t,i=parseFloat(r.arg);if(!isFinite(i)){if(!n(r.arg))throw new Error("invalid floating-point number. Value: "+t);i=r.arg}switch(r.specifier){case"e":case"E":t=i.toExponential(r.precision);break;case"f":case"F":t=i.toFixed(r.precision);break;case"g":case"G":c(i)<1e-4?((e=r.precision)>0&&(e-=1),t=i.toExponential(e)):t=i.toPrecision(r.precision),r.alternate||(t=y.call(t,d,"$1e"),t=y.call(t,v,"e"),t=y.call(t,b,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return t=y.call(t,p,"e+0$1"),t=y.call(t,g,"e-0$1"),r.alternate&&(t=y.call(t,m,"$1."),t=y.call(t,w,"$1.e")),i>=0&&r.sign&&(t=r.sign+t),t=r.specifier===h.call(r.specifier)?h.call(t):s.call(t)}function T(r){var e,t="";for(e=0;e<r;e++)t+=" ";return t}function A(r,e,t){var n=e-r.length;return n<0?r:r=t?r+T(n):T(n)+r}var _=String.fromCharCode,x=isNaN,j=Array.isArray;function V(r){var e={};return e.specifier=r.specifier,e.precision=void 0===r.precision?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function k(r){var e,t,n,i,a,u,c,s,h;if(!j(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(u="",c=1,s=0;s<r.length;s++)if(l(n=r[s]))u+=n;else{if(e=void 0!==n.precision,!(n=V(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+s+"`. Value: `"+n+"`.");for(n.mapping&&(c=n.mapping),t=n.flags,h=0;h<t.length;h++)switch(i=t.charAt(h)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===n.width){if(n.width=parseInt(arguments[c],10),c+=1,x(n.width))throw new TypeError("the argument for * width at position "+c+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(e&&"*"===n.precision){if(n.precision=parseInt(arguments[c],10),c+=1,x(n.precision))throw new TypeError("the argument for * precision at position "+c+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,e=!1)}switch(n.arg=arguments[c],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(n.padZeros=!1),n.arg=f(n);break;case"s":n.maxWidth=e?n.precision:-1;break;case"c":if(!x(n.arg)){if((a=parseInt(n.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=x(a)?String(n.arg):_(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(n.precision=6),n.arg=E(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=o(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=A(n.arg,n.width,n.padRight)),u+=n.arg||"",c+=1}return u}var L=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function B(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(e.precision="1"),e}function R(r){var e,t,n,i;for(t=[],i=0,n=L.exec(r);n;)(e=r.slice(i,L.lastIndex-n[0].length)).length&&t.push(e),t.push(B(n)),i=L.lastIndex,n=L.exec(r);return(e=r.slice(i)).length&&t.push(e),t}function S(r){return"string"==typeof r}function I(r){var e,t,n;if(!S(r))throw new TypeError(I("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=R(r),(t=new Array(arguments.length))[0]=e,n=1;n<t.length;n++)t[n]=arguments[n];return k.apply(null,t)}var C,M=Object.prototype,O=M.toString,F=M.__defineGetter__,U=M.__defineSetter__,N=M.__lookupGetter__,P=M.__lookupSetter__;C=function(){try{return e({},"x",{}),!0}catch(r){return!1}}()?t:function(r,e,t){var n,i,o,a;if("object"!=typeof r||null===r||"[object Array]"===O.call(r))throw new TypeError(I("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof t||null===t||"[object Array]"===O.call(t))throw new TypeError(I("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((i="value"in t)&&(N.call(r,e)||P.call(r,e)?(n=r.__proto__,r.__proto__=M,delete r[e],r[e]=t.value,r.__proto__=n):r[e]=t.value),o="get"in t,a="set"in t,i&&(o||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return o&&F&&F.call(r,e,t.get),a&&U&&U.call(r,e,t.set),r};var Y=C;function $(r,e,t){Y(r,e,{configurable:!1,enumerable:!1,writable:!1,value:t})}function W(r,e){return"column-major"===e?function(r){var e,t,n;for(e=[],t=1,n=0;n<r.length;n++)e.push(t),t*=r[n];return e}(r):function(r){var e,t,n,i;for(e=r.length,t=[],i=0;i<e;i++)t.push(0);for(n=1,i=e-1;i>=0;i--)t[i]=n,n*=r[i];return t}(r)}$(W,"assign",(function(r,e,t){return"column-major"===e?function(r,e){var t,n;for(t=1,n=0;n<r.length;n++)e[n]=t,t*=r[n];return e}(r,t):function(r,e){var t,n;for(t=1,n=r.length-1;n>=0;n--)e[n]=t,t*=r[n];return e}(r,t)}));var G="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function Z(){return G&&"symbol"==typeof Symbol.toStringTag}var z=Object.prototype.toString;var X=Object.prototype.hasOwnProperty;function q(r,e){return null!=r&&X.call(r,e)}var J="function"==typeof Symbol?Symbol:void 0,K="function"==typeof J?J.toStringTag:"";var D=Z()?function(r){var e,t,n;if(null==r)return z.call(r);t=r[K],e=q(r,K);try{r[K]=void 0}catch(e){return z.call(r)}return n=z.call(r),e?r[K]=t:delete r[K],n}:function(r){return z.call(r)};var H=Array.isArray?Array.isArray:function(r){return"[object Array]"===D(r)};function Q(r){return null!==r&&"object"==typeof r}function rr(r){return Q(r)&&(r._isBuffer||r.constructor&&"function"==typeof r.constructor.isBuffer&&r.constructor.isBuffer(r))}$(Q,"isObjectLikeArray",function(r){if("function"!=typeof r)throw new TypeError(I("invalid argument. Must provide a function. Value: `%s`.",r));return function(e){var t,n;if(!H(e))return!1;if(0===(t=e.length))return!1;for(n=0;n<t;n++)if(!1===r(e[n]))return!1;return!0}}(Q));var er="function"==typeof Buffer?Buffer:null;var tr,nr=r.Buffer;tr=function(){var r,e;if("function"!=typeof er)return!1;try{r=rr(e="function"==typeof er.from?er.from([1,2,3,4]):new er([1,2,3,4]))&&1===e[0]&&2===e[1]&&3===e[2]&&4===e[3]}catch(e){r=!1}return r}()?nr:function(){throw new Error("not implemented")};var ir=tr,or="function"==typeof Float64Array;var ar="function"==typeof Float64Array?Float64Array:null;var ur,fr="function"==typeof Float64Array?Float64Array:void 0;ur=function(){var r,e,t;if("function"!=typeof ar)return!1;try{e=new ar([1,3.14,-3.14,NaN]),t=e,r=(or&&t instanceof Float64Array||"[object Float64Array]"===D(t))&&1===e[0]&&3.14===e[1]&&-3.14===e[2]&&e[3]!=e[3]}catch(e){r=!1}return r}()?fr:function(){throw new Error("not implemented")};var lr=ur,cr="function"==typeof Float32Array;var sr=Number.POSITIVE_INFINITY,hr="function"==typeof Float32Array?Float32Array:null;var yr,pr="function"==typeof Float32Array?Float32Array:void 0;yr=function(){var r,e,t;if("function"!=typeof hr)return!1;try{e=new hr([1,3.14,-3.14,5e40]),t=e,r=(cr&&t instanceof Float32Array||"[object Float32Array]"===D(t))&&1===e[0]&&3.140000104904175===e[1]&&-3.140000104904175===e[2]&&e[3]===sr}catch(e){r=!1}return r}()?pr:function(){throw new Error("not implemented")};var gr=yr,mr="function"==typeof Int16Array;var wr="function"==typeof Int16Array?Int16Array:null;var br,vr="function"==typeof Int16Array?Int16Array:void 0;br=function(){var r,e,t;if("function"!=typeof wr)return!1;try{e=new wr([1,3.14,-3.14,32768]),t=e,r=(mr&&t instanceof Int16Array||"[object Int16Array]"===D(t))&&1===e[0]&&3===e[1]&&-3===e[2]&&-32768===e[3]}catch(e){r=!1}return r}()?vr:function(){throw new Error("not implemented")};var dr=br,Er="function"==typeof Int32Array;var Tr="function"==typeof Int32Array?Int32Array:null;var Ar,_r="function"==typeof Int32Array?Int32Array:void 0;Ar=function(){var r,e,t;if("function"!=typeof Tr)return!1;try{e=new Tr([1,3.14,-3.14,2147483648]),t=e,r=(Er&&t instanceof Int32Array||"[object Int32Array]"===D(t))&&1===e[0]&&3===e[1]&&-3===e[2]&&-2147483648===e[3]}catch(e){r=!1}return r}()?_r:function(){throw new Error("not implemented")};var xr=Ar,jr="function"==typeof Int8Array;var Vr="function"==typeof Int8Array?Int8Array:null;var kr,Lr="function"==typeof Int8Array?Int8Array:void 0;kr=function(){var r,e,t;if("function"!=typeof Vr)return!1;try{e=new Vr([1,3.14,-3.14,128]),t=e,r=(jr&&t instanceof Int8Array||"[object Int8Array]"===D(t))&&1===e[0]&&3===e[1]&&-3===e[2]&&-128===e[3]}catch(e){r=!1}return r}()?Lr:function(){throw new Error("not implemented")};var Br=kr,Rr="function"==typeof Uint16Array;var Sr="function"==typeof Uint16Array?Uint16Array:null;var Ir,Cr="function"==typeof Uint16Array?Uint16Array:void 0;Ir=function(){var r,e,t;if("function"!=typeof Sr)return!1;try{e=new Sr(e=[1,3.14,-3.14,65536,65537]),t=e,r=(Rr&&t instanceof Uint16Array||"[object Uint16Array]"===D(t))&&1===e[0]&&3===e[1]&&65533===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?Cr:function(){throw new Error("not implemented")};var Mr=Ir,Or="function"==typeof Uint32Array;var Fr="function"==typeof Uint32Array?Uint32Array:null;var Ur,Nr="function"==typeof Uint32Array?Uint32Array:void 0;Ur=function(){var r,e,t;if("function"!=typeof Fr)return!1;try{e=new Fr(e=[1,3.14,-3.14,4294967296,4294967297]),t=e,r=(Or&&t instanceof Uint32Array||"[object Uint32Array]"===D(t))&&1===e[0]&&3===e[1]&&4294967293===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?Nr:function(){throw new Error("not implemented")};var Pr=Ur,Yr="function"==typeof Uint8Array;var $r="function"==typeof Uint8Array?Uint8Array:null;var Wr,Gr="function"==typeof Uint8Array?Uint8Array:void 0;Wr=function(){var r,e,t;if("function"!=typeof $r)return!1;try{e=new $r(e=[1,3.14,-3.14,256,257]),t=e,r=(Yr&&t instanceof Uint8Array||"[object Uint8Array]"===D(t))&&1===e[0]&&3===e[1]&&253===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?Gr:function(){throw new Error("not implemented")};var Zr=Wr,zr="function"==typeof Uint8ClampedArray;var Xr="function"==typeof Uint8ClampedArray?Uint8ClampedArray:null;var qr,Jr="function"==typeof Uint8ClampedArray?Uint8ClampedArray:void 0;qr=function(){var r,e,t;if("function"!=typeof Xr)return!1;try{e=new Xr([-1,0,1,3.14,4.99,255,256]),t=e,r=(zr&&t instanceof Uint8ClampedArray||"[object Uint8ClampedArray]"===D(t))&&0===e[0]&&0===e[1]&&1===e[2]&&3===e[3]&&5===e[4]&&255===e[5]&&255===e[6]}catch(e){r=!1}return r}()?Jr:function(){throw new Error("not implemented")};var Kr=qr;function Dr(r){return"number"==typeof r}var Hr=Number,Qr=Hr.prototype.toString;var re=Z();function ee(r){return"object"==typeof r&&(r instanceof Hr||(re?function(r){try{return Qr.call(r),!0}catch(r){return!1}}(r):"[object Number]"===D(r)))}function te(r){return Dr(r)||ee(r)}$(te,"isPrimitive",Dr),$(te,"isObject",ee);var ne=Hr.NEGATIVE_INFINITY,ie=Math.floor;function oe(r){return ie(r)===r}function ae(r){return r<sr&&r>ne&&oe(r)}function ue(r){return Dr(r)&&ae(r)}function fe(r){return ee(r)&&ae(r.valueOf())}function le(r){return ue(r)||fe(r)}function ce(r){return ue(r)&&r>=0}function se(r){return fe(r)&&r.valueOf()>=0}function he(r){return ce(r)||se(r)}$(le,"isPrimitive",ue),$(le,"isObject",fe),$(he,"isPrimitive",ce),$(he,"isObject",se);function ye(r){return"object"==typeof r&&null!==r&&"number"==typeof r.length&&oe(r.length)&&r.length>=0&&r.length<=4294967295}function pe(r){return"object"==typeof r&&null!==r&&"number"==typeof r.length&&oe(r.length)&&r.length>=0&&r.length<=9007199254740991}var ge="function"==typeof ArrayBuffer;function me(r){return ge&&r instanceof ArrayBuffer||"[object ArrayBuffer]"===D(r)}function we(r){return"object"==typeof r&&null!==r&&!H(r)}var be=/./;function ve(r){return"boolean"==typeof r}var de=Boolean,Ee=Boolean.prototype.toString;var Te=Z();function Ae(r){return"object"==typeof r&&(r instanceof de||(Te?function(r){try{return Ee.call(r),!0}catch(r){return!1}}(r):"[object Boolean]"===D(r)))}function _e(r){return ve(r)||Ae(r)}function xe(){return new Function("return this;")()}$(_e,"isPrimitive",ve),$(_e,"isObject",Ae);var je="object"==typeof self?self:null,Ve="object"==typeof window?window:null,ke="object"==typeof global?global:null,Le="object"==typeof globalThis?globalThis:null;var Be=function(r){if(arguments.length){if(!ve(r))throw new TypeError(I("invalid argument. Must provide a boolean. Value: `%s`.",r));if(r)return xe()}if(Le)return Le;if(je)return je;if(Ve)return Ve;if(ke)return ke;throw new Error("unexpected error. Unable to resolve global object.")}(),Re=Be.document&&Be.document.childNodes,Se=Int8Array;function Ie(){return/^\s*function\s*([^(]*)/i}var Ce=/^\s*function\s*([^(]*)/i;function Me(r){var e,t,n;if(("Object"===(t=D(r).slice(8,-1))||"Error"===t)&&r.constructor){if("string"==typeof(n=r.constructor).name)return n.name;if(e=Ce.exec(n.toString()))return e[1]}return rr(r)?"Buffer":t}$(Ie,"REGEXP",Ce);var Oe="function"==typeof be||"object"==typeof Se||"function"==typeof Re?function(r){return Me(r).toLowerCase()}:function(r){var e;return null===r?"null":"object"===(e=typeof r)?Me(r).toLowerCase():e};function Fe(r){return"function"===Oe(r)}function Ue(r,e){if(!(this instanceof Ue))throw new TypeError("invalid invocation. Constructor must be called with the `new` keyword.");if(!Dr(r))throw new TypeError(I("invalid argument. Real component must be a number. Value: `%s`.",r));if(!Dr(e))throw new TypeError(I("invalid argument. Imaginary component must be a number. Value: `%s`.",e));return Y(this,"re",{configurable:!1,enumerable:!0,writable:!1,value:r}),Y(this,"im",{configurable:!1,enumerable:!0,writable:!1,value:e}),this}$(Ue,"BYTES_PER_ELEMENT",8),$(Ue.prototype,"BYTES_PER_ELEMENT",8),$(Ue.prototype,"byteLength",16),$(Ue.prototype,"toString",(function(){var r=""+this.re;return this.im<0?r+=" - "+-this.im:r+=" + "+this.im,r+="i"})),$(Ue.prototype,"toJSON",(function(){var r={type:"Complex128"};return r.re=this.re,r.im=this.im,r}));var Ne="function"==typeof Math.fround?Math.fround:null,Pe=new gr(1);var Ye="function"==typeof Ne?Ne:function(r){return Pe[0]=r,Pe[0]};function $e(r,e){if(!(this instanceof $e))throw new TypeError("invalid invocation. Constructor must be called with the `new` keyword.");if(!Dr(r))throw new TypeError(I("invalid argument. Real component must be a number. Value: `%s`.",r));if(!Dr(e))throw new TypeError(I("invalid argument. Imaginary component must be a number. Value: `%s`.",e));return Y(this,"re",{configurable:!1,enumerable:!0,writable:!1,value:Ye(r)}),Y(this,"im",{configurable:!1,enumerable:!0,writable:!1,value:Ye(e)}),this}function We(r){return r instanceof Ue||r instanceof $e||"object"==typeof r&&null!==r&&"number"==typeof r.re&&"number"==typeof r.im}function Ge(r){return oe(r/2)}function Ze(){return"function"==typeof J&&"symbol"==typeof J("foo")&&q(J,"iterator")&&"symbol"==typeof J.iterator}$($e,"BYTES_PER_ELEMENT",4),$($e.prototype,"BYTES_PER_ELEMENT",4),$($e.prototype,"byteLength",8),$($e.prototype,"toString",(function(){var r=""+this.re;return this.im<0?r+=" - "+-this.im:r+=" + "+this.im,r+="i"})),$($e.prototype,"toJSON",(function(){var r={type:"Complex64"};return r.re=this.re,r.im=this.im,r}));var ze=Ze()?Symbol.iterator:null;function Xe(r,e,t){Y(r,e,{configurable:!1,enumerable:!1,get:t})}function qe(r){return r.re}function Je(r){return r.im}function Ke(r,e){return new gr(r.buffer,r.byteOffset+r.BYTES_PER_ELEMENT*e,2*(r.length-e))}function De(r,e){return new lr(r.buffer,r.byteOffset+r.BYTES_PER_ELEMENT*e,2*(r.length-e))}var He={float64:function(r,e){return r[e]},float32:function(r,e){return r[e]},int32:function(r,e){return r[e]},int16:function(r,e){return r[e]},int8:function(r,e){return r[e]},uint32:function(r,e){return r[e]},uint16:function(r,e){return r[e]},uint8:function(r,e){return r[e]},uint8c:function(r,e){return r[e]},generic:function(r,e){return r[e]},default:function(r,e){return r[e]}};function Qe(r){var e=He[r];return"function"==typeof e?e:He.default}var rt={complex128:function(r,e){return r.get(e)},complex64:function(r,e){return r.get(e)},default:function(r,e){return r.get(e)}};function et(r){var e=rt[r];return"function"==typeof e?e:rt.default}function tt(r){var e,t,n;for(e=[];!(t=r.next()).done;)if(ye(n=t.value)&&n.length>=2)e.push(n[0],n[1]);else{if(!We(n))return new TypeError(I("invalid argument. An iterator must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",n));e.push(qe(n),Je(n))}return e}function nt(r,e,t){var n,i,o,a;for(n=[],a=-1;!(i=r.next()).done;)if(a+=1,ye(o=e.call(t,i.value,a))&&o.length>=2)n.push(o[0],o[1]);else{if(!We(o))return new TypeError(I("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",o));n.push(qe(o),Je(o))}return n}function it(r,e){var t,n,i,o;for(t=e.length,o=0,i=0;i<t;i++){if(!We(n=e[i]))return null;r[o]=qe(n),r[o+1]=Je(n),o+=2}return r}var ot=2*gr.BYTES_PER_ELEMENT,at=Ze();function ut(r){return r instanceof st||"object"==typeof r&&null!==r&&("Complex64Array"===r.constructor.name||"Complex128Array"===r.constructor.name)&&"number"==typeof r._length&&"object"==typeof r._buffer}function ft(r){return r===st||"Complex128Array"===r.name}function lt(r){return"object"==typeof r&&null!==r&&"Complex64Array"===r.constructor.name&&r.BYTES_PER_ELEMENT===ot}function ct(r){return"object"==typeof r&&null!==r&&"Complex128Array"===r.constructor.name&&r.BYTES_PER_ELEMENT===2*ot}function st(){var r,e,t,n;if(e=arguments.length,!(this instanceof st))return 0===e?new st:1===e?new st(arguments[0]):2===e?new st(arguments[0],arguments[1]):new st(arguments[0],arguments[1],arguments[2]);if(0===e)t=new gr(0);else if(1===e)if(ce(arguments[0]))t=new gr(2*arguments[0]);else if(pe(arguments[0]))if((n=(t=arguments[0]).length)&&H(t)&&We(t[0])){if(null===(t=it(new gr(2*n),t))){if(!Ge(n))throw new RangeError(I("invalid argument. Array-like object arguments must have a length which is a multiple of two. Length: `%u`.",n));t=new gr(arguments[0])}}else{if(lt(t))t=Ke(t,0);else if(ct(t))t=De(t,0);else if(!Ge(n))throw new RangeError(I("invalid argument. Array-like object and typed array arguments must have a length which is a multiple of two. Length: `%u`.",n));t=new gr(t)}else if(me(arguments[0])){if(!oe((t=arguments[0]).byteLength/ot))throw new RangeError(I("invalid argument. ArrayBuffer byte length must be a multiple of %u. Byte length: `%u`.",ot,t.byteLength));t=new gr(t)}else{if(!we(arguments[0]))throw new TypeError(I("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `%s`.",arguments[0]));if(t=arguments[0],!1===at)throw new TypeError(I("invalid argument. Environment lacks Symbol.iterator support. Must provide a length, ArrayBuffer, typed array, or array-like object. Value: `%s`.",t));if(!Fe(t[ze]))throw new TypeError(I("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `%s`.",t));if(!Fe((t=t[ze]()).next))throw new TypeError(I("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `%s`.",t));if((t=tt(t))instanceof Error)throw t;t=new gr(t)}else{if(!me(t=arguments[0]))throw new TypeError(I("invalid argument. First argument must be an ArrayBuffer. Value: `%s`.",t));if(!ce(r=arguments[1]))throw new TypeError(I("invalid argument. Byte offset must be a nonnegative integer. Value: `%s`.",r));if(!oe(r/ot))throw new RangeError(I("invalid argument. Byte offset must be a multiple of %u. Value: `%u`.",ot,r));if(2===e){if(!oe((n=t.byteLength-r)/ot))throw new RangeError(I("invalid arguments. ArrayBuffer view byte length must be a multiple of %u. View byte length: `%u`.",ot,n));t=new gr(t,r)}else{if(!ce(n=arguments[2]))throw new TypeError(I("invalid argument. Length must be a nonnegative integer. Value: `%s`.",n));if(n*ot>t.byteLength-r)throw new RangeError(I("invalid arguments. ArrayBuffer has insufficient capacity. Either decrease the array length or provide a bigger buffer. Minimum capacity: `%u`.",n*ot));t=new gr(t,r,2*n)}}return $(this,"_buffer",t),$(this,"_length",t.length/2),this}function ht(r){return r.re}function yt(r){return r.im}function pt(r){var e,t,n;for(e=[];!(t=r.next()).done;)if(ye(n=t.value)&&n.length>=2)e.push(n[0],n[1]);else{if(!We(n))return new TypeError(I("invalid argument. An iterator must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",n));e.push(ht(n),yt(n))}return e}function gt(r,e,t){var n,i,o,a;for(n=[],a=-1;!(i=r.next()).done;)if(a+=1,ye(o=e.call(t,i.value,a))&&o.length>=2)n.push(o[0],o[1]);else{if(!We(o))return new TypeError(I("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",o));n.push(ht(o),yt(o))}return n}function mt(r,e){var t,n,i,o;for(t=e.length,o=0,i=0;i<t;i++){if(!We(n=e[i]))return null;r[o]=ht(n),r[o+1]=yt(n),o+=2}return r}$(st,"BYTES_PER_ELEMENT",ot),$(st,"name","Complex64Array"),$(st,"from",(function(r){var e,t,n,i,o,a,u,f,l,c,s,h;if(!Fe(this))throw new TypeError("invalid invocation. `this` context must be a constructor.");if(!ft(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if((t=arguments.length)>1){if(!Fe(n=arguments[1]))throw new TypeError(I("invalid argument. Second argument must be a function. Value: `%s`.",n));t>2&&(e=arguments[2])}if(ut(r)){if(f=r.length,n){for(o=(i=new this(f))._buffer,h=0,s=0;s<f;s++){if(We(c=n.call(e,r.get(s),s)))o[h]=qe(c),o[h+1]=Je(c);else{if(!(ye(c)&&c.length>=2))throw new TypeError(I("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",c));o[h]=c[0],o[h+1]=c[1]}h+=2}return i}return new this(r)}if(pe(r)){if(n){for(f=r.length,u=r.get&&r.set?et("default"):Qe("default"),s=0;s<f;s++)if(!We(u(r,s))){l=!0;break}if(l){if(!Ge(f))throw new RangeError(I("invalid argument. First argument must have a length which is a multiple of %u. Length: `%u`.",2,f));for(o=(i=new this(f/2))._buffer,s=0;s<f;s++)o[s]=n.call(e,u(r,s),s);return i}for(o=(i=new this(f))._buffer,h=0,s=0;s<f;s++){if(We(c=n.call(e,u(r,s),s)))o[h]=qe(c),o[h+1]=Je(c);else{if(!(ye(c)&&c.length>=2))throw new TypeError(I("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",c));o[h]=c[0],o[h+1]=c[1]}h+=2}return i}return new this(r)}if(we(r)&&at&&Fe(r[ze])){if(!Fe((o=r[ze]()).next))throw new TypeError(I("invalid argument. First argument must be an array-like object or an iterable. Value: `%s`.",r));if((a=n?nt(o,n,e):tt(o))instanceof Error)throw a;for(o=(i=new this(f=a.length/2))._buffer,s=0;s<f;s++)o[s]=a[s];return i}throw new TypeError(I("invalid argument. First argument must be an array-like object or an iterable. Value: `%s`.",r))})),$(st,"of",(function(){var r,e;if(!Fe(this))throw new TypeError("invalid invocation. `this` context must be a constructor.");if(!ft(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");for(r=[],e=0;e<arguments.length;e++)r.push(arguments[e]);return new this(r)})),Xe(st.prototype,"buffer",(function(){return this._buffer.buffer})),Xe(st.prototype,"byteLength",(function(){return this._buffer.byteLength})),Xe(st.prototype,"byteOffset",(function(){return this._buffer.byteOffset})),$(st.prototype,"BYTES_PER_ELEMENT",st.BYTES_PER_ELEMENT),$(st.prototype,"copyWithin",(function(r,e){if(!ut(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");return 2===arguments.length?this._buffer.copyWithin(2*r,2*e):this._buffer.copyWithin(2*r,2*e,2*arguments[2]),this})),$(st.prototype,"entries",(function(){var r,e,t,n,i,o,a;if(!ut(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");return e=this,r=this._buffer,n=this._length,o=-1,a=-2,$(t={},"next",(function(){var e;if(o+=1,i||o>=n)return{done:!0};return e=new $e(r[a+=2],r[a+1]),{value:[o,e],done:!1}})),$(t,"return",(function(r){if(i=!0,arguments.length)return{value:r,done:!0};return{done:!0}})),ze&&$(t,ze,(function(){return e.entries()})),t})),$(st.prototype,"get",(function(r){var e;if(!ut(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!ce(r))throw new TypeError(I("invalid argument. Must provide a nonnegative integer. Value: `%s`.",r));if(!(r>=this._length))return new $e((e=this._buffer)[r*=2],e[r+1])})),Xe(st.prototype,"length",(function(){return this._length})),$(st.prototype,"set",(function(r){var e,t,n,i,o,a,u,f,l;if(!ut(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(n=this._buffer,arguments.length>1){if(!ce(t=arguments[1]))throw new TypeError(I("invalid argument. Index argument must be a nonnegative integer. Value: `%s`.",t))}else t=0;if(We(r)){if(t>=this._length)throw new RangeError(I("invalid argument. Index argument is out-of-bounds. Value: `%u`.",t));return n[t*=2]=qe(r),void(n[t+1]=Je(r))}if(ut(r)){if(t+(a=r._length)>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");if(e=r._buffer,l=n.byteOffset+t*ot,e.buffer===n.buffer&&e.byteOffset<l&&e.byteOffset+e.byteLength>l){for(i=new gr(e.length),f=0;f<e.length;f++)i[f]=e[f];e=i}for(t*=2,l=0,f=0;f<a;f++)n[t]=e[l],n[t+1]=e[l+1],t+=2,l+=2}else{if(!pe(r))throw new TypeError(I("invalid argument. First argument must be either a complex number, an array-like object, or a complex number array. Value: `%s`.",r));for(a=r.length,f=0;f<a;f++)if(!We(r[f])){o=!0;break}if(o){if(!Ge(a))throw new RangeError(I("invalid argument. Array-like object arguments must have a length which is a multiple of two. Length: `%u`.",a));if(t+a/2>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");if(e=r,l=n.byteOffset+t*ot,e.buffer===n.buffer&&e.byteOffset<l&&e.byteOffset+e.byteLength>l){for(i=new gr(a),f=0;f<a;f++)i[f]=e[f];e=i}for(t*=2,a/=2,l=0,f=0;f<a;f++)n[t]=e[l],n[t+1]=e[l+1],t+=2,l+=2;return}if(t+a>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");for(t*=2,f=0;f<a;f++)u=r[f],n[t]=qe(u),n[t+1]=Je(u),t+=2}}));var wt=2*lr.BYTES_PER_ELEMENT,bt=Ze();function vt(r){return r instanceof At||"object"==typeof r&&null!==r&&("Complex64Array"===r.constructor.name||"Complex128Array"===r.constructor.name)&&"number"==typeof r._length&&"object"==typeof r._buffer}function dt(r){return r===At||"Complex64Array"===r.name}function Et(r){return"object"==typeof r&&null!==r&&"Complex64Array"===r.constructor.name&&r.BYTES_PER_ELEMENT===wt/2}function Tt(r){return"object"==typeof r&&null!==r&&"Complex128Array"===r.constructor.name&&r.BYTES_PER_ELEMENT===wt}function At(){var r,e,t,n;if(e=arguments.length,!(this instanceof At))return 0===e?new At:1===e?new At(arguments[0]):2===e?new At(arguments[0],arguments[1]):new At(arguments[0],arguments[1],arguments[2]);if(0===e)t=new lr(0);else if(1===e)if(ce(arguments[0]))t=new lr(2*arguments[0]);else if(pe(arguments[0]))if((n=(t=arguments[0]).length)&&H(t)&&We(t[0])){if(null===(t=mt(new lr(2*n),t))){if(!Ge(n))throw new RangeError(I("invalid argument. Array-like object arguments must have a length which is a multiple of two. Length: `%u`.",n));t=new lr(arguments[0])}}else{if(Et(t))t=Ke(t,0);else if(Tt(t))t=De(t,0);else if(!Ge(n))throw new RangeError(I("invalid argument. Array-like object and typed array arguments must have a length which is a multiple of two. Length: `%u`.",n));t=new lr(t)}else if(me(arguments[0])){if(!oe((t=arguments[0]).byteLength/wt))throw new RangeError(I("invalid argument. ArrayBuffer byte length must be a multiple of %u. Byte length: `%u`.",wt,t.byteLength));t=new lr(t)}else{if(!we(arguments[0]))throw new TypeError(I("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `%s`.",arguments[0]));if(t=arguments[0],!1===bt)throw new TypeError(I("invalid argument. Environment lacks Symbol.iterator support. Must provide a length, ArrayBuffer, typed array, or array-like object. Value: `%s`.",t));if(!Fe(t[ze]))throw new TypeError(I("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `%s`.",t));if(!Fe((t=t[ze]()).next))throw new TypeError(I("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `%s`.",t));if((t=pt(t))instanceof Error)throw t;t=new lr(t)}else{if(!me(t=arguments[0]))throw new TypeError(I("invalid argument. First argument must be an ArrayBuffer. Value: `%s`.",t));if(!ce(r=arguments[1]))throw new TypeError(I("invalid argument. Byte offset must be a nonnegative integer. Value: `%s`.",r));if(!oe(r/wt))throw new RangeError(I("invalid argument. Byte offset must be a multiple of %u. Value: `%u`.",wt,r));if(2===e){if(!oe((n=t.byteLength-r)/wt))throw new RangeError(I("invalid arguments. ArrayBuffer view byte length must be a multiple of %u. View byte length: `%u`.",wt,n));t=new lr(t,r)}else{if(!ce(n=arguments[2]))throw new TypeError(I("invalid argument. Length must be a nonnegative integer. Value: `%s`.",n));if(n*wt>t.byteLength-r)throw new RangeError(I("invalid arguments. ArrayBuffer has insufficient capacity. Either decrease the array length or provide a bigger buffer. Minimum capacity: `%u`.",n*wt));t=new lr(t,r,2*n)}}return $(this,"_buffer",t),$(this,"_length",t.length/2),this}$(At,"BYTES_PER_ELEMENT",wt),$(At,"name","Complex128Array"),$(At,"from",(function(r){var e,t,n,i,o,a,u,f,l,c,s,h;if(!Fe(this))throw new TypeError("invalid invocation. `this` context must be a constructor.");if(!dt(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if((t=arguments.length)>1){if(!Fe(n=arguments[1]))throw new TypeError(I("invalid argument. Second argument must be a function. Value: `%s`.",n));t>2&&(e=arguments[2])}if(vt(r)){if(f=r.length,n){for(o=(i=new this(f))._buffer,h=0,s=0;s<f;s++){if(We(c=n.call(e,r.get(s),s)))o[h]=ht(c),o[h+1]=yt(c);else{if(!(ye(c)&&c.length>=2))throw new TypeError(I("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",c));o[h]=c[0],o[h+1]=c[1]}h+=2}return i}return new this(r)}if(pe(r)){if(n){for(f=r.length,u=r.get&&r.set?et("default"):Qe("default"),s=0;s<f;s++)if(!We(u(r,s))){l=!0;break}if(l){if(!Ge(f))throw new RangeError(I("invalid argument. First argument must have a length which is a multiple of two. Length: `%u`.",f));for(o=(i=new this(f/2))._buffer,s=0;s<f;s++)o[s]=n.call(e,u(r,s),s);return i}for(o=(i=new this(f))._buffer,h=0,s=0;s<f;s++){if(We(c=n.call(e,u(r,s),s)))o[h]=ht(c),o[h+1]=yt(c);else{if(!(ye(c)&&c.length>=2))throw new TypeError(I("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",c));o[h]=c[0],o[h+1]=c[1]}h+=2}return i}return new this(r)}if(we(r)&&bt&&Fe(r[ze])){if(!Fe((o=r[ze]()).next))throw new TypeError(I("invalid argument. First argument must be an array-like object or an iterable. Value: `%s`.",r));if((a=n?gt(o,n,e):pt(o))instanceof Error)throw a;for(o=(i=new this(f=a.length/2))._buffer,s=0;s<f;s++)o[s]=a[s];return i}throw new TypeError(I("invalid argument. First argument must be an array-like object or an iterable. Value: `%s`.",r))})),$(At,"of",(function(){var r,e;if(!Fe(this))throw new TypeError("invalid invocation. `this` context must be a constructor.");if(!dt(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");for(r=[],e=0;e<arguments.length;e++)r.push(arguments[e]);return new this(r)})),Xe(At.prototype,"buffer",(function(){return this._buffer.buffer})),Xe(At.prototype,"byteLength",(function(){return this._buffer.byteLength})),Xe(At.prototype,"byteOffset",(function(){return this._buffer.byteOffset})),$(At.prototype,"BYTES_PER_ELEMENT",At.BYTES_PER_ELEMENT),$(At.prototype,"copyWithin",(function(r,e){if(!vt(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");return 2===arguments.length?this._buffer.copyWithin(2*r,2*e):this._buffer.copyWithin(2*r,2*e,2*arguments[2]),this})),$(At.prototype,"entries",(function(){var r,e,t,n,i,o,a;if(!vt(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");return e=this,r=this._buffer,n=this._length,o=-1,a=-2,$(t={},"next",(function(){var e;if(o+=1,i||o>=n)return{done:!0};return e=new Ue(r[a+=2],r[a+1]),{value:[o,e],done:!1}})),$(t,"return",(function(r){if(i=!0,arguments.length)return{value:r,done:!0};return{done:!0}})),ze&&$(t,ze,(function(){return e.entries()})),t})),$(At.prototype,"get",(function(r){var e;if(!vt(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!ce(r))throw new TypeError(I("invalid argument. Must provide a nonnegative integer. Value: `%s`.",r));if(!(r>=this._length))return new Ue((e=this._buffer)[r*=2],e[r+1])})),Xe(At.prototype,"length",(function(){return this._length})),$(At.prototype,"set",(function(r){var e,t,n,i,o,a,u,f,l;if(!vt(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(n=this._buffer,arguments.length>1){if(!ce(t=arguments[1]))throw new TypeError(I("invalid argument. Index argument must be a nonnegative integer. Value: `%s`.",t))}else t=0;if(We(r)){if(t>=this._length)throw new RangeError(I("invalid argument. Index argument is out-of-bounds. Value: `%u`.",t));return n[t*=2]=ht(r),void(n[t+1]=yt(r))}if(vt(r)){if(t+(a=r._length)>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");if(e=r._buffer,l=n.byteOffset+t*wt,e.buffer===n.buffer&&e.byteOffset<l&&e.byteOffset+e.byteLength>l){for(i=new lr(e.length),f=0;f<e.length;f++)i[f]=e[f];e=i}for(t*=2,l=0,f=0;f<a;f++)n[t]=e[l],n[t+1]=e[l+1],t+=2,l+=2}else{if(!pe(r))throw new TypeError(I("invalid argument. First argument must be either a complex number, an array-like object, or a complex number array. Value: `%s`.",r));for(a=r.length,f=0;f<a;f++)if(!We(r[f])){o=!0;break}if(o){if(!Ge(a))throw new RangeError(I("invalid argument. Array-like object arguments must have a length which is a multiple of two. Length: `%u`.",a));if(t+a/2>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");if(e=r,l=n.byteOffset+t*wt,e.buffer===n.buffer&&e.byteOffset<l&&e.byteOffset+e.byteLength>l){for(i=new lr(a),f=0;f<a;f++)i[f]=e[f];e=i}for(t*=2,a/=2,l=0,f=0;f<a;f++)n[t]=e[l],n[t+1]=e[l+1],t+=2,l+=2;return}if(t+a>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");for(t*=2,f=0;f<a;f++)u=r[f],n[t]=ht(u),n[t+1]=yt(u),t+=2}}));var _t={binary:ir,float64:lr,float32:gr,generic:Array,int16:dr,int32:xr,int8:Br,uint16:Mr,uint32:Pr,uint8:Zr,uint8c:Kr,complex64:st,complex128:At};var xt=Fe(ir.allocUnsafe)?function(r){if(!he(r))throw new TypeError(I("invalid argument. Must provide a nonnegative integer. Value: `%s`.",r));return ir.allocUnsafe(r)}:function(r){if(!he(r))throw new TypeError(I("invalid argument. Must provide a nonnegative integer. Value: `%s`.",r));return new ir(r)};function jt(r,e){var t=function(r){return _t[r]||null}(r);return t?new t(e):null}function Vt(r,e){return"generic"===r?function(r){var e,t;for(e=[],t=0;t<r;t++)e.push(0);return e}(e):"binary"===r?function(r){return function(r){var e;for(e=0;e<r.length;e++)r[e]=0;return r}(xt(r))}(e):jt(r,e)}return function(r){var e,t,n,i,o,a;if(a=r.dtype,i=r.shape,n=r.order,i.length>0?(e=function(r){var e,t,n;if(0===(e=r.length))return 0;for(t=1,n=0;n<e;n++)t*=r[n];return t}(i),o=W(i,n)):(e=1,o=[0]),null===(t=Vt(a,e)))throw new TypeError(function(){var r,e=arguments,t="https://stdlib.io/e/"+e[0]+"?";for(r=1;r<e.length;r++)t+="&arg[]="+encodeURIComponent(e[r]);return t}("0jj5L,Kz",a));return new r.constructor(a,t,i,o,function(r,e){var t,n,i;for(n=r.length,t=0,i=0;i<n;i++)e[i]<0&&(t-=e[i]*(r[i]-1));return t}(i,o),n)}}));
//# sourceMappingURL=index.js.map
