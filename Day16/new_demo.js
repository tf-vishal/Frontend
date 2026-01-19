class Product{
    name; //no need of let var constant
    price;
    desc;

    constructor(n,p,d){
        this.name = n;
        this.price = p;
        this.desc = d;
        //return 10; Primitive -> No effect
        //return {x:10} will effect
        //return this; //If u don't return anything , it is equal to sayin return this;
    }

    display(){
        // no need of function keyword
    }
}

const p = new Product("IPHONE", 100000, "THIS IS THE LATEAST IPHONE IN THE MARKET");

console.log(p)