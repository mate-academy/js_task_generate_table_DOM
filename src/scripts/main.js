'use strict';

const people = require('./lib/people');

function createRowWithData(person) {
  const tableRow = document.createElement('tr');
  // eslint-disable-next-line no-shadow
  const { name, sex, born, died } = person;

  const markup = `
  <td>${name}</td>
  <td>${sex === 'f' ? 'Female' : 'Male'}</td>
  <td>${born}</td>
  <td>${died}</td>
  <td>${died - born}</td>
  <td>${Math.ceil(died / 100)}</td>
  `;

  tableRow.insertAdjacentHTML('beforeend', markup);

  return tableRow;
}

function writeTable() {
  const table = document.querySelector('.dashboard');

  people.forEach(person => table.append(createRowWithData(person)));
}

writeTable();
