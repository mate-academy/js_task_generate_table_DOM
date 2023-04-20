'use strict';

const people = require('./lib/people');

const table = document.querySelector('.dashboard');
const tableBody = table.querySelector('TBODY');
const cellCount = tableBody.children[0].children.length;
const fragmentRows = document.createDocumentFragment();

people.forEach((el) => {
  const row = document.createElement('TR');

  for (let i = 0; i < cellCount; i++) {
    const cell = document.createElement('TD');

    row.appendChild(cell);
  }

  row.children[0].innerText = el.name;
  row.children[1].innerText = (el.sex === 'm') ? 'male' : 'female';
  row.children[2].innerText = el.born;
  row.children[3].innerText = el.died;
  row.children[4].innerText = el.died - el.born;
  row.children[5].innerText = parseInt(el.died / 100);
  fragmentRows.appendChild(row);
});
tableBody.appendChild(fragmentRows);
