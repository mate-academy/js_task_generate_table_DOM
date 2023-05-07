'use strict';

const people = require('./lib/people');

people.forEach(person => {
  const row = document.createElement('tr');

  const nameCell = document.createElement('td');

  nameCell.textContent = person.name;
  row.appendChild(nameCell);

  const genderCell = document.createElement('td');

  if (person.sex === 'm') {
    genderCell.textContent = 'Male';
  } else {
    genderCell.textContent = 'Female';
  }
  row.appendChild(genderCell);

  const bornCell = document.createElement('td');

  bornCell.textContent = person.born;
  row.appendChild(bornCell);

  const diedCell = document.createElement('td');

  diedCell.textContent = person.died;
  row.appendChild(diedCell);

  const ageCell = document.createElement('td');

  ageCell.textContent = person.died - person.born;
  row.appendChild(ageCell);

  const centuryCell = document.createElement('td');

  centuryCell.textContent = Math.ceil(person.died / 100);
  row.appendChild(centuryCell);

  const dashboardTable = document.querySelector('.dashboard');

  dashboardTable.appendChild(row);
});
