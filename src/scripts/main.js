'use strict';

const people = require('./lib/people');

// eslint-disable-next-line no-console

people.forEach(person => {
  delete person.fatherName;
  delete person.motherName;
  delete person.slug;
  person.age = person.died - person.born;
  person.century = Math.ceil(person.died / 100);

  person.sex = (person.sex === 'm')
    ? person.sex = 'Male'
    : person.sex = 'Female';
});

const dashboard = document.querySelector('.dashboard');

people.forEach(person => {
  const rows = document.createElement('tr');

  dashboard.append(rows);

  for (const property in person) {
    const cells = document.createElement('td');

    cells.textContent = person[property];

    rows.append(cells);
  }
});
