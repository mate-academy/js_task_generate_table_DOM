'use strict';

const people = require('./lib/people');

const table = document.querySelector('.dashboard');

people.forEach(person => {
  if (person.sex === 'f') {
    person.sex = 'Female';
  } else {
    person.sex = 'Male';
  }
});

people.forEach(person => {
  const row = document.createElement('tr');
  const { name: personName, sex, born, died } = person;

  row.innerHTML = `
    <td>${personName}</td>
    <td>${sex}</td>
    <td>${born}</td>
    <td>${died}</td>
    <td>${died - born}</td>
    <td>${Math.ceil(died / 100)}</td>
  `;
  table.append(row);
});
