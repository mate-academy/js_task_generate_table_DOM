'use strict';

const people = require('./lib/people');

const table = document.querySelector('.dashboard');

for (const person of people) {
  const field = document.createElement('tr');

  table.append(field);

  const fullName = document.createElement('td');

  fullName.textContent = person.fullName;
  field.append(fullName);

  const gender = document.createElement('td');

  if (person.sex === 'm') {
    gender.textContent = 'Male';
  } else {
    gender.textContent = 'Female';
  }

  field.append(gender);

  const born = document.createElement('td');

  born.textContent = person.born;
  field.append(born);

  const died = document.createElement('td');

  died.textContent = person.died;
  field.append(died);

  const age = document.createElement('td');

  age.textContent = person.died - person.born;
  field.append(age);

  const century = document.createElement('td');

  century.textContent = Math.ceil(person.died / 100);
  field.append(century);
}
