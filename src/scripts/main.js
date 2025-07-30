'use strict';

const people = require('./lib/people.json');

const dashboard = document.querySelector('.dashboard');
const tbody = document.createElement('tbody');

const getRow = (person) => {
  const age = person.died - person.born;
  const century = Math.ceil(person.died / 100);
  const values = [
    person.name,
    person.sex === 'm' ? 'Male' : 'Female',
    person.born,
    person.died,
    age,
    century,
  ];

  const row = document.createElement('tr');

  values.forEach((value) => {
    const td = document.createElement('td');

    td.textContent = value;
    row.appendChild(td);
  });

  return row;
};

people.forEach((person) => tbody.appendChild(getRow(person)));
dashboard.appendChild(tbody);
