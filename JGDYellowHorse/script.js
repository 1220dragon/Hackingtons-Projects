let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");

let horse = new Image();
horse.src = "Gaster.png";
let horse2 = new Image();
horse2.src = "Man.gif";

let timer = document.querySelector("#timer");
let time = 4;
function minusTimer() {
  time--;
  timer.innerHTML = time;
  if (time === 0) {
    time = 1;
    timer.innerHTML = "Go!";
    startGame();
    clearInterval(intvel);
  }
}
minusTimer();
let intvel = setInterval(minusTimer, 1000);

function startGame() {
  let canMove = true;
  let x = 0;
  let y = 100;
  let width = 100;
  let height = 220;
  x2 = 0;
  let gspeed = 25;
  let mspeed = 3;
  y2 = 350;
  width2 = 100;
  height = 120;
  let gPoints = 0;
  let mPoints = 0;
  let g = new Audio("voice_gaster_1.mp3");
  let m = new Audio("deltarune-egg-sound.mp3");

  x += 0;
  update();

  function update() {
    if (canMove === true) {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      x += gspeed;
      ctx.drawImage(horse, x, y, width, height);
      ctx.drawImage(horse2, x2, y2, width, height);
      ctx.font = "50px serif";
      ctx.fillStyle = "white";
      ctx.fillText(gPoints, 50, 50);
      ctx.font = "50px serif";
      ctx.fillStyle = "red";
      ctx.fillText(mPoints, 550, 550);
      g.play();
      if (x > 599) {
        gspeed += 2;
        x = -40;
        gPoints++;
      }
    }
  }

  function update2() {
    if (canMove === true) {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      x2 += mspeed;
      ctx.drawImage(horse, x, y, width, height);
      ctx.drawImage(horse2, x2, y2, width, height);
      ctx.font = "50px serif";
      ctx.fillStyle = "white";
      ctx.fillText(gPoints, 50, 50);
      ctx.font = "50px serif";
      ctx.fillStyle = "red";
      ctx.fillText(mPoints, 550, 550);
      m.play();
      if (x2 > 599) {
        x2 = -40;
        mPoints++;
        mspeed += 4;
      }
    }
  }

  setTimeout(update, 10);
  let intvel = setInterval(minusTimer2, 500);

  let timer = document.querySelector("#timer");
  let time = 60;
  function minusTimer2() {
    time--;
    timer.innerHTML = time;
    if (time === 0) {
      time = 1;
      timer.innerHTML = "End!";
      clearInterval(intvel);
      onclick = null;
      onkeypress = null;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      canMove = false;
      if (gPoints > mPoints) {
        ctx.fillText("W.D. Gaster Wins!", 100, 100);
      } else if (mPoints > gPoints) {
        ctx.fillText("The Egg Man Wins", 100, 100);
      } else {
        if (x > x2) {
          ctx.fillText("W.D. Gaster Wins!", 100, 100);
        } else if (x2 > x) {
          ctx.fillText("The Egg Man Wins!", 100, 100);
        } else {
          ctx.fillText("Tie...");
        }
      }
      return;
    }
  }
  onclick = update;
  onkeypress = update2;
}
