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

const table = document.querySelector('.dashboard');

people.forEach(person => {
  const { age, century } = calculateAgeAndCentury(person);

  const row = document.createElement('tr');
  // Create and append table cells for each person's data:

  // const nameCell = document.createElement('td');
  // nameCell.textContent = person.name;
  // const genderCell = document.createElement('td');
  // genderCell.textContent = person.gender;
  // const bornCell = document.createElement('td');
  // bornCell.textContent = person.born;
  // const diedCell = document.createElement('td');
  // diedCell.textContent = person.died;
  // const ageCell = document.createElement('td');
  // ageCell.textContent = age;
  // const centuryCell = document.createElement('td');
  // centuryCell.textContent = century;

  // Append the cells to the row
  // row.appendChild(nameCell);
  // row.appendChild(genderCell);
  // row.appendChild(bornCell);
  // row.appendChild(diedCell);
  // row.appendChild(ageCell);
  // row.appendChild(centuryCell);

  row.innerHTML = `

  <th>${person.name}</th>
  <th>${person.sex}</th>
  <th>${person.born}</th>
  <th>${person.died}</th>
  <th>${age}</th>
  <th>${century}</th>
  `;

  table.appendChild(row);
});
