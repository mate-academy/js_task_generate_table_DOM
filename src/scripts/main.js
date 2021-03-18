'use strict';

const people = require('./lib/people');
const table = document.querySelector('.dashboard');

for (let i = 0; i < people.length; i++) {
  const row = document.createElement('tr');
  const { name: personName, sex, born, died } = people[i];
  const age = died - born;
  const century = Math.ceil(died / 100);

  row.innerHTML = `
    <td>${personName}</td>
    <td>${sex === 'm' ? 'Male' : 'Female'}</td>
    <td>${born}</td>
    <td>${died}</td>
    <td>${age}</td>
    <td>${century}</td>
  `;

  table.append(row);
}
