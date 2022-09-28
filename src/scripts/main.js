'use strict';

const people = require('./lib/people');
const dashboard = document.querySelector('tbody');

people.forEach(person => {
  const tableRow = `
    <tr>
      <th>${person.name}</th>
      <th>${person.sex === 'f' ? 'Female' : 'Male'}</th>
      <th>${person.born}</th>
      <th>${person.died}</th>
      <th>${person.died - person.born}</th>
      <th>${Math.ceil(person.died / 100)}</th>
    </tr>
  `;

  dashboard.insertAdjacentHTML('beforeend', tableRow);
});
