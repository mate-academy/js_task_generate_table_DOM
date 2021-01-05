'use strict';

const people = require('./lib/people');

// eslint-disable-next-line no-console
console.log(people); // you can remove it

const table = document.querySelector('.dashboard');

for (const person of people) {
  const row = document.createElement('tr');

  const createCell = function(data) {
    const cell = document.createElement('td');

    cell.innerHTML = data;

    row.append(cell);

    table.children[0].append(row);
  };

  createCell(person.name);

  createCell(person.sex === 'f' ? 'Female' : 'Male');

  createCell(person.born);

  createCell(person.died);

  createCell(person.died - person.born);

  createCell(Math.ceil(person.died / 100));
}
