'use strict';

const people = require('./lib/people');

const table = document.querySelector('.dashboard').children[0];

function createRowElement(value, row) {
  const createdRowElement = document.createElement('td');

  createdRowElement.innerHTML = value + '';

  row.append(createdRowElement);
}

for (const person of people) {
  const createdRow = document.createElement('tr');

  createRowElement(person.name, createdRow);
  createRowElement(person.sex === 'm' ? 'Male' : 'Female', createdRow);
  createRowElement(person.born, createdRow);
  createRowElement(person.died, createdRow);
  createRowElement(person.died - person.born, createdRow);
  createRowElement(Math.ceil(person.died / 100), createdRow);

  table.append(createdRow);
}
