'use strict';

const people = require('./lib/people');

// write your code here
const table = document.querySelector('.dashboard tbody');
const formatSex = (sex) => sex === 'm' ? 'Male' : 'Female';

for (const person of people) {
  const { aName, sex, born, died } = person;

  table.insertAdjacentHTML('beforeend', `
    <tr>
      <td>${aName}</td>
      <td>${formatSex(sex)}</td>
      <td>${born}</td>
      <td>${died}</td>
      <td>${died - born}</td>
      <td>${Math.ceil(died / 100)}</td>
    </tr>
`);
}
