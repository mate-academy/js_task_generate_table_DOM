'use strict';

const people = require('./lib/people');

// eslint-disable-next-line no-console
console.log(people); // you can remove it

people.forEach(person => {
  const tableRow = document.createElement('tr');
  const table = document.querySelector('.dashboard');

  tableRow.insertCell().innerText = person.name;
  tableRow.insertCell().innerText = person.sex === 'm' ? 'Male' : 'Female';
  tableRow.insertCell().innerText = person.born;
  tableRow.insertCell().innerText = person.died;
  tableRow.insertCell().innerText = person.died - person.born;
  tableRow.insertCell().innerText = Math.ceil(person.died / 100);

  table.append(tableRow);
});
