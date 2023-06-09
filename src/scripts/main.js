'use strict';

function sexFormater(str) {
  return str === 'm' ? 'Male' : 'Female';
}

function getCentury(died) {
  return Math.ceil(died / 100);
}

const people = require('./lib/people');
const dashboardTable = document.querySelector('.dashboard');

for (const person of people) {
  const row = document.createElement('tr');

  row.insertAdjacentHTML('beforeend', `
    <td>${person.name}</td>
    <td>${sexFormater(person.sex)}</td>
    <td>${person.born}</td>
    <td>${person.died}</td>
    <td>${person.died - person.born}</td>
    <td>${getCentury(person.died)}</td>
  `);

  dashboardTable.append(row);
}
