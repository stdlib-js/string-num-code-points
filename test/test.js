/**
* @license Apache-2.0
*
* Copyright (c) 2025 The Stdlib Authors.
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

var tape = require( 'tape' );
var numCodePoints = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof numCodePoints, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function throws an error if not provided a string', function test( t ) {
	var values;
	var i;

	values = [
		5,
		null,
		true,
		void 0,
		NaN,
		[],
		{},
		function noop() {}
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			numCodePoints( value );
		};
	}
});

tape( 'the function returns 0 if provided an empty string', function test( t ) {
	t.strictEqual( numCodePoints( '' ), 0, 'returns expected value' );
	t.end();
});

tape( 'the function returns the Unicode aware length of a provided string', function test( t ) {
	var out;

	out = numCodePoints( 'hello world' );
	t.strictEqual( out, 11, 'returns expected value' );

	out = numCodePoints( '!!!' );
	t.strictEqual( out, 3, 'returns expected value' );

	out = numCodePoints( 'अनुच्छेद' );
	t.strictEqual( out, 8, 'returns expected value' );

	out = numCodePoints( '六' );
	t.strictEqual( out, 1, 'returns expected value' );

	t.end();
});

tape( 'the function returns the number of code points (surrogates)', function test( t ) {
	var out;

	out = numCodePoints( '𐒻𐓟' );
	t.strictEqual( out, 2, 'returns expected value' );

	out = numCodePoints( '𐒻' );
	t.strictEqual( out, 1, 'returns expected value' );

	out = numCodePoints( '\uD800' ); // trailing unpaired high surrogate
	t.strictEqual( out, 1, 'returns expected value' );

	t.end();
});
