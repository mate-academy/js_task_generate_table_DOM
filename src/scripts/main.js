'use strict';

import people from './lib/people.json';

const table = document.querySelector('.dashboard');

for (const person of people) {
  const age = person.died - person.born;
  const century = Math.ceil(person.died / 100);
  const row = document.createElement('tr');

  const values = [
    person.name,
    person.sex === 'm' ? 'Male' : 'Female',
    person.born,
    person.died,
    age,
    century,
  ];

  for (const value of values) {
    const cell = document.createElement('td');

    cell.textContent = value;
    row.appendChild(cell);
  }
  table.appendChild(row);
}
