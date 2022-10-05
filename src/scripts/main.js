'use strict';

const people = require('./lib/people');

function appendTable(group) {
  const table = document.querySelector('.dashboard');

  for (const person of group) {
    const newElemLine = document.createElement('tr');

    const age = person.died - person.born;
    const centuary = Math.ceil(person.died / 100);

    const updatePerson = {
      ...person,
      age,
      centuary,
    };

    const types = ['name', 'sex', 'born', 'died', 'age', 'centuary'];

    for (const prop of types) {
      const cell = document.createElement('td');

      cell.innerHTML = updatePerson[prop];

      newElemLine.appendChild(cell);
    }

    table.appendChild(newElemLine);
  }
}

appendTable(people);
