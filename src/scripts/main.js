'use strict';

const people = require('./lib/people');

const table = document.querySelector('.dashboard');

people.forEach((person) => {
  const age = person.died - person.born;
  const century = Math.ceil(person.died / 100);
  const gender = person.sex === 'm' ? 'Male' : 'Female';

  const values = [
    person.name,
    gender,
    person.born,
    person.died,
    age,
    century,
  ];

  const tr = document.createElement('tr');

  for (const value of values) {
    const td = document.createElement('td');

    td.textContent = value;
    tr.append(td);
  }

  table.append(tr);
});
