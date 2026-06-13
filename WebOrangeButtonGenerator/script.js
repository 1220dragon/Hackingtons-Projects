let button = document.querySelector("button");

function changeBackground() {
  let value = document.querySelector("#backgroundColor").value;
  button.style.backgroundColor = value;

  document.querySelector("#bgCSS").innerHTML =
    "background-color: " + value + ";";
}

function changeColor() {
  let value = document.querySelector("#color").value;
  button.style.color = value;

  document.querySelector("#colorCSS").innerHTML = "color: " + value + ";";
}

function changePadding() {
  let value = document.querySelector("#padding").value;
  button.style.padding = value + "px";

  document.querySelector("#paddingCSS").innerHTML =
    "padding: " + value + "px" + ";";
}

function changeRadius() {
  let value = document.querySelector("#borderRadius").value;
  button.style.borderRadius = value + "px";

  document.querySelector("#radiusCSS").innerHTML =
    "border-radius: " + value + " px" + ";";
}
