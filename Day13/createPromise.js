function getRandomInt(max){
    return Math.floor(Math.random()* max)
}

function createPromiseWithLoop(){
    return new Promise(function executor(resolve, reject) {
        // for(let i = 0; i < 100000; i++) {}
        let num = getRandomInt(10);
        if (num%2 == 0){
            // if random number is even we fulfill
            resolve(num);
        }else {
            // if odd, we reject
            reject(num);
        }
    })
}

x = createPromiseWithLoop();
console.log(x)
