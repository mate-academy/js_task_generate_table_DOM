'use strict';

const people = require('./lib/people');
const dashboard = document.querySelector('.dashboard tbody');

for (const person of people) {
  const row = document.createElement('tr');

  row.innerHTML = `
    <th>${person.name}</th>
    <th>${person.sex === 'f' ? 'Female' : 'Male'}</th>
    <th>${person.born}</th>
    <th>${person.died}</th>
    <th>${person.died - person.born}</th>
    <th>${Math.ceil(person.died / 100)}</th>
  `;

  dashboard.append(row);
}
