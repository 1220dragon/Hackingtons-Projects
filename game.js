let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");

//import images
let backgroundImage = new Image();
backgroundImage.src = "background.jpg";

let playerImage = new Image();
playerImage.src = "purplecar.png";

let enemyImage0 = new Image();
enemyImage0.src = "enemy.png";

let explosionImage = new Image();
explosionImage.src = "explosion.png";

//global variables

let yspeed = 5;

let background1 = {
  x: 0,
  y: 0,
  width: canvas.width,
  height: canvas.height,
};

let background2 = {
  x: 0,
  y: -600,
  width: canvas.width,
  height: canvas.height,
};

let player = {
  x: 200,
  y: 400,
  width: 50,
  height: 100,
  speed: 1,
  health: 100,
};

let enemy0 = {
  x: 120,
  y: 39999,
  width: 50,
  height: 100,
  image: enemyImage0,
  speed: 1,
};

let enemy1 = {
  ...enemy0,
  x: 240,
};

let enemy2 = {
  ...enemy0,
  x: 370,
};

let enemy3 = {
  ...enemy0,
  x: 300,
};
let enemy4 = {
  ...enemy0,
  x: 420,
};

let gameOver = false;

function gameLoop() {
  if (gameOver) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.font = "50px Arial";
    ctx.fillText("Game Over", 180, 300);
  } else {
    //clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    //move background
    moveBackground();
    //background
    drawBackground();

    //player
    drawPlayer();

    //move the player
    movePlayer();

    //draw enemies
    drawEnemies();

    //health
    drawHealth();
  }
}

function drawHealth() {
  ctx.font = "25px Arial";
  ctx.fillText("Health: " + Math.floor(player.health), 50, 50);
}

let enemies = [enemy0, enemy1, enemy2, enemy3, enemy4];

function drawEnemies() {
  for (let i = 0; i < enemies.length; i++) {
    enemies[i].y += yspeed - enemies[i].speed;
    if (enemies[i].y > canvas.height) {
      enemies[i].y = -200;
      enemies[i].speed = Math.random() * 5;
    }
    ctx.drawImage(
      enemies[i].image,
      enemies[i].x,
      enemies[i].y,
      enemies[i].width,
      enemies[i].height,
    );
    //check for collisions
    if (isTouching(player, enemies[i])) {
      player.health -= 0.1;
      console.log(player.health);
      ctx.drawImage(explosionImage, player.x, player.y, 100, 100);
      if (player.health <= 0) {
        gameOver = true;
      }
    }
  }
}

function moveBackground() {
  background1.y += yspeed;
  background2.y += yspeed;
  if (background1.y >= background1.height) {
    background1.y = 0 - background1.height;
  }
  if (background2.y >= background2.height) {
    background2.y = 0 - background2.height;
  }
}

function drawBackground() {
  ctx.drawImage(
    backgroundImage,
    background1.x,
    background1.y,
    background1.width,
    background1.height,
  );
  ctx.drawImage(
    backgroundImage,
    background2.x,
    background2.y,
    background2.width,
    background2.height,
  );
}

function drawPlayer() {
  ctx.drawImage(playerImage, player.x, player.y, player.width, player.height);
}

function movePlayer() {
  if (keys["ArrowRight"] || keys["d"]) {
    if (player.x < 415) {
      player.x += 5;
    } else {
      player.x = 415;
    }
  }
  if (keys["ArrowLeft"] || keys["a"]) {
    if (player.x > 125) {
      player.x -= 5;
    } else {
      player.x = 125;
    }
  }
  if (keys["ArrowUp"] || keys["w"]) {
    if (player.y > 0) {
      player.y -= 5;
    } else {
      player.y = 0;
    }
  }
  if (keys["ArrowDown"] || keys["s"]) {
    if (player.y < 500) {
      player.y += 5;
    } else {
      player.y = 500;
    }
  }
}

let keys = {
  // "ArrowUp": false,
  // "ArrowDown" : false,
  // "ArrowRight" : false,
  // "ArrowLeft" : false,
};

function keydownHandler(event) {
  event.preventDefault();
  keys[event.key] = true;
}

function keyupHandler(event) {
  event.preventDefault();
  keys[event.key] = false;
}

onkeydown = keydownHandler;
onkeyup = keyupHandler;

let startGame = setInterval(gameLoop, 1000 / 60);

function isTouching(object1, object2) {
  let isTouchingX = false;
  let isTouchingY = false;

  if (
    object1.x + object1.width - 5 > object2.x &&
    object1.x < object2.x + object2.width - 5
  ) {
    isTouchingX = true;
  }
  if (
    object1.y + object1.height - 5 > object2.y &&
    object1.y < object2.y + object2.height - 5
  ) {
    isTouchingY = true;
  }
  if (isTouchingX && isTouchingY) {
    return true;
  } else {
    return false;
  }
}
