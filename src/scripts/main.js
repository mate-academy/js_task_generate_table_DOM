'use strict';

const people = require('./lib/people');

const table = document.querySelector('.dashboard tbody');

function checkSex(sex) {
  return sex === 'm' ? 'Male' : 'Female';
}

function fillTable(arr) {
  arr.forEach(person => {
    table.insertAdjacentHTML('beforeend', `
    <tr>
      <td>${person.name}</td>
      <td>${checkSex(person.sex)}</td>
      <td>${person.born}</td>
      <td>${person.died}</td>
      <td>${person.died - person.born}</td>
      <td>${Math.ceil(person.died / 100)}</td>
    </tr>
    `);
  });
}

fillTable(people);
