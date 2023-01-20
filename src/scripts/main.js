'use strict';

const people = require('./lib/people');

// write your code here
const table = document.querySelector('.dashboard');

const list = people.map((person) => {
  const tableRow = document.createElement('tr');

  tableRow.innerHTML = `
    <td>${person.name}</td>
    <td>${person.sex === 'm' ? 'Male' : 'Female'}</td>
    <td>${person.born}</td>
    <td>${person.died}</td>
    <td>${person.died - person.born}</td>
    <td>${Math.ceil(person.died / 100)}</td>
  `;

  return tableRow;
});

table.append(...list);
