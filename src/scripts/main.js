'use strict';

const people = require('./lib/people');

const table = document.querySelector('.dashboard');

people.forEach(person => {
  const row = document.createElement('tr');

  const nameCell = document.createElement('td');
  const sexCell = document.createElement('td');
  const bornCell = document.createElement('td');
  const diedCell = document.createElement('td');
  const ageCell = document.createElement('td');
  const centuryCell = document.createElement('td');

  nameCell.textContent = person.name;
  sexCell.textContent = person.sex;
  bornCell.textContent = person.born;
  diedCell.textContent = person.died;
  ageCell.textContent = (person.died - person.born);
  centuryCell.textContent = Number(Math.ceil(person.died / 100));

  row.appendChild(nameCell);
  row.appendChild(sexCell);
  row.appendChild(bornCell);
  row.appendChild(diedCell);
  row.appendChild(ageCell);
  row.appendChild(centuryCell);

  table.appendChild(row);
});
