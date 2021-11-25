'use strict';

const people = require('./lib/people');
const table = document.querySelector('.dashboard');

people.forEach(person => {
  let personSex;

  person.sex === 'f'
    ? personSex = 'Female'
    : personSex = 'Male';

  table.firstElementChild.innerHTML += `
    <tr>
      <td>${person.name}</td>
      <td>${personSex}</td>
      <td>${person.born}</td>
      <td>${person.died}</td>
      <td>${person.died - person.born}</td>
      <td>${Math.ceil(person.died / 100)}</td>
    </tr>
  `;
});
