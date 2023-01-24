'use strict';

const people = require('./lib/people');
const table = document.querySelector('.dashboard');

for (const person of people) {
  const tableRow = document.createElement('tr');
  const nameCell = document.createElement('td');
  const genderCell = document.createElement('td');
  const bornCell = document.createElement('td');
  const diedCell = document.createElement('td');
  const ageCell = document.createElement('td');
  const centuryCell = document.createElement('td');

  nameCell.textContent = person.name;

  genderCell.textContent = (person.sex === 'm') ? 'Male' : 'Female';

  bornCell.textContent = person.born;
  diedCell.textContent = person.died;
  ageCell.textContent = person.died - person.born;
  centuryCell.textContent = Math.ceil(person.died / 100);

  tableRow.append(nameCell,
    genderCell,
    bornCell,
    diedCell,
    ageCell,
    centuryCell
  );

  table.append(tableRow);
}
