'use strict';

const people = require('./lib/people');

const personsTable = people.map(person => {
  return `
    <tr>
      <td>${person.name}</td>
      <td>${person.sex === 'm' ? 'male' : 'female'}</td>
      <td>${person.born}</td>
      <td>${person.died}</td>
      <td>${person.died - person.born}</td>
      <td>${Math.floor(person.died / 100)}</td>
    </tr>`;
});

const table = document.querySelector('tbody');

personsTable.forEach(person => table.insertAdjacentHTML('beforeend', person));
