'use strict';

const people = require('./lib/people');

const firstRow = document.querySelector('tr');

for (const person of people) {
  const { name, sex, born, died } = person;
  const age = died - born;
  const century = Math.ceil(died / 100);

  firstRow.insertAdjacentHTML('afterend', `
    <tr>
      <td>${name}</td>
      <td>${(sex === 'm') ? 'Male' : 'Female'}</td>
      <td>${born}</td>
      <td>${died}</td>
      <td>${age}</td>
      <td>${century}</td>
    </tr>
  `);
}
