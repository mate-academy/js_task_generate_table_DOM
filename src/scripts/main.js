'use strict';

const people = require('./lib/people');

const tableElement = document.querySelector('.dashboard');

const createTableData = (data, row) => {
  for (const value of Object.values(data)) {
    const tableData = document.createElement('td');

    tableData.textContent = value;

    row.appendChild(tableData);
  }
};

const createTableRow = (data) => {
  const tableRow = document.createElement('tr');

  const { name: fullName, sex, born, died } = data;

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

  createTableData(personData, tableRow);

  return tableRow;
};

const createTable = (data) => {
  for (const person of data) {
    const tableRow = createTableRow(person);

    tableElement.appendChild(tableRow);
  }
};

createTable(people);
