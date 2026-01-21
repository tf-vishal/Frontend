const player1 = {
    firstname: "Virat",
    lastname: "Kohli",
    numToBat: 3,
    canBowl: false,

    getDetails: function (){
        console.log(this.firstname , this.lastname, "Comes at Number", this.numToBat);
    }
}
// For bind
// const obj = function (){
//     console.log(this.getDetails());
// } 

// const x = obj.bind(player1)
// console.log(x);
// x();

// ----- For call--------

const obj = function (x,y){
    console.log(x+y)
    this.getDetails();
}

obj.call(player1 , 10 , 25);