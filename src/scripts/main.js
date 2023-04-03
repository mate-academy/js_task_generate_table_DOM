'use strict';

const people = require('./lib/people');

// eslint-disable-next-line no-console
console.log(people); // you can remove it

// write your code here
const table = document.querySelector('.dashboard');

let tableHTML = '';

for (const person of people) {
  const personAge = person.died - person.born;
  const personCentury = Math.ceil(person.died / 100);
  let personGender;

  if (person.sex === 'm') {
    personGender = 'Male';
  } else {
    personGender = 'Female';
  }

  tableHTML += `
    <tr>
      <td>${person.name}</td>
      <td>${personGender}</td>
      <td>${person.born}</td>
      <td>${person.died}</td>
      <td>${personAge}</td>
      <td>${personCentury}</td>
    </tr>
  `;

  table.innerHTML = `
  <tr>
    <th>Name</th>
    <th>Gender</th>
    <th>Born</th>
    <th>Died</th>
    <th>Age</th>
    <th>Century</th>
  </tr>
  ${tableHTML}
  `;
}
