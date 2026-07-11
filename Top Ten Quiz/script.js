let gameList = [
  "Minecraft",
  "Grand Theft Auto V",
  "Tetris",
  "Wii Sports",
  "Mario Kart 8 Deluxe",
  "Red Dead Redemption 2",
  "Skyrim",
  "Terraria",
  "Super Mario Bros",
  "Human Fall Flat",
];

let correctGames = [];

gameList.forEach(function (game) {
  let container = document.querySelector(".gameContainer");
  let newEl = document.createElement("p");
  newEl.id = game.replaceAll(" ", "");
  newEl.innerHTML = game;
  newEl.style.visibility = "hidden";
  container.append(newEl);
});

function submitAnswer(that) {
  let answer = that.value;
  that.value = "";

  if (gameList.includes(answer) && !correctGames.includes(answer)) {
    showAnswer(answer);
    correctGames.push(answer);

    if (correctGames.length === gameList.length) {
      document.getElementById("directions").innerHTML = "You win!";
    }
  }
}

function showAnswer(answer) {
  let gameParagraph = document.querySelector("#" + answer.replaceAll(" ", ""));
  gameParagraph.style.visibility = "visible";
}
