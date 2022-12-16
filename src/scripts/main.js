'use strict';

const people = require('./lib/people');

// eslint-disable-next-line no-console
console.log(people); // you can remove it

const table = document.querySelector('.dashboard');

const rows = people.map(function(person) {
  const row = document.createElement('tr');

  const nameCell = document.createElement('td');

  nameCell.textContent = person.name;

  const genderCell = document.createElement('td');

  genderCell.textContent = person.sex === 'm' ? 'Male' : 'Female';

  const bornCell = document.createElement('td');

  bornCell.textContent = person.born;

  const diedCell = document.createElement('td');

  diedCell.textContent = person.died;

  const ageCell = document.createElement('td');

  ageCell.textContent = person.died - person.born;

  const centuryCell = document.createElement('td');

  centuryCell.textContent = Math.ceil(person.died / 100);

  row.appendChild(nameCell);
  row.appendChild(genderCell);
  row.appendChild(bornCell);
  row.appendChild(diedCell);
  row.appendChild(ageCell);
  row.appendChild(centuryCell);

  return row;
});

rows.forEach(function(row) {
  table.appendChild(row);
});
