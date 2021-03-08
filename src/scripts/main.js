'use strict';

const people = require('./lib/people');

const table = document.querySelector('.dashboard');

function createRowElement(value) {
  const createdRowElement = document.createElement('td');

  createdRowElement.innerHTML = value;

  return createdRowElement;
}

for (const person of people) {
  const createdRow = document.createElement('tr');

  createdRow.append(createRowElement(person.name));
  createdRow.append(createRowElement(person.sex === 'm' ? 'Male' : 'Female'));
  createdRow.append(createRowElement(person.born));
  createdRow.append(createRowElement(person.died));
  createdRow.append(createRowElement(person.died - person.born));
  createdRow.append(createRowElement(Math.ceil(person.born / 100)));

  table.lastChild.after(createdRow);
}
