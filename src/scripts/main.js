'use strict';

const people = require('./lib/people');

const table = document.querySelector('tbody');

for (const person of people) {
  const { name: personName, born, died, sex } = person;
  const gender = sex === 'm' ? 'Male' : 'Female';

  table.insertAdjacentHTML(
    'beforeend',
    `<tr>
      <td>${personName}</td>
      <td>${gender}</td>
      <td>${born}</td>
      <td>${died}</td>
      <td>${died - born}</td>
      <td>${Math.ceil(died / 100)}</td>
    </tr>
    `
  );
}
