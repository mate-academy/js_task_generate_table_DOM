'use strict';

const people = require('./lib/people');

const table = document.querySelector('.dashboard');

for (const rowData of [...people]) {
  const trElement = document.createElement('tr');
  const sex = (rowData.sex === 'm') ? 'Male' : 'Female';

  table.appendChild(trElement);

  createTdWithContentAndAppend(rowData.name, trElement);
  createTdWithContentAndAppend(sex, trElement);
  createTdWithContentAndAppend(rowData.born, trElement);
  createTdWithContentAndAppend(rowData.died, trElement);
  createTdWithContentAndAppend(rowData.died - rowData.born, trElement);
  createTdWithContentAndAppend(Math.ceil(rowData.died / 100), trElement);
}

function createTdWithContentAndAppend(text, parentElement) {
  const tdElement = document.createElement('td');

  parentElement.appendChild(tdElement);
  tdElement.textContent = text;

  return tdElement;
}
