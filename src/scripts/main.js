'use strict';

const people = require('./lib/people');

// eslint-disable-next-line no-console
console.log(people); // you can remove it

// write your code here
const dashboard = document.querySelector('.dashboard');

for (const p of people) {
  const tableRow = document.createElement('tr');

  tableRow.insertAdjacentHTML('afterbegin', `
    <td>${p.name}</td>
    <td>${p.sex === 'm' ? 'Male' : 'Female'}</td>
    <td>${p.born}</td>
    <td>${p.died}</td>
    <td>${p.died - p.born}</td>
    <td>${Math.ceil(p.died / 100)}</td>
  `);

  dashboard.append(tableRow);
}
