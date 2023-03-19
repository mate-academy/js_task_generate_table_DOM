'use strict';

const people = require('./lib/people');

// write your code here

const dashboard = document.querySelector('.dashboard');

for (const person of people) {
  const tableRow = document.createElement('tr');

  const { sex, born, died } = person;

  tableRow.innerHTML = `
  <td>${person.name}}</td>
  <td>${sex === 'm' ? 'Male' : 'Female'}</td>
  <td>${born}</td>
  <td>${died}</td>
  <td>${died - born}</td>
  <td>${Math.ceil(died / 100)}</td>
  `;

  dashboard.append(tableRow);
}
