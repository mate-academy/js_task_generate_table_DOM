'use strict';

const people = require('./lib/people');

const table = document.querySelector('tbody');

for (const person of people) {
  const gender = person.sex === 'f' ? 'Female' : 'Male';
  const century = Math.ceil(person.died / 100);

  table.insertAdjacentHTML('beforeend', `
  <tr>
    <td>${person.name}</td>
    <td>${gender}</td>
    <td>${person.born}</td>
    <td>${person.died}</td>
    <td>${person.died - person.born}</td>
    <td>${century}</td>
  </tr>
  `);
};
