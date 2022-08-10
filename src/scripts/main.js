'use strict';

const people = require('./lib/people');

// eslint-disable-next-line no-console
console.log(people);

const table = document.querySelector('.dashboard');

for (const person of people) {
  const row = document.createElement('tr');

  person.sex = person.sex === 'm' ? 'male' : 'female';

  row.innerHTML = `
  <td>${person.name}</td>
  <td>${person.sex}</td>
  <td>${person.born}</td>
  <td>${person.died}</td>
  <td>${person.died - person.born}</td>
  <td>${Math.ceil(person.died / 100)}</td>
  `;
  table.append(row);
}
