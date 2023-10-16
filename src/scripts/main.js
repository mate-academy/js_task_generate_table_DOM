'use strict';

const people = require('./lib/people');

const tableElement = document.querySelector('.dashboard');

people.forEach(person => {
  const row = tableElement.insertRow();

  const nameCell = row.insertCell(0);
  const genderCell = row.insertCell(1);
  const bornCell = row.insertCell(2);
  const diedCell = row.insertCell(3);
  const ageCell = row.insertCell(4);
  const centuryCell = row.insertCell(5);

  nameCell.textContent = person.name;
  genderCell.textContent = person.sex === 'm' ? 'Male' : 'Female';
  bornCell.textContent = person.born;
  diedCell.textContent = person.died;
  ageCell.textContent = person.died - person.born;
  centuryCell.textContent = Math.ceil(person.died / 100);

  tableElement.appendChild(row);
});
