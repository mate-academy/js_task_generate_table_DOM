'use strict';

const people = require('./lib/people');

function calculateAge(birthDate, deathDate) {
  return deathDate - birthDate;
}

function calculateCentury(deathDate) {
  const century = Math.ceil(deathDate / 100);

  return century;
}

function getFullSex(sex) {
  let result = null;

  if (sex === 'm') {
    result = 'Male';
  }

  if (sex === 'f') {
    result = 'Female';
  }

  return result;
}

const table = document.querySelector('.dashboard');

people.forEach(person => {
  const row = document.createElement('tr');
  const nameCell = document.createElement('td');

  nameCell.textContent = person.name;
  row.appendChild(nameCell);

  const genderCell = document.createElement('td');

  genderCell.textContent = getFullSex(person.sex);
  row.appendChild(genderCell);

  const bornCell = document.createElement('td');

  bornCell.textContent = person.born;
  row.appendChild(bornCell);

  const diedCell = document.createElement('td');

  diedCell.textContent = person.died;
  row.appendChild(diedCell);

  const ageCell = document.createElement('td');

  ageCell.textContent = calculateAge(person.born, person.died);
  row.appendChild(ageCell);

  const centuryCell = document.createElement('td');

  centuryCell.textContent = calculateCentury(person.died);
  row.appendChild(centuryCell);

  table.appendChild(row);
});
