'use strict';

const people = require('./lib/people');

const table = document.querySelector('.dashboard');

for (const person of people) {
  const row = table.insertRow();
  const nameCell = row.insertCell();
  const genderCell = row.insertCell();
  const bornCell = row.insertCell();
  const diedCell = row.insertCell();
  const ageCell = row.insertCell();
  const centuryCell = row.insertCell();

  nameCell.textContent = person.name;
  genderCell.textContent = person.gender;
  bornCell.textContent = person.born;
  diedCell.textContent = person.died;

  const age = person.died - person.born;

  ageCell.textContent = age;

  const century = Math.ceil(person.died / 100);

  centuryCell.textContent = century;

  table.appendChild(row);
}
