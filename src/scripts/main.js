'use strict';

const people = require('./lib/people');

const tableLastRow = document.querySelector('tbody').lastElementChild;
const reversedPeople = [...people].reverse();

for (const person of reversedPeople) {
  tableLastRow.insertAdjacentHTML('afterend', `
  <tr>
    <td>${person.name}</td>
    <td>${person.sex === 'm' ? 'Male' : 'Female'}</td>
    <td>${person.born}</td>
    <td>${person.died}</td>
    <td>${person.died - person.born}</td>
    <td>${Math.ceil(person.died / 100)}</td>
  </tr>
  `);
}
