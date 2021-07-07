'use strict';

const people = require('./lib/people');

// eslint-disable-next-line no-console
const table = document.querySelector('tbody');

// write your code here
for (let i = 0; i <= people.length - 1; i++) {
  const tableRow = document.createElement('tr');

  tableRow.innerHTML = `
    <td>${people[i].name}</td>
    <td>${(people[i].sex === 'm') ? 'Male' : 'Female'}</td>
    <td>${people[i].born}</td>
    <td>${people[i].died}</td>
    <td>${people[i].died - people[i].born}</td>
    <td>${Math.floor(people[i].died / 100) + 1}</td>
  `;
  table.append(tableRow);
}
