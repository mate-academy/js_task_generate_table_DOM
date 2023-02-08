'use strict';

const people = require('./lib/people');
const tableBody = document.querySelector('tbody');

// eslint-disable-next-line no-console
const createPersonRow = (person) => {
  const row = document.createElement('tr');

  row.innerHTML = `
    <td>${person.name}</td>
    <td>${person.sex === 'f' ? 'Female' : 'Male'}</td>
    <td>${person.born}</td>
    <td>${person.died}</td>
    <td>${person.died - person.born}</td>
    <td>${Math.ceil(person.died / 100)}</td>
  `;

  return row;
};

for (const person of people) {
  tableBody.append(createPersonRow(person));
}
