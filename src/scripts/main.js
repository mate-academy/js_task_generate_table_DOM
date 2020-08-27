'use strict';

const people = require('./lib/people');
const table = document.querySelector('.dashboard');

for (const person of people) {
  const tableRow = document.createElement('tr');
  const gender = (person.sex === 'f') ? 'Female' : 'Male';

  tableRow.insertAdjacentHTML('afterbegin', `
    <td>${person.name}</td>
    <td>${gender}</td>
    <td>${person.born}</td>
    <td>${person.died}</td>
    <td>${person.died - person.born}</td>
    <td>${Math.ceil(person.died / 100)}</td>
  `);

  table.append(tableRow);
}
