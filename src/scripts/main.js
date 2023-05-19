'use strict';

const people = require('./lib/people');

for (const person of people) {
  const table = document.querySelector('.dashboard');
  const tableRow = document.createElement('tr');

  const nam = person.name;
  const age = person.died - person.born;
  const century = Math.ceil(person.died / 100);

  const { sex, born, died } = person;

  const personArrey = [nam, sex, born, died, age, century];

  for (const el of personArrey) {
    const tableData = document.createElement('td');

    tableData.textContent = el;
    tableRow.append(tableData);
  }

  table.append(tableRow);
}
