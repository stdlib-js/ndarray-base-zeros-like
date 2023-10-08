"use strict";var d=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var o=d(function(z,n){
var f=require('@stdlib/ndarray-base-shape2strides/dist'),q=require('@stdlib/ndarray-base-strides2offset/dist'),l=require('@stdlib/ndarray-base-buffer/dist'),g=require('@stdlib/ndarray-base-numel/dist'),m=require('@stdlib/ndarray-base-dtype/dist'),p=require('@stdlib/ndarray-base-shape/dist'),c=require('@stdlib/ndarray-base-order/dist'),h=require('@stdlib/error-tools-fmtprodmsg/dist');function w(e){var r,u,s,v,a,t,i;if(i=m(e),a=p(e,!0),v=c(e),r=a.length,r>0?(u=g(a),t=f(a,v)):(u=1,t=[0]),s=l(i,u),s===null)throw new TypeError(h('0jj5L',i));return new e.constructor(i,s,a,t,q(a,t),v)}n.exports=w
});var y=o();module.exports=y;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
