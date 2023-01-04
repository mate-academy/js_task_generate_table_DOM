'use strict';

const people = require('./lib/people');
const table = document.querySelector('.dashboard');

[...people].forEach(person => {
  const row = document.createElement('tr');

  const fullName = person.name;
  const gender = person.sex === 'm' ? 'Male' : 'Female';
  const born = person.born;
  const died = person.died;
  const age = person.died - person.born;
  const century = Math.ceil(person.died / 100);

  [ fullName, gender, born, died, age, century ].forEach(value => {
    const cell = document.createElement('td');

    cell.textContent = value;
    row.append(cell);
  });
  table.append(row);
});
