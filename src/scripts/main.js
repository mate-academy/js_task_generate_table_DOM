'use strict';

const people = require('./lib/people.json');
const table = document.querySelector('.dashboard');

for (const person of people) {
  const row = document.createElement('tr');
  const personSex = person.sex === 'm' ? 'Male' : 'Female';
  const personAge = person.died - person.born;
  const personCentury = Math.ceil(person.died / 100);

  row.innerHTML = `
    <th>${person.name}</th>
    <th>${personSex}</th>
    <th>${person.born}</th>
    <th>${person.died}</th>
    <th>${personAge}</th>
    <th>${personCentury}</th>
  `;

  table.append(row);
}
