'use strict';

const people = require('./lib/people');

const GENDERS = {
  'm': 'Male',
  'f': 'Female',
};

// eslint-disable-next-line no-console
console.log(people); // you can remove it

const tableBody = document.querySelector('.dashboard > tbody');

for (const person of people) {
  tableBody.innerHTML += `
    <tr>
      <td>${person.name}</td>
      <td>${GENDERS[person.sex]}</td>
      <td>${person.born}</td>
      <td>${person.died}</td>
      <td>${person.died - person.born}</td>
      <td>${Math.ceil(person.died / 100)}</td>
    </tr>
  `;
}
