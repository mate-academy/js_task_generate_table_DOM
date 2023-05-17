'use strict';

const people = require('./lib/people');

people.forEach(users => {
  const table = document.querySelector('.dashboard');
  const newRow = document.createElement('tr');

  const cell1 = document.createElement('td');
  const cell2 = document.createElement('td');
  const cell3 = document.createElement('td');
  const cell4 = document.createElement('td');
  const cell5 = document.createElement('td');
  const cell6 = document.createElement('td');

  cell1.textContent = users.name;

  if (users.sex === 'f') {
    cell2.textContent = 'Female';
  } else {
    cell2.textContent = 'Male';
  }
  
  cell3.textContent = users.born;
  cell4.textContent = users.died;
  cell5.textContent = (users.died - users.born);
  cell6.textContent = Math.ceil(users.died / 100);

  newRow.appendChild(cell1);
  newRow.appendChild(cell2);
  newRow.appendChild(cell3);
  newRow.appendChild(cell4);
  newRow.appendChild(cell5);
  newRow.appendChild(cell6);

  const lastRow = table.querySelector('tbody tr:last-child');

  lastRow.insertAdjacentElement('afterend', newRow);
});
