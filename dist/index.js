"use strict";var d=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var o=d(function(w,v){
var f=require('@stdlib/ndarray-base-shape2strides/dist'),l=require('@stdlib/ndarray-base-strides2offset/dist'),m=require('@stdlib/ndarray-base-buffer/dist'),p=require('@stdlib/error-tools-fmtprodmsg/dist'),c=require('@stdlib/ndarray-base-numel/dist');function h(e){var r,i,u,n,a,t,s;if(s=e.dtype,a=e.shape,n=e.order,r=a.length,r>0?(i=c(a),t=f(a,n)):(i=1,t=[0]),u=m(s,i),u===null)throw new TypeError(p('0jj5L',s));return new e.constructor(s,u,a,t,l(a,t),n)}v.exports=h
});var q=o();module.exports=q;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
