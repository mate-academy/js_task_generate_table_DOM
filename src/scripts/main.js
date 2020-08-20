'use strict';

const people = require('./lib/people');
const table = document.querySelector('tbody');

table.innerHTML += (
  people.map(person => `
  <tr>
    <th>${person.name}</th>
    <th>${person.sex}</th>
    <th>${person.born}</th>
    <th>${person.died}</th>
    <th>${person.died - person.born}</th>
    <th>${Math.ceil(person.died / 100)}</th>
  </tr>
  `).join(''));
