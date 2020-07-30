'use strict';

const people = require('./lib/people');

// eslint-disable-next-line no-console
console.log(people); // you can remove it

const table = document.querySelector('.dashboard');

// write your code here
for (const person of people) {
  const row = document.createElement('tr');
  const age = person.died - person.born;
  const century = Math.ceil(person.died / 100);

  row.insertAdjacentHTML('afterbegin',
    `<td>${person.name}</td>
    <td>${person.sex}</td>
    <td>${person.born}</td>
    <td>${person.died}</td>
    <td>${age}</td>
    <td>${century}</td>
    `);

  table.appendChild(row);
}
