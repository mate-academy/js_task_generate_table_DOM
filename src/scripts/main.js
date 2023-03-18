'use strict';

const people = require('./lib/people');
const tbody = document.querySelector('tbody');

people.forEach(person => {
  const { name: personName, sex, born, died } = person;
  const age = died - born;
  const century = Math.ceil(died / 100);
  const tr = document.createElement('tr');

  tr.innerHTML = `
    <tr>
      <td>${personName}</td>
      <td>${sex}</td>
      <td>${born}</td>
      <td>${died}</td>
      <td>${age}</td>
      <td>${century}</td>
    <tr>
  `;

  tbody.appendChild(tr);
});
