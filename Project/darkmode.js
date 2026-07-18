let darkMode = false;

document.querySelector("button").addEventListener("click", toggleMode);

function toggleMode(event) {
  button = event.currentTarget || event;
  document.querySelectorAll(".song").forEach(function (song) {
    song.classList.toggle("dark");
  });
  document.body.classList.toggle("dark");
  document.querySelector("nav").classList.toggle("dark");
  button.classList.toggle("dark");
  document.querySelectorAll(".regText").forEach(function (text) {
    text.classList.toggle("shown");
  });
  document.querySelectorAll(".altText").forEach(function (text) {
    text.classList.toggle("shown");
  });

  darkMode = !darkMode;

  if (darkMode) {
    button.innerHTML = "Light Mode";
  } else {
    button.innerHTML = "Dark Mode";
  }
}

function saveSettings() {
  localStorage.setItem("darkmode", darkMode);
}

function loadSettings() {
  if (localStorage.getItem("darkmode") === "true") {
    toggleMode(document.querySelector("button"));
  }
}

window.addEventListener("beforeunload", saveSettings);
window.addEventListener("DOMContentLoaded", loadSettings);
