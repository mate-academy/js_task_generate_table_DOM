'use strict';

const people = require('./lib/people');

const list = document.querySelector('.dashboard');

for (const person of people) {
  const age = person.died - person.born;
  const gender = person.sex === 'm' ? 'Male' : 'Female';
  const century = Math.ceil(person.died / 100);

  const tr = document.createElement('tr');

  tr.innerHTML = `
    <td>${person.name}</td>
    <td>${gender}</td>
    <td>${person.born}</td>
    <td>${person.died}</td>
    <td>${age}</td>
    <td>${century}</td>
`;

  list.append(tr);
}
