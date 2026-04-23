'use strict';

import people from '../data/people.json';

const table = document.querySelector('.dashboard');

createAndFillTable();

function createAndFillTable() {
  if (!table) {
    console.error('Table .dashboard not found');
    return;
  }

  const tBody =
    table.tBodies[0] || table.appendChild(document.createElement('tbody'));

  people.forEach((person) => {
    const row = tBody.insertRow();

    row.insertCell().textContent = person.name;
    row.insertCell().textContent =
      person.sex === 'f' ? 'Female' : person.sex === 'm' ? 'Male' : 'Unknown';
    row.insertCell().textContent = person.born;
    row.insertCell().textContent = person.died;
    row.insertCell().textContent = person.died - person.born;
    row.insertCell().textContent = Math.ceil(person.died / 100);
  });
}
