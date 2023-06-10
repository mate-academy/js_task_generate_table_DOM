'use strict';

const people = require('./lib/people');
const dashboard = document.querySelector('tbody');

[...people].forEach(({ name: fullName, sex, born, died }) => {
  const tabelRow = document.createElement('tr');

  tabelRow.innerHTML = `
    <td>${fullName}</td>
    <td>${sex === 'm' ? 'Male' : 'Female'}</td>
    <td>${born}</td>
    <td>${died}</td>
    <td>${died - born}</td>
    <td>${Math.ceil(died / 100)}</td>
  `;

  dashboard.insertAdjacentElement('beforeend', tabelRow);
});
