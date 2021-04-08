'use strict';

const people = require('./lib/people');

const table = document.querySelector('table');

people.forEach(person => {
  table.appendChild(createRow(person));
});

function createRow(person) {
  const row = document.createElement('tr');
  const data = [];

  data.push(person.name);
  data.push(person.sex === 'm' ? 'Male' : 'Female');
  data.push(person.born);
  data.push(person.died);
  data.push(person.died - person.born);
  data.push(Math.ceil(person.died / 100));

  data.forEach(item => {
    row.appendChild(createCell(item));
  });

  return row;
}

function createCell(value) {
  const cell = document.createElement('td');

  cell.innerText = value;

  return cell;
}
