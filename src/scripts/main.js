'use strict';

const people = require('./lib/people');
const table = document.querySelector('.dashboard');

people.forEach(person => {
  const { sex, born, died } = person;

  const gender = (sex === 'f') ? 'Female' : 'Male';
  const age = died - born;
  const century = Math.ceil(died / 100);

  const tableRow = document.createElement('tr');

  tableRow.innerHTML = `
    <th>${person.name}</th>
    <th>${gender}</th>
    <th>${born}</th>
    <th>${died}</th>
    <th>${age}</th>
    <th>${century}</th>
  `;

  table.append(tableRow);
});
