'use strict';

const people = require('./lib/people');
const mainTable = document.body.querySelector('.dashboard');

for (const person of people) {
  delete person.motherName;
  delete person.fatherName;
  delete person.slug;

  person.age = person.died - person.born;
  person.century = Math.ceil(person.died / 100);
  person.sex = person.sex === 'm' ? 'Male' : 'Female';

  const columnInTable = document.createElement('tr');

  mainTable.append(columnInTable);

  for (const info in person) {
    const infoInColumn = document.createElement('td');

    infoInColumn.textContent = person[info];

    columnInTable.append(infoInColumn);
  }
};
