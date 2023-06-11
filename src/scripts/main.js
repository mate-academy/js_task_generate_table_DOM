'use strict';

const people = require('./lib/people');

const table = document.querySelector('.dashboard');

people.forEach(person => {
  const newRow = document.createElement('tr');

  const nameCell = document.createElement('td');

  nameCell.textContent = person.name;
  newRow.appendChild(nameCell);

  const sexCell = document.createElement('td');

  sexCell.textContent = person.sex;
  newRow.appendChild(sexCell);

  const bornCell = document.createElement('td');

  bornCell.textContent = person.born;
  newRow.appendChild(bornCell);

  const deathCell = document.createElement('td');

  deathCell.textContent = person.died;
  newRow.appendChild(deathCell);

  const ageCell = document.createElement('td');

  ageCell.textContent = person.died - person.born;
  newRow.appendChild(ageCell);

  const centuryCell = document.createElement('td');

  centuryCell.textContent = Math.ceil(person.died / 100);
  newRow.appendChild(centuryCell);

  table.appendChild(newRow);
});
