'use strict';

const people = require('./lib/people');

const table = document.querySelector('.dashboard');

function updateTable(element, parameters) {
  parameters.forEach(({ name: firstName, sex, born, died }) => {
    const tableRow = document.createElement('tr');
    const tableName = document.createElement('td');
    const tableGender = document.createElement('td');
    const tableBorn = document.createElement('td');
    const tableDied = document.createElement('td');
    const tableAge = document.createElement('td');
    const tableCentury = document.createElement('td');

    element.append(tableRow);
    tableRow.append(tableName);
    tableRow.append(tableGender);
    tableRow.append(tableBorn);
    tableRow.append(tableDied);
    tableRow.append(tableAge);
    tableRow.append(tableCentury);
    tableName.textContent = firstName;
    tableBorn.textContent = born;
    tableDied.textContent = died;
    tableAge.textContent = died - born;
    tableCentury.textContent = Math.ceil(died / 100);

    tableGender.textContent = sex === 'm'
      ? 'Male'
      : 'Female';
  });
}

updateTable(table, people);
