'use strict';

const people = require('./lib/people');

// eslint-disable-next-line no-console
console.log(people); // you can remove it

const table = document.querySelector('table');

people.map(function table1(person) {
  const namePerson = document.createElement('td');
  const gender = document.createElement('td');
  const born = document.createElement('td');
  const died = document.createElement('td');
  const age = document.createElement('td');
  const century = document.createElement('td');
  const tr = document.createElement('tr');

  tr.append(namePerson, gender, born, died, age, century);
  table.append(tr);
  namePerson.textContent = person.name;
  gender.textContent = person.sex;
  born.textContent = person.born;
  died.textContent = person.died;
  age.textContent = person.died - person.born;
  century.textContent = Math.ceil(person.died / 100);
});
