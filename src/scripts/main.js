'use strict';

const people = require('./lib/people');
const table = document.querySelector('tbody');

people.forEach(person => {
  let gender;

  if (person.sex === 'm') {
    gender = 'Male';
  } else {
    gender = 'Female';
  }

  table.insertAdjacentHTML('beforeend',
    `
    <tr>
      <td>${person.name}</td>
      <td>${gender}</td>
      <td>${person.born}</td>
      <td>${person.died}</td>
      <td>${person.died - person.born}</td>
      <td>${Math.ceil(person.died / 100)}</td>
    </tr>
  `);
});
