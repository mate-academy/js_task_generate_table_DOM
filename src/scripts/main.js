'use strict';

const people = require('./lib/people');

// eslint-disable-next-line no-console
console.log(people); // you can remove it

// write your code here

const dashboard = document.querySelector('.dashboard');

for (const person of people) {
  const tableRow = document.createElement('tr');

  const {name, sex, born, died} = person;

  tableRow.innerHTML = `
  <td>${name}</td>
  <td>${sex === 'm' ? 'Male' : 'Female'}</td>
  <td>${born}</td>
  <td>${died}</td>
  <td>${died - born}</td>
  <td>${Math.ceil(died / 100)}</td>
  `;

  dashboard.append(tableRow);
}

