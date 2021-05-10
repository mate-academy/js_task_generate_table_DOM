'use strict';

const people = require('./lib/people');

const tableBody = document.querySelector('tBody');

for (let i = 0; i < people.length; i++) {
  const tableRow = formRow(people[i]);

  tableBody.insertAdjacentHTML('beforeend', tableRow);
}

function formRow(person) {
  const age = person.died - person.born;
  const century = Math.ceil(person.died / 100);
  const gender = person.sex === 'f' ? 'Female' : 'Male';
  const row = `<tr>
    <td>${person.name}</td>
    <td>${gender}</td>
    <td>${person.born}</td>
    <td>${person.died}</td>
    <td>${age}</td>
    <td>${century}</td>
  </tr>`;

  return row;
}
