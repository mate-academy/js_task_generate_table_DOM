'use strict';

const people = require('./lib/people');
const table = document.querySelector('.dashboard');
const tableBody = table.querySelector('tbody');

people.forEach(person => {
  if (person.sex === 'm') {
    person.sex = 'Male';
  } else {
    person.sex = 'Female';
  }

  tableBody.insertAdjacentHTML('beforeend', `
    <tr>
      <th>${person.name}</th>
      <th>${person.sex}</th>
      <th>${person.born}</th>
      <th>${person.died}</th>
      <th>${person.died - person.born}</th>
      <th>${Math.ceil(person.died / 100)}</th>
    </tr>
  `);
});
