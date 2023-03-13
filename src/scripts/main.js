'use strict';

const people = require('./lib/people');
const table = document.querySelector('.dashboard');

people.forEach(person => {
  const row = document.createElement('tr');

  row.insertAdjacentHTML('beforeend', `
    <td>${person.name}</th>
    <td>${person.sex === 'm' ? 'Male' : 'Female'}</th>
    <td>${person.born}</th>
    <td>${person.died}</th>
    <td>${person.died - person.born}</th>
    <td>${Math.ceil(person.died / 100)}</th>
  `);

  table.append(row);
});
