function createPromise(){
    return new Promise(function exec(resolve, reject){
        console.log("Resolving the promise");
        resolve("DONE");
    })
}

setTimeout(function process(){
    console.log("Timer Completed")
}, 0);

let p = createPromise();

p
.then(
    function fulfillHandler1(value){
    console.log("we fulfilled with a value 1 - ", value)
}, 
function rejectHandler(){})

p
.then(
    function fulfillHandler2(value){
    console.log("we fulfilled with a value 2- ", value)
}, 
function rejectHandler(){})

p
.then(
    function fulfillHandler3(value){
    console.log("we fulfilled with a value 3- ", value)
}, 
function rejectHandler(){})

for (let i = 0; i < 100000000000000000; i++){
}

console.log("Ending")
// In this code, setTimeout will be registered to runtime. It will move forward to createPromise(), it will start it and print "Resolving the promise".
// After its resolved, it will move to p.then, and it will register the function handler , it won't execute as *global code* is still left.
// After completing the global code, it will take the queue from micro task and throw the callbacks in to callback queue. 