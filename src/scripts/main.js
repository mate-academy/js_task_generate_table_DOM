'use strict';

const people = require('./lib/people');

const table = document.querySelector('table');

people.forEach(person => {
  const gender = (person.sex === 'm')
    ? 'Male'
    : 'Female';
  const age = person.died - person.born;
  const century = Math.ceil(person.died / 100 - 1);
  const row = document.createElement('tr');

  row.innerHTML
  = `
    <th>${person.name}</th>
    <th>${gender}</th>
    <th>${String(person.born)}</th>
    <th>${String(person.died)}</th>
    <th>${String(age)}</th>
    <th>${String(century)}</th>
`;
  table.append(row);
});
