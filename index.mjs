// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import e from"https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-base-shape2strides@esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-base-strides2offset@esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-base-buffer@esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/string-format@esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-base-numel@esm/index.mjs";var d=e,i=s,a=r,m=t,o=n;var l=function(e){var s,r,t,n,l,p;if(p=e.dtype,n=e.shape,t=e.order,n.length>0?(s=o(n),l=d(n,t)):(s=1,l=[0]),null===(r=a(p,s)))throw new TypeError(m("invalid argument. First argument must have a recognized data type. Value: `%s`.",p));return new e.constructor(p,r,n,l,i(n,l),t)};export{l as default};
//# sourceMappingURL=index.mjs.map
