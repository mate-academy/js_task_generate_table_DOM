'use strict';

const people = require('./lib/people');
const table = document.querySelector('.dashboard');

people.map(({ name: moniker, sex, born, died }) => {
  const row = document.createElement('tr');

  row.innerHTML = `
    <th>${moniker}</th>
    <th>${sex}</th>
    <th>${born}</th>
    <th>${died}</th>
    <th>${died - born}</th>
    <th>${Math.ceil(died / 100)}</th>
  `;
  table.append(row);
});
