'use strict';

const people = require('./lib/people');
const table = document.querySelector('.dashboard');

for (let i = 0; i < people.length; i++) {
  const person = people[i];
  const row = document.createElement('tr');

  row.innerHTML = `<td>${person.name}</td>
  <td>${person.sex === 'm' ? 'male' : 'female'}</td>
  <td>${person.born}</td>
  <td>${person.died}</td>
  <td>${person.died - person.born}</td>
  <td>${Math.ceil(person.died / 100)}</td>`;

  table.append(row);
};
