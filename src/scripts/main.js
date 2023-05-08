'use strict';

const people = require('./lib/people');
const table = document.querySelector('.dashboard');

people.forEach(({ sex, born, died, name: n }) => {
  table.firstElementChild.insertAdjacentHTML('beforeend', `
    <tr>
      <td>${n}</td>
      <td>${getGender(sex)}</td>
      <td>${born}</td>
      <td>${died}</td>
      <td>${died - born}</td>
      <td>${Math.ceil(died / 100)}</td>
    </tr>
  `);
});

function getGender(sex) {
  return sex === 'm' ? 'Male' : 'Female';
}
