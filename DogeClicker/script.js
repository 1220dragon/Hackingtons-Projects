let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");

//import images
let placeholder;

let dogeImage = new Image();
dogeImage.src = "doge.png";

let baseball = new Image();
baseball.src = "baseball.png";

let bread = new Image();
bread.src = "bread.png";

let strong = new Image();
strong.src = "strong.png";

let weak = new Image();
weak.src = "weak.png";

let bark = new Audio();
bark.src = "bark.mp3";

let dogeCoin = new Image();
dogeCoin.src = "dogecoin.png";

//global variables
let score = 0;
let perClick = 1;
let autoClickPower = 0;

let doge = {
  x: 200,
  y: 200,
  width: 150,
  height: 150,
};

let buttonA = {
  x: 420,
  y: 200,
  width: 150,
  height: 48,
  backgroundColor: "purple",
  textColor: "white",
  text: "+5 Points",
  isReady: false,
};

let buttonB = {
  x: 420,
  y: 300,
  width: 150,
  height: 48,
  backgroundColor: "blue",
  textColor: "white",
  text: "Autoclicker",
  isReady: false,
};

function gameLoop() {
  //buton stuff

  if (score >= 20) {
    buttonA.isReady = true;
  }

  if (score >= 60) {
    buttonB.isReady = true;
  }

  if (buttonA.isReady) {
    buttonA.backgroundColor = "purple";
  } else {
    buttonA.backgroundColor = "grey";
  }
  if (buttonB.isReady) {
    buttonB.backgroundColor = "blue";
  } else {
    buttonB.backgroundColor = "grey";
  }

  //clear canvas
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  //Write Messages
  if (score > 10 && score < 15) {
    ctx.font = "25px serif";
    ctx.fillText("Much wow", 50, 200);
  } else if (score > 50 && score < 67) {
    ctx.drawImage(dogeCoin, 200, 400, 100, 100);
  }
  if (score < 5) {
    //draw players

    placeholder = dogeImage;
  } else if (score < 10) {
    placeholder = weak;
  } else if (score < 20) {
    placeholder = strong;
  } else if (score < 100) {
    placeholder = baseball;
  } else {
    placeholder = bread;
  }

  ctx.drawImage(placeholder, doge.x, doge.y, doge.width, doge.height);

  // draw buttonA
  ctx.font = "20px serif";

  ctx.fillStyle = buttonA.backgroundColor;
  ctx.fillRect(buttonA.x, buttonA.y, buttonA.width, buttonA.height);
  ctx.fillStyle = buttonA.textColor;
  ctx.fillText(buttonA.text, buttonA.x + 20, buttonA.y + 30);

  // draw buttonB
  ctx.font = "20px serif";

  ctx.fillStyle = buttonB.backgroundColor;
  ctx.fillRect(buttonB.x, buttonB.y, buttonB.width, buttonB.height);
  ctx.fillStyle = buttonB.textColor;
  ctx.fillText(buttonB.text, buttonB.x + 20, buttonB.y + 30);

  //draw score
  ctx.font = "30px serif";
  ctx.fillStyle = "white";
  ctx.fillText(score, 540, 50);

  //stop the game
  if (score > 10000) {
    clearInterval(startGame);
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillText(score, 180, 260);
  }
}

let startGame = setInterval(gameLoop, 1000 / 60);
let autoClicking = setInterval(autoClick, 1000);

function handleClickEvent(event) {
  if (isMouseTouching(event, doge)) {
    score += perClick;
    grow();
    bark.currentTime = 0;
    bark.play();
  }
  if (isMouseTouching(event, buttonA)) {
    if (score >= 20) {
      perClick += 5;
      score -= 20;
      buttonA.isReady = false;
    }
  }
  if (isMouseTouching(event, buttonB)) {
    if (score >= 60) {
      autoClickPower++;
      score -= 60;
      buttonB.isReady = false;
    }
  }
}

function isMouseTouching(event, object) {
  let isTouchingX = false;
  let isTouchingY = false;
  let offset = canvas.getBoundingClientRect();

  if (
    event.x - offset.x > object.x &&
    event.x - offset.x < object.x + object.width
  ) {
    isTouchingX = true;
  }
  if (
    event.y - offset.y > object.y &&
    event.y - offset.y < object.y + object.height
  ) {
    isTouchingY = true;
  }
  if (isTouchingX && isTouchingY) {
    return true;
  }
}

function autoClick() {
  score += autoClickPower;
}

function grow() {
  doge.width += 10;
  doge.height += 10;
  doge.x -= 5;
  doge.y -= 5;
  setTimeout(shrink, 67);
}

function shrink() {
  doge.width -= 10;
  doge.height -= 10;
  doge.x += 5;
  doge.y += 5;
}

onclick = handleClickEvent;

console.log("debug");
