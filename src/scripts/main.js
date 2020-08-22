'use strict';

const people = require('./lib/people');

const table = document.querySelector('.dashboard tbody');

people.forEach(person => {
  const personInfo = [
    person.name,
    (person.sex === 'm') ? 'Male' : 'Female',
    person.born,
    person.died,
    person.died - person.born,
    Math.ceil(person.died / 100),
  ];

  const row = document.createElement('tr');

  for (const info of personInfo) {
    const cell = document.createElement('td');

    cell.textContent = info;

    row.append(cell);
  }

  table.append(row);
});
