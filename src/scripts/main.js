'use strict';

const people = require('./lib/people');

// eslint-disable-next-line no-console
console.log(people); // you can remove it

function createCell(item, itemRow) {
  const cell = document.createElement('th');

  cell.textContent = item;

  itemRow.append(cell);
}

function createTable(person) {
  const row = document.createElement('tr');
  const age = person.died - person.born;
  const century = Math.ceil(person.died / 100);
  const table = document.querySelector('.dashboard');

  createCell(person.name, row);
  createCell(person.sex, row);
  createCell(person.born, row);
  createCell(person.died, row);
  createCell(age, row);
  createCell(century, row);

  table.append(row);
}

people.map(createTable);
