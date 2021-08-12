'use strict';

const people = require('./lib/people');

const table = document.getElementsByClassName('dashboard')[0];

for (const person of people) {
  person.sex = (person.sex === 'm')
    ? 'Male'
    : 'Female';

  const tr = document.createElement('tr');
  const fullName = document.createElement('td');
  const gender = document.createElement('td');
  const born = document.createElement('td');
  const died = document.createElement('td');
  const age = document.createElement('td');
  const century = document.createElement('td');

  fullName.textContent = `${person.name}`;
  gender.textContent = `${person.sex}`;
  born.textContent = `${person.born}`;
  died.textContent = `${person.died}`;
  age.textContent = `${person.died - person.born}`;
  century.textContent = `${Math.ceil(person.died / 100)}`;
  tr.append(fullName, gender, born, died, age, century);
  table.append(tr);
};
