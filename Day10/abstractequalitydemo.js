console.log(null == undefined)
console.log(12 == "12")

console.log(false == '0')

/*
x -> boolean -> ToNumber -> false ->0
y -> string -> ToNumber -> 0

x==y
true
*/

console.log(null == false)

let obj = {x:10, valueOf(){return 100;}}

console.log(99 == obj)
console.log(100 == obj)