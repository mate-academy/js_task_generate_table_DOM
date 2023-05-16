'use strict';

const people = require('./lib/people');
const table = document.querySelector('.dashboard');

people.forEach(({ name: personName, sex, born, died }) => {
  const age = died - born;
  const century = Math.ceil(died / 100);
  const gender = sex === 'm' ? 'Male' : 'Female';

  const row = document.createElement('tr');

  row.innerHTML = `
    <td> ${personName}</td>
    <td> ${gender}</td>
    <td> ${born}</td>
    <td> ${died}</td>
    <td> ${age}</td>
    <td> ${century}</td>
  `;

  table.append(row);
});
