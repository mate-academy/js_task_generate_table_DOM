'use strict';

const people = require('./lib/people');

// eslint-disable-next-line no-console
console.log(people); // you can remove it

const table = document.querySelector('tbody');

for (const person of people) {
  table.insertAdjacentHTML('beforeend', `
  <tr>
    <td>${person.name}</td>
    <td>${getGender(person)}</td>
    <td>${person.born}</td>
    <td>${person.died}</td>
    <td>${person.died - person.born}</td>
    <td>${Math.ceil(person.died / 100)}</td>
  </tr>`);
}

function getGender(pers) {
  if (pers.sex === 'm') {
    return 'Male';
  }

  return 'Female';
}
