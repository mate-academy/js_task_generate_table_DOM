'use strict';

const people = require('./lib/people');

// eslint-disable-next-line no-console
console.log(people); // you can remove it

const fullTable = document.querySelector('table');

for (const person of people) {
  const table = document.createElement('tr');
  const personName = document.createElement('th');
  const gender = document.createElement('th');
  const born = document.createElement('th');
  const died = document.createElement('th');
  const age = document.createElement('th');
  const century = document.createElement('th');

  table.append(personName);
  table.append(gender);
  table.append(born);
  table.append(died);
  table.append(age);
  table.append(century);

  personName.textContent = person.name;

  if (person.sex === 'm') {
    gender.textContent = 'Male';
  } else {
    gender.textContent = 'Female';
  }

  born.textContent = person.born;
  died.textContent = person.died;
  age.textContent = person.died - person.born;
  century.textContent = Math.ceil(person.died / 100);

  fullTable.append(table);
}
