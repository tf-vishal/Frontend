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

function editTodo(event){
    let editButtonPressed = event.target;
    let indexToEdit = Number(editButtonPressed.getAttribute('todo-idx'));
    let detailDiv = document.querySelector(`div[todo-idx="${indexToEdit}"]`);
    let input = document.querySelector(`input[todo-idx="${indexToEdit}"]`);
    detailDiv.style.display = "none";
    input.type="text";
    input.value = detailDiv.textContent;
}

function saveEdittedTodo(event){
    // console.log("event.keyCode"); //for every keypress there is a code, eg. enter = 13
    let input = event.target;
    let indexToEdit = Number(input.getAttribute('todo-idx'));
    let detailDiv = document.querySelector(`div[todo-idx="${indexToEdit}"]`);
    if(event.keyCode == 13){
        detailDiv.textContent = input.value;
        detailDiv.style.display= "block";
        input.value = '';
        input.type="hidden";
    }
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
    let editButton = document.createElement('button');
    let hiddenInput = document.createElement("input");
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
    editButton.classList.add("btn", "btn-warning", "edit-todo");
    hiddenInput.classList.add("form-control", "todo-detail");
    
    finishedButton.setAttribute("todo-idx", todoCount-1);
    deleteButton.setAttribute('todo-idx',todoCount-1);
    editButton.setAttribute('todo-idx', todoCount-1);
    todoDetail.setAttribute('todo-idx', todoCount-1);
    hiddenInput.setAttribute('todo-idx', todoCount-1);
    hiddenInput.type = "hidden";


    deleteButton.onclick = removeTodo;
    finishedButton.onclick = finishTodo;
    editButton.onclick = editTodo;
    hiddenInput.addEventListener("keypress", saveEdittedTodo);

    todoNumber.textContent = `${todoCount}.`;
    todoDetail.textContent = todo.text //Sets the todo text sent from input element
    todoStatus.textContent = todo.status  
    deleteButton.textContent = "Delete"
    finishedButton.textContent = todo.finishButtonText;
    editButton.textContent = "Edit";

    todoActions.appendChild(deleteButton);
    todoActions.appendChild(finishedButton);
    todoActions.appendChild(editButton)
    

    todoItem.appendChild(todoNumber);
    todoItem.appendChild(todoDetail);
    todoItem.appendChild(hiddenInput);
    todoItem.appendChild(todoStatus);
    todoItem.appendChild(todoActions);

    rowDiv.appendChild(todoItem);
    rowDiv.appendChild(hr);
    todoDataList.appendChild(rowDiv);
}