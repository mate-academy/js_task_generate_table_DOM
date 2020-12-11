'use strict';

const people = require('./lib/people');
const table = document.querySelector('.dashboard');

for (const { name, sex, born, died } of people) {
  const row = document.createElement('tr');

  row.innerHTML = `
    <td>${name}</td>
    <td>${sex === 'm' ? 'Male' : 'Female'}</td>
    <td>${born}</td>
    <td>${died}</td>
    <td>${died - born}</td>
    <td>${Math.ceil(died / 100)}</td>
  `;

  table.append(row);
}
