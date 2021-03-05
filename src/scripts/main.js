'use strict';

const people = require('./lib/people');
const tableBody = document.querySelector('tbody');

function addRows(table, data) {
  for (const person of data) {
    const { sex, born, died } = person;

    table.insertAdjacentHTML('beforeEnd', `
      <tr>
        <td>${person.name}</td>
        <td>${sex === 'f' ? 'Female' : 'Male'}</td>
        <td>${born}</td>
        <td>${died}</td>
        <td>${died - born}</td>
        <td>${Math.ceil(died / 100)}</td>
      </tr>
    `);
  }
}

addRows(tableBody, people);
