'use strict';

const people = require('./lib/people');

const table = document.querySelector('tbody');

people.map(({ name: called, sex, born, died }) => {
  const age = died - born;
  const century = Math.ceil(died / 100);
  const gender = sex === 'm' ? 'Male' : 'Female';

  const htmlText = `
    <tr>
      <td>${called}</td>
      <td>${gender}</td>
      <td>${born}</td>
      <td>${died}</td>
      <td>${age}</td>
      <td>${century}</td>
    </tr>
  `;

  table.insertAdjacentHTML('beforeend', htmlText);
});
