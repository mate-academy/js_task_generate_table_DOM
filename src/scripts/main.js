'use strict';

const people = require('./lib/people');

const tableElement = document.querySelector('.dashboard');

people.forEach(person => {
  const newRow = document.createElement('tr');

  newRow.innerHTML = `
    <td>${person.name}</td>
    <td>${person.sex === 'm' ? 'Male' : 'Female'}</td>
    <td>${person.born}</td>
    <td>${person.died}</td>
    <td>${person.died - person.born}</td>
    <td>${Math.ceil(person.died / 100)}</td>
  `;

  tableElement.append(newRow);
});
