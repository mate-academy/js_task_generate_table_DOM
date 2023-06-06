'use strict';

const people = require('./lib/people');
const table = document.querySelector('.dashboard');

const row = document.createElement('tr');

for (const item of people) {
  row.innerHTML = `
    <th>${item.name}</th>
    <th>${item.sex === 'm' ? 'Male' : 'Female'}</th>
    <th>${item.born}</th>
    <th>${item.died}</th>
    <th>${item.died - item.born}</th>
    <th>${Math.ceil(item.died / 100)}</th>
  `;

  table.append(row.cloneNode(true));
}
