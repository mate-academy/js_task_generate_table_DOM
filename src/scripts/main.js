'use strict';

const people = require('./lib/people');

const table = document.querySelector('tbody');

people.forEach(person => {
  person.sex = person.sex === 'f' ? 'Female' : 'Male';

  table.insertAdjacentHTML('beforeend', `
    <tr>
      <td>${person.name}</td>
      <td>${person.sex}</td>
      <td>${person.born}</td>
      <td>${person.died}</td>
      <td>${person.died - person.born}</td>
      <td>${Math.ceil(person.died / 100)}</td>
    </tr>
  `);
});
