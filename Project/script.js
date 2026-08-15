function search(that) {
  fetch(
    "https://hackingtonsapiproxy.herokuapp.com/" +
      "api.scratch.mit.edu/users/" +
      that.value +
      "/projects",
  )
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      if (data.length > 0) {
        showResults(data);
      } else {
        notFound();
      }
    });
}

function showResults(things) {
  document.getElementById("games").innerHTML = "";
  things.forEach(function (project) {
    buildProject(project);
  });
}

function buildProject(project) {
  console.log(project);
  let newTitle = makeElement("h2", "title", project.title);
  let viewCount = makeElement("p", undefined, "Views: " + project.stats.views);
  let imageContainer = makeElement();
  let newImage = makeElement("img");
  newImage.src = project.image;

  newImage.onclick = function () {
    playGame(project.id, imageContainer);
  };
  let newGame = makeElement("div", "game");
  imageContainer.append(newImage);
  newGame.append(newTitle);
  newGame.append(imageContainer);
  newGame.append(viewCount);
  newGame.append(newTitle);
  document.getElementById("games").append(newGame);
}

function makeElement(type = "div", newClass, inner = "") {
  let newElement = document.createElement(type);
  if (newClass) {
    newElement.classList.add(newClass);
  }
  newElement.innerHTML = inner;
  return newElement;
}

function notFound() {
  document.getElementById("games").innerHTML =
    "No projects found... Check if the username was correct.";
}

function playGame(id, container) {
  container.innerHTML =
    '<iframe src="https://turbowarp.org/' +
    id +
    '/embed" width="482" height="412" allowtransparency="true" frameborder="0" scrolling="no" allowfullscreen="" style="color-scheme: auto"></iframe>';
}
