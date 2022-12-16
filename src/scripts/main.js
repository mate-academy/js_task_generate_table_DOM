'use strict';

const people = require('./lib/people');
const table = document.querySelector('.dashboard');

people.forEach(person => {
  const { name: personName, sex, born, died } = person;

  const century = Math.ceil(died / 100);
  const gender = sex === 'm' ? 'Male' : 'Female';
  const age = died - born;

  const tableRow = document.createElement('tr');

  tableRow.innerHTML = `
      <td>${personName}</td>
      <td>${gender}</td>
      <td>${born}</td>
      <td>${died}</td>
      <td>${age}</td>
      <td>${century}</td>
  `;

  table.append(tableRow);
});
