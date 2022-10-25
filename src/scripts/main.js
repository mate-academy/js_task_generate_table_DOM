'use strict';

const people = require('./lib/people');

const table = document.querySelector('tbody');

function getGender(gender) {
  return gender === 'm' ? 'Male' : 'Female';
}

makeTable(people);

function makeTable(arr) {
  arr.forEach(person => {
    table.insertAdjacentHTML(
      'beforeend',
      `
      <tr>
        <td>${person.name}</td>
        <td>${getGender(person.sex)}</td>
        <td>${person.born}</td>
        <td>${person.died}</td>
        <td>${person.died - person.born}</td>
        <td>${Math.ceil(person.died / 100)}</td>
      `);
  });
}
