'use strict';

const people = require('./lib/people');

const tableToChange = document.querySelector('table.dashboard');

for (const person of people) {
  const row = document.createElement('tr');

  row.insertAdjacentHTML('afterbegin', `
  <th>${person.name}</th>
  <th>${person.sex === 'm' ? 'Male' : 'Female'}</th>
  <th>${person.born}</th>
  <th>${person.died}</th>
  <th>${person.died - person.born}</th>
  <th>${Math.ceil(person.born / 100)}</th>
  `);

  tableToChange.append(row);
}
