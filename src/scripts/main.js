'use strict';

const people = require('./lib/people');

const dashboardTable = document.querySelector('.dashboard');

people.forEach(person => {
  const row = document.createElement('tr');

  const nameCell = document.createElement('td');

  nameCell.textContent = person.name;

  const genderCell = document.createElement('td');

  genderCell.textContent = person.sex === 'm' ? 'Male' : 'Female';

  const bornCell = document.createElement('td');

  bornCell.textContent = person.born;

  const diedCell = document.createElement('td');

  diedCell.textContent = person.died;

  const ageCell = document.createElement('td');
  const age = person.died - person.born;

  ageCell.textContent = age;

  const centuryCell = document.createElement('td');
  const century = Math.ceil(person.died / 100);

  centuryCell.textContent = century;

  row.appendChild(nameCell);
  row.appendChild(genderCell); // Додаємо комірку з інформацією про стать
  row.appendChild(bornCell);
  row.appendChild(diedCell);
  row.appendChild(ageCell);
  row.appendChild(centuryCell);

  dashboardTable.appendChild(row);
});
