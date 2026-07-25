class Animal {
  constructor(name, cuteFactor, danger, meatEater) {
    this.name = name;
    this.cuteness = cuteFactor;
    this.danger = danger;
    this.meatEater = meatEater;
  }

  static classType = "Animal";

  speak() {
    console.log(
      "Hello, I am a " + this.name + ", and my cute factor is " + this.cuteness,
    );
  }

  hugRatio() {
    return this.cuteness / this.danger;
  }

  info() {
    console.log(
      this.name +
        " is an " +
        Animal.classType +
        " with a hug ratio of " +
        this.hugRatio(),
    );
  }
}

let dog = new Animal("Dog", 10, 4, true);
dog.speak();
console.log(dog.meatEater);

let monkey = new Animal("Monkey", 5, 7, true);
monkey.speak();

let cat = new Animal("Cat", 10, 2, true);

let human = new Animal("Human", 0, 10, true);

let gorilla = new Animal("Gorilla", 0, 8, true);

dog.info();
cat.info();
human.info();
gorilla.info();
monkey.info();
