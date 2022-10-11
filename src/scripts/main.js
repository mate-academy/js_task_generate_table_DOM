'use strict';

const people = require('./lib/people');

// eslint-disable-next-line no-console
console.log(people);

const table = document.querySelector('tbody');

for (const person of people) {
  const row = document.createElement('tr');

  const nameColumn = document.createElement('td');

  nameColumn.textContent = person.name;
  row.append(nameColumn);

  const genderColumn = document.createElement('td');

  genderColumn.textContent = (person.sex === 'm') ? 'Male' : 'Female';
  row.append(genderColumn);

  const bornColumn = document.createElement('td');

  bornColumn.textContent = person.born;
  row.append(bornColumn);

  const diedColumn = document.createElement('td');

  diedColumn.textContent = person.died;
  row.append(diedColumn);

  const ageColumn = document.createElement('td');

  ageColumn.textContent = (person.died - person.born);
  row.append(ageColumn);

  const centuryColumn = document.createElement('td');

  centuryColumn.textContent = (Math.ceil(person.died / 100));
  row.append(centuryColumn);

  table.append(row);
};