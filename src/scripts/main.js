'use strict';

const people = require('./lib/people');

// eslint-disable-next-line no-console
console.log(people); // you can remove it

const table = document.querySelector('.dashboard');

for (const person of people) {
  const tableRow = document.createElement('tr');

  table.append(tableRow);

  const cellOne = document.createElement('th');
  const cellTwo = document.createElement('th');
  const cellThree = document.createElement('th');
  const cellFour = document.createElement('th');
  const cellFive = document.createElement('th');
  const cellSix = document.createElement('th');

  cellOne.textContent = person.name;
  cellTwo.textContent = person.sex;
  cellThree.textContent = person.born;
  cellFour.textContent = person.died;
  cellFive.textContent = person.died - person.born;
  cellSix.textContent = Math.ceil(person.died / 100);

  tableRow.append(cellOne);
  tableRow.append(cellTwo);
  tableRow.append(cellThree);
  tableRow.append(cellFour);
  tableRow.append(cellFive);
  tableRow.append(cellSix);
};
