'use strict';

const people = require('./lib/people');

const table = document.querySelector('table');

for (const person of people) {
  const personRow = document.createElement('tr');
  const personName = document.createElement('td');
  const personGender = document.createElement('td');
  const personBorn = document.createElement('td');
  const personDied = document.createElement('td');
  const personAge = document.createElement('td');
  const personCentury = document.createElement('td');

  personName.textContent = person.name;

  person.sex === 'm'
    ? personGender.textContent = 'Male'
    : personGender.textContent = 'Female';

  personBorn.textContent = person.born;
  personDied.textContent = person.died;
  personAge.textContent = person.died - person.born;
  personCentury.textContent = Math.ceil(person.died / 100);

  personRow.append(personName);
  personRow.append(personGender);
  personRow.append(personBorn);
  personRow.append(personDied);
  personRow.append(personAge);
  personRow.append(personCentury);
  table.append(personRow);
}
