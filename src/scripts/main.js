'use strict';

const people = require('./lib/people');

// eslint-disable-next-line no-console
console.log(people); // you can remove it

const text = document.querySelector('table');

for (const person of people) {
  const table = document.createElement('tr');
  const sex = person.sex === 'm' ? 'Male' : 'Female';

  table.innerHTML = `
    <th>${person.name}</th>
    <th>${sex}</th>
    <th>${person.born}</th>
    <th>${person.died}</th>
    <th>${person.died - person.born}</th>
    <th>${Math.ceil(person.died / 100)}</th>
    `;

  text.append(table);
}
