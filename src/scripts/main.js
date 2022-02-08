'use strict';

const people = require('./lib/people');

const table = document.querySelector('table');

for (const person of people) {
  const row = document.createElement('tr');
  const nameOfPerson = document.createElement('td');
  const sex = document.createElement('td');
  const born = document.createElement('td');
  const died = document.createElement('td');
  const age = document.createElement('td');
  const century = document.createElement('td');

  nameOfPerson.textContent = person.name;

  if (person.sex === 'f') {
    sex.textContent = 'Female';
  } else {
    sex.textContent = 'Male';
  };

  born.textContent = person.born;
  died.textContent = person.died;
  age.textContent = person.died - person.born;
  century.textContent = Math.ceil(person.died / 100);

  table.append(row);
  row.append(nameOfPerson, sex, born, died, age, century);
};
