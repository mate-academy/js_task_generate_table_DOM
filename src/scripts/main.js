'use strict';

const people = require('./lib/people');

const table = document.querySelector('tbody');

for (const person of people) {
  const { sex, born, died } = person;
  const age = died - born;
  const century = Math.ceil(died / 100);
  const gender = sex === 'f' ? 'Female' : 'Male';

  table.insertAdjacentHTML('beforeend', `
  <tr>
    <td>${person.name}</td>
    <td>${gender}</td>
    <td>${born}</td>
    <td>${died}</td>
    <td>${age}</td>
    <td>${century}</td>
  </tr>
  `);
}
