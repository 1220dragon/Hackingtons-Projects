let startDate;
let background = "uh";
let timer;
let rand;
let target = document.querySelector("#target");
let stopped = "false";

let link = document.querySelector("link[rel*='icon']");
document.title = "Spamton Fry";
link.href = "Dance.gif";
window.setTimeout(hideLoading, 5000);

function hideLoading() {
  document.querySelector("#overlay").style.opacity = "0";
  document.title = "The Best And Coolest Reaction Timer";
  link.href = "bigrat.jpg";
  document.querySelector("#overlay").style.zIndex = "-999";
}

function trueStart() {
  document.querySelector("#result").innerHTML = "";
  clearTimeout(timer);
  stopped = "false";
  startTest(2000, 0);
}
function startTest(maxsecs, minsecs) {
  let randtime = Math.random() * maxsecs + minsecs;
  target.style.backgroundImage =
    "url('https://htmlcolorcodes.com/assets/images/colors/dark-red-color-solid-background-1920x1080.png')";
  background = "red";
  timer = setTimeout(changeColor, randtime);
}

function changeColor() {
  if (stopped === "true") {
    return;
  }
  let target = document.querySelector("#target");
  let rand = Math.ceil(Math.random() * 5);
  console.log("DEBUG");
  if (rand === 1) {
    target.style.backgroundImage =
      "url('https://bigrat.monster/media/bigrat.jpg')";
    background = "bigrat";
    startDate = new Date();
  } else if (rand === 2) {
    target.style.backgroundImage =
      "url('https://upload.wikimedia.org/wikipedia/en/7/73/Trollface.png?utm_source=en.wikipedia.org&utm_campaign=index&utm_content=original')";
    background = "troll";
    setTimeout(() => startTest(2000, 0), Math.random() * 2000);
  } else if (rand === 3) {
    target.style.backgroundImage =
      "url('https://images.themodernproper.com/production/posts/2016/ClassicCheeseBurger_9.jpg?w=1200&h=1200&q=60&fm=jpg&fit=crop&dm=1749310239&s=463b18fc3bb51dc5d96e866c848527c4')";
    background = "burger";
    setTimeout(() => startTest(2000, 0), Math.random() * 2000);
  } else if (rand === 4) {
    target.style.backgroundImage = "url('https://i.redd.it/z6971venlho91.gif')";
    background = "spamton";
    setTimeout(() => startTest(2000, 1000), Math.random() * 500);
  } else if (rand === 5) {
    target.style.backgroundImage =
      "url('https://img.freepik.com/premium-vector/cannon-balls-cute-cartoon-black-bomb_634248-10.jpg')";
    background = "bomb";
    setTimeout(() => startTest(1, 0), Math.random() * 100);
  }
}

function checkclick() {
  console.log("click!");
  let target = document.querySelector("#target");
  if (background === "bigrat") {
    stoptime();
  } else if (background === "troll") {
    document.querySelector("#result").innerHTML =
      "You know that you're not supposed to click the troll face, right?";
    stopped = "true";
  } else if (background === "burger") {
    document.querySelector("#result").innerHTML =
      "I know you are hungry but this isn't the time...";
    stopped = "true";
  } else if (background === "spamton") {
    document.querySelector("#result").innerHTML = "TRANSMITTING KROMER...";
    stopped = "true";
    const link = document.createElement("a");
    link.href = "fileoftxt.txt";
    link.download = "fileoftxt.txt";

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    URL.revokeObjectURL(url);
  } else if (background === "bomb") {
    document.querySelector("#result").innerHTML =
      "You clicked on the bomb, who does that?";
    stopped = "true";
    const link = document.createElement("a");
    link.href = "Bombstuff.zip";
    link.download = "Bombstuff.zip";

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    URL.revokeObjectURL(url);
  }
}

function stoptime() {
  console.log("stopped");
  let finalTime = new Date() - startDate;
  finalTime /= 1000;
  document.querySelector("#result").innerHTML = finalTime + " seconds";
}
