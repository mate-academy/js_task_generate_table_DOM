'use strict';

const people = require('./lib/people');

const table = document.querySelector('.dashboard');

people.forEach(person => {
  person.gender = person.sex === 'm' ? 'Male' : 'Female';

  const tableRow = document.createElement('tr');

  tableRow.insertAdjacentHTML('afterbegin', `
    <tr>
      <td>${person.name}</td>
      <td>${person.gender}</td>
      <td>${person.born}</td>
      <td>${person.died}</td>
      <td>${person.died - person.born}</td>
      <td>${Math.round(person.died / 100)}</td>
    </tr>
  `);

  table.append(tableRow);
});
