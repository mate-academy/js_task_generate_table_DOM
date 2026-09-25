'use strict';

import people from './lib/people.json';

const table = document.querySelector('.dashboard');

people.forEach((person) => {
  const row = document.createElement('tr');
  const values = [
    person.name,
    person.sex === 'm' ? 'Male' : 'Female',
    person.born,
    person.died,
    person.died - person.born,
    Math.ceil(person.died / 100),
  ];

  values.forEach((value) => {
    const cell = document.createElement('td');

    cell.textContent = value;
    row.append(cell);
  });

  table.append(row);
});
