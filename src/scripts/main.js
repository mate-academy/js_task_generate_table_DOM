'use strict';

const people = require('./lib/people');

// eslint-disable-next-line no-console

const peopleForTable = people.map((person) => ({
  name: person.name,
  gender: person.sex === 'm' ? 'Male' : 'Female',
  born: person.born,
  died: person.died,
  age: person.died - person.born,
  century: Math.ceil(person.died / 100),
}));

const table = document.body.querySelector('.dashboard');

peopleForTable.map(person => {
  const tr = document.createElement('tr');

  table.append(tr);

  for (const key in person) {
    const td = document.createElement('td');

    td.innerHTML = person[key];
    tr.append(td);
  }
});
