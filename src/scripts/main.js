'use strict';

const people = require('./lib/people');
const dashboard = document.querySelector('.dashboard');

for (const person of people) {
  const tableRow = document.createElement('tr');
  const gender = (person.sex === 'm' ? 'Male' : 'Female');
  const century = Math.ceil(person.died / 100);

  tableRow.insertAdjacentHTML('beforeend',
    `<td>${person.name}</td>
    <td>${gender}</td>
    <td>${person.born}</td>
    <td>${person.died}</td>
    <td>${person.died - person.born}</td>
    <td>${century}</td>`
  );

  dashboard.append(tableRow);
}
