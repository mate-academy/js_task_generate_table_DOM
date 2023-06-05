'use strict';

const people = require('./lib/people');
const tableContainer = document.querySelector('.dashboard');

for (const person of people) {
  const century = Math.ceil(person.died / 100);
  const age = person.died - person.born;

  tableContainer.insertAdjacentHTML('beforeend', `
  <tr>
    <td>${person.name}</td>
    <td>${person.sex}</td>
    <td>${person.born}</td>
    <td>${person.died}</td>
    <td>${age}</td>
    <td>${century}</td>
  </tr>
  `);
}
