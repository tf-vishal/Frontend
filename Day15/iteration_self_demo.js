function fetchNextElement(array){
    let idx = 0
    function next(){
        if (idx == array.length){
        return undefined;
        }
        const nextElement = array[idx];
        idx++;
        return nextElement
    }
    return next;
}

//somewhere we consume it.
const autmaticFetcher = fetchNextElement([1,2,3,4,5,6,9,23,43,56,80]) //inside automatic fetcher variable we can storge next().
console.log(autmaticFetcher());
console.log(autmaticFetcher());
console.log(autmaticFetcher());
console.log(autmaticFetcher());
console.log(autmaticFetcher());
console.log(autmaticFetcher());
console.log(autmaticFetcher());
console.log(autmaticFetcher());
console.log(autmaticFetcher());
console.log(autmaticFetcher());
console.log(autmaticFetcher());