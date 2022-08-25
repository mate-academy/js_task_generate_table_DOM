'use strict';

const people = require('./lib/people');
const table = document.querySelector('table');

people.forEach(person => {
  const tableRows = document.createElement('tr');

  tableRows.insertAdjacentHTML('afterbegin', `
    <th>${person.name}</th>
    <th>${person.sex === 'f' ? 'Female' : 'Male'}</th>
    <th>${person.born}</th>
    <th>${person.died}</th>
    <th>${person.died - person.born}</th>
    <th>${Math.ceil(person.died / 100)}</th>
  `);

  table.append(tableRows);
});
