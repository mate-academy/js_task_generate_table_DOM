'use strict';

const people = require('./lib/people');
const table = document.querySelector('.dashboard tbody');

for (const { name, sex, born, died } of people) {
  const sexFull = sex === 'm' ? 'Male' : 'Female';
  const age = died - born;
  const century = Math.ceil(died / 100);

  table.insertAdjacentHTML('beforeend', `
  <tr>
    <td>${name}</td>
    <td>${sexFull}</td>
    <td>${born}</td>
    <td>${died}</td>
    <td>${age}</td>
    <td>${century}</td>
  </tr>
  `);
}
