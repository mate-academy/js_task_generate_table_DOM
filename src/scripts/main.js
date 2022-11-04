'use strict';

const people = require('./lib/people');

// write your code here
const table = document.querySelector('.dashboard tbody');
const formatSex = (sex) => sex === 'm' ? 'Male' : 'Female';

for (const person of people) {
  table.insertAdjacentHTML('beforeend', `
    <tr>
      <td>${person.name}</td>
      <td>${formatSex(person.sex)}</td>
      <td>${person.born}</td>
      <td>${person.died}</td>
      <td>${person.died - person.born}</td>
      <td>${Math.ceil(person.died / 100)}</td>
    </tr>
`);
}
