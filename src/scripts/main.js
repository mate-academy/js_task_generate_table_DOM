'use strict';

const people = require('./lib/people');

const table = document.querySelector('.dashboard');

people.forEach(person => {
  const tableRow = document.createElement('tr');

  tableRow.insertAdjacentHTML('afterbegin', `
  <tr>
  <td>${person.name}</td>
  <td>${person.sex === 'm' ? 'Male' : 'Female'}</td>
  <td>${person.born}</td>
  <td>${person.died}</td>
  <td>${person.age = person.died - person.born}</td>
  <td>${person.century = Math.round(person.died / 100)}</td>
  </tr>`);

  table.append(tableRow);
});
