'use strict';

const people = require('./lib/people');
const tbody = document.querySelector('tbody');

people.forEach(person => {
  const tr = document.createElement('tr');
  const firstName = document.createElement('th');
  const gender = document.createElement('th');
  const born = document.createElement('th');
  const died = document.createElement('th');
  const age = document.createElement('th');
  const century = document.createElement('th');

  tbody.appendChild(tr);
  tr.appendChild(firstName);
  tr.appendChild(gender);
  tr.appendChild(born);
  tr.appendChild(died);
  tr.appendChild(age);
  tr.appendChild(century);

  firstName.append(person.name);
  gender.append(person.sex);
  born.append(person.born);
  died.append(person.died);
  age.append(person.died - person.born);
  century.append(Math.ceil(person.died / 100));
});
