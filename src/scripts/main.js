'use strict';

const people = require('./lib/people');
const table = document.querySelector('.dashboard');

for (const person of people) {
  const row = document.createElement('tr');
  const name = document.createElement('td');
  const gender = document.createElement('td');
  const born = document.createElement('td');
  const died = document.createElement('td');
  const age = document.createElement('td');
  const century = document.createElement('td');

  name.innerText = person.name;
  gender.innerText = person.sex === 'f' ? 'Female' : 'Male';
  born.innerText = person.born;
  died.innerText = person.died;
  age.innerText = person.died - person.born;
  century.innerText = Math.ceil(person.died / 100);

  row.append(name, gender, born, died, age, century);
  table.append(row);
}
