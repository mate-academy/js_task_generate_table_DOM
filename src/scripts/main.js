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
    <td>${person.name}</td>
    <td>${gender}</td>
    <td>${String(person.born)}</td>
    <td>${String(person.died)}</td>
    <td>${String(age)}</td>
    <td>${String(century)}</td>
`;
  table.append(row);
});
