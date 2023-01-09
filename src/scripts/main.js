'use strict';

const people = require('./lib/people');

const table = document.querySelector('.dashboard');

people.forEach(person => {
  const { name: personName, sex, born, died } = person;
  const gender = sex === 'f' ? 'Female' : 'Male';
  const age = died - born;
  const century = Math.ceil(died / 100);

  const cells = `
    <tr>
      <td>${personName}</td>
      <td>${gender}</td>
      <td>${born}</td>
      <td>${died}</td>
      <td>${age}</td>
      <td>${century}</td>
    </tr>
  `;

  table.children[0].insertAdjacentHTML('beforeend', cells);
});
