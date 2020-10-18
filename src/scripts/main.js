'use strict';

const people = require('./lib/people');

const table = document.querySelector('.dashboard');

people.forEach(({ name, sex, born, died }) => {
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
});
