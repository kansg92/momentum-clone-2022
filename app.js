/*
const loginForm = document.querySelector("#login-form");
const loginInput = loginForm.querySelector("input");
const loginButton = loginForm.querySelector("button");
아래과 같은 코드이다.
*/
const loginInput = document.querySelector("#login-form input");
const loginButton = document.querySelector("#login-form button");

function onLoginBtnClick(){
    console.log(loginInput.value);
    console.log("click!!");
}

loginButton.addEventListener("click", onLoginBtnClick);
