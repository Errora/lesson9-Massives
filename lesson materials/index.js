const salaries = [400, 500, 600, 2000, 350];

// Добавление элементов
const newSalary = 5000;
//в конец массива
salaries.push(newSalary);
//в начало массива
salaries.unshift(300, 3000);

// Удаление  элементов
// c начала
salaries.shift();
const deletedElement1 = salaries.shift();
// с конца
salaries.pop();
const deletedElement2 = salaries.pop();

// Изменение элементов
salaries[4] = 6000;


// Перебор массивов
const developerNames = ['Maxim', 'Igor', 'Nastya', 'Irina'];
for ( let i = 0; i < developerNames.length; i += 1) {
  console.log('i', i);
}

for (const name of developerNames) {
  console.log('name', name);
}

developerNames.forEach((name, index, array) => {
  console.log('name', name);
  console.log('index', index);
  console.log('array', array);
})

//Работа с методами массивов
// map
const salariesOfDevelopers = [400, 500, 600, 2000, 350];
const updatedSalaries = salariesOfDevelopers.map((salary, index, array) => {
  return salary * 2;
})
console.log(updatedSalaries);

// filter
const filteredSalaries = salariesOfDevelopers.filter((salary, index, array) => {
  return salary > 600;
  // return index % 2 === 0
})
console.log(filteredSalaries);

//find
const searchSalary = salariesOfDevelopers.find((salary, index, array) => {
  return salary === 500;
})
console.log(searchSalary);

//findIndex
const searchIndex = salariesOfDevelopers.findIndex((salary) => {
  return salary === 600;
})
console.log(searchIndex);

//some every
const elementExist = salariesOfDevelopers.some((salary) => {
  return salary === 600;
})
console.log(elementExist);

const allElementsExists = salariesOfDevelopers.every((salary) => {
  return salary > 0;
})
console.log(allElementsExists);

//reduce
const sum = salariesOfDevelopers.reduce((acc, salary, index, array) => {
  return acc + salary;
}, 0);
console.log(sum);