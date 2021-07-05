'use strict';

const people = require('./lib/people');

const table = document.querySelector('.dashboard');

for (const person of people) {
  const personGender = (person.sex === 'm' ? 'Male' : 'Female');
  const personAge = person.died - person.born;
  const personCentury = Math.ceil(person.died / 100);
  const newTableRow = document.createElement('tr');

  newTableRow.innerHTML = `
    <td>${person.name}</td>
    <td>${personGender}</td>
    <td>${person.born}</td>
    <td>${person.died}</td>
    <td>${personAge}</td>
    <td>${personCentury}</td>
  `;

  table.append(newTableRow);
}
