'use strict';

const people = require('./lib/people');
const table = document.body.querySelector('.dashboard tbody');

people.forEach(person => {
  const { sex, born, died } = person;
  const gender = (sex === 'm')
    ? 'Male'
    : 'Female';
  const age = died - born;
  const century = Math.ceil(died / 100);

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
});
