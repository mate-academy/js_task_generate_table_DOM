'use strict';

import people from './people.json';

const table = document.querySelector('.dashboard');

people.forEach(({ died, born, sex, name: personName }) => {
  const tableRow = document.createElement('tr');

  tableRow.innerHTML = `
    <td>${personName}</td>
    <td>${sex === 'm' ? 'Male' : 'Female'}</td>
    <td>${born}</td>
    <td>${died}</td>
    <td>${died - born}</td>
    <td>${getCentury(died)}</td>
  `;
  table.append(tableRow);
});

function getCentury(year) {
  return Math.ceil(year / 100);
}
