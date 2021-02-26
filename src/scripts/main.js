'use strict';

const people = require('./lib/people');

// eslint-disable-next-line no-console

const table = document.querySelector('.dashboard');

for (const person of people) {
  const personRow = document.createElement('tr');
  const personGender = person.sex === 'f' ? 'Female' : 'Male';

  personRow.appendChild(createCollElement(person.name));
  personRow.appendChild(createCollElement(personGender));
  personRow.appendChild(createCollElement(person.born));
  personRow.appendChild(createCollElement(person.died));
  personRow.appendChild(createCollElement(person.died - person.born));
  personRow.appendChild(createCollElement(Math.ceil(person.died / 100)));
  table.appendChild(personRow);
}

function createCollElement(text) {
  const coll = document.createElement('td');

  coll.innerHTML = text;

  return coll;
}
