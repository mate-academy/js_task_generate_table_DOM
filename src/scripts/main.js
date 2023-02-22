'use strict';

const people = require('./lib/people');
const tableBody = document.querySelector('tbody');

// eslint-disable-next-line no-console, no-shadow
const createPersonRow = ({ name, sex, born, died }) => {
  const tableRow = document.createElement('tr');

  tableRow.innerHTML = `
    <td>${name}</td>
    <td>${sex === 'f' ? 'Female' : 'Male'}</td>
    <td>${born}</td>
    <td>${died}</td>
    <td>${died - born}</td>
    <td>${Math.ceil(died / 100)}</td>
  `;

  return tableRow;
};

people.forEach(person => {
  tableBody.append(createPersonRow(person));
});
