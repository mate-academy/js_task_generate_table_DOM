'use strict';

const people = require('./lib/people');

const table = document.querySelector('.dashboard');

function addCell(value, parentRow) {
  const newCell = document.createElement('td');

  newCell.textContent = value;

  parentRow.append(newCell);
}

for (const person of people) {
  const row = document.createElement('tr');

  addCell(person.name, row);
  addCell(person.sex === 'f' ? 'Female' : 'Male', row);
  addCell(person.born, row);
  addCell(person.died, row);
  addCell(person.died - person.born, row);
  addCell(Math.ceil(person.died / 100), row);

  table.appendChild(row);
}
