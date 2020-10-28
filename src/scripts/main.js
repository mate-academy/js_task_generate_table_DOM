'use strict';

const people = require('./lib/people');

const table = document.querySelector('.dashboard');

function addCell(value, parentRow) {
  const newCell = document.createElement('td');

  newCell.textContent = value;

  parentRow.append(newCell);
}

for (const human of people) {
  const row = document.createElement('tr');

  addCell(human.name, row);
  addCell(human.sex === 'f' ? 'Female' : 'Male', row);
  addCell(human.born, row);
  addCell(human.died, row);
  addCell(human.died - human.born, row);
  addCell(Math.ceil(human.died / 100), row);

  table.appendChild(row);
}
