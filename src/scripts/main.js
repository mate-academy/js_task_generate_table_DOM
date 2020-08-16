'use strict';

const people = require('./lib/people');

const table = document.querySelector('.dashboard tbody');

for (const i of people) {
  table.insertAdjacentHTML('beforeend',
    `<tr>
      <th>${i.name}</th>
      <th>${i.sex}</th>
      <th>${i.born}</th>
      <th>${i.died}</th>
      <th>${i.died - i.born}</th>
      <th>${Math.ceil(i.died / 100)}</th>
    </tr>`);
};
