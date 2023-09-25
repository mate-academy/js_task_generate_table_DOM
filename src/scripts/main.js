'use strict';

const people = require('./lib/people');

// eslint-disable-next-line no-console

function calculateAgeAndCentury(person) {
  const age = person.died - person.born;

  const century = Math.ceil(person.died / 100);

  return {
    age, century,
  };
}

const table = document.querySelectorAll('.dashboard');

people.array.forEach(person => {
  const { age, century } = calculateAgeAndCentury(person);

  const row = document.createElement('tr');

  const nameCell = document.createElement('td');

  nameCell.textContent = person.name;

  const genderCell = document.createElement('td');

  genderCell.textContent = person.gender;

  const bornCell = document.createElement('td');

  bornCell.textContent = person.born;

  const diedCell = document.createElement('td');

  diedCell.textContent = person.died;

  const ageCell = document.createElement('td');

  ageCell.textContent = age;

  const centuryCell = document.createElement('td');

  centuryCell.textContent = century;

  row.appendChild(nameCell);
  row.appendChild(genderCell);
  row.appendChild(bornCell);
  row.appendChild(diedCell);
  row.appendChild(ageCell);
  row.appendChild(centuryCell);

  table.appendChild(row);
});
