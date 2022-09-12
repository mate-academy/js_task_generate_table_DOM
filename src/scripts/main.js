'use strict';

const people = require('./lib/people');
const table = document.querySelector('.dashboard');

for (const person of people) {
  const tr = document.createElement('tr');

  // eslint-disable-next-line no-shadow
  const { name, sex, born, died } = person;
  const age = died - born;
  const century = Math.ceil(died / 100);
  const gender = (sex === 'f') ? 'Female' : 'Male';

  tr.innerHTML = `
    <td>${name}</td>
    <td>${gender}</td>
    <td>${born}</td>
    <td>${died}</td>
    <td>${age}</td>
    <td>${century}</td>
  `;
  table.append(tr);
}
