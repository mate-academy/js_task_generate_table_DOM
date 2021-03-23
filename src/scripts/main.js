'use strict';

const people = require('./lib/people');

// eslint-disable-next-line no-console

const table = document.querySelector('.dashboard tbody');

if (table) {
  for (const person of people) {
    const gender = (person.sex === 'm') ? 'Male' : 'Female';
    const age = person.died - person.born;
    const century = Math.ceil(person.died / 100);

    const tableRow = `
    <tr>
      <td>${person.name}</td>
      <td>${gender}</td>
      <td>${person.born}</td>
      <td>${person.died}</td>
      <td>${age}</td>
      <td>${century}</td>
    </tr>
    `;

    table.insertAdjacentHTML('beforeend', tableRow);
  }
}
