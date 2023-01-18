'use strict';

const people = require('./lib/people');

// eslint-disable-next-line no-console

const table = document.querySelector('.dashboard');
const dataArray = [];

for (const person of people) {
  const personData = {
    nameOfPerson: person.name,
    genderOfPerson: person.sex === 'm' ? 'male' : 'female',
    bornDate: person.born,
    diedDate: person.died,
    personAge: person.died - person.born,
    personCentury: Math.ceil(person.died / 100),
  };

  dataArray.push(personData);
}

for (const personData of dataArray) {
  const tableRow = document.createElement('tr');

  for (const data in personData) {
    const tableData = document.createElement('td');

    tableData.innerText = personData[data];

    tableRow.appendChild(tableData);
    table.appendChild(tableRow);
  }
}
