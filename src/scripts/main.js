'use strict';

const people = require('./lib/people');

const tableRef = document.querySelector('.dashboard tbody');

tableRef.insertAdjacentHTML('beforeend', `
  ${people.map(({ name: personName, sex, born, died }) => {
    return `
      <tr>
        <td>${personName}</td>
        <td>${(sex === 'm') ? 'Male' : 'Female'}</th>
        <td>${born}</td>
        <td>${died}</td>
        <td>${died - born}</td>
        <td>${Math.ceil(died / 100)}</td>
      </tr>
    `;
  }).join('')}
`);
