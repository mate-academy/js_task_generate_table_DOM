'use strict';

const people = require('./lib/people');

const table = document.querySelector('.dashboard');

for (const person of people) {
  const personAge = person.died - person.born;
  const personCentury = Math.ceil(person.died / 100);

  const tableRow = document.createElement('tr');

  tableRow.innerHTML = `
    <td>${person.name}</td>
    <td>${person.sex}</td>
    <td>${person.born}</td>
    <td>${person.died}</td>
    <td>${personAge}</td>
    <td>${personCentury}</td>
  `;

  table.append(tableRow);
}
