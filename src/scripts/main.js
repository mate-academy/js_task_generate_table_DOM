'use strict';

const people = require('./lib/people');

const table = document.body.firstElementChild;
const tablebody = table.firstElementChild;

for (const human of people) {
  const age = human.died - human.born;
  const century = Math.ceil(human.died / 100);
  let sex;

  human.sex === 'f' ? sex = 'Female' : sex = 'Male';

  tablebody.insertAdjacentHTML('beforeend', `
  <tr>
    <td>${human.name}</td>
    <td>${sex}</td>
    <td>${human.born}</td>
    <td>${human.died}</td>
    <td>${age}</td>
    <td>${century}</td>
  </tr>
  `);
}
