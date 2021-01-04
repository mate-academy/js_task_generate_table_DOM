'use strict';

const people = require('./lib/people');

const table = document.getElementsByTagName('tbody')[0];

for (const human of people) {
  table.innerHTML += `
    <tr>
      <td>${human.name}</td>
      <td>${(human.sex === 'm') ? 'Male' : 'Female'}</td>
      <td>${human.born}</td>
      <td>${human.died}</td>
      <td>${human.died - human.born}</td>
      <td>${Math.ceil(human.died / 100)}</td>
    </tr>
  `;
}
