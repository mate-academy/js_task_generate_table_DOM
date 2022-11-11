'use strict';

const people = require('./lib/people');
const table = document.querySelector('tbody');

people.forEach(human => {
  const sex = (human.sex === 'm') ? 'Male' : 'Female';

  table.insertAdjacentHTML('beforeend',
    `<tr>
        <td>${human.name}</td>
        <td>${sex}</td>
        <td>${human.born}</td>
        <td>${human.died}</td>
        <td>${human.died - human.born}</td>
        <td>${Math.ceil(human.died / 100)}</td>
    </tr>`);
});
