const numbers = [10, 4, 100, -5, 54, 2];

let sum1 = 0;
for (let i = 0; i < numbers.length; i++) {
  sum1 = sum1 + numbers[i] ** 3;
}
console.log('1. Через цикл for: ', sum1);

let sum2 = 0;
for (const number of numbers) {
  sum2 = sum2 + number ** 3;
}
console.log('2. Через цикл for of = ', sum2);

let sum3 = 0;
numbers.forEach((number) => {
  sum3 = sum3 + number ** 3;
})
console.log('3. Через метод forEach = ', sum3);

const sum4 = numbers.reduce((acc, number, index, array) => {
  return acc + number ** 3;
}, 0);
console.log('4. Через метод reduce = ', sum4);
