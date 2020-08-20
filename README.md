# Utils for JS

this is a package containing utilities for js

## features

	1. Boolean logic support
	2. Prototypeal inheritance
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
    objectInherit(x)	creates new object inheriting propertys for argument
    NIL					falsy constant
    isNaN(x)			returns true if x is NaN
    Stack(?init)		init is the inital contense of stack
    	top()			gets top of stack
    	pop()			pops data of stack
    	push(x)			pushes onto stack
    	depth()			gets depth of stack

    LOL(x)				same as stack but when something is pushed that is on it already it gets moved to the top. has getData.
    	getData()		return contents of list


    i(x)				identity
    s(x)(y)(z)			S combinator [x(z)(y(x))]
    k(x)(y)				K combinator [x]

    TRUE FALSE 			combinatorial bools

    or and xor not 		combinatorial operators

    ifElse(x)(ifTrue)(ifFalse)	combinatorial if else [x?ifTrue:ifFalse]

    boolToString(x)		converts combinatorial bool to string
    boolToFun(x)		converts bool to combinatorial bool
    funToBool(x)		converts combinatorial bool to bool

    isNumber(x)			checks if x is number
    isEven(c)			checks if c is even
    isOdd(c)			checks if c is odd
