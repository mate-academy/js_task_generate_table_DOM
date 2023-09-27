'use strict';

const people = require('./lib/people');

const table = document.querySelector('.dashboard');

for (const human of people) {
  table.insertRow().innerHTML += `
    <tr>
      <th>${human.name}</th>
      <th>${human.sex}</th>
      <th>${human.born}</th>
      <th>${human.died}</th>
      <th>${human.died - human.born}</th>
      <th>${Math.ceil(human.born / 100)}</th>
  </tr>
  `;
}
