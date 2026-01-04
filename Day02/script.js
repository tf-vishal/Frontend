// script.js - Write your DOM manipulation code here!

// ============================================
// TASK 1: Create a red paragraph
// ============================================
// Steps:
// 1. Select the output area with id "task1-output"
// 2. Create a new <p> element
// 3. Set its color to red
// 4. Set its text to "Hey I'm red!"
// 5. Append it to the output area

// Your code here:

const output1 = document.querySelector("#task1-output");
const redPara = document.createElement("p");
redPara.style.color = "red";
redPara.textContent = "Hey I'm red!";
output1.appendChild(redPara);



// ============================================
// TASK 2: Create a blue h3
// ============================================
// Steps:
// 1. Select the output area with id "task2-output"
// 2. Create a new <h3> element
// 3. Set its color to blue
// 4. Set its text to "I'm a blue h3!"
// 5. Append it to the output area

// Your code here:
const output2 = document.querySelector("#task2-output");
const h3 = document.createElement("h3")
h3.style.color = "blue";
h3.textContent = "I'm a blue h3!!";
output2.append(h3);



// ============================================
// TASK 3: Create a styled div with nested elements
// ============================================
// Steps:
// 1. Select the output area with id "task3-output"
// 2. Create a new <div> element
// 3. Set its border to "2px solid black"
// 4. Set its background to "pink"
// 5. Set its padding to "20px" (optional, makes it look better)
// 6. Create an <h1> that says "I'm in a div"
// 7. Create a <p> that says "ME TOO!"
// 8. Append the h1 and p to the div
// 9. Append the div to the output area

// Your code here:
const output3 = document.querySelector("#task3-output")
const addingDiv = document.createElement("div");
addingDiv.style.border = "2px solid black";
addingDiv.style.background = "pink";
addingDiv.style.padding = "20px";
const h1 = document.createElement("h1");
h1.textContent = "I'm in a div";
const paragraph = document.createElement("p");
paragraph.textContent = "Mee too!"
addingDiv.appendChild(h1);
addingDiv.appendChild(paragraph);
output3.append(addingDiv)



// FOr events button

// const btn = document.querySelector("#btn");
// btn.addEventListener("click", function (e) {
//   e.target.style.background = "blue";
// });



// ============================================
// TASK 4: Add alert on button click
// ============================================
// Steps:
// 1. Select the button with id "alert-btn"
// 2. Add a click event listener
// 3. Show an alert that says "Hello World!"

// Your code here:
const btn = document.querySelector("#alert-btn");
btn.onclick = () => alert("Hello World");
