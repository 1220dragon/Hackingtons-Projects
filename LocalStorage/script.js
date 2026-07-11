// Local storage stuff

if (localStorage.length < 2) {
  localStorage.setItem("name", prompt("What is your name?"));
  localStorage.setItem("age", prompt("How old are you?"));
}

console.log(localStorage.name);
console.log(localStorage.age);
