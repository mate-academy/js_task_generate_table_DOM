'use strict';

const people = require('./lib/people');

// eslint-disable-next-line no-console

const allTables = document.querySelector('.dashboard');

for (const person of people) {
  if (person.sex === 'm') {
    person.sex = 'Male';
  } else {
    person.sex = 'Female';
  }

  allTables.insertAdjacentHTML('beforeend', `
  <tr>
  <td>${person.name}</td>
  <td>${person.sex}</td>
  <td>${person.born}</td>
  <td>${person.died}</td>
  <td>${person.died - person.born}</td>
  <td>${Math.ceil(person.died / 100)}</td>
</tr>
  `);
}
