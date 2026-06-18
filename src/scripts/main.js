'use strict';

import people from './lib/people.json';

document.addEventListener('DOMContentLoaded', () => {
  renderTable(people);
});

function renderTable(data) {
  const tbody = document.querySelector('tbody');

  data.forEach((person) => {
    const row = document.createElement('tr');

    const age = person.died - person.born;
    const century = Math.ceil(person.died / 100);
    const sex = person.sex === 'm' ? 'Male' : 'Female';

    row.innerHTML = `
      <td>${person.name}</td>
      <td>${person.born}</td>
      <td>${person.died}</td>
      <td>${age}</td>
      <td>${century}</td>
      <td>${sex}</td>
    `;

    tbody.appendChild(row);
  });
}
