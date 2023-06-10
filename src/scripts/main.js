'use strict';

const people = require('./lib/people');
const dashboard = document.querySelector('.dashboard');

[...people].forEach(person => {
  const tabelRow = document.createElement('tr');

  tabelRow.innerHTML = `
    <td>${person.name}</td>
    <td>${person.sex === 'm' ? 'Male' : 'Female'}</td>
    <td>${person.born}</td>
    <td>${person.died}</td>
    <td>${person.died - person.born}</td>
    <td>${Math.ceil(person.born / 100)}</td>
  `;

  dashboard.insertAdjacentElement('beforeend', tabelRow);
});
