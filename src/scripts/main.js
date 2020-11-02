'use strict';

const people = require('./lib/people');

// eslint-disable-next-line no-console

const tableBoard = document.querySelector('.dashboard');

function generateTable(table, data) {
  for (const el of data) {
    const row = table.insertRow();

    const name = row.insertCell(0);
    const gender = row.insertCell(1);
    const born = row.insertCell(2);
    const died = row.insertCell(3);
    const age = row.insertCell(4);
    const century = row.insertCell(5);

    name.innerText = el.name;
    gender.innerText = el.sex === 'm' ? 'Male' : 'Female';
    born.innerText = el.born;
    died.innerText = el.died;
    age.innerText = el.died - el.born;
    century.innerText = Math.ceil(el.died / 100);

    table.append(row);
  }
}

generateTable(tableBoard, people);
