'use strict';

const people = require('./lib/people');

const table = document.querySelector('.dashboard');

people.forEach((person) => {
  const gender = person.sex === 'f' ? 'Female' : 'Male';
  const tableRow = document.createElement('tr');
  const age = person.died - person.born;
  const century = Math.ceil(person.died / 100);

  tableRow.innerHTML = `
    <td>${person.name}</td>
    <td>${gender}</td>
    <td>${person.born}</td>
    <td>${person.died}</td>
    <td>${age}</td>
    <td>${century}</td>
  `;

  table.append(tableRow);
});
