'use strict';

const people = require('./lib/people');

// eslint-disable-next-line no-console
console.log(people); // you can remove it

const table = document.querySelector('.dashboard');

people.forEach(function(obj) {
  if (obj.sex === 'm') {
    obj.sex = obj.sex.toUpperCase() + 'ale';
  } else {
    obj.sex = obj.sex.toUpperCase() + 'emale';
  }

  const tableRow = document.createElement('tr');
  const person = {
    name: obj.name,
    gender: obj.sex,
    born: obj.born,
    died: obj.died,
    age: obj.died - obj.born,
    century: Math.ceil(obj.died / 100),
  };

  const properties = Object.keys(person);

  properties.forEach(function(prop) {
    const cell = document.createElement('td');

    cell.textContent = person[prop];
    tableRow.appendChild(cell);
  });

  table.appendChild(tableRow);
});
