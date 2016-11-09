"use strict";

/*;
	@module-license:
		The MIT License (MIT)
		@mit-license

		Copyright (@c) 2016 Richeve Siodina Bebedor
		@email: richeve.bebedor@gmail.com

		Permission is hereby granted, free of charge, to any person obtaining a copy
		of this software and associated documentation files (the "Software"), to deal
		in the Software without restriction, including without limitation the rights
		to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
		copies of the Software, and to permit persons to whom the Software is
		furnished to do so, subject to the following conditions:

		The above copyright notice and this permission notice shall be included in all
		copies or substantial portions of the Software.

		THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
		IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
		FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
		AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
		LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
		OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
		SOFTWARE.
	@end-module-license

	@module-configuration:
		{
			"package": "propchain",
			"path": "propchain/propchain.js",
			"file": "propchain.js",
			"module": "propchain",
			"author": "Richeve S. Bebedor",
			"eMail": "richeve.bebedor@gmail.com",
			"repository": "https://github.com/volkovasystems/propchain.git",
			"test": "propchain-test.js",
			"global": true
		}
	@end-module-configuration

	@module-documentation:
		Smart deep list of object properties.
	@end-module-documentation

	@include:
		{
			"plough": "plough",
			"protease": "protease",
			"proplist": "proplist"
		}
	@end-include
*/

if( typeof require == "function" ){
	var plough = require( "plough" );
	var protease = require( "protease" );
	var proplist = require( "proplist" );
}

if( typeof window != "undefined" && !( "plough" in window ) ){
	throw new Error( "plough is not defined" );
}

if( typeof window != "undefined" && !( "protease" in window ) ){
	throw new Error( "protease is not defined" );
}

if( typeof window != "undefined" && !( "proplist" in window ) ){
	throw new Error( "proplist is not defined" );
}

var propchain = function propchain( entity ){
	/*;
		@meta-configuration:
			{
				"entity:required": "*"
			}
		@end-meta-configuration
	*/

	return plough( protease( entity ).map( proplist ) );
};

if( typeof module != "undefined" && typeof module.exports != "undefined" ){
	module.exports = propchain;
}
