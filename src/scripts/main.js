'use strict';

const people = require('./lib/people');

const table = document.querySelector('.dashboard');

people.forEach(person => {
  const { name: personName, sex, born, died } = person;
  const age = died - born;
  const century = Math.ceil(died / 100);
  const row = document.createElement('tr');

  row.innerHTML = `
    <tr>
      <td>${personName}</td>
      <td>${sex}</td>
      <td>${born}</td>
      <td>${died}</td>
      <td>${age}</td>
      <td>${century}</td>
    <tr>
  `;

  table.append(row);
});
