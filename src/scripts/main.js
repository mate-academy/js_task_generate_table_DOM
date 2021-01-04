'use strict';

const people = require('./lib/people');
const table = document.querySelector('tr');

for (const human of people) {
  table.insertAdjacentHTML('afterend',
    `<tr class="${human.name}">
      <td>${human.name}</td>
      <td>${human.sex === 'm' ? 'Male' : 'Female'}</td>
      <td>${human.born}</td>
      <td>${human.died}</td>
      <td>${human.died - human.born}</td>
      <td>${Math.ceil(human.died / 100)}</td>
    </tr>`);
}
