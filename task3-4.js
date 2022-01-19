const coffees = ['Latte', 'Cappuccino', 'Americano'];

const coffeeNameFromUser = (prompt('Поиск кофе по названию:').trim()).toLowerCase();

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
const coffeeName = capitalizeFirstLetter(coffeeNameFromUser);

// // task 3:

const coffee = coffees.find((name, index, array) => {
  return name == coffeeName;
})
if (coffee) {
  const number = coffees.findIndex((name) => {
    return name == coffee;
  })
  alert(`Держите ваш любимый кофе ${coffee}. Он ${number+1}-й по популярности в нашей кофейне.`);
} else {
  alert('К сожалению, такого вида кофе нет в наличии');
}

// task 4:

const prices = [1.5, 1, 2];
const updatedPrices = prices.map((price) => {
  return price + 0.5;
})

coffees.forEach((name, index) => {
  alert(`Кофе ${name} сейчас стоит ${updatedPrices[index]} евро`);
})