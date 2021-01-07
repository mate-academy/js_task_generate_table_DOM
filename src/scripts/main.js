'use strict';

const people = require('./lib/people');

// eslint-disable-next-line no-console
// console.log(people); // you can remove it

// write your code here

const table = document.querySelector('.dashboard');

for (const person of people) {
  const tr = document.createElement('tr');
  const namePerson = document.createElement('td');
  const gender = document.createElement('td');
  const born = document.createElement('td');
  const died = document.createElement('td');
  const age = document.createElement('td');
  const century = document.createElement('td');

  namePerson.textContent = person.name;
  born.textContent = person.born;
  died.textContent = person.died;
  age.textContent = person.died - person.born;
  century.textContent = Math.ceil(person.died / 100);

  if (person.sex === 'm') {
    gender.textContent = 'Male';
  } else {
    gender.textContent = 'Female';
  }

  tr.append(namePerson, gender, born, died, age, century);
  table.append(tr);
}
