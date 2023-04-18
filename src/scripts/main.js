'use strict';

const people = require('./lib/people');
const table = document.querySelector('.dashboard');

function generateTable() {
  people.forEach(person => {
    const tableRow = document.createElement('tr');

    const age = person.died - person.born;
    const century = Math.ceil(person.died / 100);
    const sex = person.sex === 'm' ? 'Male' : 'Female';

    const tableFieldsValues = [person.name, sex,
      person.born, person.died, age, century];

    tableFieldsValues.forEach((tableFieldValue) => {
      const tableField = document.createElement('td');

      tableField.textContent = tableFieldValue;
      tableRow.appendChild(tableField);
    });

    table.appendChild(tableRow);
  });
}

generateTable();
