let array = [];
function getSumOfSequence(number) {
  for (let i = 0; i <= number - 1; i++) {
    array.push(i + 1);
  }
  return (array[0] + array[number - 1]);
}

console.log(getSumOfSequence(5));
