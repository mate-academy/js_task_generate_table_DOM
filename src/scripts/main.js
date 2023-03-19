'use strict';

const people = require('./lib/people');

// eslint-disable-next-line no-console
console.log(people); // you can remove it

people.forEach(({ name: personName, sex, born, died }) => {
  const row = document.createElement('tr');

  row.innerHTML = `
  <tr>
    <td>${personName}</td>
    <td>${sex === 'f' ? 'Female' : 'Male'}</td>
    <td>${born}</td>
    <td>${died}</td>
    <td>${died - born}</td>
    <td>${Math.ceil(died / 100)}</td>
  <tr>
  `;

  const table = document.querySelector('.dashboard');

  table.append(row);
});
