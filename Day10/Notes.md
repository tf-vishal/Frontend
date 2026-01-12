## == (abstract equality) vs === (Strict equality)

- Both of them checks type, but what they do with it depends.

## Abstract Equaltiy
    - x --> number , y --> string --> Converts y ToNumber & then does the comparison.
    - if any one of x,y is sstring, it will convert it to number and then compare.
    - if  x is boolean, it will convert x to number and then again do comparision
    - if y is boolean, it will convert y to number and then do the comparision
    - if x is number,string, symbol, and y is object, we convert y ToPrimitive and then compare.
    - if x is object , and y is number,string, symbol, we convert x ToPrimitive and then compare.


## Strict Equality Comparision
    - if type is different, return false (NO COERCION)
    - If any or both values are NaN, return false
    - if x is the same Number as y, return true
    - if x is +0 and y is -0, return true and vice versa


    // typeof null --> is object


### If value is different liek string or smthng, it will call SameValueNonNumber()

ToBoolean:-
undefined, null, nan, +0, -0, false, '' ---> False Value
apart from all these, everything is True


--NaN
--Corner Cases
--scopes


What is JS, interpreted or compiled?