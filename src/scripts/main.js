'use strict';

const people = require('./lib/people');
const dashboard = document.querySelector('.dashboard ');

people.forEach(person => {
  const tableRow = document.createElement('tr');
  const { namee, sex, born, died } = person;

  tableRow.innerHTML = `
    <td>${namee}</td>
    <td>${sex === 'f' ? 'Female' : 'Male'}</td>
    <td>${born}</td>
    <td>${died}</td>
    <td>${died - born}</td>
    <td>${Math.ceil(died / 100)}</td>
  `;

  dashboard.append(tableRow);
});
