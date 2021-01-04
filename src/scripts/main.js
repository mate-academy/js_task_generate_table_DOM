'use strict';

const people = require('./lib/people');

// eslint-disable-next-line no-console
console.log(people); // you can remove it

const table = document.querySelector('.dashboard').firstElementChild;

people.forEach(person => {
  return table.insertAdjacentHTML('beforeend', `
    <tr>
      <td>${person.name}</td>
      <td>${person.sex}</td>
      <td>${person.born}</td>
      <td>${person.died}</td>
      <td>${person.died - person.born}</td>
      <td>${calculateCentury(person.died)}</td>
    </tr>
  `);
});

function calculateCentury(number) {
  return Math.ceil(number / 100);
}
