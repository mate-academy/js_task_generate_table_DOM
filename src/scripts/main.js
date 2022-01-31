'use strict';

const people = require('./lib/people');

// eslint-disable-next-line no-console
console.log(people); // you can remove it

const table = document.querySelector('.dashboard');

for (let i = 0; i < people.length; i++) {
  const tableRow = document.createElement('tr');
  const age = people[i].died - people[i].born;
  const century = Math.ceil(people[i].died / 100);
  const gender = people[i].sex === 'f'
    ? 'Female'
    : 'Male';

  tableRow.innerHTML = `
    <td>${people[i].name}</td>
    <td>${gender}</td>
    <td>${people[i].born}</td>
    <td>${people[i].died}</td>
    <td>${age}</td>
    <td>${century}</td>
  `;

  table.append(tableRow);
}
