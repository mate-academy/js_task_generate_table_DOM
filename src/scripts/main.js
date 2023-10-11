'use strict';

const people = require('./lib/people');

const table = document.querySelector('.dashboard');

people.forEach(person => {
  const row = document.createElement('tr');
  const fields = ['name', 'sex', 'born', 'died'];

  fields.forEach(field => {
    if (field === 'sex') {
      row.appendChild(createCell(generateGenderTitle(person[field])));
    } else {
      row.appendChild(createCell(person[field]));
    }
  });

  row.appendChild(createCell(calculateAge(person.born, person.died)));
  row.appendChild(createCell(calculateCentury(person.died)));

  table.appendChild(row);
});

function createCell(value) {
  const cell = document.createElement('td');

  cell.textContent = value;

  return cell;
}

function calculateAge(born, died) {
  return died - born;
};

function calculateCentury(died) {
  return Math.ceil(died / 100);
}

function generateGenderTitle(sex) {
  return sex === 'm' ? 'Male' : 'Female';
}
