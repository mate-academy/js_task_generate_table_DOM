'use strict';

const people = require('./lib/people');

const table = document.querySelector('.dashboard');

for (const person of people) {
  const { name, sex, born, died } = person;
  const row = document.createElement('tr');

  row.insertAdjacentHTML('beforeend', `
      <td>${name}</td>
      <td>${sex}</td>
      <td>${born}</td>
      <td>${died}</td>
      <td>${died - born}</td>
      <td>${Math.ceil(died / 100)}</td>
  `);
  table.append(row);
}
