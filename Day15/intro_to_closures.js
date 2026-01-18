function process(){
    let i = 0;
    function innerProcess(){
        i += 1;
        return i;
    }
    return innerProcess; //We are not callign the function , we are jsut returning
}

let res = process();
console.log(res());
console.log("2nd time ",res());
console.log("3rd time ",res());