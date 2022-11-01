'use strict';

const people = require('./lib/people');
const table = document.querySelector('.dashboard');

let tableKeys = [...document.querySelectorAll('th')];

tableKeys = tableKeys.map(item => item.innerText.toLowerCase());

// eslint-disable-next-line no-console
people.forEach(person => {
  const tableRow = document.createElement('tr');

  for (const criteria of tableKeys) {
    const cell = document.createElement('td');

    if (criteria === 'age') {
      cell.innerText = person.died - person.born;
    } else if (criteria === 'century') {
      cell.innerText = Math.ceil(person.died / 100);
    } else if (criteria === 'gender') {
      cell.innerHTML = person.sex === 'm'
        ? 'Male'
        : 'Female';
    } else {
      cell.innerText = person[criteria];
    }

    tableRow.appendChild(cell);
  }

  table.appendChild(tableRow);
});
