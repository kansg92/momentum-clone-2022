const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input")
const toDoList = document.querySelector("#todo-list");

function paintToDo(newToDo){
    const li = document.createElement("li")
    const span = document.createElement("span")
    li.appendChild(span);
    span.innerText = newToDo;
    toDoList.appendChild(li);
}


function handelToDoSubmit(event){
    event.preventDefault();    
    const newToDo = toDoInput.value;
    toDoInput.value ="";   
    paintToDo(newToDo);
};

toDoForm.addEventListener("submit", handelToDoSubmit);