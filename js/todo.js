const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input")
const toDoList = document.querySelector("#todo-list");

function deleteToDo(event){
    const li = event.target.parentElement; // click하였을때 나오는 버튼의 부모를 지정하여 준다.
    li.remove();
}

function paintToDo(newToDo){
    const li = document.createElement("li")
    const span = document.createElement("span")
    span.innerText = newToDo;
    const button = document.createElement("button");
    button.innerText = "❌"
    button.addEventListener("click", deleteToDo)  // 클릭하면 deleteToDo가 실행됨.
    li.appendChild(span);
    li.appendChild(button);
    toDoList.appendChild(li);
}


function handelToDoSubmit(event){
    event.preventDefault();    
    const newToDo = toDoInput.value;
    toDoInput.value ="";   
    paintToDo(newToDo);
};

toDoForm.addEventListener("submit", handelToDoSubmit);