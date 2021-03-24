'use strict';

const people = require('./lib/people');

// eslint-disable-next-line no-console

const dashboard = document.querySelector('.dashboard');

people.forEach(person => {
  const tr = document.createElement('tr');

  tr.innerHTML = `
    <td>${person.name}</td>
    <td>${person.sex === 'f' ? 'Female' : 'Male'}</td>
    <td>${person.born}</td>
    <td>${person.died}</td>
    <td>${person.died - person.born}</td>
    <td>${Math.ceil(person.died / 100)}</td>
  `;

  dashboard.append(tr);
});
