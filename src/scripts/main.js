'use strict';

const people = require('./lib/people');

const tableBody = document.querySelector('tbody');

// eslint-disable-next-line no-shadow
people.forEach(({ name, sex, born, died }) => {
  tableBody.insertAdjacentHTML('beforeend',
    `
    <tr>
      <td>${name}</td>
      <td>${sex === 'm' ? 'Male' : 'Female'}</td>
      <td>${born}</td>
      <td>${died}</td>
      <td>${died - born}</td>
      <td>${Math.ceil(died / 100)}</td>
    </tr>
    `
  );
});
