'use strict';

const people = require('./lib/people');
const table = document.querySelector('tbody');

table.innerHTML += (
  people.map(person => `
  <tr>
    <td>${person.name}</td>
    <td>${person.sex === 'm' ? 'Male' : 'Female'}</td>
    <td>${person.born}</td>
    <td>${person.died}</td>
    <td>${person.died - person.born}</td>
    <td>${Math.ceil(person.died / 100)}</td>
  </tr>
  `).join(''));
