'use strict';

const people = require('./lib/people');

// eslint-disable-next-line no-console
console.log(people); // you can remove it

people.map(person => {
  const newRow = document.createElement('tr');

  newRow.append(createCell(person.name));
  newRow.append(createCell(person.sex));
  newRow.append(createCell(person.born));
  newRow.append(createCell(person.died));
  newRow.append(createCell(person.died - person.born));
  newRow.append(createCell(Math.ceil(person.died / 100)));

  document.body.firstElementChild.append(newRow);
});

function createCell(parameter) {
  const newCell = document.createElement('td');

  newCell.innerText = parameter;

  return newCell;
}
