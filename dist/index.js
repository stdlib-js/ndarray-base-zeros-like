"use strict";var d=function(e,r){return function(){try{return r||e((r={exports:{}}).exports,r),r.exports}catch(a){throw r=0,a}}};var o=d(function(b,n){"use strict";var l=require("@stdlib/ndarray-base-shape2strides"),q=require("@stdlib/ndarray-base-buffer"),f=require("@stdlib/ndarray-base-numel"),g=require("@stdlib/ndarray-base-dtype"),m=require("@stdlib/ndarray-base-shape"),p=require("@stdlib/ndarray-base-order"),c=require("@stdlib/string-format");function h(e){var r,a,i,s,t,v,u;if(u=g(e),t=m(e,!0),s=p(e),r=t.length,r>0?(a=f(t),v=l(t,s)):(a=1,v=[0]),i=q(u,a),i===null)throw new TypeError(c("invalid argument. First argument must have a recognized data type. Value: `%s`.",u));return new e.constructor(u,i,t,v,0,s)}n.exports=h});var w=o();module.exports=w;
/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
//# sourceMappingURL=index.js.map
