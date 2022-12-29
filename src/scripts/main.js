'use strict';

const people = require('./lib/people.json');

// eslint-disable-next-line no-console
console.log(people);

const table = document.querySelector('.dashboard');

for (const person of people) {
  const row = document.createElement('tr');

  if (person.sex === 'm') {
    person.sex = 'Male';
  };

  if (person.sex === 'f') {
    person.sex = 'Female';
  };

  row.innerHTML = `
    <th>${person.name}</th>
    <th>${person.sex}</th>
    <th>${person.born}</th>
    <th>${person.died}</th>
    <th>${person.died - person.born}</th>
    <th>${Math.ceil(person.died / 100)}</th>
  `;

  table.append(row);
}
