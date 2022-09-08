'use strict';

const people = require('./lib/people');

// eslint-disable-next-line no-console
console.log(people); // you can remove it

const tabl = document.querySelector('tbody');
// console.log(table);

for (const person of people) {
  tabl.insertAdjacentHTML('beforeend', `
  <tr>
    <td>${person.name}</td>
    <td>${gender(person)}</td>
    <td>${person.born}</td>
    <td>${person.died}</td>
    <td>${person.died - person.born}</td>
    <td>${Math.ceil(person.died / 100)}</td>
  </tr>`);
}

function gender(pers) {
  if (pers.sex === 'm') {
    return 'Male';
  }

  return 'Female';
}
