'use strict';

const people = require('./lib/people');
const tableElements = document.querySelector('.dashboard');

// eslint-disable-next-line no-console

const COLUMNS = {
  NAME: 0,
  GENDER: 1,
  BORN: 2,
  DIED: 3,
  AGE: 4,
  CENTURY: 5,
};

people.forEach(person => {
  const row = tableElements.insertRow();
  const cells = [];

  Object.values(COLUMNS).forEach(column => {
    cells.push(row.insertCell(column));
  });

  cells[COLUMNS.NAME].textContent = person.name;
  cells[COLUMNS.GENDER].textContent = person.sex === 'f' ? 'Female' : 'Male';
  cells[COLUMNS.BORN].textContent = person.born;
  cells[COLUMNS.DIED].textContent = person.died;
  cells[COLUMNS.AGE].textContent = person.died - person.born;
  cells[COLUMNS.CENTURY].textContent = Math.ceil(person.died / 100);

  tableElements.appendChild(row);
});
