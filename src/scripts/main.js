'use strict';

const people = require('./lib/people');
const table = document.querySelector('.dashboard');

people.forEach(p => {
  const tableRow = document.createElement('tr');

  tableRow.innerHTML = `
  <tr>
    <td>${p.name}</td>
    <td>${p.sex === 'm' ? 'Male' : 'Female'}</td>
    <td>${p.born}</td>
    <td>${p.died}</td>
    <td>${p.died - p.born}</td>
    <td>${Math.ceil(p.died / 100)}</td>
  </tr>`;

  table.append(tableRow);
});
