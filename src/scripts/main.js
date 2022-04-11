'use strict';

const people = require('./lib/people');

// eslint-disable-next-line no-console
console.log(people); // you can remove it

// write your code here

const table = document.querySelector('.dashboard');

people.map(person => {
  const age = person.died - person.born;
  const century = Math.ceil(person.died / 100);

  const tableRow = document.createElement('tr');

  tableRow.insertAdjacentHTML('afterbegin', `
    <td>${person.name}</td>
    <td>${person.sex === 'f' ? 'Female' : 'Male'}</td>
    <td>${person.born}</td>
    <td>${person.died} </td>
    <td>${age}</td>
    <td>${century}</td>
  `);

  table.append(tableRow);
});
