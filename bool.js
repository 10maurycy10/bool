//Copyright (c) 2021 Maurycy zalewski
//
//Permission is hereby granted, free of charge, to any person obtaining a copy
//of this software and associated documentation files (the "Software"), to deal
//in the Software without restriction, including without limitation the rights
//to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
//copies of the Software, and to permit persons to whom the Software is
//furnished to do so, subject to the following conditions:
//
//The above copyright notice and this permission notice shall be included in all
//copies or substantial portions of the Software.
//
//THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
//IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
//FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
//AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
//LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
//OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
//SOFTWARE.

let t = (x) => (y) => x;
let f = (x) => (y) => y;

exports.true = t;
exports.false = f;

exports.ternary = (bool,i,e) => bool(i)(e);
exports.ifElse = (bool,i,e) => bool(i)(e)();

exports.importBool = function (x) {
	if (typeof(x) == 'boolean')
		x?t:f;
	else
		throw "importBool needs boolean";
};

exports.exportBool = (x) => x(true)(false);

exports.not = (x) => x(f)(t);
exports.and = (a,b) => a(b(t)(f))(f);
exports.or = (a,b) => a(t)(b(t)(f));
exports.xor = (a,b) => exports.or(
	exports.and(exports.not(a),b),
	exports.and(a,exports.not(b))
);
