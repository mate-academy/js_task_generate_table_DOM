'use strict';

const people = require('./lib/people');

// eslint-disable-next-line no-console
console.log(people); // you can remove it

// write your code here

const table = document.querySelector('.dashboard');

for (const person of people) {
  const tableRow = document.createElement('tr');

  const nameCell = document.createElement('td');

  nameCell.innerHTML = person.name;
  tableRow.append(nameCell);

  const genderCell = document.createElement('td');

  genderCell.innerHTML = person.sex === 'm' ? 'Male' : 'Female';
  tableRow.append(genderCell);

  const bornCell = document.createElement('td');

  bornCell.innerHTML = person.born;
  tableRow.append(bornCell);

  const diedCell = document.createElement('td');

  diedCell.innerHTML = person.died;
  tableRow.append(diedCell);

  const ageCell = document.createElement('td');

  ageCell.innerHTML = person.died - person.born;
  tableRow.append(ageCell);

  const centuryCell = document.createElement('td');

  centuryCell.innerHTML = Math.ceil(person.died / 100);
  tableRow.append(centuryCell);

  table.append(tableRow);
}
