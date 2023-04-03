'use strict';

const people = require('./lib/people');

// eslint-disable-next-line no-console
console.log(people); // you can remove it

// write your code here
const table = document.querySelector('.dashboard');

people.forEach((person) => {
  const genderCell = person.sex === 'f' ? 'Female' : 'Male';
  const tableRow = document.createElement('tr');
  const age = person.died - person.born;
  const century = Math.ceil(person.died / 100);

  tableRow.innerHTML = `
    <td>${person.name}</td>
    <td>${genderCell}</td>
    <td>${person.born}</td>
    <td>${person.died}</td>
    <td>${age}</td>
    <td>${century}</td>
  `;

  table.append(tableRow);
});
