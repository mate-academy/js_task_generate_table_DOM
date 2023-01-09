'use strict';

const people = require('./lib/people');

// eslint-disable-next-line no-console
console.log(people); // you can remove it

const table = document.querySelector('.dashboard');

for (let j = 0; j < people.length; j++) {
  const newRow = document.createElement('tr');
  const data = Object.values(people[j]);

  for (let i = 0; i < 6; i++) {
    const newCell = document.createElement('td');

    newCell.textContent = data[i];

    if (i === 1) {
      if (newCell.textContent === 'm') {
        newCell.textContent = 'Male';
      } else {
        newCell.textContent = 'Female';
      }
    }

    if (i === 4) {
      newCell.textContent = data[3] - data[2];
    }

    if (i === 5) {
      newCell.textContent = Math.ceil(data[3] / 100);
    }

    newRow.append(newCell);
  }

  table.append(newRow);
}
