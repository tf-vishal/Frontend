// Different ways to create Object using another object.

// 1.
let obj = {
    x:1,
    y:2
}
// 2
let obj2 = obj

// 3
const newObj = Object.create(obj)

// So as u can see, the preferred method is 3rd as, it creates new object using some other object.
// Whereas in 2nd, the pointer points towards same object, so If u change value of any object, it will change to both of them.
// Ex:

obj2.x=55;
newObj.x = 22;

console.log(obj,obj2, newObj) //Output: { x: 55, y: 2 } { x: 55, y: 2 } { x: 22 }
