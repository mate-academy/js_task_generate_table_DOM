'use strict';

const people = require('./lib/people');
const table = document.querySelector('.dashboard');

for (const person of people) {
  const tr = document.createElement('tr');
  const sex = person.sex === 'm' ? 'Male' : 'Female';
  const age = person.died - person.born;
  const century = Math.ceil(person.died / 100);

  tr.innerHTML = `
    <td>${person.name}</td>
    <td>${sex}</td>
    <td>${person.born}</td>
    <td>${person.died}</td>
    <td>${age}</td>
    <td>${century}</t>
  `;

  table.append(tr);
}
