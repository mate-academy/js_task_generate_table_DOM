'use strict';

const people = require('./lib/people');
const table = document.querySelector('.dashboard').firstElementChild;

for (const person of people) {
  table.insertAdjacentHTML('beforeend', `
    <tr>
      <th>${person.name}</th>
      <th>${person.sex === 'm' ? 'Male' : 'Female'}</th>
      <th>${person.born}</th>
      <th>${person.died}</th>
      <th>${person.died - person.born}</th>
      <th>${Math.ceil(person.died / 100)}</th>
    </tr>
  `);
}
