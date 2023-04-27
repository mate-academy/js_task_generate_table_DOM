'use strict';

const people = require('./lib/people');

// eslint-disable-next-line no-console
console.log(people); // you can remove it

const table = document.querySelector('table.dashboard');
const tbody = table.firstElementChild;

for (const person of people) {
  const personAge = person.died - person.born;
  const personCentury = Math.ceil(person.died / 100);
  const gender = (person.sex === 'm') ? 'Male' : 'Female';

  tbody.insertAdjacentHTML('beforeend', `
    <tr>
      <td>${person.name}</td>
      <td>${gender}</td>
      <td>${person.born}</td>
      <td>${person.died}</td>
      <td>${personAge}</td>
      <td>${personCentury}</td>
    </tr>
  `);
}
