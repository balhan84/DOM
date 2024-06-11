//обробка подій
const signUpBtn = document.querySelector("#signup");
console.dir(signUpBtn);

function eventHandler(event) {
  console.log(event);
  alert(`You are registred`);
}
signUpBtn.onclick = eventHandler;
signUpBtn.onclick = null;

const loginBtn = document.querySelector("#login");

const loginEventHandler = (e) => alert(`You are login`);
loginBtn.addEventListener("click", loginEventHandler);
// loginBtn.removeEventListener("click", loginEventHandler);
console.dir(loginBtn);

const h1 = document.querySelector("h1");

h1.onmouseenter = (e) => alert("welcome");
