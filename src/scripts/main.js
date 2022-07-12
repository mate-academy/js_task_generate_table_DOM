'use strict';

const people = require('./lib/people');

const table = document.querySelector('.dashboard');

for (const elem of people) {
  const row = document.createElement('tr');

  if (elem.sex === 'm') {
    elem.sex = 'Male';
  } else {
    elem.sex = 'Female';
  }

  row.innerHTML = `
    <td>${elem.name}</td>
    <td>${elem.sex}</td>
    <td>${elem.born}</td>
    <td>${elem.died}</td>
    <td>${elem.died - elem.born}</td>
    <td>${Math.ceil(elem.died / 100)}</td>
  `;

  table.append(row);
}
