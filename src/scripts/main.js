'use strict';

const people = require('./lib/people');

const table = document.querySelector('.dashboard');

people.forEach(person => {
  const tableRow = document.createElement('tr');
  const tableName = document.createElement('td');
  const tableGender = document.createElement('td');
  const tableBorn = document.createElement('td');
  const tableDeid = document.createElement('td');
  const tableAge = document.createElement('td');
  const tableCentury = document.createElement('td');

  tableName.textContent = person.name;
  tableGender.textContent = person.sex === 'm' ? 'Male' : 'Female';
  tableBorn.textContent = person.born;
  tableDeid.textContent = person.died;
  tableAge.textContent = person.died - person.born;
  tableCentury.textContent = Math.ceil(person.died / 100);

  tableRow.append(
    tableName, tableGender, tableBorn, tableDeid, tableAge, tableCentury
  );

  table.append(tableRow);
});
