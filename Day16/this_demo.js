let iphone = {
    name: "Iphone 17 Pro",
    price: 100000,
    rating: 4.9,
    description: "This is the latest Iphone in the market.",

    display(){
        console.log(this);
    }
}

let macbook = {
    name: "Macbook M3 ",
    price: 150000,
    rating: 4.9,
    description: "This is the latest Macbook in the market.",

    display(){
        this;
    }
}

iphone.display();

console.log(this); //One exception where it gives empty object, otherwise this always refers to the calling context like iphone.