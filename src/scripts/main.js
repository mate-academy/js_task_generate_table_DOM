'use strict';

const people = require('./lib/people');

const table = document.querySelector('table');

for (const person of people) {
  const row = document.createElement('tr');

  person.age = person.died - person.born;
  person.century = Math.ceil(person.died / 100);

  const sex = person.sex === 'm' ? 'Male' : 'Female';

  row.innerHTML = `<th>${person.name}</th>
  <th>${sex}</th>
  <th>${person.born}</th>
  <th>${person.died}</th>
  <th>${person.age}</th>
  <th>${person.century}</th>
  `;

  table.append(row);
}
