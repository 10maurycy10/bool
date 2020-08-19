# Utils for JS

this is a package containing utilities for js

## features

	1. Boolean logic support
	2. Prototypical inheritance
	3. Empty object factory
	4. Stacks
	5. Combinatory logic support
	6. Ternary operator replacement

## usage

     var utils = require("function-js-utils")
     var bool = utils.xor(utils.TRUE)(utils.FALSE)
     console.log(utils.ifelse(bool,"bool is true","bool is false"))

## api

    isComputerOn()		returns true if computer is on , otherwize false
    ObjectInherit(x)	creates new object inheriting propertys for argument
    NIL					0 property singleton object, falsy
    IsNaN(x)			returns true if x is NaN
    Stack(?init)		init is the inital contense of stack
    	top()			gets top of stack
    	pop()			pops data of stack
    	push(x)			pushes onto stack
    	depth()			gets depth of stack

    I(x)				identity
    S(x)(y)(z)			S combinator [x(z)(y(x))]
    K(x)(y)				K combinator [x]

    TRUE FALSE 			combinatorial bools

    or and xor not 		combinatorial operators

    ifelse(x,ifTrue,ifFalse)	combinatorial if else [x?ifTrue:ifFalse]

    BoolToString(x)		converts combinatorial bool to string
    boolTofun(x)		converts bool to combinatorial bool
    funToBool(x)		converts combinatorial bool to bool

    isNumber(x)			checks if x is number
    isEven(c)			checks if c is even
    isOdd(c)			checks if c is odd
