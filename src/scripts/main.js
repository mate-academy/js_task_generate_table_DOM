'use strict';

const people = require('./lib/people');
const mainTable = document.body.querySelector('.dashboard');

for (const person of people) {
  person.age = person.died - person.born;
  person.century = Math.ceil(person.died / 100);
  person.sex = person.sex === 'm' ? 'Male' : 'Female';

  const { motherName, fatherName, slug, ...mainInfo } = person;

  const columnInTable = document.createElement('tr');

  mainTable.append(columnInTable);

  for (const info in mainInfo) {
    const infoInColumn = document.createElement('td');

    infoInColumn.textContent = mainInfo[info];

    columnInTable.append(infoInColumn);
  }
};
