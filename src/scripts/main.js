'use strict';

const people = require('./lib/people');

// eslint-disable-next-line no-console
console.log(people); // you can remove it

// write your code here

const table = document.querySelector('table.dashboard');

for (const person of people) {
  const tableRow = document.createElement('tr');

  const personData = {};

  personData.name = person.name;
  personData.genger = person.sex === 'f' ? 'Female' : 'Male';
  personData.born = person.born;
  personData.died = person.died;
  personData.age = person.died - person.born;
  personData.century = Math.ceil(person.died / 100);

  for (const prop in personData) {
    const tableData = document.createElement('td');

    tableData.innerText = '' + personData[prop];

    tableRow.append(tableData);
  }

  table.append(tableRow);
}
