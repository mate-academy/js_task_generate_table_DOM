'use strict';

const people = require('./lib/people');

const dashboard = document.querySelector('.dashboard');

for (const person of people) {
  const {
    name: personName,
    sex,
    born,
    died,
  } = person;
  const row = document.createElement('tr');
  const nameCell = document.createElement('td');
  const sexCell = document.createElement('td');
  const bornCell = document.createElement('td');
  const diedCell = document.createElement('td');
  const ageCell = document.createElement('td');
  const centuryCell = document.createElement('td');

  nameCell.textContent = personName;
  bornCell.textContent = born;
  diedCell.textContent = died;
  ageCell.textContent = died - born;
  centuryCell.textContent = Math.ceil(died / 100);

  sex === 'f' ? sexCell.textContent = 'Female' : sexCell.textContent = 'Male';

  row.append(nameCell);
  row.append(sexCell);
  row.append(bornCell);
  row.append(diedCell);
  row.append(ageCell);
  row.append(centuryCell);
  dashboard.append(row);
}
