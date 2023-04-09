'use strict';

const people = require('./lib/people');
const table = document.querySelector('.dashboard').children[0];

people.map(({ sex, died, name, born }) => {
  const gender = sex === 'm' ? 'Male' : 'Female';

  table.insertAdjacentHTML('beforeend', `
      <tr>
        <td>${name}</td>
        <td>${gender}</td>
        <td>${born}</td>
        <td>${died}</td>
        <td>${died - born}</td>
        <td>${Math.ceil(died / 100)}</td>
      </tr>
  `);
});
