'use strict';

const people = require('./lib/people');

const result = document.querySelector('table');

for (const person of people) {
  const tr = document.createElement('tr');

  tr.innerHTML = `
    <td>${person.name}</td>
    <td>${person.sex === 'm' ? 'Male' : 'Female'}</td>
    <td>${person.born}</td>
    <td>${person.died}</td>
    <td>${person.died - person.born}</td>
    <td>${Math.ceil(person.died / 100)}</td>
`;
  result.append(tr);
}
