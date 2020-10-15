'use strict';

const people = require('./lib/people');

const table = document.querySelector('.dashboard');

for (const person of people) {
  const row = document.createElement('tr');
  const { name, born, died } = person;

  const sex = person.sex === 'm' ? 'Male' : 'Female';
  const century = Math.ceil(died / 100);

  row.innerHTML = `
        <th>${name}</th>
        <th>${sex}</th>
        <th>${born}</th>
        <th>${died}</th>
        <th>${died - born}</th>
        <th>${century}</th>
  `;

  table.append(row);
}
