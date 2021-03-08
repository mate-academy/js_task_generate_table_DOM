'use strict';

const people = require('./lib/people');
const table = document.querySelector('.dashboard tbody');

function addToTable(map, data) {
  return data.forEach(person => {
    map.insertAdjacentHTML('beforeend', `
      <tr>
        <td>${person.name}</td>
        <td>${person.sex === 'm' ? 'Male' : 'Female'}</td>
        <td>${person.born}</td>
        <td>${person.died}</td>
        <td>${person.died - person.born}</td>
        <td>${Math.ceil(person.died / 100)}</td>
      </tr>
    `);
  });
}

addToTable(table, people);
