'use strict';

const people = require('./lib/people');

const calcPeople = people.map(person => {
  const { personName = person.name, sex, born, died } = person;

  return {
    personName,
    gender: sex === 'm' ? 'Male' : 'Female',
    born,
    died,
    age: died - born,
    century: Math.ceil(died / 100),
  };
});

const dashboard = document.querySelector('.dashboard');

for (const person of calcPeople) {
  const row = document.createElement('tr');

  for (const key in person) {
    const td = document.createElement('td');

    td.textContent = person[key];
    row.append(td);
  }

  dashboard.append(row);
}
