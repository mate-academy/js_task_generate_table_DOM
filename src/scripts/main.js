'use strict';

const people = require('./lib/people');

const table = document.querySelector('.dashboard');

people.forEach(person => {
  const row = document.createElement('tr');

  row.insertAdjacentHTML('afterbegin', `
    <td>${person.name}</td>
    <td>${person.sex === 'f' ? 'Female' : 'Male'}</td>
    <td>${person.born}</td>
    <td>${person.died}</td>
    <td>${person.died - person.born}</td>
    <td>${Math.ceil(person.died / 100)}</td>
    `);

  table.append(row);
});
