'use strict';

const people = require('./lib/people');

const table = document.querySelector('.dashboard');

// eslint-disable-next-line no-shadow
people.forEach(({ name, sex, born, died }) => {
  const row = document.createElement('tr');

  row.innerHTML = `
  <th>${name}</th>
  <th>${sex === 'm' ? 'Male' : 'Female'}</th>
  <th>${born}</th>
  <th>${died}</th>
  <th>${died - born}</th>
  <th>${Math.ceil(died / 100)}</th>`;

  table.append(row);
});
