'use strict';

const people = require('./lib/people');

const table = document.querySelector('tbody');

for (const human of people) {
  table.insertAdjacentHTML(
    'beforeend',
    `<tr>
    <th>${human.name}</th>
    <th>${human.sex}</th>
    <th>${human.born}</th>
    <th>${human.died}</th>
    <th>${human.died - human.born}</th>
    <th>${Math.ceil(human.died / 100)}</th>
    </tr>`
  );
}
