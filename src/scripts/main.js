'use strict';

const people = require('./lib/people');

// eslint-disable-next-line no-console
console.log(people); // you can remove it

// write your code here
const table = document.querySelector('.dashboard');

people.forEach(person => {
  const row = document.createElement('tr');

  row.innerHTML = `
  <th>${person.name}</th>
  <th>${person.sex}</th>
  <th>${person.born}</th>
  <th>${person.died}</th>
  <th>${person.died - person.born}</th>
  <th>${Math.ceil(person.died / 100)}</th>
  `;

  table.appendChild(row);
});
