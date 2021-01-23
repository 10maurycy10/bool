# Booleans for JS

this is a package containing utilities for boolean types

## features

	1. suport for external bools
	2. or, and, not, xor
	3. Ternary operator

## api

    true			// true value
	false			// true value
	ternary(b,i,e) 	// returns i if b is true, e otherwize
	ifElse(b,i,e)	// runs i if b is true, runs e otherwize 
	not(a) 			// logical negation
	or(a,b)			// boolean or
	and(a,b)    	// boolean and
	xor(a,b)		// boolean exclusive or
	exportBool(a)	// allows passing boolean into exteranal function
	importBool(a)	// takes an exteral boolean and allows use internaling