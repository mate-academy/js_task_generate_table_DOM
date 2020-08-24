'use strict';

const people = require('./lib/people');

const target = document.querySelector('.dashboard tbody');

for (const person of people) {
  const row = document.createElement('tr');

  const gender = person.sex === 'm'
    ? 'Male'
    : 'Female';

  row.innerHTML += `
    <td>${person.name}</td>
    <td>${gender}</td>
    <td>${person.born}</td>
    <td>${person.died}</td>
    <td>${person.died - person.born}</td>
    <td>${Math.ceil(person.died / 100)}</td>
  `;

  target.appendChild(row);
}
