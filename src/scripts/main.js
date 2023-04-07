'use strict';

const people = require('./lib/people');

const dashboard = document.querySelector('table');

for (const person of people) {
  const agePerson = person.died - person.born;
  const centuryPerson = Math.ceil(person.died / 100);
  const correctSex = person.sex === 'm' ? 'Male' : 'Female';
  const tableRow = document.createElement('tr');

  tableRow.innerHTML = `
    <td>${person.name}</td>
    <td>${correctSex}</td>
    <td>${person.born}</td>
    <td>${person.died}</td>
    <td>${agePerson}</td>
    <td>${centuryPerson}</td>
  `;

  dashboard.append(tableRow);
};
