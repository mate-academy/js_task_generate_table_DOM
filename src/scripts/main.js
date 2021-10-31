'use strict';

const people = require('./lib/people');

// write your code here
const tabelOfPeople = document.querySelector('table.dashboard > tbody');

for (const element of people) {
  const cells = `
  <td>${element.name}</td>
  <td>${element.sex === 'm' ? 'Male' : 'Female'}</td>
  <td>${element.born}</td>
  <td>${element.died}</td>
  <td>${element.died - element.born}</td>
  <td>${Math.ceil(element.died / 100)}</td>`;
  const row = document.createElement('tr');

  row.innerHTML = cells;
  tabelOfPeople.append(row);
}
