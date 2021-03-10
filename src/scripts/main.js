'use strict';

const people = require('./lib/people');

const table = document.querySelector('.dashboard');

for (const person of people) {
  const row = document.createElement('tr');

  createCell(person, 'name', row);
  createCellGender(person, row);
  createCell(person, 'born', row);
  createCell(person, 'died', row);
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

function createCellGender(object, row) {
  const cell = document.createElement('td');
  let cellText = '';

  if (object.sex === 'f') {
    cellText = document.createTextNode('Female');
  } else {
    cellText = document.createTextNode('Male');
  }
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
