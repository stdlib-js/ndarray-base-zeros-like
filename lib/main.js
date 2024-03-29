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

'use strict';

// MODULES //

var shape2strides = require( '@stdlib/ndarray-base-shape2strides' );
var strides2offset = require( '@stdlib/ndarray-base-strides2offset' );
var buffer = require( '@stdlib/ndarray-base-buffer' );
var numel = require( '@stdlib/ndarray-base-numel' );
var getDType = require( '@stdlib/ndarray-base-dtype' );
var getShape = require( '@stdlib/ndarray-base-shape' );
var getOrder = require( '@stdlib/ndarray-base-order' );
var format = require( '@stdlib/string-format' );


// MAIN //

/**
* Creates a zero-filled ndarray having the same shape and data type as a provided ndarray.
*
* @param {ndarray} x - input array
* @throws {TypeError} first argument must have a recognized data type
* @returns {ndarray} ndarray
*
* @example
* var zeros = require( '@stdlib/ndarray-base-zeros' );
*
* var x = zeros( 'float32', [ 2, 2 ], 'row-major' );
* // returns <ndarray>
*
* var y = zerosLike( x );
* // returns <ndarray>
*
* var sh = y.shape;
* // returns [ 2, 2 ]
*
* var dt = y.dtype;
* // returns 'float32'
*/
function zerosLike( x ) {
	var ndims;
	var len;
	var buf;
	var ord;
	var sh;
	var st;
	var dt;

	dt = getDType( x );
	sh = getShape( x, true );
	ord = getOrder( x );

	ndims = sh.length;
	if ( ndims > 0 ) {
		len = numel( sh );
		st = shape2strides( sh, ord );
	} else {
		// For 0-dimensional arrays, the buffer should contain a single element...
		len = 1;
		st = [ 0 ];
	}
	buf = buffer( dt, len );
	if ( buf === null ) {
		throw new TypeError( format( 'invalid argument. First argument must have a recognized data type. Value: `%s`.', dt ) );
	}
	return new x.constructor( dt, buf, sh, st, strides2offset( sh, st ), ord );
}


// EXPORTS //

module.exports = zerosLike;
