console.log("Welcome To My To-Do App")

let getTodosButton = document.getElementById("get-todos")

// Registration of event listner
// getTodosButton.addEventListener("click", ()=>{
//     console.log("Clicked")
// });


/*
// This is for learning purpose

getTodosButton.addEventListener("click", ()=>{
    console.log("Clicked Wow")
});

// We can write function seperately too
getTodosButton.addEventListener("mouseover", handler); 
//Nvr use handler(), don't call it, as it will be wrng, as it will return undefined

function handler(){
    console.log("This is seperate function")
}
*/

// Shorthand to use events

// getTodosButton.onclick = () => {
//     console.log("This is shorthand to use listener")
// }

//This is called from html using attributes starts from on..., see clickBtnn() in html 
function clickBtnn(){
    console.log("This is called from html.")
}