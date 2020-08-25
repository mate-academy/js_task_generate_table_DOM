'use strict';

const people = require('./lib/people');
const tableRow = document.querySelector('tr');

people.forEach(person => {
  tableRow.insertAdjacentHTML('afterend', `
  <tr>
    <td>${person.name}</td>
    <td>${(person.sex === 'm') ? 'Male' : 'Female'}</td>
    <td>${person.born}</td>
    <td>${person.died}</td>
    <td>${person.died - person.born}</td>
    <td>${Math.ceil(person.died / 100)}</td>
  </tr>
  `);
});
