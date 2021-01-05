'use strict';

const people = require('./lib/people');
const dashboard = document.querySelector('.dashboard');

// eslint-disable-next-line no-console
console.log(people); // you can remove it

for (const person of people) {
  dashboard.children[0].insertAdjacentHTML('beforeend', `
    <tr>
      <td>${person.name}</td>
      <td>${person.sex === 'f' ? 'Female' : 'Male'}</td>
      <td>${person.born}</td>
      <td>${person.died}</td>
      <td>${person.died - person.born}</td>
      <td>${Math.ceil(person.died / 100)}</td>
    </tr>
  `);
}
