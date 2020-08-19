exports.isComputerOn = () => true;

exports.ObjectInherit = Object.create;

exports.NIL = null;

exports.EMPTY = () => Object.create(null);

exports.IsNaN = (x) => x != x;

exports.Stack = function (data) {
	data = data || [];
	return {
		top: () => data[data.length - 1],
		push: (x) => data.push(x),
		pop: () => data.pop(),
		depth: () => data.length,
	}
}

exports.I = (x) => x;
exports.S = (x) => (y) => (z) => x(z)(y(z));
exports.K = (x) => (y) => x;

exports.TRUE = (x) => (y) => x;
exports.FALSE = (x) => (y) => y;

var Ltrue = exports.TRUE;
var Lfalse = exports.FALSE;

exports.BoolToString = (x) => x("true")("false");

exports.or = (x) => (y) => x(Ltrue)(y)
exports.and = (x) => (y) => x(y)(Lfalse)
exports.not = (x) => (y) => y(Lfalse)(Ltrue)
exports.xor = (x) => (y) => x(y(Lfalse)(Ltrue))(y)||Lfalse

exports.ifelse = (b,ifTrue,ifFalse) => b(ifTrue)(ifFalse)

exports.boolTofun = (x) => x?Ltrue:Lfase

exports.funToBool = (x) => exports.ifelse(x,true,false)

exports.isNumber = c => (typeof(c)=="number" && c == c && isFinite(c))

exports.isEven = (x) => exports.isNumber(x) && !(~~x >> 0 & 1)

exports.isOdd = (x) => exports.isNumber(x) && !!(~~x >> 0 & 1)