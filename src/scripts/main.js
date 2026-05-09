'use strict';

import people from './lib/people.json';

const table = document.querySelector('.dashboard');

for (const person of people) {
  const row = document.createElement('tr');
  const age = person.died - person.born;
  const century = Math.ceil(person.died / 100);
  const gender = person.sex === 'm' ? 'Male' : 'Female';

  [person.name, gender, person.born, person.died, age, century].forEach(
    (value) => {
      const cell = document.createElement('td');

      cell.textContent = value;
      row.appendChild(cell);
    },
  );

  table.appendChild(row);
}
