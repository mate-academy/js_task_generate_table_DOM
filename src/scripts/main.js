'use strict';

const people = require('./lib/people');
const dashboard = document.querySelector('.dashboard');

people.forEach(person => {
  const { name: personName, sex, born, died } = person;
  const personObj = {
    personName,
    sex: sex === 'm' ? 'Male' : 'Female',
    born,
    died,
    age: died - born,
    century: Math.ceil(died / 100),
  };

  const tableRow = document.createElement('tr');

  dashboard.append(tableRow);

  Object.values(personObj).forEach(value => {
    const rowElement = document.createElement('td');

    rowElement.textContent = value;

    tableRow.append(rowElement);
  });
});
