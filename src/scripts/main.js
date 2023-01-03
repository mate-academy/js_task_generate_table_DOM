'use strict';

const people = require('./lib/people');

function createTable(peoplesArr) {
  const table = document.querySelector('tbody');

  for (const person of people) {
    const tableRow = document.createElement('tr');

    const personData = {
      name: person.name,
      gender: person.sex === 'm' ? 'Male' : 'Female',
      born: person.born,
      died: person.died,
      Age: (person.died - person.born),
      Century: (Math.ceil(person.died / 100)),
    };

    table.append(tableRow);

    for (const data in personData) {
      const tableData = document.createElement('td');

      tableRow.append(tableData);
      tableData.textContent = personData[data];
    };
  };
};

createTable(people);
