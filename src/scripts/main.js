'use strict';

const people = require('./lib/people');
const tableBody = document.querySelector('.dashboard');

people.forEach(person => {
  const newRow = document.createElement('tr');

  for (const key in person) {
    const newCell = document.createElement('td');

    newCell.textContent = person[key];

    if (key === 'name'
    || key === 'sex'
    || key === 'born'
    || key === 'died') {
      newRow.appendChild(newCell);
    }
  }

  const age = person.died - person.born;
  const century = Math.ceil(person.died / 100);

  const ageCell = document.createElement('td');

  ageCell.textContent = age;
  newRow.appendChild(ageCell);

  const centuryCell = document.createElement('td');

  centuryCell.textContent = century;
  newRow.appendChild(centuryCell);

  tableBody.appendChild(newRow);
});
