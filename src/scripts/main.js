'use strict';

const people = require('./lib/people');
const table = document.querySelector('.dashboard');

people.forEach(({ name: personName, sex, born, died }) => {
  table.tBodies[0].insertAdjacentHTML('beforeend', `
    <tr>
      <th>${personName}</th>
      <th>${sex}</th>
      <th>${born}</th>
      <th>${died}</th>
      <th>${died - born}</th>
      <th>${Math.ceil(died / 100)}</th>
    </tr>
  `);
});
