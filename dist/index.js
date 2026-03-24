"use strict";var d=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var o=d(function(b,n){"use strict";var l=require("@stdlib/ndarray-base-shape2strides"),q=require("@stdlib/ndarray-base-buffer"),f=require("@stdlib/ndarray-base-numel"),g=require("@stdlib/ndarray-base-dtype"),m=require("@stdlib/ndarray-base-shape"),p=require("@stdlib/ndarray-base-order"),c=require("@stdlib/string-format");function h(e){var r,u,i,s,a,v,t;if(t=g(e),a=m(e,!0),s=p(e),r=a.length,r>0?(u=f(a),v=l(a,s)):(u=1,v=[0]),i=q(t,u),i===null)throw new TypeError(c("invalid argument. First argument must have a recognized data type. Value: `%s`.",t));return new e.constructor(t,i,a,v,0,s)}n.exports=h});var w=o();module.exports=w;
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
