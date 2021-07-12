'use strict';

const people = require('./lib/people');

// eslint-disable-next-line no-console
console.log(people); // you can remove it

// write your code here
const table = document.querySelector('.dashboard');

people.forEach(person => {
  const row = document.createElement('tr');

  row.innerHTML = `
    <td>${person.name}</td>
    <td>${person.sex === 'm' ? 'male' : 'female'}</td>
    <td>${person.born}</td>
    <td>${person.died}</td>
    <td>${person.died - person.born}</td>
    <td>${Math.ceil(person.died / 100)}</td>
  `;

  table.append(row);
});
