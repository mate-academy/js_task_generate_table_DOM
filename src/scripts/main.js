'use strict';

const people = require('./lib/people');

const table = document.querySelector('.dashboard');

for (const person of people) {
  const row = document.createElement('tr');

  const personName = document.createElement('td');
  const gender = document.createElement('td');
  const born = document.createElement('td');
  const died = document.createElement('td');
  const age = document.createElement('td');
  const centry = document.createElement('td');

  personName.textContent = person.name;
  gender.textContent = person.sex === 'm' ? 'Male' : 'Female';
  born.textContent = person.born;
  died.textContent = person.died;
  age.textContent = person.died - person.born;
  centry.textContent = Math.ceil(person.died / 100);

  row.append(personName, gender, born, died, age, centry);
  table.append(row);
}
