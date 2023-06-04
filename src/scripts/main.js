'use strict';

const people = require('./lib/people');

// eslint-disable-next-line no-console
console.log(people);

const table = document.querySelector('.dashboard');

people.forEach(person => {
  const row = document.createElement('tr');

  const nameCell = document.createElement('td');
  const sexCell = document.createElement('td');
  const bornCell = document.createElement('td');
  const diedCell = document.createElement('td');
  const AgeCell = document.createElement('td');
  const CenturyCell = document.createElement('td');

  nameCell.textContent = person.name;
  sexCell.textContent = person.sex;
  bornCell.textContent = person.born;
  diedCell.textContent = person.died;
  AgeCell.textContent = (person.died - person.born);
  CenturyCell.textContent = Number(Math.ceil(person.died / 100));

  row.appendChild(nameCell);
  row.appendChild(sexCell);
  row.appendChild(bornCell);
  row.appendChild(diedCell);
  row.appendChild(AgeCell);
  row.appendChild(CenturyCell);

  table.appendChild(row);
});
