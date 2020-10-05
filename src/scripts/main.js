'use strict';

const people = require('./lib/people');
const table = document.querySelector('.dashboard');
const data = ['name', 'sex', 'born', 'died', 'age', 'century'];

people.forEach(person => {
  const row = document.createElement('tr');

  person.age = person.died - person.born;
  person.century = Math.ceil(person.died / 100);

  if (person.sex === 'm') {
    person.sex = 'Male';
  } else {
    person.sex = 'Female';
  }

  for (const dataType of data) {
    const td = document.createElement('td');

    td.innerText = person[dataType];
    row.append(td);
  }

  table.append(row);
});
