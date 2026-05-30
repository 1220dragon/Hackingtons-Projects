let time = new Date();

function showtime() {
  let newtime = new Date();

  document.querySelector(".timecount").innerHTML = (newtime - time) / 1000;
}

window.setInterval(showtime, 1);
