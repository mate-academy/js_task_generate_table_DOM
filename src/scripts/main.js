'use strict';

const people = require('./lib/people');

// eslint-disable-next-line no-console
console.log(people); // you can remove it

const table = document.querySelector('.dashboard');
const columns = 6;
const tableRow = [];
const tableData = [];

const gender = (person) => (person.sex === 'm' ? 'Male' : 'Female');

let k = 0;

for (let i = 0; k < people.length; i += columns) {
  tableRow[k] = document.createElement('tr');
  table.append(tableRow[k]);
  tableData[i] = document.createElement('td');
  tableData[i].innerText = people[k].name;
  tableData[i + 1] = document.createElement('td');
  tableData[i + 1].innerText = gender(people[k]);
  tableData[i + 2] = document.createElement('td');
  tableData[i + 2].innerText = people[k].born;
  tableData[i + 3] = document.createElement('td');
  tableData[i + 3].innerText = people[k].died;
  tableData[i + 4] = document.createElement('td');
  tableData[i + 4].innerText = people[k].died - people[k].born;
  tableData[i + 5] = document.createElement('td');
  tableData[i + 5].innerText = Math.ceil(people[k].died / 100);

  tableRow[k].append(
    tableData[i],
    tableData[i + 1],
    tableData[i + 2],
    tableData[i + 3],
    tableData[i + 4],
    tableData[i + 5]
  );
  k++;
}
