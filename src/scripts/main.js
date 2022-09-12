'use strict';

const people = require('./lib/people');
const myTable = document.querySelector('.dashboard');

for (const person of people) {
  const row = document.createElement('tr');
  const cellName = document.createElement('td');

  cellName.textContent = `${person.name}`;

  const cellGender = document.createElement('td');

  cellGender.textContent = `${person.sex}`;

  const cellBorn = document.createElement('td');

  cellBorn.textContent = `${person.born}`;

  const cellDied = document.createElement('td');

  cellDied.textContent = `${person.died}`;

  const cellAge = document.createElement('td');

  cellAge.textContent = `${person.died - person.born}`;

  const cellCentury = document.createElement('td');

  cellCentury.textContent = `${Math.ceil(person.died / 100)}`;

  row.append(cellName);
  row.append(cellGender);
  row.append(cellBorn);
  row.append(cellDied);
  row.append(cellAge);
  row.append(cellCentury);
  myTable.append(row);
}
