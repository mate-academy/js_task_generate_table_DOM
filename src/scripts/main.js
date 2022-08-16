'use strict';

const people = require('./lib/people');

const table = document.querySelector('.dashboard');

const tableData = people.map(person => ({
  name: person.name,
  gender: person.sex === 'm' ? 'Male' : 'Female',
  born: person.born,
  died: person.died,
  age: person.died - person.born,
  century: Math.ceil(person.died / 100),
}));

tableData.forEach(person => {
  const row = document.createElement('tr');

  for (const data in person) {
    const item = tableCell(person[data]);

    row.append(item);
  }

  table.append(row);
});

function tableCell(value) {
  const cell = document.createElement('td');

  cell.textContent = value;

  return cell;
}
