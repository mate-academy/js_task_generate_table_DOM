'use strict';

const people = require('./lib/people');

const tableElement = document.querySelector('.dashboard');

const COLUMNS = {
  NAME: 0,
  GENDER: 1,
  BORN: 2,
  DIED: 3,
  AGE: 4,
  CENTURY: 5,
};

people.forEach(person => {
  const row = tableElement.insertRow();

  const cells = [];

  Object.values(COLUMNS).forEach((col) => {
    cells.push(row.insertCell(col));
  });

  cells[COLUMNS.NAME].textContent = person.name;
  cells[COLUMNS.GENDER].textContent = person.sex === 'm' ? 'Male' : 'Female';
  cells[COLUMNS.BORN].textContent = person.born;
  cells[COLUMNS.DIED].textContent = person.died;
  cells[COLUMNS.AGE].textContent = person.died - person.born;
  cells[COLUMNS.CENTURY].textContent = Math.ceil(person.died / 100);

  tableElement.appendChild(row);
});
