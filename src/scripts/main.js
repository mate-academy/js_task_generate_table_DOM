'use strict';

const people = require('./lib/people');
const dashboard = document.querySelector('.dashboard');

people.forEach(person => {
  const row = document.createElement('tr');
  const nameCell = document.createElement('td');
  const genderCell = document.createElement('td');
  const bornCell = document.createElement('td');
  const diedCell = document.createElement('td');
  const ageCell = document.createElement('td');
  const centuryCell = document.createElement('td');

  nameCell.textContent = person.name;
  row.append(nameCell);

  genderCell.textContent = person.sex === 'm'
    ? 'Male'
    : 'Female';
  row.append(genderCell);

  bornCell.textContent = person.born;
  row.append(bornCell);

  diedCell.textContent = person.died;
  row.append(diedCell);

  ageCell.textContent = person.died - person.born;
  row.append(ageCell);

  centuryCell.textContent = Math.ceil(person.died / 100);
  row.append(centuryCell);

  dashboard.append(row);
});
