'use strict';

const people = require('./lib/people');

// eslint-disable-next-line no-console
console.log(people); // you can remove it

people.forEach(person => {
  const age = person.died - person.born;
  const century = Math.ceil(person.died / 100);

  const newRow = document.createElement('tr');

  const nameCell = document.createElement('td');

  nameCell.textContent = person.name;

  const genderCell = document.createElement('td');

  genderCell.textContent = (() => {
    if (person.sex === 'm') {
      return 'Male';
    }

    return 'Female';
  })();

  const bornCell = document.createElement('td');

  bornCell.textContent = person.born;

  const diedCell = document.createElement('td');

  diedCell.textContent = person.died;

  const ageCell = document.createElement('td');

  ageCell.textContent = age;

  const centuryCell = document.createElement('td');

  centuryCell.textContent = century;

  newRow.appendChild(nameCell);
  newRow.appendChild(genderCell);
  newRow.appendChild(bornCell);
  newRow.appendChild(diedCell);
  newRow.appendChild(ageCell);
  newRow.appendChild(centuryCell);

  const dashboardTable = document.querySelector('.dashboard');

  dashboardTable.appendChild(newRow);
});
