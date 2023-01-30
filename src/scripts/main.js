'use strict';

const people = require('./lib/people');

// eslint-disable-next-line no-console
console.log(people); // you can remove it

const table = document.querySelector('.dashboard');

for (const person of people) {
  const tableRow = document.createElement('tr');
  const columnName = document.createElement('th');
  const columnGender = document.createElement('th');
  const columnBorn = document.createElement('th');
  const columnDied = document.createElement('th');
  const columnAge = document.createElement('th');
  const columnCentury = document.createElement('th');

  columnName.textContent = person.name;
  columnGender.textContent = person.sex;
  columnBorn.textContent = person.born;
  columnDied.textContent = person.died;
  columnAge.textContent = person.died - person.born;
  columnCentury.textContent = Math.ceil(person.died / 100);

  tableRow.append(
    columnName,
    columnGender,
    columnBorn,
    columnDied,
    columnAge,
    columnCentury
  );

  table.append(tableRow);
}
