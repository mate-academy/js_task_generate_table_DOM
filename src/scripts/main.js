'use strict';

const people = require('./lib/people');
const table = document.querySelector('.dashboard');

people.forEach((person) => {
  const age = person.died - person.born;
  const century = Math.ceil(person.died / 100);
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
