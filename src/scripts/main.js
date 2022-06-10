'use strict';

const people = require('./lib/people');

const parentElement = document.querySelector('table');

[...people].map((person) => {
  const row = document.createElement('tr');

  const information = Object.values(person).slice(0, 4);
  const personAge = person.died - person.born;
  const century = Math.ceil(person.died / 100);

  information.push(personAge, century);

  information.map((option) => {
    const cell = document.createElement('td');

    cell.textContent = `${option}`;
    row.append(cell);
  });

  parentElement.append(row);
});
