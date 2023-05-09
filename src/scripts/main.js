'use strict';

const people = require('./lib/people');

people.forEach(person => {
  const row = document.createElement('tr');

  const tdCreate = () => {
    return document.createElement('td');
  };

  const appendItem = (cellName) => {
    return row.appendChild(cellName);
  };

  const nameCell = tdCreate();

  nameCell.textContent = person.name;
  appendItem(nameCell);

  const genderCell = tdCreate();

  if (person.sex === 'm') {
    genderCell.textContent = 'Male';
  } else {
    genderCell.textContent = 'Female';
  }
  appendItem(genderCell);

  const bornCell = tdCreate();

  bornCell.textContent = person.born;
  appendItem(bornCell);

  const diedCell = tdCreate();

  diedCell.textContent = person.died;
  appendItem(diedCell);

  const ageCell = tdCreate();

  ageCell.textContent = person.died - person.born;
  appendItem(ageCell);

  const centuryCell = tdCreate();

  centuryCell.textContent = Math.ceil(person.died / 100);
  appendItem(centuryCell);

  const dashboardTable = document.querySelector('.dashboard');

  dashboardTable.appendChild(row);
});
