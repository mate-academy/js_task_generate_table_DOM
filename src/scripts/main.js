'use strict';

const people = require('./lib/people');

// eslint-disable-next-line no-console
console.log(people); // you can remove it

const table = document.querySelector('.dashboard');

for (const person of people) {
  const htmlForInsert = `
  <tr>
    <td>${person.name}</td>
    <td>${(person.sex === 'm') ? 'Male' : 'Female'}</td>
    <td>${person.born}</td>
    <td>${person.died}</td>
    <td>${person.died - person.born}</td>
    <td>${Math.ceil(person.died / 100)}</td>
  </tr>
  `;

  table.firstElementChild.insertAdjacentHTML('beforeend', htmlForInsert);
}
