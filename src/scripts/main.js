'use strict';

const people = require('./lib/people');

// write your code here
const table = document.querySelector('.dashboard');

for (const person of people) {
  const tableRow = document.createElement('tr');

  const age = person.died - person.born;
  const century = Math.ceil(person.died / 100);

  tableRow.insertAdjacentHTML('beforeend', `<td>${person.name}</td>`);

  if (person.sex === 'm') {
    tableRow.insertAdjacentHTML('beforeend', `<td>${'Male'}</td>`);
  } else {
    tableRow.insertAdjacentHTML('beforeend', `<td>${'Female'}</td>`);
  }
  tableRow.insertAdjacentHTML('beforeend', `<td>${person.born}</td>`);
  tableRow.insertAdjacentHTML('beforeend', `<td>${person.died}</td>`);
  tableRow.insertAdjacentHTML('beforeend', `<td>${age}</td>`);
  tableRow.insertAdjacentHTML('beforeend', `<td>${century}</td>`);
  table.append(tableRow);
}
