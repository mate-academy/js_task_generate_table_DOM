'use strict';

const people = require('./lib/people');

// eslint-disable-next-line no-console
console.log(people);

const table = document.querySelector('.dashboard');

people.map((person) => {
  const age = person.died - person.born;
  const century = Math.ceil(person.died / 100);

  const row = document.createElement('tr');

  row.insertAdjacentHTML('beforeend', `
    <th>${person.name}</th>
    <th>${person.sex === 'm' ? 'Male' : 'Female'}</th>
    <td>${person.born}</td>
    <td>${person.died}</td>
    <td>${age}</td>
    <td>${century}</td>
  `);

  table.append(row);
});
