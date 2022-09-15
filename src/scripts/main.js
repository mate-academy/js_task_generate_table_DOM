'use strict';

const people = require('./lib/people');
const table = document.querySelector('.dashboard');

for (const person of people) {
  const age = person.died - person.born;
  const century = Math.ceil(person.died / 100);
  const gender = (person.sex === 'm') ? 'Male' : 'Female';

  table.children[0].insertAdjacentHTML('beforeend', `
    <tr>
      <td>${person.name}</td>
      <td>${gender}</td>
      <td>${person.born}</td>
      <td>${person.died}</td>
      <td>${age}</td>
      <td>${century}</td>
    </tr>
  `);
}
