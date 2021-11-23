'use strict';

const people = require('./lib/people');
const table = document.querySelector('.dashboard');

for (const { name: fullName, sex, born, died } of people) {
  const tableRow = document.createElement('tr');

  const nameColumn = document.createElement('td');
  const sexColumn = document.createElement('td');
  const bornColum = document.createElement('td');
  const diedColumn = document.createElement('td');
  const ageColumn = document.createElement('td');
  const centuryColumn = document.createElement('td');

  nameColumn.textContent = fullName;

  sexColumn.textContent = sex === 'f'
    ? 'Female'
    : 'Male';

  bornColum.textContent = born;
  diedColumn.textContent = died;
  ageColumn.textContent = died - born;
  centuryColumn.textContent = Math.ceil(died / 100);

  tableRow.append(
    nameColumn, sexColumn, bornColum, diedColumn, ageColumn, centuryColumn
  );

  table.append(tableRow);
}
