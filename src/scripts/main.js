'use strict';

import people from './people.json';

const table =
  document.querySelector('.dashboard tbody') ||
  document.querySelector('.dashboard');

for (const person of people) {
  const tr = document.createElement('tr');

  const gender = person.sex === 'm' ? 'Male' : 'Female';

  const age = person.died - person.born;
  const century = Math.ceil(person.died / 100);

  tr.innerHTML = `
    <td>${person.name}</td>
    <td>${gender}</td>
    <td>${person.born}</td>
    <td>${person.died}</td>
    <td>${age}</td>
    <td>${century}</td>
  `;

  table.appendChild(tr);
}
