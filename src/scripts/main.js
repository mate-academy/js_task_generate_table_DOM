'use strict';

const people = require('./lib/people');
const table = document.querySelector('.dashboard');

for (const person of people) {
  const personAge = person.died - person.born;
  const personCentury = Math.ceil(person.died / 100);
  const row = document.createElement('tr');

  const personRow = `
  <td>${person.name}</td>
  <td>${person.sex === 'm' ? 'Male' : 'Female'}</td>
  <td>${person.born}</td>
  <td>${person.died}</td>
  <td>${personAge}</td>
  <td>${personCentury}</td>
`;

  row.innerHTML = personRow;
  table.append(row);
}
