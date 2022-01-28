'use strict';

const people = require('./lib/people');
const table = document.querySelector('.dashboard');

// eslint-disable-next-line no-console
// console.log(people); // you can remove it

// write your code here

for (const person of people) {
  person.age = person.died - person.born;
  person.century = Math.ceil(person.died / 100);

  const personTableRow = document.createElement('tr');

  personTableRow.insertAdjacentHTML('afterbegin', `
    <th>${person.name}</th>
    <th>${person.sex}</th>
    <th>${person.born}</th>
    <th>${person.died}</th>
    <th>${person.age}</th>
    <th>${person.century}</th>
  `);

  table.append(personTableRow)
}


