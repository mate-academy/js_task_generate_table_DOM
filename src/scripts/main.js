'use strict';

const people = require('./lib/people');

const dashboard = document.querySelector('.dashboard > tbody');

const tableData = people.map((person) => ({
  name: person.name,
  gender: person.sex,
  born: person.born,
  died: person.died,
  age: person.died - person.born,
  century: Math.ceil(person.died / 100),
}));

for (const person of tableData) {
  const tRow = document.createElement('tr');

  tRow.append(...createRowData(person));

  dashboard.append(tRow);
}

function createRowData(person) {
  const result = [];

  for (const data in person) {
    const tData = document.createElement('td');

    tData.innerText = person[data];

    result.push(tData);
  }

  return result;
}
