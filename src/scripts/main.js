'use strict';

const people = require('./lib/people');
const table = document.querySelector('.dashboard');

// eslint-disable-next-line no-console
console.log(people); // you can remove it

for (const person of people) {
  person.age = person.died - person.born;
  person.century = Math.ceil(person.died / 100);

  const personTableRow = document.createElement('tr');

  personTableRow.insertAdjacentHTML('afterbegin', `
      <td>${person.name}</td>
      <td>${person.sex === 'm' ? 'Male' : 'Female'}</td>
      <td>${person.born}</td>
      <td>${person.died}</td>
      <td>${person.age}</td>
      <td>${person.century}</td>
    `);

  table.append(personTableRow);
}
