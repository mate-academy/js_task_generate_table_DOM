'use strict';

const people = require('./lib/people');
const table = document.querySelector('.dashboard').firstElementChild;

people.forEach(person => {
  const sex = (person.sex === 'm') ? 'Male' : 'Female';

  const age = person.died - person.born;
  const century = Math.ceil(person.died / 100);

  table.insertAdjacentHTML('beforeend', `
    <tr>
      <th>${person.name}</th>
      <th>${sex}</th>
      <th>${person.born}</th>
      <th>${person.died}</th>
      <th>${age}</th>
      <th>${century}</th>
    </tr>
  `);
});
