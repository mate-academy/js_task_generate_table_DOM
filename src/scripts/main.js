'use strict';

const people = require('./lib/people');

const table = document.querySelector('.dashboard');

for (const person of people) {
  const personName = document.createElement('td');

  personName.innerText = person.name;

  const personGender = document.createElement('td');

  personGender.innerText = (person.sex === 'm' ? 'Male' : 'Female');

  const personBorn = document.createElement('td');

  personBorn.innerText = person.born;

  const personDied = document.createElement('td');

  personDied.innerText = person.died;

  const personAge = document.createElement('td');

  personAge.innerText = person.died - person.born;

  const personCentury = document.createElement('td');

  personCentury.innerText = Math.ceil(person.died / 100);

  const newTableRow = document.createElement('tr');

  newTableRow.append(personName);
  newTableRow.append(personGender);
  newTableRow.append(personBorn);
  newTableRow.append(personDied);
  newTableRow.append(personAge);
  newTableRow.append(personCentury);

  table.append(newTableRow);
}
