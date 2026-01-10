//Question: Given a string, try to print no. of occurences of each unique character of a string.
//Ex: javascript

//How about we somehow store frequency of each unique character. We need a mapping based structure.


let str = "javascript"
let freqMap = {}; //empty
for(const char of str){
    if(freqMap[char]){
        //if present update it
        freqMap[char] +=1;
    }else{
        //if not present add it
        freqMap[char] = 1;
    }
}

console.log(freqMap)