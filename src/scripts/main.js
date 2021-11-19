'use strict';

const people = require('./lib/people');
const table = document.querySelector('.dashboard');

for (const person of people) {
  const tableRow = document.createElement('tr');

  const fullName = document.createElement('td');
  const gender = document.createElement('td');
  const born = document.createElement('td');
  const died = document.createElement('td');
  const age = document.createElement('td');
  const century = document.createElement('td');

  fullName.textContent = person.name;

  if (person.sex === 'f') {
    gender.textContent = 'Female';
  } else {
    gender.textContent = 'Male';
  }

  born.textContent = person.born;
  died.textContent = person.died;
  age.textContent = person.died - person.born;
  century.textContent = Math.ceil(person.died / 100);

  tableRow.append(fullName, gender, born, died, age, century);

  table.append(tableRow);
}
