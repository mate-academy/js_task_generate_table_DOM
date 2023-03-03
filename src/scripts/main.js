'use strict';

const people = require('./lib/people');
const table = document.querySelector('tbody');

// eslint-disable-next-line no-console
console.log(people); // you can remove it

// write your code here
for (const person of people) {
  table.insertAdjacentHTML(`beforeend`, `
    <tr>
      <th>${person.name}</th>
      <th>${person.sex}</th>
      <th>${person.born}</th>
      <th>${person.died}</th>
      <th>${person.died - person.born}</th>
      <th>${Math.ceil(person.died / 100)}</th>
    </tr>
  `);
}
