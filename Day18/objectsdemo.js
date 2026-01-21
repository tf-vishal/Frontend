let arr = [1,2,3,4];
console.log(typeof arr); //Array is also an object only.

let obj = {
    x: 10,
    y:20
}
// Neithwe we can add a new property nor update old one.

Object.freeze(obj); //This won't let the value of object change.
obj.x = 20;
console.log(obj)

let obj1 = {
    x:50,
    y:30
}

//Lets say we want to change the values of x and y but don't want to add new value, we can use seal for that
// Using seal, we can update old properties of object but can't add new properties into it.
Object.seal(obj1);
obj1.x = 30;
obj1.z = 90;
console.log(obj1)