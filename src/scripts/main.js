'use strict';

const people = require('./lib/people');

const table = document.querySelector('.dashboard');

for (const person of people) {
  const row = document.createElement('tr');

  const name_ = document.createElement('td');

  name_.textContent = person.name;
  row.append(name_);

  const sex_ = document.createElement('td');

  sex_.textContent = (person.sex === 'm') ? 'Male' : 'Female';
  row.append(sex_);

  const born_ = document.createElement('td');

  born_.textContent = person.born;
  row.append(born_);

  const died_ = document.createElement('td');

  died_.textContent = person.died;
  row.append(died_);

  const age = document.createElement('td');

  age.textContent = person.died - person.born;
  row.append(age);

  const centure = document.createElement('td');

  centure.textContent = Math.ceil(person.died / 100);
  row.append(centure);

  table.append(row);
}
