// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import s from"https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-base-shape2strides@esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-base-strides2offset@esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-base-buffer@esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@v0.0.2-esm/index.mjs";import d from"https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-base-numel@esm/index.mjs";function n(n){var i,m,o,a,l,p;if(p=n.dtype,a=n.shape,o=n.order,a.length>0?(i=d(a),l=s(a,o)):(i=1,l=[0]),null===(m=e(p,i)))throw new TypeError(t("0Mm5Z",p));return new n.constructor(p,m,a,l,r(a,l),o)}export{n as default};
//# sourceMappingURL=index.mjs.map
