let nameInput = document.querySelector("#name");
let imgInput = document.querySelector("#img");
let rankInput = document.querySelector("#rank");

function addToList() {
  let tier = document.querySelector("#" + rankInput.value.toUpperCase());
  let itemContainer = document.createElement("div");
  let nameEl = document.createElement("p");
  nameEl.innerHTML = nameInput.value;
  let imgEl = document.createElement("img");
  imgEl.src = imgInput.value;
  itemContainer.append(imgEl);
  itemContainer.append(nameEl);
  tier.append(itemContainer);
  reset();
}

function reset() {
  nameInput.value = "";
  imgInput.value = "";
  rankInput.value = "";
}
