'use strict';

const people = require('./lib/people');

// eslint-disable-next-line no-console
const table = document.querySelector('.dashboard');

for (const person of people) {
  person.age = person.died - person.born;
  person.century = Math.ceil(person.died / 100);

  const row = document.createElement('tr');

  row.innerHTML = `
    <td>${person.name}</td>
    <td>${person.sex === 'm' ? 'Male' : 'Female'}</td>
    <td>${person.born}</td>
    <td>${person.died}</td>
    <td>${person.age}</td>
    <td>${person.century}</td>
  `;

  table.append(row);
};
