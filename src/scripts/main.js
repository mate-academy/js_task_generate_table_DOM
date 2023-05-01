'use strict';

const people = require('./lib/people');

const tElement = document.querySelector('tbody');

people.forEach(({ name: personName, sex, born, died }) => {
  const gender = sex === 'm' ? 'Male' : 'Female';

  tElement.insertAdjacentHTML('beforeend', `
    <tr>
      <td>${personName}</td>
      <td>${gender}</td>
      <td>${born}</td>
      <td>${died}</td>
      <td>${died - born}</td>
      <td>${Math.ceil(died / 100)}</td>
    </tr>
  `);
});
