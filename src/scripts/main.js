'use strict';

const people = require('./lib/people');
const table = document.querySelector('.dashboard');

people.forEach(person => {
  const tableRow = document.createElement('tr');

  const age = person.died - person.born;
  const century = Math.ceil(person.died / 100);

  if (person.sex === 'm') {
    person.sex = 'Male';
  } else {
    person.sex = 'Female';
  }

  const personArray = [
    person.name,
    person.sex,
    person.born,
    person.died,
    age,
    century,
  ];

  personArray.forEach(el => {
    const tableData = document.createElement('td');

    tableData.textContent = el;
    tableRow.append(tableData);
  });

  table.append(tableRow);
});
