'use strict';

const people = require('./lib/people');

// eslint-disable-next-line no-console
console.log(people); // you can remove it

const table = document.querySelector('.dashboard');

for (const person of people) {
  person.age = person.died - person.born;
  person.century = Math.ceil(person.died / 100);

  const tableRow = document.createElement('tr');

  tableRow.insertAdjacentHTML('afterbegin', `
  <td>${person.name}</td>
  <td>${person.sex === 'f' ? 'Female' : 'Male'}</td>
  <td>${person.born}</td>
  <td>${person.died}</td>
  <td>${person.age}</td>
  <td>${person.century}</td>
`);

  table.append(tableRow);
}
