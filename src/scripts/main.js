'use strict';

const people = require('./lib/people');

const table = document.querySelector('tbody');

function gender(p) {
  if (p === 'm') {
    return 'Male';
  }

  return 'Female';
}

makeTable(people);

function makeTable(arr) {
  arr.forEach(person => {
    table.insertAdjacentHTML(
      'beforeend',
      `
      <tr>
        <td>${person.name}</td>
        <td>${gender(person.sex)}</td>
        <td>${person.born}</td>
        <td>${person.died}</td>
        <td>${person.died - person.born}</td>
        <td>${Math.ceil(person.died / 100)}</td>
      `);
  });
}
