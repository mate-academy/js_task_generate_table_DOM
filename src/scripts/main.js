'use strict';

const people = require('./lib/people');

const table = document.querySelector('table');

function findOutGender(sex) {
  if (sex === 'm') {
    return 'Male';
  }

  return 'Female';
}

for (let i = 0; i < people.length; i++) {
  table.firstElementChild.insertAdjacentHTML('beforeend', `
  <tr>
    <td>${people[i].name}</td>
    <td>${findOutGender(people[i].sex)}</td>
    <td>${people[i].born}</td>
    <td>${people[i].died}</td>
    <td>${people[i].died - people[i].born}</td>
    <td>${Math.ceil(people[i].died / 100)}</td>
  </tr>
`);
}
