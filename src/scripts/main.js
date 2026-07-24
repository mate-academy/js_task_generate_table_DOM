'use strict';

import people from './lib/people.json';

// eslint-disable-next-line no-console
console.log(people); // you can remove it

const table = document.querySelector('.dashboard');
const fragment = new DocumentFragment();

for (const person of people) {
  const row = document.createElement('tr');
  const cellsData = [
    person.name,
    person.sex === 'f' ? 'Female' : 'Male',
    person.born,
    person.died,
    person.died - person.born,
    Math.ceil(person.died / 100),
  ];

  for (const data of cellsData) {
    const cell = document.createElement('td');

    cell.textContent = data;
    row.append(cell);
  }

  fragment.append(row);
}

table.append(fragment);
