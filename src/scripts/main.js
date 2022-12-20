'use strict';

const people = require('./lib/people');

const tableBody = document.querySelector('tbody');

tableBody.insertAdjacentHTML('beforeend', `
  ${people.map((
    {
      name: personName,
      sex,
      born,
      died,
      age = (died - born),
      century = (Math.ceil(died / 100)),
    }
  ) => `
    <tr>
      <td>${personName}</td>
      <td>${sex === 'm' ? 'Male' : 'Female'}</td>
      <td>${born}</td>
      <td>${died}</td>
      <td>${age}</td>
      <td>${century}</td>
    </tr>
  `).join('')};
`);
