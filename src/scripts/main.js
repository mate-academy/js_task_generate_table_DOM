'use strict';

const people = require('./lib/people');

// eslint-disable-next-line no-console

const table = document.querySelector('table');
// write your code here

for (const person of people) {
  const tableRow = document.createElement('tr');

  table.append(tableRow);

  const cellName = document.createElement('th');

  cellName.innerText = person.name;
  tableRow.append(cellName);

  const cellSex = document.createElement('th');

  if (person.sex === 'm') {
    cellSex.innerText = 'Male';
  } else {
    cellSex.innerText = 'Female';
  }

  tableRow.append(cellSex);

  const cellBorn = document.createElement('th');

  cellBorn.innerText = person.born;
  tableRow.append(cellBorn);

  const cellDied = document.createElement('th');

  cellDied.innerText = person.died;
  tableRow.append(cellDied);

  const cellAge = document.createElement('th');

  cellAge.innerText = person.died - person.born;
  tableRow.append(cellAge);

  const cellCentury = document.createElement('th');

  const century = Math.ceil(person.died / 100);

  cellCentury.innerText = century;
  tableRow.append(cellCentury);
}
