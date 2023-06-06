'use strict';

const people = require('./lib/people');
const tableContainer = document.querySelector('.dashboard');

function getGender(el) {
  return el === 'm' ? 'Male' : 'Female';
}

for (const person of people) {
  const century = Math.ceil(person.died / 100);
  const age = person.died - person.born;
  const sex = person.sex;

  tableContainer.children[0].insertAdjacentHTML('beforeend', `
  <tr>
    <td>${person.name}</td>
    <td>${getGender(sex)}</td>
    <td>${person.born}</td>
    <td>${person.died}</td>
    <td>${age}</td>
    <td>${century}</td>
  </tr>
  `);
}
