'use strict';

const people = require('./lib/people');
const table = document.querySelector('.dashboard');

// eslint-disable-next-line no-console
console.log(people); // you can remove it

for (const person of people) {
  const { name, sex, born, died } = person;
  const tableRow = document.createElement('tr');

  tableRow.innerHTML = `
    <td>${name}</td>
    <td>${sex === 'm' ? 'Male' : 'Female'}</td>
    <td>${born}</td>
    <td>${died}</td>
    <td>${died - born}</td>
    <td>${Math.ceil(died / 100)}</td>
    `;

  table.append(tableRow);
}
