'use strict';

const people = require('./lib/people');

const tableBody = document.querySelector('tbody');

people.forEach((person) => {
  tableBody.insertAdjacentHTML('beforeend', `
    <tr>
      <td>${person.name}</td>
      <td>${person.sex === 'f' ? 'Female' : 'Male'}</td>
      <td>${person.born}</td>
      <td>${person.died}</td>
      <td>${person.died - person.born}</td>
      <td>${Math.ceil(person.died / 100)}</td>
    </tr>
  `);
});
