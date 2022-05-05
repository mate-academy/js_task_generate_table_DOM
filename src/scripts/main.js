'use strict';

const people = require('./lib/people');

// eslint-disable-next-line no-console
const table = document.querySelector('.dashboard');

people.forEach(val => {
  const row = document.createElement('tr');
  const person = `
    <td>${val.name}</td>
    <td>${val.sex === 'm' ? 'Male' : 'Female'}</td>
    <td>${val.born}</td>
    <td>${val.died}</td>
    <td>${val.died - val.born}</td>
    <td>${Math.ceil(val.died / 100)}</td>
    `;

  row.innerHTML = person;
  table.append(row);
});
