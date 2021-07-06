'use strict';

const people = require('./lib/people');

// eslint-disable-next-line no-console
// console.log(people); // you can remove it
const table = document.querySelector('tbody');
// console.log(table);

// write your code here

for (let i = 0; i <= people.length - 1; i++) {
  // console.log(people[i]);

  const tableRow = document.createElement('tr');
  const tableDataName = document.createElement('td');
  const tableDataGender = document.createElement('td');
  const tableDataBorn = document.createElement('td');
  const tableDataDied = document.createElement('td');
  const tableDataAge = document.createElement('td');
  const tableCentury = document.createElement('td');

  tableDataName.textContent = people[i].name;

  tableDataGender.textContent = (people[i].sex === 'm') ? 'Male' : 'Female';
  tableDataBorn.textContent = people[i].born;
  tableDataDied.textContent = people[i].died;
  tableDataAge.textContent = people[i].died - people[i].born;
  tableCentury.textContent = Math.floor(people[i].died / 100) + 1;

  table.append(tableRow);
  tableRow.append(tableDataName);
  tableRow.append(tableDataGender);
  tableRow.append(tableDataBorn);
  tableRow.append(tableDataDied);
  tableRow.append(tableDataAge);
  tableRow.append(tableCentury);
}
