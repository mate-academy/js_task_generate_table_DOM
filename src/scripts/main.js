'use strict';

const people = require('./lib/people');
const tableOfPeople = document.querySelector('.dashboard');

for (const { name, sex, born, died } of people) {
  const tableRow = document.createElement('tr');

  tableRow.innerHTML = `
  <td>${name}</td>
  <td>${sex === 'f'
    ? 'Female'
    : 'Male'}
  </td>
  <td>${born}</td>
  <td>${died}</td>
  <td>${died - born}</td>
  <td>${Math.ceil(died / 100)}</td>
  `;
  tableOfPeople.append(tableRow);
}
