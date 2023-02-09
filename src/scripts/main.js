'use strict';

const people = require('./lib/people');
const table = document.querySelector('.dashboard');

function createCell(text) {
  const cell = document.createElement('td');

  cell.innerHTML = text;

  return cell;
}

function createRow(row, cells) {
  for (let i = 0; i < cells.length; i++) {
    row.append(cells[i]);
  }
}

for (let i = 0; i < people.length; i++) {
  const tableRow = document.createElement('tr');
  const age = people[i].died - people[i].born;
  const century = Math.ceil(people[i].died / 100);

  const cells = [
    createCell(people[i].name),
    createCell(people[i].sex),
    createCell(people[i].born),
    createCell(people[i].died),
    createCell(age),
    createCell(century),
  ];

  createRow(tableRow, cells);
  table.append(tableRow);
}
