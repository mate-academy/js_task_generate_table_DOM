'use strict';

const people = require('./lib/people');

const table = document.querySelector('.dashboard');

for (const person of people) {
  const list = document.createElement('tr');
  const names = document.createElement('td');
  const gender = document.createElement('td');
  const personBorn = document.createElement('td');
  const personDied = document.createElement('td');
  const age = document.createElement('td');
  const century = document.createElement('td');
  const { name, sex, born, died } = person;

  gender.innerText = sex === 'm' ? 'Male' : 'Female';
  century.innerText = (Math.ceil(died / 100));
  age.innerText = died - born;
  personDied.append(died);
  personBorn.innerText = born;
  names.innerText = name;
  list.append(names, gender, personBorn, personDied, age, century);
  table.append(list);
}
