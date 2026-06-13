let canvas = document.querySelector("#canvas");
let ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

ctx.imageSmoothingEnabled = false;

//global variables
let baseLine = canvas.height / 2;
let dinoX = 100;
let dinoY = baseLine;
let dinoYspeed = 0;
let dinoWidth = 100;
let dinoHeight = 160;
let dinoImg = new Image();
dinoImg.src = "kris.png";
let cactX = canvas.width - 100;
let isJumping = false;
let cactWidth = 60;
let cactHeight = 120;
let cactY = baseLine + 60;
let cactImg = new Image();
cactImg.src = "Dogcar.png";
let cactAltImg = new Image();
cactAltImg.src = "bird.JPG";
let score = 0;
let cactSpeed = 20;
let cactMode = 1;
let sliding = false;
let slideImg = new Image();
slideImg.src = "soul.png";

//gameloop
function gameLoop() {
  isJumping = dinoY < baseLine;
  //update
  cactX -= cactSpeed;
  if (cactX < 0) {
    cactX = canvas.width;
    score++;
    cactSpeed++;
    if (Math.floor(Math.random() * 2) + 1 === 1) {
      cactMode = 1;
      cactY = baseLine + 60;
      cactWidth = 60;
      cactHeight = 120;
    } else {
      cactMode = 2;
      cactY = baseLine - 20;
      cactWidth = 120;
      cactHeight = 60;
    }
  }
  dinoY -= dinoYspeed;
  if (dinoY > baseLine) {
    dinoY = baseLine;
    dinoYspeed = 0;
    isJumping = false;
  }
  if (isJumping) {
    dinoYspeed -= 10;
  }

  //check for collision
  let isTouchingX = false;
  let isTouchingY = false;

  if (cactX < dinoX + dinoWidth && cactX + cactWidth > dinoX) {
    isTouchingX = true;
  }
  if (dinoY + dinoHeight >= cactY) {
    isTouchingY = true;
  }
  if (isTouchingX && isTouchingY) {
    if (cactMode === 1) {
      score--;
      cactX = canvas.width;
      cactSpeed--;
    } else if (cactMode === 2) {
      if (!sliding) {
        score--;
        cactX = canvas.width;
        cactSpeed--;
      }
    }
  }
  //clearScreen
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  //drawDino
  if (!sliding) {
    ctx.drawImage(dinoImg, dinoX, dinoY, dinoWidth, dinoHeight);
  } else {
    ctx.drawImage(slideImg, dinoX, dinoY - -50, dinoWidth, dinoHeight + -50);
  }

  //drawCactus
  if (cactMode === 1) {
    ctx.drawImage(cactImg, cactX, cactY, cactWidth, cactHeight);
  } else {
    ctx.drawImage(cactAltImg, cactX, cactY, cactWidth, cactHeight);
  }

  //drawGround
  ctx.fillRect(0, baseLine + 160, canvas.width, 30);

  //drawScore
  ctx.font = "200px noto-sans";
  ctx.fillText(score, 500, 500);

  if (score < 0) {
    ctx.clearRect(0, 8, canvas.width, canvas.height);
    ctx.fillText("Game over", 100, 100);
    clearInterval(dinoGame);
  }
}

//jump
function jump() {
  if (!isJumping && !sliding) {
    isJumping = true;
    dinoYspeed = 80;
  }
}

//slide
function slide(event) {
  if (event.key === "s" && !isJumping) {
    sliding = true;
  } else {
    sliding = false;
  }
}

function slidestop() {
  sliding = false;
}
//onclick/onkeypress
onclick = jump;
document.addEventListener("keydown", slide);
document.addEventListener("keyup", slidestop);

let dinoGame = setInterval(gameLoop, 1000 / 60);

// - = up + = down

// cactusX < dinoX = dinoWidth && cactusX =cactusWidth > dinoX
