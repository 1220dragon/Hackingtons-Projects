let timeInterval;
let gameStarted = false;

function startGame() {
  document.getElementById("timer").innerHTML = "30";
  document.getElementById("score").innerHTML = "0";
  clearInterval(timeInterval);
  timeInterval = setInterval(changeTime, 1000);
  gameStarted = true;
  reposition();
}

function changeTime() {
  let timerEl = document.getElementById("timer");
  let timeLeft = parseInt(timer.innerHTML);
  if (timeLeft > 0) {
    timerEl.innerHTML = timeLeft - 1;
  } else {
    clearInterval(timeInterval);
    gameStarted = false;
  }
}

function targetClick() {
  if (gameStarted) {
    let scoreEl = document.getElementById("score");
    scoreEl.innerHTML = parseInt(scoreEl.innerHTML) + 500;

    reposition();
  }
}

function fail() {
  if (gameStarted) {
    let scoreEl = document.getElementById("score");
    scoreEl.innerHTML = parseInt(scoreEl.innerHTML) + -333.333;
  }
}

function reposition() {
  let targetEl = document.getElementById("target");
  let randsize = Math.floor(Math.random() * 15) + 15;
  targetEl.style.width = randsize + "px";
  targetEl.style.height = randsize + "px";
  let xpos = Math.floor(Math.random() * (500 - randsize));
  targetEl.style.left = xpos + "px";
  let ypos = Math.floor(Math.random() * (500 - randsize));
  targetEl.style.bottom = ypos + "px";
}
