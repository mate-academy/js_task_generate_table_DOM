'use strict';

const people = require('./lib/people');

const tableBody = document.querySelector('tbody');

people.map(person => {
  tableBody.insertAdjacentHTML('beforeend', `
    <tr>
      <th>${person.name}</th>
      <th>${isFullWordForGender(person.sex)}</th>
      <th>${person.born}</th>
      <th>${person.died}</th>
      <th>${person.died - person.born}</th>
      <th>${Math.ceil(person.died / 100)}</th>
   </tr>
   `);
});

function isFullWordForGender(input) {
  return input === 'm'
    ? 'Male'
    : input === 'f'
      ? 'Female'
      : input;
}
