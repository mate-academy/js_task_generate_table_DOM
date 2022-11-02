'use strict';

const people = require('./lib/people');
const table = document.querySelector('.dashboard');

people.forEach(person => {
  const gender = (person.sex === 'm') ? 'Male' : 'Fermale';
  const age = person.died - person.born;
  const century = Math.ceil(person.died / 100);

  table.firstElementChild.insertAdjacentHTML('beforeend',
    `<tr>
      <th>${person.name}</th>
      <th>${gender}</th>
      <th>${person.born}</th>
      <th>${person.died}</th>
      <th>${age}</th>
      <th>${century}</th>
    </tr>`);
});
