'use strict';

const people = require('./lib/people');
const table = document.querySelector('.dashboard');

people.forEach(({ name: personName, sex, born, died }) => {
  table.tBodies[0].insertAdjacentHTML('beforeend', `
    <tr>
      <td>${personName}</td>
      <td>${sex}</td>
      <td>${born}</td>
      <td>${died}</td>
      <td>${died - born}</td>
      <td>${Math.ceil(died / 100)}</td>
    </tr>
  `);
});
