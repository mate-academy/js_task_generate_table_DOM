'use strict';

const people = require('./lib/people');
const table = document.querySelector('.dashboard');

[...people].forEach(person => {
  const row = document.createElement('tr');

  [
    person.name,
    person.sex === 'm' ? 'Male' : 'Female',
    person.born,
    person.died,
    person.died - person.born,
    Math.ceil(person.died / 100),
  ].forEach(value => {
    const cell = document.createElement('td');

    cell.textContent = value;
    row.append(cell);
  });

  table.append(row);
});
