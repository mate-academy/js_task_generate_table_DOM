'use strict';

const people = require('./lib/people');

// write your code here
const table = document.querySelector('.dashboard');

people.forEach(person => {
  const personName = person.name;
  const gender = (person.sex === 'm') ? 'Male' : 'Female';
  const born = person.born;
  const died = person.died;
  const age = person.died - person.born;
  const century = Math.ceil(person.died / 100);
  const arr = [personName, gender, born, died, age, century];
  const tr = document.createElement('tr');

  for (const key of arr) {
    const th = document.createElement('th');

    th.textContent = key;
    tr.append(th);
    table.append(tr);
  }
});
