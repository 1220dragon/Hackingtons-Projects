const images = [
  "https://chroma.bigrat.monster/media/bigrat-chroma.gif",
  "https://media1.tenor.com/m/28ZaziH4y1kAAAAd/ugly-plankton-meme-ugly-plankton.gif",
  "https://media1.tenor.com/m/OSoxonYzt0IAAAAd/roblox-roblox-man-face.gif",
  "https://media1.tenor.com/m/tOIJT1iCKW4AAAAd/dumb-stupid-patrick.gif",
  "https://media1.tenor.com/m/YTkOkYGDvf0AAAAd/patrick.gif",
  "https://media1.tenor.com/m/u6gmNC6-UsYAAAAd/yuji-stare-yuji-itadori.gif",
  "https://media1.tenor.com/m/BbAyhQffc5kAAAAC/side-eye-eye-roll.gif",
  "https://media.tenor.com/aSfSRMAHTisAAAAj/chat-pouce.gif",
  "https://preview.redd.it/cant-2-see-the-saitama-ok-meme-gets-replaced-by-the-new-v0-z13tdrqu84291.jpg?width=600&format=pjpg&auto=webp&s=abc74cd2f88284a072dee05d43db1875e90b8d1c",
  "https://scpr.brightspotcdn.com/dims4/default/a0fc2ca/2147483647/strip/true/crop/1060x596+0+55/resize/1200x675!/quality/90/?url=https%3A%2F%2Fa.scpr.org%2F169119_033dbe922c65667f6aaed91931967af1_original.jpg",
  "https://media1.tenor.com/m/I13_hvT0954AAAAd/onion-ring-onion.gif",
  "https://i.imgflip.com/4/64sz4u.jpg",
  "https://i.imgflip.com/4/2kbn1e.jpg",
  "https://i.imgflip.com/4/9sw43.jpg",
  "https://i.imgflip.com/4/44eggm.jpg",
  "https://i.imgflip.com/4/392xtu.jpg",
  "https://i.imgflip.com/4/8p0a.jpg",
  "https://i.imgflip.com/4/2fm6x.jpg",
  "https://i.imgflip.com/4/145qvv.jpg",
  "https://i.imgflip.com/4/ukx.jpg",
  "https://i.imgflip.com/4/9jtb4q.jpg",
  "https://i.imgflip.com/4/e8gx0.jpg",
  "https://i.imgflip.com/4/amuvy.jpg",
  "https://i.imgflip.com/4/5fx7tf.jpg",
  "https://i.imgflip.com/4/2wifvo.jpg",
  "https://i.imgflip.com/4/9f27fe.jpg",
  "https://i.imgflip.com/4/29s5ao.jpg",
  "https://i.imgflip.com/4/ba7o0.jpg",
  "https://i.imgflip.com/4/30q1jt.jpg",
  "https://media.tenor.com/YFrCvyOskn8AAAAM/mario-mario-depressed.gif",
  "https://i.imgflip.com/4/46u82q.jpg",
  "https://i.imgflip.com/4/65w66.jpg",
  "https://i.imgflip.com/4/1nhqil.jpg",
  "https://i.imgflip.com/4/2mpv20.jpg",
  "https://media.tenor.com/5-J44OL7BjYAAAAM/spamton-deltarune-spamton.gif",
  "https://i.imgflip.com/4/64n3no.jpg",
  "https://i.imgflip.com/4/70y5rx.jpg",
  "https://i.imgflip.com/4/a31ocv.jpg",
  "https://media.tenor.com/oQPRGNSaVtsAAAAe/bob-slap-battles.png",
  "https://media.tenor.com/cYuSfUq49YoAAAAe/burger.png",
  "https://i.redd.it/4k2zdq82glw61.jpg",
  "https://loremflickr.com/320/240/dog",
  "https://loremflickr.com/320/240/meme",
  "https://media.cnn.com/api/v1/images/stellar/prod/160107100400-monkey-selfie.jpg?q=x_3,y_0,h_1635,w_2905,c_crop",
  "https://images.thdstatic.com/productImages/2c12c804-7728-4112-9a79-d3dbb0c33548/svn/dasani-water-049000026566-64_600.jpg",
  "https://platform.theverge.com/wp-content/uploads/sites/2/chorus/uploads/chorus_asset/file/22310826/poptart1redrainbowfix_1.gif?quality=90&strip=all&crop=0%2C16.666666666667%2C100%2C66.666666666667&w=750",
  "https://hackingtonsio.s3.amazonaws.com/JeremyN4728673image.jpg",
  "https://hackingtonsio.s3.amazonaws.com/IanP7025416HIVZjCWW0AAQR7A.jpg",
  "https://hackingtonsio.s3.amazonaws.com/JayD519019image.jpg",
];

function replace() {
  const imgs = document.querySelectorAll("img:not([data-ext944])");

  imgs.forEach((img) => {
    img.dataset.ext944 = "true";

    const randomImage = images[Math.floor(Math.random() * images.length)];

    img.src = randomImage;
    img.srcset = "";
  });
}

// Initial run
replace();

// Watch for new images
const observer = new MutationObserver(() => {
  replace();
});

observer.observe(document.body, {
  childList: true,
  subtree: true,
});
