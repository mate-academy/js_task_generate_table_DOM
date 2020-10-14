'use strict';

const people = require('./lib/people');

const table = document.querySelector('.dashboard');
const information = ['name', 'sex', 'born', 'died', 'age', 'century'];

for (const person of people) {
  const row = document.createElement('tr');

  for (const info of information) {
    const personInfo = document.createElement('td');

    personInfo.textContent = person[info];

    if (info === 'sex') {
      personInfo.textContent = person.sex === 'm'
        ? 'Male'
        : 'Female';
    }

    if (info === 'age') {
      personInfo.textContent = person.died - person.born;
    }

    if (info === 'century') {
      personInfo.textContent = Math.ceil(person.died / 100);
    }

    row.append(personInfo);
  }

  table.append(row);
}
