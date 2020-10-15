'use strict';

const people = require('./lib/people');
const dashboard = document.querySelector('.dashboard');

for (const { name, sex, born, died } of people) {
  const rowForTable = document.createElement('tr');

  rowForTable.innerHTML = `
  <td>${name}</td>
  <td>${sex === 'f' ? 'Female' : 'Male'}</td>
  <td>${born}</td>
  <td>${died}</td>
  <td>${died - born}</td>
  <td>${Math.ceil(died / 100)}</td>
  `;
  dashboard.append(rowForTable);
}
