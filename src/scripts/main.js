'use strict';

const people = require('./lib/people');

const peopleMapped = people.map(person => ({
  name: person.name,
  gender: (person.sex === 'm') ? 'Male' : 'Female',
  born: person.born,
  died: person.died,
  age: person.died - person.born,
  century: Math.ceil(person.died / 100),
}));

for (const person of peopleMapped) {
  const dashboard = document.querySelector('.dashboard');

  const tr = document.createElement('tr');

  for (const key in person) {
    const th = document.createElement('th');

    th.innerText = person[key];
    tr.append(th);
  }

  dashboard.append(tr);
}
