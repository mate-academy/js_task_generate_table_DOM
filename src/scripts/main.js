'use strict';

const people = require('./lib/people');

// eslint-disable-next-line no-console
console.log(people);

const table = document.querySelector('.dashboard tbody');

people.forEach(human => {
  table.insertAdjacentHTML('beforeend',
    `<tr>
      <td>${human.name}</td>
      <td>${human.sex === 'm' ? 'Male' : 'Female'}</td>
      <td>${human.born}</td>
      <td>${human.died}</td>
      <td>${human.died - human.born}</td>
      <td>${Math.ceil(human.died / 100)}</td>
    </tr>`);
});
