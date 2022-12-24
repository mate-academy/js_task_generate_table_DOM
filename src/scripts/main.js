'use strict';

const people = require('./lib/people');

const dashboard = document.querySelector('.dashboard');

const table = people.map(person => {
  return `
    <tr>
      <td>${person.name}</td>
      <td>${person.sex === 'm' ? 'Male' : 'Female'}</td>
      <td>${person.born}</td>
      <td>${person.died}</td>
      <td>${person.died - person.born}</td>
      <td>${Math.ceil(person.died / 100)}</td>
    </tr>
  `;
});

dashboard.insertAdjacentHTML('beforeend', table);
