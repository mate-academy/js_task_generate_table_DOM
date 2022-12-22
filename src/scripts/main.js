'use strict';

const people = require('./lib/people');

const root = document.body;
const table = root.querySelector('.dashboard').firstElementChild;

for (const person of people) {
  table.insertAdjacentHTML('beforeend', `
    <tr>
      <td>${person.name}</td>
      <td>${fixGender(person.sex)}</td>
      <td>${person.born}</td>
      <td>${person.died}</td>
      <td>${person.died - person.born}</td>
      <td>${Math.ceil(person.died / 100)}</td>
    </tr> 
  `);
}

function fixGender(gender) {
  switch (gender) {
    case 'm':
      return 'Male';
    case 'f':
      return 'Female';

    default:
      return '';
  }
}
