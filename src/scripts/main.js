'use strict';

const people = require('./lib/people');

// eslint-disable-next-line no-console
console.log(people);

const table = document.querySelector('.dashboard > tbody');

people.forEach(({ name: personName, sex, born, died }) => {
  const element = `
  <tr>
    <td>${personName}</td>
    <td>${sex === 'm' ? 'Male' : 'Female'}</td>
    <td>${born}</td>
    <td>${died}</td>
    <td>${died - born}</td>
    <td>${Math.ceil(died / 100)}</td>
  </tr>
  `;

  table.insertAdjacentHTML('beforeend', element);
});
