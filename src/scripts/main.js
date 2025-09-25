'use strict';
import people from './people.json';

const table = document.querySelector('.dashboard');

function generateDashboard() {
  people.forEach((person) => {
    const age = person.died - person.born;
    const century = Math.ceil(person.died / 100);

    const row = document.createElement('tr');

    const nameCell = document.createElement('td');

    nameCell.textContent = person.name;
    row.appendChild(nameCell);

    const genderCell = document.createElement('td');

    genderCell.textContent = person.sex;
    row.appendChild(genderCell);

    const bornCell = document.createElement('td');

    bornCell.textContent = person.born;
    row.appendChild(bornCell);

    const diedCell = document.createElement('td');

    diedCell.textContent = person.died;
    row.appendChild(diedCell);

    const ageCell = document.createElement('td');

    ageCell.textContent = age;
    row.appendChild(ageCell);

    const centuryCell = document.createElement('td');

    centuryCell.textContent = century;
    row.appendChild(centuryCell);

    table.appendChild(row);
  });
}

if (table) {
  generateDashboard();
}
