'use strict';

const people = require('./lib/people');
const getTable = document.querySelector('.dashboard tbody');

for (const person of people) {
  getTable.insertAdjacentHTML('beforeend', (
    `<tr>
      <td>${person.name}</td>
      <td>${person.sex === 'm' ? 'Male' : 'Female'}</td>
      <td>${person.born}</td>
      <td>${person.died}</td>
      <td>${person.died - person.born}</td>
      <td>${Math.ceil(person.died / 100)}</td>
    </tr>`
  ));
}
