'use strict';

const people = require('./lib/people');

// eslint-disable-next-line no-console

const dashboard = document.querySelector('.dashboard tbody');

for (const person of people) {
  dashboard.insertAdjacentHTML('beforeend', `
    <tr>
      <th>${person.name}</th>
      <th>${person.sex === 'f' ? 'Female' : 'Male'}</th>
      <th>${person.born}</th>
      <th>${person.died}</th>
      <th>${person.died - person.born}</th>
      <th>${person.died ? Math.ceil(person.died / 100) : 1}</th>
    </tr>
  `);
}
