'use strict';

const people = require('./lib/people');
const table = document.querySelector('.dashboard');

for (const person of people) {
  const personLine = document.createElement('tr');

  person.age = person.died - person.born;
  person.century = Math.ceil(person.died / 100);

  personLine.innerHTML = `
    <td>${person.name}</td>
    <td>${person.sex === 'm' ? 'Male' : 'Female'}</td>
    <td>${person.born}</td>
    <td>${person.died}</td>
    <td>${person.age}</td>
    <td>${person.century}</td>
  `;

  table.append(personLine);
};
