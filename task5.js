let clientsEstimations = [];

function askClientToGiveEstimation() {
  const estimation = Number(prompt('Как вы оцениваете нашу кофейню от 1 до 10?').trim());
  if (estimation >=1 && estimation <= 10) {
    clientsEstimations.push(estimation);
  }
}

askClientToGiveEstimation();
askClientToGiveEstimation();
askClientToGiveEstimation();
askClientToGiveEstimation();
askClientToGiveEstimation();

const goodEstimations = clientsEstimations.filter((estimation) => {
  return estimation > 5;
})
const notGoodEstimations = clientsEstimations.filter((estimation) => {
  return estimation <= 5;
})

alert(`Всего положительных оценок: ${goodEstimations.length}; Всего отрицательных оценок: ${notGoodEstimations.length}`);