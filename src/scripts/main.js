'use strict';

import people from './lib/people.json';

const table = document.querySelector('.dashboard');

if (!table) {
  throw new Error('Dashboard is not found');
}

function calculateAge(born, died) {
  return died - born;
}

function calculateCentury(died) {
  return Math.ceil(died / 100);
}

people.forEach((person) => {
  const tableRow = document.createElement('tr');

  const nameCell = document.createElement('td');
  const genderCell = document.createElement('td');
  const bornCell = document.createElement('td');
  const diedCell = document.createElement('td');
  const ageCell = document.createElement('td');
  const centuryCell = document.createElement('td');

  nameCell.textContent = person.name.trim();
  genderCell.textContent = person.sex === 'm' ? 'Male' : 'Female';
  bornCell.textContent = person.born;
  diedCell.textContent = person.died;
  ageCell.textContent = calculateAge(person.born, person.died);
  centuryCell.textContent = calculateCentury(person.died);

  tableRow.append(
    nameCell,
    genderCell,
    bornCell,
    diedCell,
    ageCell,
    centuryCell,
  );

  table.append(tableRow);
});
