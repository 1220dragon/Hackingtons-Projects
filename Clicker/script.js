let currentScoreText = document.querySelector("#CurrentScoreCount");
let highScoreText = document.querySelector("#highScoreText");
let highScore = localStorage.getItem("High Score");
let upgrade1Checker = localStorage.getItem("upgrade1");
let upgrade2Checker = localStorage.getItem("upgrade2");
let upgrade3Checker = localStorage.getItem("curClicks");
let clicks = 0;
let clickPower = 1;
let upgrade1cost = 5;
let autoClickPower = 0;
let upgrade2Cost = 15;

if (highScore) {
  highScoreText.innerHTML = "High score: " + highScore;
}

if (upgrade1Checker) {
  clickPower = parseInt(upgrade1Checker);
  upgrade1cost = parseInt(localStorage.getItem("upgrade1Cost"));
  document.querySelector("#upgrade1").innerHTML =
    "Click Power Upgrade, Costs: " + upgrade1cost;
}

if (upgrade2Checker) {
  autoClickPower = parseInt(upgrade2Checker);
  upgrade2Cost = parseInt(localStorage.getItem("upgrade2cost"));
  document.querySelector("#upgrade2").innerHTML =
    "AutoClick Upgrade, Costs: " + upgrade2Cost;
  if (autoClickPower >= 1) {
    autoClickSetup();
  }
}

if (upgrade3Checker) {
  clicks = parseInt(upgrade3Checker);
  updateClicks();
}

function increaseClicks() {
  clicks += clickPower;
  updateClicks();
}

function save() {
  if (clicks > highScore) {
    localStorage.setItem("High Score", clicks);
    highScoreText.innerHTML = "High Score:" + clicks;
    highScore = clicks;
  }
  localStorage.setItem("upgrade1", clickPower);
  localStorage.setItem("upgrade1Cost", upgrade1cost);
  localStorage.setItem("upgrade2", autoClickPower);
  localStorage.setItem("upgrade2cost", upgrade2Cost);
  localStorage.setItem("curClicks", clicks);
}

function upgradeClickPower() {
  if (clicks >= upgrade1cost) {
    clicks -= upgrade1cost;
    clickPower++;
    updateClicks();
    upgrade1cost = Math.floor((upgrade1cost *= 2.5));
    document.querySelector("#upgrade1").innerHTML =
      "Click Power Upgrade, Costs: " + upgrade1cost;
  }
}

function upgradeAutoClick() {
  if (clicks >= upgrade2Cost) {
    clicks -= upgrade2Cost;
    autoClickPower++;
    updateClicks();
    upgrade2Cost = Math.floor((upgrade2Cost *= 2.5));
    document.querySelector("#upgrade2").innerHTML =
      "AutoClick Upgrade, Costs: " + upgrade2Cost;
    if (autoClickPower === 1) {
      autoClickSetup();
    }
  }
}

function updateClicks() {
  currentScoreText.innerHTML = clicks;
}

//setup the setInterval for the autoClick
function autoClickSetup() {
  setTimeout(autoClick, 1000);
}

// perform the autoClick
function autoClick() {
  clicks++;
  updateClicks();
  setTimeout(autoClick, 1000 / autoClickPower);
}

function reset() {
  localStorage.removeItem("curClicks");
  localStorage.removeItem("upgrade1");
  localStorage.removeItem("upgrade1cost");
  localStorage.removeItem("uprgade2cost");
  localStorage.removeItem("upgrade2");
  location.reload();
}

function trueReset() {
  localStorage.clear();
  location.reload();
}
