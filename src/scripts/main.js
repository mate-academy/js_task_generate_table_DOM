'use strict';

const people = require('./lib/people');

const table = document.querySelector('.dashboard');

people.forEach(({ name: personName, sex, born, died }) => {
  const tableRow = document.createElement('tr');

  tableRow.insertAdjacentHTML('beforeend', `
  <td>${personName}</td>
  <td>${sex === 'm' ? 'Male' : 'Female'}</td>
  <td>${born}</td>
  <td>${died}</td>
  <td>${died - born}</td>
  <td>${Math.ceil(died / 100)}</td>
  `);

  table.append(tableRow);
});
