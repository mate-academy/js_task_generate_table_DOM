'use strict';

const people = require('./lib/people');
const table = document.querySelector('tbody');

for (const { name, sex, born, died } of people) {
  table.insertAdjacentHTML('beforeend', `
    <tr>
      <td>${name}</td>
      <td>${sex === 'f' ? 'Female' : 'Male'}</td>
      <td>${born}</td>
      <td>${died}</td>
      <td>${died - born}</td>
      <td>${Math.ceil(died / 100)}</td>
    </tr>
  `);
};
