'use strict';

const people = require('./lib/people');
// eslint-disable-next-line no-console
const dashboard = document.getElementsByClassName('dashboard');
const currentTable = dashboard[0].getElementsByTagName('tbody')[0];

const addEntries = (table, peopleObjects) => {
  for (const person of peopleObjects) {
    const normalizedSex = person.sex === 'm'
      ? 'Male' : 'Female';
    const age = person.died - person.born;
    const century = Math.ceil(person.died / 100);

    table.insertAdjacentHTML('beforeend', `
      <tr>
        <td>${person.name}</td>
        <td>${normalizedSex}</td>
        <td>${person.born}</td>
        <td>${person.died}</td>
        <td>${age}</td>
        <td>${century}</td>
      </tr>
    `);
  }
};

addEntries(currentTable, people);
