'use strict';

const people = require('./lib/people');
const dashboard = document.querySelector('.dashboard');

for (const person of people) {
  const tr = document.createElement('tr');
  const filteredPerson = {
    ...person,
    age: person.died - person.born,
    century: Math.ceil(person.died / 100),
  };

  filteredPerson.sex === 'm'
    ? filteredPerson.sex = 'Male'
    : filteredPerson.sex = 'Female';

  delete filteredPerson.fatherName;
  delete filteredPerson.motherName;
  delete filteredPerson.slug;

  for (const key in filteredPerson) {
    const td = document.createElement('td');

    td.innerHTML = filteredPerson[key];
    tr.append(td);
  };

  dashboard.append(tr);
};
