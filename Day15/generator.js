function* fetchNextElement(){
    console.log("I'm inside the generator function");
    yield 1;
    yield 2;
    console.log("SOMEWHERE IN THE MIDDLE")
    yield 3;
    yield 4;
}

const itr = fetchNextElement();

console.log(itr.next());
console.log(itr.next());
console.log(itr.next());