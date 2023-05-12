'use strict';

const people = require('./lib/people');

const row = document.querySelector('.dashboard').lastChild;

const genders = (gender) => {
  return (gender === 'm') ? 'Male' : 'Feminine';
};

for (const person of people) {
  row.insertAdjacentHTML('beforeend', `
  <tr>
    <th>${person.name}</th>
    <th>${genders(person.sex)}</th>
    <th>${person.born}</th>
    <th>${person.died}</th>
    <th>${person.died - person.born}</th>
    <th>${Math.ceil(person.died / 100)}</th>
  </tr>
  `);
};
