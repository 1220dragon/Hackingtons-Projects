import { Show } from "./show.js";

let library = [
  new Show(
    "Dragon Ball Z",
    "Long time ago",
    "Anime",
    "A LOT of fighting",
    "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fstatic1.srcdn.com%2Fwordpress%2Fwp-content%2Fuploads%2F2024%2F05%2Fdragon-ball-z-1989.jpg&f=1&nofb=1&ipt=3192e35e7e6d1b0c8ded4aff8153f209fd315fdd608e672fc81987fbebfd47c9",
    "https://www.youtube.com/embed/Byo4rgMHUM4",
  ),
  new Show(
    "Phineas and ferb",
    2007,
    "Animation",
    "Two kids build cool stuff over the summer",
    "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fm.media-amazon.com%2Fimages%2FM%2FMV5BMTc1NjcxNzg4MF5BMl5BanBnXkFtZTgwOTMzNzgyMDE%40._V1__SX500&f=1&h=500",
    "https://www.youtube.com/embed/th9hxCGH_ms",
  ),

  new Show(
    "Spiderman: Brand New Day",
    2026,
    "Action",
    "Idk the movie hasn't come out yet",
    "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmarvelblog.com%2Fwp-content%2Fuploads%2F2026%2F04%2FBrand-New-Day-Poster.jpg&f=1&nofb=1&ipt=87dc44453293cb030b8490dc559f0f386a84c1fce4244fb2827e1d1378a1bacd",
    "https://www.youtube.com/embed/pB2Y8Yr8j5A",
  ),

  new Show(
    "Avengers: Doomsday",
    2026,
    "Action",
    "Idk the movie hasn't came out yet",
    "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fm.media-amazon.com%2Fimages%2FM%2FMV5BM2E1ZTJiZTgtZGI2Zi00MzAxLThhZjktMmU3M2E3Yzk3NjUxXkEyXkFqcGc%40._V1__SX500&f=1&h=500",
    "https://www.youtube.com/embed/irVNGjRFZGk",
  ),
];

library.forEach(function (show) {
  show.addToPage();
});
