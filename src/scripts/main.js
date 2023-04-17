'use strict';

const people = require('./lib/people');
const tbody = document.querySelector('tbody');

for (const person of people) {
  const { sex, born, died } = person;
  const sexy = (sex === 'm') ? 'Male' : 'Female';

  const inputTableRow
    = `<tr>
    <td>${person.name}</td>
    <td>${sexy}</td>
    <td>${born}</td>
    <td>${died}</td>
    <td>${died - born}</td>
    <td>${Math.ceil(died / 100)}</td>
    </tr>`;

  tbody.insertAdjacentHTML('beforeend', inputTableRow);
}
