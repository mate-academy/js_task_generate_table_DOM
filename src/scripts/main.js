'use strict';

const people = require('./lib/people');

// eslint-disable-next-line no-console
console.log(people); // you can remove it

// write your code here
const table = document.querySelector('.dashboard');

let tableRow = '';
const tableHeader = `
  <tr>
    <th>Name</th>
    <th>Gender</th>
    <th>Born</th>
    <th>Died</th>
    <th>Age</th>
    <th>Century</th>
  </tr>
`;

for (const person of people) {
  const personAge = person.died - person.born;
  const personCentury = Math.ceil(person.died / 100);
  const personGender = person.sex === 'm' ? 'Male' : 'Female';

  tableRow += `
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
  ${tableHeader}
  ${tableRow}
  `;
}
