const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input")
const toDoList = document.querySelector("#todo-list");

function handelToDoSubmit(event){
    event.preventDefault();    // html기본 event 리셋
    const newToDo = toDoInput.value; //toDoInput.value 를 newToDo에담음
    console.log(toDoInput.value); //toDoInput.value 값 배출 => 현재(newToDo === toDoInput.value)
    toDoInput.value ="";   //toDoInput.value 값 공백으로 만듦 . => newTodo !== toDoInput.value 기존 value 값달라짐.
    console.log(newToDo,toDoInput.value);   // 출력값 : 기존 입력갑 + 공백 나옴.
};

toDoForm.addEventListener("submit", handelToDoSubmit);