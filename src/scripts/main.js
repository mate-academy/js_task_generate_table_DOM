'use strict';

const people = require('./lib/people');
const table = document.querySelector('.dashboard');

for (const person of people) {
  const tableRow = document.createElement('tr');

  const age = person.died - person.born;
  const century = Math.ceil(person.died / 100);

  const personArrey = [
    person.name,
    person.sex,
    person.born,
    person.died,
    age,
    century,
  ];

  for (const el of personArrey) {
    const tableData = document.createElement('td');

    tableData.textContent = el;
    tableRow.append(tableData);
  }

  table.append(tableRow);
}
