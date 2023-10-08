'use strict';

const people = require('./lib/people');

function createTableRow(person) {
  const age = person.died - person.born;
  const century = Math.ceil(person.died / 100);

  const trEl = document.createElement('tr');

  trEl.innerHTML = `
    <td>${person.name}</td>
    <td>${person.sex === 'm' ? 'Male' : 'Female'}</td>
    <td>${person.born}</td>
    <td>${person.died}</td>
    <td>${age}</td>
    <td>${century}</td>
  `;

  return trEl;
}

const dashboardTable = document.querySelector('.dashboard tbody');

people.forEach(person => {
  const tr = createTableRow(person);

  dashboardTable.appendChild(tr);
});
