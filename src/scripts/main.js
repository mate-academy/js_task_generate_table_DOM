'use strict';

const people = require('./lib/people');
const table = document.querySelector('.dashboard');
const defineGender = gender => (gender === 'f') ? 'Female' : 'Male';

for (const person of people) {
  table.firstElementChild.insertAdjacentHTML('beforeend', `
    <tr>
      <th>${person.name}</th>
      <th>${defineGender(person.sex)}</th>
      <th>${person.born}</th>
      <th>${person.died}</th>
      <th>${person.died - person.born}</th>
      <th>${Math.ceil(person.died / 100)}</th>
    </tr>
  `);
}
