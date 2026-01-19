class Product{
    #name; //we can make the value private using #
    #price;
    desc;

    constructor(n,p,d){
        this.#name = n;
        this.#price = p;
        this.desc = d;
        //return 10; Primitive -> No effect
        //return {x:10} will effect
        //return this; //If u don't return anything , it is equal to sayin return this;
    }

    set name(n){ //Used to validate if the value is ryt or wrng, like -1 instead of string.
        if( typeof(n)!== "string"){
            console.log("Invalid Name Passed:");
            return;
        }
        this.#name = n;
    }

    set price(p){
        if(p<0) return;
        this.#price = p;
    }

    get name(){
        return this.#name;
    }


    display(){
        // no need of function keyword
    }
}

const p = new Product("IPHONE", 100000, "THIS IS THE LATEAST IPHONE IN THE MARKET");

console.log(p)
p.name = "MacBook"; //This calls set name for changing the name.
console.log(p);
console.log(p.name); //This calls get name function.