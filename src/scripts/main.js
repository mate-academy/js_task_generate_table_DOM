'use strict';

const people = require('./lib/people');

const table = document.querySelector('.dashboard');

const tableHead = document.querySelectorAll('th');

for (const person of people) {
  const row = document.createElement('tr');

  row.className = `${person.name}`;
  table.append(row);

  for (let j = 0; j < tableHead.length; j++) {
    const cell = document.createElement('td');

    switch (tableHead[j].innerText) {
      case 'Age':
        cell.innerText = person.died - person.born;
        row.append(cell);
        break;
      case 'Century':
        cell.innerText = Math.floor(person.died / 100);
        row.append(cell);
        break;
      case 'Gender' :
        person.sex === 'm'
          ? cell.innerText = 'Male'
          : cell.innerText = 'Famale';
        row.append(cell);
        break;
      default:
        cell.innerText = person[tableHead[j].innerText.toLowerCase()];
        row.append(cell);
    }
  }
}
