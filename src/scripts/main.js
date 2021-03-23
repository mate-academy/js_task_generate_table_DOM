'use strict';

const people = require('./lib/people');
const table = document.querySelector('.dashboard');

people.forEach(person => {
  const cells = [person.name, person.sex, person.born, person.died,
    person.died - person.born, Math.ceil(person.died / 100)];
  const row = document.createElement('tr');

  for (let cell of cells) {
    if (cell === 'f') {
      cell = 'Female';
    } else if (cell === 'm') {
      cell = 'Male';
    }

    const item = document.createElement('td');

    item.textContent = cell;
    row.append(item);
  }
  table.append(row);
});
