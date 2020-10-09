'use strict';

const people = require('./lib/people');

const dashboard = document.querySelector('.dashboard');

for (const person of people) {
  const row = document.createElement('tr');
  const { name, sex, born, died } = person;

  row.innerHTML = `
    <td>${name}</td>
    <td>${sex === 'f' ? 'Female' : 'Male'}</td>
    <td>${born}</td>
    <td>${died}</td>
    <td>${died - born}</td>
    <td>${Math.ceil(died / 100)}</td>
  `;

  dashboard.append(row);
}
