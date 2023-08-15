'use strict';

const people = require('./lib/people');

// eslint-disable-next-line no-console
console.log(people); // you can remove it

// write your code here
const table = document.querySelector('body > table > tbody');

people.forEach(person => {
  // eslint-disable-next-line no-shadow
  const { name, sex, born, died } = person;
  const tableRow = document.createElement('tr');
  const tableDataName = document.createElement('td');
  const tableDataGender = document.createElement('td');
  const tableDataBorn = document.createElement('td');
  const tableDataDied = document.createElement('td');
  const tableDataAge = document.createElement('td');
  const tableDataCentury = document.createElement('td');

  tableDataName.textContent = name;
  tableDataGender.textContent = sex === 'm' ? 'Male' : 'Female';
  tableDataBorn.textContent = born;
  tableDataDied.textContent = died;
  tableDataAge.textContent = died - born;
  tableDataCentury.textContent = Math.ceil(died / 100);

  tableRow.append(tableDataName);
  tableRow.append(tableDataGender);
  tableRow.append(tableDataBorn);
  tableRow.append(tableDataDied);
  tableRow.append(tableDataAge);
  tableRow.append(tableDataCentury);
  table.append(tableRow);
});
