'use strict';

const people = require('./lib/people');

// eslint-disable-next-line no-console
const table = document.querySelector('.dashboard');

const genderCheck = (sex) => {
  return (sex === 'm') ? 'Male' : 'Female';
};

for (const person of people) {
  const row = document.createElement('tr');

  row.innerHTML = `
    <th>${person.name}</th>
    <th>${genderCheck(person.sex)}</th>
    <th>${person.born}</th>
    <th>${person.died}</th>
    <th>${person.died - person.born}</th>
    <th>${Math.ceil(person.died / 100)}</th>
  `;

  table.append(row);
}
