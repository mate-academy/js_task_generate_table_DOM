'use strict';

const people = require('./lib/people');

// eslint-disable-next-line no-console
console.log(people); // you can remove it

const table = document.querySelector('.dashboard tbody');

people.forEach(person => {
  table.insertAdjacentHTML('beforeend', `
    <tr>
      <td>${person.name}</td>
      <td>${person.sex = person.sex === 'f' ? 'Female' : 'Male'}</td>
      <td>${person.born}</td>
      <td>${person.died}</td>
      <td>${person.died - person.born}</td>
      <td>${Math.ceil(person.died / 100)}</td>
    </tr>
  `);
});
