'use strict';

const people = require('./lib/people');

const tableRef = document.querySelector('.dashboard tbody');

tableRef.insertAdjacentHTML('beforeend', `
  ${people.map(({ name: personName, sex, born, died }) => {
    return `
      <tr>
        <th>${personName}</th>
        <th>${(sex === 'm') ? 'Male' : 'Female'}</th>
        <th>${born}</th>
        <th>${died}</th>
        <th>${died - born}</th>
        <th>${Math.ceil(died / 100)}</th>
      </tr>
    `;
  }).join('')}
`);
