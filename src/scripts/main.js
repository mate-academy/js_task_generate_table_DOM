'use strict';

const people = require('./lib/people');

// eslint-disable-next-line no-console
console.log(people); // you can remove it

// write your code here

const table = document.querySelector('.dashboard');

people.map(person => {
  const newTable = document.createElement('tr');

  table.append(newTable);

  const nameColumn = document.createElement('th');

  nameColumn.textContent = person.name;
  newTable.append(nameColumn);

  const genderColumn = document.createElement('th');

  genderColumn.textContent = person.sex;
  newTable.append(genderColumn);

  const bornColumn = document.createElement('th');

  bornColumn.textContent = person.born;
  newTable.append(bornColumn);

  const diedColumn = document.createElement('th');

  diedColumn.textContent = person.died;
  newTable.append(diedColumn);

  const ageColumn = document.createElement('th');

  ageColumn.textContent = person.died - person.born;
  newTable.append(ageColumn);

  const centuryColumn = document.createElement('th');

  centuryColumn.textContent = Math.ceil(person.died / 100);
  newTable.append(centuryColumn);
});
