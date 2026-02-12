'use strict';

import people from '../data/people.json';

const table = document.querySelector('.dashboard');

if (!table) {
  throw new Error('Table dashboard not found');
}

const tBody =
  table.tBodies[0] || table.appendChild(document.createElement('tBody'));

people.forEach((person) => {
  const row = tBody.insertRow();

  row.insertCell().textContent = person.name;
  row.insertCell().textContent = person.sex === 'f' ? 'Female' : 'Male';
  row.insertCell().textContent = person.born;
  row.insertCell().textContent = person.died;
  row.insertCell().textContent = person.died - person.born;
  row.insertCell().textContent = Math.ceil(person.died / 100);
});
