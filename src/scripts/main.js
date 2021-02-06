'use strict';
// debugger;

const people = require('./lib/people');
const table = document.querySelector('.dashboard').querySelector('tbody');
// eslint-disable-next-line no-console

for (const e of people) {
  let gender = '';

  if (e.sex === 'm') {
    gender = 'Male';
  } else {
    gender = 'Female';
  }

  table.insertAdjacentHTML('beforeend', `
  <tr>
    <td>${e.name}</td>
    <td>${gender}</td>
    <td>${e.born}</td>
    <td>${e.died}</td>
    <td>${e.died - e.born}</td>
    <td>${Math.ceil(e.died / 100)}</td>
  </tr>
  `);
}
