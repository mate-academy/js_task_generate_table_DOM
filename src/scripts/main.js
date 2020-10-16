'use strict';

const people = require('./lib/people');

const table = document.querySelector('.dashboard');

people.forEach(({ name, sex, born, died }) => {
  const rowForPersone = document.createElement('tr');

  const century = Math.ceil(died / 100);
  const age = died - born;
  const gender = sex === 'f' ? 'Female' : 'Male';

  rowForPersone.innerHTML = `
  <th>${name}</th>
  <th>${gender}</th>
  <th>${born}</th>
  <th>${died}</th>
  <th>${age}</th>
  <th>${century}</th>
  `;

  table.append(rowForPersone);
});
