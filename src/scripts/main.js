'use strict';

const people = require('./lib/people');
const table = document.querySelector('.dashboard');

let tableKeys = {};

[...document.querySelectorAll('th')].map(item => {
  tableKeys[item.innerText.toLowerCase()] = item.innerText.toLowerCase();
});

const gender = {
  m: 'Male',
  f: 'Female',
};
// eslint-disable-next-line no-console

people.forEach(person => {
  const tableRow = document.createElement('tr');

  for (const criteria in tableKeys) {
    const cell = document.createElement('td');

    switch (criteria) {
      case tableKeys.age:
        cell.innerText = person.died - person.born;
        break;

      case tableKeys.gender:
        cell.innerHTML = gender[person.sex];
        break;

      case tableKeys.century:
        cell.innerText = Math.ceil(person.died / 100);
        break;

      default:
        cell.innerText = person[criteria];
    }

    tableRow.appendChild(cell);
  }

  table.appendChild(tableRow);
});
