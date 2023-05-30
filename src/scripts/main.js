'use strict';

const people = require('./lib/people');
const table = document.querySelector('.dashboard');

people.forEach(({ name: personName, sex, born, died }) => {
  const tableRow = document.createElement('tr');
  const gender = sex === 'm'
    ? 'Male'
    : 'Female';

  const person = {
    name: personName,
    gender,
    born,
    died,
    age: died - born,
    century: Math.ceil(died / 100),
  };

  const properties = Object.keys(person);

  properties.forEach(function(prop) {
    const cell = document.createElement('td');

    cell.textContent = person[prop];
    tableRow.appendChild(cell);
  });

  table.appendChild(tableRow);
});
