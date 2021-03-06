'use strict';

const people = require('./lib/people');

// eslint-disable-next-line no-console
console.log(people); // you can remove it

const table = document.querySelector('.dashboard');

for (const person of people) {
  const row = document.createElement('tr');

  for (const key in person) {
    switch (key) {
      case 'name':
        createCell(person, 'name', row);
        break;
      case 'sex':
        createCell(person, 'sex', row);
        break;
      case 'born':
        createCell(person, 'born', row);
        break;
      case 'died':
        createCell(person, 'died', row);
        break;
    }
  }
  createCellAge(person, row);
  createCellCentury(person, row);
  table.append(row);
}

function createCell(object, key, row) {
  const cell = document.createElement('td');
  const cellText = document.createTextNode(object[key]);

  cell.appendChild(cellText);
  row.appendChild(cell);
}

function createCellCentury(object, row) {
  const cell = document.createElement('td');
  const cellText = document.createTextNode(Math.ceil(object.died / 100));

  cell.appendChild(cellText);
  row.appendChild(cell);
}

function createCellAge(object, row) {
  const cell = document.createElement('td');
  const cellText = document.createTextNode(object.died - object.born);

  cell.appendChild(cellText);
  row.appendChild(cell);
}
