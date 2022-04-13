/* eslint-disable semi */
'use strict';

const people = require('./lib/people');

const table = document.querySelector('.dashboard');

for (const person of people) {
  const row = document.createElement('tr');

  for (let i = 1; i <= 6; i++) {
    const cell = document.createElement('th');

    switch (i) {
      case 1:
        cell.innerText = person.name;
        break;
      case 2:
        cell.innerText = person.sex === 'm'
          ? 'Male'
          : 'Female';
        break;
      case 3:
        cell.innerText = person.born;
        break;
      case 4:
        cell.innerText = person.died;
        break;
      case 5:
        cell.innerText = person.died - person.born;
        break;
      case 6:
        cell.innerText = Math.ceil(person.died / 100);
        break;
    }

    row.append(cell);
  }

  table.append(row);
}
