function getRandomInt(max){
    return Math.floor(Math.random()* max)
}

function createPromiseWithTimeout(){
    return new Promise(function executor(resolve, reject) {
        console.log("Entering the executer callback in the promise constructor:")
        setTimeout(function (){
            let num = getRandomInt(10);
            if (num%2 == 0){
                // if random number is even we fulfill
                resolve(num);
            }else {
                // if odd, we reject
                reject(num);
            }

        }, 10000)
        console.log("Exiting the executer callback in the promise constructor");
    })
}


console.log("STARTING...........");

const x = createPromiseWithTimeout();
console.log("We are now waiting for the promise to complete");
console.log("Currently my promise is like ......", x)

x
.then(
    function fulfillHandler1(value){
        console.log("Inside Fulfill Handler1 with value", value);
        console.log("promise after fullfiment is..",x)
    }, 
    function rejectionHandler1(value){
        console.log("Inside rejected Handler1 with value", value);
        console.log("promise after rejection is..",x);
    }
)


x
.then(
    function fulfillHandler2(value){
        console.log("Inside Fulfill Handler2 with value", value);
        console.log("promise after fullfiment is..",x)
    }, 
    function rejectionHandler2(value){
        console.log("Inside rejected Handler2 with value", value);
        console.log("promise after rejection is..",x);
    }
)


x
.then(
    function fulfillHandler3(value){
        console.log("Inside Fulfill Handler3 with value", value);
        console.log("promise after fullfiment is..",x)
    }, 
    function rejectionHandler3(value){
        console.log("Inside rejected Handler3 with value", value);
        console.log("promise after rejection is..",x);
    }
)


console.log("ENDING>>>>>>>")