'use strict';

const people = require('./lib/people');

const tableElement = document.querySelector('.dashboard');

const generateTableData = (data, row) => {
  for (const value of Object.values(data)) {
    const tableData = document.createElement('td');

    tableData.textContent = value;

    row.appendChild(tableData);
  }
};

const generateTableRows = (table, data) => {
  for (const person of data) {
    const tableRow = document.createElement('tr');

    const { name: fullName, sex, born, died } = person;

    const age = died - born;
    const century = Math.ceil(died / 100);
    const gender = sex === 'm' ? 'Male' : 'Female';

    const personData = {
      fullName,
      gender,
      born,
      died,
      age,
      century,
    };

    generateTableData(personData, tableRow);

    table.appendChild(tableRow);
  }
};

generateTableRows(tableElement, people);
