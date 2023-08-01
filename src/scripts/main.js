'use strict';

const people = require('./lib/people');

function calculateAge(person) {
  return person.died - person.born;
}

function calculateCentury(person) {
  return Math.ceil(person.died / 100);
}

function createTableRows() {
  const table = document.querySelector('.dashboard');

  people.forEach((person) => {
    const age = calculateAge(person);
    const century = calculateCentury(person);

    const row = document.createElement('tr');
    const nameCell = document.createElement('td');
    const genderCell = document.createElement('td');
    const bornCell = document.createElement('td');
    const diedCell = document.createElement('td');
    const ageCell = document.createElement('td');
    const centuryCell = document.createElement('td');

    nameCell.textContent = person.name;
    genderCell.textContent = person.sex;
    bornCell.textContent = person.born;
    diedCell.textContent = person.died;
    ageCell.textContent = age;
    centuryCell.textContent = century;

    row.appendChild(nameCell);
    row.appendChild(genderCell);
    row.appendChild(bornCell);
    row.appendChild(diedCell);
    row.appendChild(ageCell);
    row.appendChild(centuryCell);

    table.appendChild(row);
  });
}

createTableRows();
