function Product(n,p,c){
    this.name = n;
    this.price = p;

    Category.call(this, c);
}

function Category(c){
    this.categoriesName = c;
    this.getCategoryName = function (){
        console.log(this.categoriesName)
    }

}

let p = new Product("Iphone", 150000, "Electronics");
p.getCategoryName();