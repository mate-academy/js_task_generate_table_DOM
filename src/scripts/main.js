'use strict';

const people = require('./lib/people');
const table = document.querySelector('.dashboard');

people.map(person =>
  table.firstElementChild.insertAdjacentHTML('beforeend', `
    <tr>
      <td>${person.name}</td>
      <td>${checkGender(person.sex)}</td>
      <td>${person.born}</td>
      <td>${person.died}</td>
      <td>${person.died - person.born}</td>
      <td>${Math.ceil(person.died / 100)}</td>
    </tr>
  `));

function checkGender(gender) {
  return gender === 'm'
    ? 'Male'
    : 'Female';
}
