'use strict';

const people = require('./lib/people');

const mainTab = document.querySelector('.dashboard');

// for (let i = 0; i < people.length; i++) {
people.forEach(person => {
  const tableRow = document.createElement('tr');

  const nameColumn = document.createElement('td');

  nameColumn.textContent = person.name;
  tableRow.appendChild(nameColumn);

  const gender = document.createElement('td');

  person.sex === 'm'
    ? gender.textContent = 'Male'
    : gender.textContent = 'Female';
  tableRow.appendChild(gender);

  const born = document.createElement('td');

  born.textContent = person.born;
  tableRow.appendChild(born);

  const died = document.createElement('td');

  died.textContent = person.died;
  tableRow.appendChild(died);

  const age = document.createElement('td');

  age.textContent = person.died - person.born;
  tableRow.appendChild(age);

  const century = document.createElement('td');

  century.textContent = Math.ceil(person.died / 100);
  tableRow.appendChild(century);

  mainTab.appendChild(tableRow);
});
