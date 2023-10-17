'use strict';

const people = require('./lib/people');

const tableElement = document.querySelector('.dashboard');

people.forEach(person => {
  const row = tableElement.insertRow();

  const cells = [];

  [0, 1, 2, 3, 4, 5].forEach((cell) => {
    cells.push(row.insertCell(cell));
  });

  cells[0].textContent = person.name;
  cells[1].textContent = person.sex === 'm' ? 'Male' : 'Female';
  cells[2].textContent = person.born;
  cells[3].textContent = person.died;
  cells[4].textContent = person.died - person.born;
  cells[5].textContent = Math.ceil(person.died / 100);

  tableElement.appendChild(row);
});
