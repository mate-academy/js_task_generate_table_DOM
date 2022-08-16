'use strict';

const people = require('./lib/people');
const table = document.querySelector('.dashboard');

// eslint-disable-next-line no-shadow
people.forEach(({ name, sex, born, died }) => {
  const age = died - born;
  const century = Math.ceil(died / 100);
  const tr = document.createElement('tr');

  tr.innerHTML = `
    <th>${name}</th>
    <th>${sex}</th>
    <th>${born}</th>
    <th>${died}</th>
    <th>${age}</th>
    <th>${century}</th>
  `;

  table.append(tr);
});
