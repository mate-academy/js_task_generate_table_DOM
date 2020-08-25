'use strict';

const people = require('./lib/people');

// eslint-disable-next-line no-console
console.log(people); // you can remove it

const tableRow = document.querySelector('tr');

for (const person of people) {
  const personSex = (person.sex === 'm') ? 'Male' : 'Female';
  const personAge = person.died - person.born;
  const birthCentury = Math.ceil(person.died / 100);

  tableRow.insertAdjacentHTML('afterend', `
    <tr>
      <td>${person.name}</td>
      <td>${personSex}</td>
      <td>${person.born}</td>
      <td>${person.died}</td>
      <td>${personAge}</td>
      <td>${birthCentury}</td>
    </tr>
  `);
}
