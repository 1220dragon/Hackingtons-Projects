let numArray = [1, 2, 3, 4, 5, 6, 7];
let count = 0;
numArray.forEach(function (number) {
  console.log(number);
  count += number;
});

console.log(count);
