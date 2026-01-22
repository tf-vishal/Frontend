console.log("Welcome to my todo app");

let todos = [];

let  todoDataList = document.getElementById('todo-data-list');
let saveButton = document.getElementById('save-todo');
let todoInputBar = document.getElementById('todo-inputbar')

todoInputBar.addEventListener("keyup", function toggleSaveButton(){
    let todotext = todoInputBar.value;
    console.log(todotext)
    if(todotext.length == 0) {
        if(saveButton.classList.contains('disabled')) return;
        saveButton.classList.add('disabled')
    }
    else if(saveButton.classList.contains('disabled')){
        saveButton.classList.remove("disabled");
    }
    
})

saveButton.addEventListener("click", function getTextAndAddTodo(){
    let todotext = todoInputBar.value;
    if(todotext.length == 0) return;
    let todo = {text: todotext, status: 'In Progess', finishButtonText: 'Finished'};
    todos.push(todo);
    addTodo(todo, todos.length);

    todoInputBar.value = '';
})

function reRenderTodos(){
    todoDataList.innerHTML = '';
    todos.forEach((element, idx)=>{
        addTodo(element,idx+1);
    });
}

function removeTodo(event){
    // console.log("CLICK", event.target.parentElement.parentElement.parentElement)
    // Read abt targets and ParentElement,etc
    // event.target.parentElement.parentElement.parentElement.remove();
    let deleteButtonPressed = event.target;
    let indexTobeRemoved = Number(deleteButtonPressed.getAttribute('todo-idx'))
    todos.splice(indexTobeRemoved, 1);
    reRenderTodos();
}

function finishTodo(event){
    let finishButtonPressed = event.target;
    let indenTobeFinished = Number(finishButtonPressed.getAttribute('todo-idx'));

    //toggle
    if(todos[indenTobeFinished].status == "Finished"){
        todos[indenTobeFinished].status = "In Prgoress";
        todos[indenTobeFinished].finishButtonText = "Finished";
    }else{
        todos[indenTobeFinished].status = "Finished";
        todos[indenTobeFinished].finishButtonText = "Undo";
    }

    todos.sort((a,b)=>{
        if(a.status == "Finished"){
            return 1; //This will place b before a, b<a
        }
        return -1; //this will place a before me just like a<b
    })
    reRenderTodos();
}

function addTodo(todo, todoCount){
    // console.log("WE called addTodo function") //For checking
    let rowDiv = document.createElement('div');
    let todoItem = document.createElement('div');
    let todoNumber = document.createElement('div');
    let todoDetail = document.createElement('div');
    let todoStatus = document.createElement('div');
    let todoActions = document.createElement('div');
    let deleteButton = document.createElement('button');
    let finishedButton = document.createElement('button');
    let hr = document.createElement('hr')

    // Adding classes
    rowDiv.classList.add("row")
    todoItem.classList.add("todo-item", "d-flex", "flex-row", "justify-content-between", "align-items-center");
    todoNumber.classList.add("todo-no");
    todoDetail.classList.add("todo-detail", "text-muted");
    todoStatus.classList.add("todo-status", "text-muted");
    todoActions.classList.add("todo-actions", "d-flex", "justify-conent-start", "gap-2");
    deleteButton.classList.add("btn", "btn-danger", "delete-todo");
    finishedButton.classList.add("btn", "btn-success", "finish-todo");

    finishedButton.setAttribute("todo-idx", todoCount-1);
    deleteButton.setAttribute('todo-idx',todoCount-1);
    deleteButton.onclick = removeTodo;
    finishedButton.onclick = finishTodo;

    todoNumber.textContent = `${todoCount}.`;
    todoDetail.textContent = todo.text //Sets the todo text sent from input element
    todoStatus.textContent = todo.status  
    deleteButton.textContent = "Delete"
    finishedButton.textContent = todo.finishButtonText;

    todoActions.appendChild(deleteButton);
    todoActions.appendChild(finishedButton);
    

    todoItem.appendChild(todoNumber);
    todoItem.appendChild(todoDetail);
    todoItem.appendChild(todoStatus);
    todoItem.appendChild(todoActions);

    rowDiv.appendChild(todoItem);
    rowDiv.appendChild(hr);
    todoDataList.appendChild(rowDiv);
}