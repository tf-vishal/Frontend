let x = {name: "Vishal", age: 24};
let y = {
    name: "Sarthank",
    age: 24
};

//access any value using key
//NOTE: From key you can access values but not vice-versa
console.log(x["name"]);
console.log(y.name);

// Are Objects Mutable ? 
//Ans - YES

y.name = "Tanmay" //Update Object
console.log(y)

//HOW to add a new property to an already created object
x.marks = 100; //if marks key is present it will update otherwise it adds it
x["company"] = "Google"

console.log(x)

//delete a key value pair ?
// We can use delete Operator

delete x.name;
console.log(x)


