'use strict';

const people = require('./lib/people');

const table = document.querySelector('.dashboard');

for (const person of people) {
  const row = document.createElement('tr');
  const fullName = document.createElement('td');
  const gender = document.createElement('td');
  const born = document.createElement('td');
  const died = document.createElement('td');
  const age = document.createElement('td');
  const century = document.createElement('td');

  fullName.innerText = person.name;
  gender.innerText = person.sex === 'm' ? 'Male' : 'Female';
  born.innerText = person.born;
  died.innerText = person.died;
  age.innerText = person.died - person.born;
  century.innerText = Math.ceil(person.died / 100);

  row.append(fullName);
  row.append(gender);
  row.append(born);
  row.append(died);
  row.append(age);
  row.append(century);

  table.append(row);
}
