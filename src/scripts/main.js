'use strict';

const people = require('./lib/people');

const table = document.querySelector('table');

people.forEach(person => table.tBodies[0].insertAdjacentHTML('beforeend', `
  <tr>
    <td>${person.name}</td>
    <td>${person.sex === 'f' ? 'Female' : 'Male'}</td>
    <td>${person.born}</td>
    <td>${person.died}</td>
    <td>${person.died - person.born}</td>
    <td>${Math.ceil(person.died / 100)}</td>
  </tr>`));
