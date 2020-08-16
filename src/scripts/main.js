'use strict';

const people = require('./lib/people');

for (const i of people) {
  document.querySelector('.dashboard tbody')
    .insertAdjacentHTML('beforeend',
      `<tr>
        <th>${i.name}</th>
        <th>${i.sex === 'm' ? 'Male' : 'Female'}</th>
        <th>${i.born}</th>
        <th>${i.died}</th>
        <th>${i.died - i.born}</th>
        <th>${Math.ceil(i.died / 100)}</th>
      </tr>`);
};
