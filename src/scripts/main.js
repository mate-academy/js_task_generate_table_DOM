'use strict';

const people = require('./lib/people');
const table = document.querySelector('.dashboard tbody');

for (const person of people) {
  const stringHtml = `
  <tr>
    <td>${person.name}</td>
    <td>${(person.sex === 'm') ? 'Male' : 'Female'}</td>
    <td>${person.born}</td>
    <td>${person.died}</td>
    <td>${person.died - person.born}</td>
    <td>${Math.ceil(person.died / 100)}</td>
  </tr>
  `;

  table.insertAdjacentHTML('beforeend', stringHtml);
}
