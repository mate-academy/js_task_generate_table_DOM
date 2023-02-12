'use strict';

const people = require('./lib/people');
const table = document.querySelector('.dashboard');

people.map(person => {
  table.firstElementChild.insertAdjacentHTML('beforeend', `
    <tr>
      <th>${person.name}</th>
      <th>${person.sex === 'm' ? 'Male' : 'Female'}</th>
      <th>${person.born}</th>
      <th>${person.died}</th>
      <th>${person.age = person.died - person.born}</th>
      <th>${person.century = Math.ceil(person.died / 100)}</th>
    </tr>
  `);
});
