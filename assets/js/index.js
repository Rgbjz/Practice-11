//Exercise #1
let maxAmountOfNumbers = 10;
for (let i = 1; i <= maxAmountOfNumbers; i++) {
  console.log(`Квадрат числа ${i}:`, i * i);
}
//Exercise #2
const TRUE_PASSWORD = "qwerty";
let password = "";
do {
  password = prompt("Введіть пароль:");
} while (TRUE_PASSWORD !== password);
console.log("Ви ввели коректний пароль.");
//Exercise #3
const TO_NUMBER = 100;
let summa = 0;
let i = 1;
//for (i; i <= toNumber; i++) {
//  summa += i;
//}
summa = (TO_NUMBER * (i + TO_NUMBER)) / 2;
console.log("Сума чисел від 1 до 100: ", summa);
//Exercise #4
const FROM_VALUE = 10;
const TO_VALUE = 50;
for (let i = FROM_VALUE; i <= TO_VALUE; i++) {
  if (i % 5 === 0) {
    console.log(i);
  }
  //i % 5 === 0 ? console.log(i) : null;
}
//Exercise #5
const TRIANGLE_SIZE = Number(prompt("Введіть розмір трикутника:"));
let triangle = "";
for (let i = 1; i <= TRIANGLE_SIZE; i++) {
  triangle += "*";
  console.log(triangle);
}
//Exercise #6
const SIZE_OF_SQUARE = 16;
for (let i = 1; i <= SIZE_OF_SQUARE; i++) {
  let line = "";
  for (let j = 1; j <= SIZE_OF_SQUARE; j++) {
    if (
      i === 1 ||
      i === SIZE_OF_SQUARE ||
      j === 1 ||
      j === SIZE_OF_SQUARE ||
      i === j
    ) {
      line += "*";
    } else {
      line += " ";
    }
  }
  console.log(line);
}
//Exercise #7
const SQUARE_SIZE = 16;
for (let i = 1; i <= SQUARE_SIZE; i++) {
  let line = "";
  for (let j = SQUARE_SIZE; j >= 1; j--) {
    if (
      i === 1 ||
      i === SQUARE_SIZE ||
      j === 1 ||
      j === SQUARE_SIZE ||
      i === j
    ) {
      line += "*";
    } else {
      line += " ";
    }
  }
  console.log(line);
}
