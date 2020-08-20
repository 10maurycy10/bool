exports.isComputerOn = () => true;

exports.objectInherit = Object.create;

exports.NIL = null;

exports.empty = () => Object.create(null);

exports.isNaN = (x) => x != x;

exports.Stack = function (data) {
	data = data || [];
	return {
		top: () => data[data.length - 1],
		push: (x) => data.push(x),
		pop: () => data.pop(),
		depth: () => data.length,
	}
}

exports.LOL = function (data) {
	data = data || [];
	return {
		top: () => data[data.length - 1],
		push: (x) => {
			var i = data.indexOf(x);
			if (i != -1)
				data.splice(i,1); 
			data.push(x)
		},
		pop: () => data.pop(),
		depth: () => data.length,
		getData: () => data,
	}	
}

exports.i = (x) => x;
exports.s = (x) => (y) => (z) => x(z)(y(z));
exports.k = (x) => (y) => x;

exports.TRUE = (x) => (y) => x;
exports.FALSE = (x) => (y) => y;

var Ltrue = exports.TRUE;
var Lfalse = exports.FALSE;

exports.boolToString = (x) => x("true")("false");

exports.or = (x) => (y) => x(Ltrue)(y)
exports.and = (x) => (y) => x(y)(Lfalse)
exports.not = (x) => (y) => y(Lfalse)(Ltrue)
exports.xor = (x) => (y) => x(y(Lfalse)(Ltrue))(y)||Lfalse

exports.ifElse = exports.I;

exports.boolToFun = function (x) {
	if (typeof(x) == 'boolean')
		x?Ltrue:Lfase;
	else
		throw "boolTofun need boolean";
};

exports.funToBool = (x) => exports.ifelse(x,true,false)

exports.isNumber = c => (typeof(c)=="number" && c == c && isFinite(c))

exports.isEven = (x) => exports.isNumber(x) && !(~~x >> 0 & 1)

exports.isOdd = (x) => exports.isNumber(x) && !!(~~x >> 0 & 1)