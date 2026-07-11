let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");

//import images
let cat = new Image();
cat.src = "catright.png";

let water = new Image();
water.src = "water.png";

let fishImg = new Image();
fishImg.src = "fish.png";
//global variables

let score = 0;

let keys = {
  ArrowRight: false,
  ArrowLeft: false,
  ArrowUp: false,
  ArrowDown: false,
};

let paused = true;
let youWin = false;

let fish = {
  x: 100,
  y: 100,
  width: 100,
  height: 100,
};

let player = {
  x: 0,
  y: 100,
  width: 50,
  height: 50,
};

let enemy = {
  x: 100,
  y: 0,
  width: 50,
  height: 100,
  color: "blue",
};

let enemy2 = {
  ...enemy,
  y: 200,
  color: "blue",
};

let enemy3 = {
  ...enemy,
  x: 200,
  color: "blue",
};

let startGame = setInterval(gameLoop, 1000 / 60);

function gameLoop() {
  //movement
  if (youWin) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "white";
    ctx.font = "50px Sans";
    ctx.fillText("You win!", 100, 300);
  } else if (paused) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "white";
    ctx.font = "50px Sans";
    ctx.fillText("Press S to start", 100, 300);
  } else {
    if (keys.ArrowRight && player.x < canvas.width - player.width) {
      player.x += 10;
      cat.src = "catright.png";
    }
    if (keys.ArrowLeft && player.x > 0) {
      player.x -= 10;
      cat.src = "catleft.png";
    }
    if (keys.ArrowUp && player.y > 0) {
      player.y -= 10;
    }
    if (keys.ArrowDown && player.y < canvas.height - player.height) {
      player.y += 10;
    }

    //check for collisions
    if (isTouching(player, fish)) {
      score++;
      fish.x = Math.random() * canvas.width;
      fish.y = Math.random() * canvas.height;
      if (score >= 15) {
        youWin = true;
      }
    }
    if (isTouching(player, enemy)) {
      score = 0;
    }
    if (isTouching(player, enemy2)) {
      score = 0;
    }
    if (isTouching(player, enemy3)) {
      score = 0;
    }

    //enemy movement
    enemy.x += 6;
    if (enemy.x > canvas.width) {
      enemy.x = -200;
      enemy.y = Math.random() * canvas.height;
    }
    enemy2.x -= 7;
    if (enemy2.x < 0) {
      enemy2.x = canvas.width + 200;
      enemy2.y = Math.random() * canvas.height;
    }
    enemy3.y -= 9;
    if (enemy3.y < 0) {
      enemy3.y = canvas.height + 200;
      enemy3.x = Math.random() * canvas.width;
    }

    //clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    //draw acorn
    ctx.drawImage(fishImg, fish.x, fish.y, fish.width, fish.height);
    //draw player
    ctx.drawImage(cat, player.x, player.y, player.width, player.height);
    //draw enemy
    ctx.drawImage(water, enemy.x, enemy.y, enemy.width, enemy.height);
    ctx.drawImage(water, enemy2.x, enemy2.y, enemy2.width, enemy2.height);
    ctx.drawImage(water, enemy3.x, enemy3.y, enemy3.width, enemy3.height);

    //draw score
    ctx.fillStyle = "white";
    ctx.font = "30px Arial";
    ctx.fillText(score, 20, 50);
  }

  function keydownHandler(event) {
    event.preventDefault();
    keys[event.key] = true;
    if (event.key === "s" || event.key === "S" || event.key === "p") {
      paused = !paused;
    }
  }

  function keyupHandler(event) {
    keys[event.key] = false;
  }

  onkeydown = keydownHandler;
  onkeyup = keyupHandler;

  // Collision detection for two objects

  function isTouching(object1, object2) {
    let isTouchingX = false;
    let isTouchingY = false;

    if (
      object1.x + object1.width > object2.x &&
      object1.x < object2.x + object2.width
    ) {
      isTouchingX = true;
    }
    if (
      object1.y + object1.height > object2.y &&
      object1.y < object2.y + object2.height
    ) {
      isTouchingY = true;
    }
    if (isTouchingX && isTouchingY) {
      return true;
    } else {
      return false;
    }
  }
}
