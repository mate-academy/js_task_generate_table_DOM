'use strict';

const people = require('./lib/people');
const table = document.querySelector('tbody');

for (const person of people) {
  const row = document.createElement('tr');

  const personName = document.createElement('td');

  personName.textContent = person.name;

  const gender = document.createElement('td');

  gender.textContent
    = person.sex === 'm'
      ? 'Male'
      : 'Female';

  const born = document.createElement('td');

  born.textContent = person.born;

  const died = document.createElement('td');

  died.textContent = person.died;

  const age = document.createElement('td');

  age.textContent = person.died - person.born;

  const century = document.createElement('td');

  century.textContent = Math.ceil(person.died / 100);

  row.append(personName, gender, born, died, age, century);
  table.append(row);
}
