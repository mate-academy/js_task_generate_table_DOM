'use strict';

const people = require('./lib/people');
const peopleTable = document.querySelector('.dashboard');

for (const person of people) {
  const rowTable = document.createElement('tr');
  const personInfo = [
    person.name,
    person.sex === 'm' ? 'Male' : 'Female',
    person.born,
    person.died,
    person.died - person.born,
    Math.floor(person.died / 100),
  ];

  peopleTable.append(rowTable);

  personInfo.forEach(column => {
    const cell = document.createElement('td');

    cell.textContent = column;
    rowTable.append(cell);
  });
}
