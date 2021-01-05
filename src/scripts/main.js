'use strict';

const people = require('./lib/people');

// eslint-disable-next-line no-console
const dashboard = document.querySelector('.dashboard');

people.forEach(person => {
  dashboard.firstElementChild.insertAdjacentHTML('beforeend', `
    <tr>
      <td>${person.name}</td>
      <td>${person.sex === 'm' ? 'Male' : 'Female'}</td>
      <td>${person.born}</td>
      <td>${person.died}</td>
      <td>${person.died - person.born}</td>
      <td>${Math.ceil(person.died / 100)}</td>
    </tr>
  `);
});
