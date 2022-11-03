'use strict';

const people = require('./lib/people');
const table = document.querySelector('tbody');
const sexFullWord = sex => sex === 'm' ? 'Male' : 'Female';

for (const user of people) {
  table.insertAdjacentHTML('beforeend', `
    <th>${user.name}</th>
    <th>${sexFullWord(user.sex)}</th>
    <th>${user.born}</th>
    <th>${user.died}</th>
    <th>${user.died - user.born}</th>
    <th>${Math.ceil(user.died / 100)}</th>
  `);
}
