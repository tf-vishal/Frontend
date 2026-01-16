// Priority order
// Global Code (Call Stack) > Micro Task > Call Back Qeueue
// --------------------------------------------------------> Order Of Priority

console.log("Start of the file");

setTimeout(function timer1(){
    console.log("timer 1 Done");
}, 0);

for(let i = 0; i < 1000000000; i++){
    // somethign
}

let x = Promise.resolve("Vishal's Promise");

x.then(function processPromise(value){
    console.log("Whose Promise ?", value)
});

setTimeout(function timer2(){
    console.log("Timer 2 DOne");
}, 0);

console.log("End of the file")