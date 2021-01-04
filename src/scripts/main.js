'use strict';

const people = require('./lib/people');
const table = document.querySelector('tbody');

// eslint-disable-next-line no-console
console.log(people);
// write your code here

for (const person of people) {
  let sex = '';

  if (person.sex === 'm') {
    sex = 'Male';
  } else {
    sex = 'Female';
  }

  table.insertAdjacentHTML('beforeend',
    `
  <tr>
      <td>${person.name}</td>
      <td>${sex}</td>
      <td>${person.born}</td>
      <td>${person.died}</td>
      <td>${person.died - person.born}</td>
      <td>${Math.ceil(person.died / 100)}</td>
  </tr>
`);
}
