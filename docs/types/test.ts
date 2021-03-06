/*
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

import zeros = require( '@stdlib/ndarray-base-zeros' );
import zerosLike = require( './index' );


// TESTS //

// The function returns an ndarray...
{
	const sh = [ 2, 2 ];
	const ord = 'row-major';

	zerosLike( zeros( 'float64', sh, ord ) ); // $ExpectType float64ndarray
	zerosLike( zeros( 'float32', sh, ord ) ); // $ExpectType float32ndarray
	zerosLike( zeros( 'complex128', sh, ord ) ); // $ExpectType complex128ndarray
	zerosLike( zeros( 'complex64', sh, ord ) ); // $ExpectType complex64ndarray
	zerosLike( zeros( 'int32', sh, ord ) ); // $ExpectType int32ndarray
	zerosLike( zeros( 'int16', sh, ord ) ); // $ExpectType int16ndarray
	zerosLike( zeros( 'int8', sh, ord ) ); // $ExpectType int8ndarray
	zerosLike( zeros( 'uint32', sh, ord ) ); // $ExpectType uint32ndarray
	zerosLike( zeros( 'uint16', sh, ord ) ); // $ExpectType uint16ndarray
	zerosLike( zeros( 'uint8', sh, ord ) ); // $ExpectType uint8ndarray
	zerosLike( zeros( 'uint8c', sh, ord ) ); // $ExpectType uint8cndarray
	zerosLike( zeros( 'generic', sh, ord ) ); // $ExpectType typedndarray<number>
}

// The compiler throws an error if the function is provided a first argument is not an ndarray which has a recognized/supported data type...
{
	zerosLike( '10' ); // $ExpectError
	zerosLike( 10 ); // $ExpectError
	zerosLike( false ); // $ExpectError
	zerosLike( true ); // $ExpectError
	zerosLike( null ); // $ExpectError
	zerosLike( [] ); // $ExpectError
	zerosLike( {} ); // $ExpectError
	zerosLike( ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	zerosLike(); // $ExpectError
	zerosLike( zeros( 'float64', [ 2, 2 ], 'row-major' ), 1 ); // $ExpectError
}
