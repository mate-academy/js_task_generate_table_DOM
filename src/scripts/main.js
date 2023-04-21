'use strict';

const people = require('./lib/people');

const tableDashBoard = document.querySelector('.dashboard');

people.map(person => {
  tableDashBoard.insertAdjacentHTML('beforeend', `
  <tr>
    <th>${person.name}</th>
    <th>${person.sex}</th>
    <th>${person.born}</th>
    <th>${person.died}</th>
    <th>${person.died - person.born}</th>
    <th>${Math.ceil(person.died / 100)}</th>
  </tr>
  `);
});
