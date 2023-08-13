'use strict';

const people = require('./lib/people');
const table = document.querySelector('.dashboard');
const tableBody = table.querySelector('tbody');

people.forEach(person => {
  const sex = person.sex === 'm' ? 'Male' : 'Female';
  const age = person.died - person.born;
  const century = Math.ceil(person.died / 100);

  const row = `
    <tr>
      <td>${person.name}</td>
      <td>${sex}</td>
      <td>${person.born}</td>
      <td>${person.died}</td>
      <td>${age}</td>
      <td>${century}</td>
    </tr>
  `;

  tableBody.insertAdjacentHTML('beforeend', row);
});
