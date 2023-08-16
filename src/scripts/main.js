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
  const tableDataContentNaming = [
    name,
    (sex === 'm' ? 'Male' : 'Female'),
    born, died, (died - born),
    (Math.ceil(died / 100)),
  ];

  tableDataContentNaming.forEach(content => {
    const tableData = document.createElement('td');

    tableData.textContent = content;
    tableRow.append(tableData);
  });

  table.append(tableRow);
});
