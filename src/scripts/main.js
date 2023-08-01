'use strict';

const people = require('./lib/people');

function calculateAge(person) {
  return person.died - person.born;
}

function calculateCentury(person) {
  return Math.ceil(person.died / 100);
}

function createTableRows() {
  const table = document.querySelector('.dashboard');

  for (const person of people) {
  const row = document.createElement('tr');

  row.innerHTML = `
    <td>${person.name}</td>
    <td>${person.sex}</td>
    <td>${person.born}</td>
    <td>${person.died}</td>
    <td>${age}</td>
    <td>${century}</td>
  `;

  table.append(row);
  });
}

createTableRows();
