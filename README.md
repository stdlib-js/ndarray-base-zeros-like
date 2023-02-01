<!--

@license Apache-2.0

Copyright (c) 2022 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->

# zerosLike

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Create a zero-filled ndarray having the same shape and [data type][@stdlib/ndarray/dtypes] as a provided ndarray.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="installation">

## Installation

```bash
npm install @stdlib/ndarray-base-zeros-like
```

Alternatively,

-   To load the package in a website via a `script` tag without installation and bundlers, use the [ES Module][es-module] available on the [`esm` branch][esm-url].
-   If you are using Deno, visit the [`deno` branch][deno-url].
-   For use in Observable, or in browser/node environments, use the [Universal Module Definition (UMD)][umd] build available on the [`umd` branch][umd-url].

The [branches.md][branches-url] file summarizes the available branches and displays a diagram illustrating their relationships.

</section>

<section class="usage">

## Usage

```javascript
var zerosLike = require( '@stdlib/ndarray-base-zeros-like' );
```

#### zerosLike( x )

Creates a zero-filled ndarray having the same shape and [data type][@stdlib/ndarray/dtypes] as a provided ndarray.

```javascript
var zeros = require( '@stdlib/ndarray-base-zeros' );

var x = zeros( 'float64', [ 2, 2 ], 'row-major' );
// returns <ndarray>

var y = zerosLike( x );
// returns <ndarray>

var sh = y.shape;
// returns [ 2, 2 ]
```

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

## Notes

-   Along with data type, shape, and order, the function infers the "class" of the returned ndarray from the provided ndarray. For example, if provided a "base" [ndarray][@stdlib/ndarray/base/ctor], the function returns a base [ndarray][@stdlib/ndarray/base/ctor]. If provided a non-base [ndarray][@stdlib/ndarray/ctor], the function returns a non-base [ndarray][@stdlib/ndarray/ctor].

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var dtypes = require( '@stdlib/ndarray-dtypes' );
var zeros = require( '@stdlib/ndarray-base-zeros' );
var zerosLike = require( '@stdlib/ndarray-base-zeros-like' );

// Get a list of data types:
var dt = dtypes();

// Generate zero-filled arrays...
var x;
var y;
var i;
for ( i = 0; i < dt.length; i++ ) {
    x = zeros( dt[ i ], [ 2, 2 ], 'row-major' );
    y = zerosLike( x );
    console.log( y.data );
}
```

</section>

<!-- /.examples -->

<!-- Section to include cited references. If references are included, add a horizontal rule *before* the section. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="references">

</section>

<!-- /.references -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2023. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/ndarray-base-zeros-like.svg
[npm-url]: https://npmjs.org/package/@stdlib/ndarray-base-zeros-like

[test-image]: https://github.com/stdlib-js/ndarray-base-zeros-like/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/ndarray-base-zeros-like/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/ndarray-base-zeros-like/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/ndarray-base-zeros-like?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/ndarray-base-zeros-like.svg
[dependencies-url]: https://david-dm.org/stdlib-js/ndarray-base-zeros-like/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://gitter.im/stdlib-js/stdlib/

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/ndarray-base-zeros-like/tree/deno
[umd-url]: https://github.com/stdlib-js/ndarray-base-zeros-like/tree/umd
[esm-url]: https://github.com/stdlib-js/ndarray-base-zeros-like/tree/esm
[branches-url]: https://github.com/stdlib-js/ndarray-base-zeros-like/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/ndarray-base-zeros-like/main/LICENSE

[@stdlib/ndarray/base/ctor]: https://github.com/stdlib-js/stdlib

[@stdlib/ndarray/ctor]: https://github.com/stdlib-js/stdlib

[@stdlib/ndarray/dtypes]: https://github.com/stdlib-js/stdlib

</section>

<!-- /.links -->
