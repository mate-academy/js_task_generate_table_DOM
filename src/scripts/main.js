'use strict';

const people = require('./lib/people');

const tableElement = document.querySelector('table');

for (const person of people) {
  const tableRowElement = document.createElement('tr');

  tableRowElement.innerHTML = `
    <th>${person.name}</th>
    <th>${person.sex === 'f' ? 'Female' : 'Male'}</th>
    <th>${person.born}</th>
    <th>${person.died}</th>
    <th>${person.died - person.born}</th>
    <th>${Math.ceil(person.died / 100)}</th>`;

  tableElement.append(tableRowElement);
}
