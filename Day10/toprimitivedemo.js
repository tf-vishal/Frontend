let obj = {
    toString(){
        // By default gives [object Object]
        return "Let's Run Javascript"
    },

    valueOf(){
        //by default it returns the same object
    }
}

console.log

let obj1 = {x:9 , y :8};

console.log(10 - obj1) // obj.valueOf ---> Object, toString ---> [object Object]
//we can't convert object into number, so it will give NaN and 10-NaN is Nan

let obj2 = {x:7 , valueOf(){return 99}};
console.log(100-obj2)

let obj3 = {x:8, toString(){ return "88"}}
console.log(90-obj3)

let obj4 = {x:7, toString() { return{}}}
console.log(100 - obj4)