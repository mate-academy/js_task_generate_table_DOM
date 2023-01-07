'use strict';

const people = require('./lib/people');
const table = document.querySelector('table');

for (const person of people) {
  const row = document.createElement('tr');

  row.innerHTML += `
  <tr>
    <td>${person.name}</td>
    <td>${person.sex === 'm' ? 'Male' : 'Female'}</td>
    <td>${person.born}</td>
    <td>${person.died}</td>
    <td>${person.died - person.born}</td>
    <td>${Math.ceil(person.born / 100)}</td>
</tr>
  `;
  table.append(row);
}
