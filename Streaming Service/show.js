class Show {
  constructor(name, year, genre, description, image, embedLink) {
    this.name = name;
    this.year = year;
    this.genre = genre;
    this.description = description;
    this.image = image;
    this.newRelease = year === new Date().getFullYear();
    this.embedLink = embedLink;
  }

  static modalOpen = false;

  addToPage() {
    if (document.getElementById(this.genre)) {
      document.getElementById(this.genre).append(this.buildShow());
      if (this.newRelease) {
        document.getElementById("newReleases").append(this.buildShow());
      }
    } else {
      this.createGenre();
    }
  }

  createGenre() {
    let genre = document.createElement("div");
    genre.classList.add("genre");
    let title = document.createElement("h2");
    title.innerHTML = this.genre;
    genre.id = this.genre;
    document.getElementById("library").append(title);
    document.getElementById("library").append(genre);

    this.addToPage();
  }

  buildShow() {
    let showEl = document.createElement("div");
    showEl.classList.add("show");
    showEl.style.backgroundImage = "url('" + this.image + "')";
    showEl.onclick = this.makeModal.bind(this);
    return showEl;
  }

  makeModal() {
    if (!Show.modalOpen) {
      Show.modalOpen = true;

      let modal = document.createElement("div");
      modal.classList.add("modal");
      let newh1 = document.createElement("h1");
      newh1.innerHTML = this.name;
      console.log(this.name);

      let newDiv = document.createElement("div");

      let newImg = document.createElement("iframe");
      newImg.src = this.embedLink;

      let closeButton = document.createElement("button");
      closeButton.innerHTML = "X";
      closeButton.onclick = this.closeModal;

      modal.append(newh1);
      newDiv.append(newImg);
      console.log(newh1.innerHTML);
      modal.append(newDiv);
      modal.append(closeButton);
      document.body.append(modal);
    }
  }

  closeModal() {
    Show.modalOpen = false;
    document.body.removeChild(document.querySelector(".modal"));
  }
}

export { Show };
