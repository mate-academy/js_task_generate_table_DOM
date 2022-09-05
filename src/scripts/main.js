'use strict';

const people = require('./lib/people');

const table = document.querySelector('.dashboard');

for (const person of people) {
  const age = person.died - person.born;
  const century = Math.ceil(person.died / 100);
  const sex = (person.sex === 'f') ? 'Female' : 'Male';
  const tr = document.createElement('tr');

  tr.innerHTML = `
    <td>${person.name}</td>
    <td>${sex}</td>
    <td>${person.born}</td>
    <td>${person.died}</td>
    <td>${age}</td>
    <td>${century}</td>
  `;
  table.append(tr);
}
