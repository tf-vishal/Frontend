function blocking_for_loop(){
    for(let i = 1 ; i< 1000; i++){
        // Something
    }
}

console.log("Start of the file"); // 1
setTimeout(function timer1(){
    console.log("Timer 1 done"); // Runtime (1)
}, 0);

blocking_for_loop();
let x = Promise.resolve("Vishal's Promise1");
x.then(function processPromise(value){
    console.log("Whose Promise ?", value); // Micro Task (1)
});

let y = Promise.resolve("Vishal's Promise 2");
y.then(function processPromise(value){
    console.log("Whose Promise ?", value); // Micro Task 2
    setTimeout(function () {console.log("OK DONE")}, 0); //Runtine(3)
});
let z = Promise.resolve("Vishal's Promise 3");
z.then(function processPromise(value){
    console.log("Whose Promise ?", value); //Micro Task 3
});
setTimeout(function timer2(){
    console.log("Timer 2 Done"); // Runtime (2)
}, 0);

console.log("End OF THE FILE"); // 2

/*
 Start of the file
 End of the file
 Whose Promise ? Vishal's Promise1
 Whose Promise ? Vishal's Promise 2
 Whose Promise ? Vishal's Promise 3
 Timer 1 Done
 Timer 2 Done
 Ok DONE

*/