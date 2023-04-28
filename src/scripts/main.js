'use strict';

const people = require('./lib/people');
const dashboard = document.querySelector('.dashboard');

// eslint-disable-next-line no-console
for (const person of people) {
  const row = document.createElement('tr');

  appendCell(row, person.name);
  appendCell(row, person.sex);
  appendCell(row, person.born);
  appendCell(row, person.died);
  appendCell(row, person.died - person.born);
  appendCell(row, Math.ceil(person.died / 100));

  dashboard.append(row);
}

function appendCell(row, content) {
  const cell = document.createElement('td');

  cell.innerText = content;
  row.append(cell);
}
