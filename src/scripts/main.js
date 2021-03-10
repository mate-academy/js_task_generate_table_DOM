'use strict';

const people = require('./lib/people');

const table = document.querySelector('.dashboard');

for (const person of people) {
  const row = document.createElement('tr');

  createCell(person, 'name', row);
  createCell(person, 'gender', row);
  createCell(person, 'born', row);
  createCell(person, 'died', row);
  createCell(person, 'age', row);
  createCell(person, 'century', row);
  table.append(row);
}

function createCell(object, key, row) {
  const cell = document.createElement('td');
  let cellText = document.createTextNode(object[key]);

  if (key === 'age') {
    cellText = document.createTextNode(object.died - object.born);
  }

  if (key === 'gender') {
    object.sex === 'f'
      ? cellText = document.createTextNode('Female')
      : cellText = document.createTextNode('Male');
  }

  if (key === 'age') {
    cellText = document.createTextNode(object.died - object.born);
  }

  if (key === 'century') {
    cellText = document.createTextNode(Math.ceil(object.died / 100));
  }

  cell.appendChild(cellText);
  row.appendChild(cell);
};
