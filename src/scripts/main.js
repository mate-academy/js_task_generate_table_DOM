'use strict';

import people from './people.json';

const table = document.querySelector('.dashboard');

people.forEach((person) => {
  const row = document.createElement('tr');

  const age = person.died - person.born;
  const century = Math.ceil(person.died / 100);

  const values = [
    person.name,
    person.sex,
    person.born,
    person.died,
    age,
    century,
  ];

  values.forEach((value) => {
    const cell = document.createElement('td');
    cell.textContent = value;
    row.appendChild(cell);
  });

  table.appendChild(row);
});
