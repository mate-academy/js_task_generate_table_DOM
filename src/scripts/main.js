'use strict';

const people = require('./lib/people');
const dashboard = document.querySelector('.dashboard');

people.forEach(element => {
  const tableRow = document.createElement('tr');
  const preparedPeople = {
    name: element.name,
    sex: element.sex === 'm' ? 'Male' : 'Female',
    born: element.born,
    died: element.died,
    age: element.died - element.born,
    century: Math.ceil(element.born / 100),
  };

  for (const key in preparedPeople) {
    const tableData = document.createElement('td');

    tableData.textContent = preparedPeople[key];
    tableRow.append(tableData);
  }

  dashboard.append(tableRow);
});
