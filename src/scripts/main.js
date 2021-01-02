'use strict';

const people = require('./lib/people');

// eslint-disable-next-line no-console

const table = document.getElementsByTagName('tbody')[0];

for (const person of people) {
  table.innerHTML += `
    <tr>
      <td>${person.name}</td>
      <td>${(person.sex === 'm') ? 'Male' : 'Female'}</td>
      <td>${person.born}</td>
      <td>${person.died}</td>
      <td>${person.died - person.born}</td>
      <td>${Math.ceil(person.born / 100)}</td>
    </tr>
  `;
}
