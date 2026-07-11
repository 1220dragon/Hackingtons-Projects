let wordsContainer = document.querySelector("#words");
let youWinText = document.querySelector("#youWin");
let bestTime = 934285918395481934859;
let bestTimeText = document.querySelector("#highScore");

if (localStorage.bestTime) {
  bestTime = localStorage.bestTime;
  bestTimeText.innerHTML = "Your highscore is: " + bestTime + " seconds!";
} else {
}

let words = [
  { word: "red", color: "blue" },
  { word: "blue", color: "orange" },
  { word: "orange", color: "black" },
  { word: "purple", color: "green" },
  { word: "green", color: "orange" },
  { word: "black", color: "purple" },
];

let wordsEl = [];

function showWords() {
  words.forEach(function (word) {
    let newSpan = document.createElement("span");
    newSpan.innerHTML = word.word;
    newSpan.style.color = word.color;
    wordsContainer.append(newSpan);
    wordsEl.push(newSpan);
  });
}

let wordCounter = 0;
let startTime;
let hasStarted = false;

function checkColor(that) {
  let input = that.value;
  that.value = "";

  if (input.toLowerCase() == "start" && hasStarted === false) {
    hasStarted = true;
    startTime = new Date();
    showWords();
  }

  if (hasStarted) {
    if (input.toLowerCase() == words[wordCounter].color) {
      wordsEl[wordCounter].style.color = "lightgray";
      wordCounter++;

      if (wordCounter >= words.length) {
        let time = new Date() - startTime;
        time /= 1000;
        youWinText.style.display = "block";
        youWinText.innerHTML += " It took you " + time + " seconds to finish!";
        hasStarted = false;
        if (time < bestTime) {
          bestTime = time;
          localStorage.setItem("bestTime", time);
          bestTimeText.innerHTML =
            "Your highscore is: " + bestTime + " seconds!";
        }
      }
    }
  }
}
