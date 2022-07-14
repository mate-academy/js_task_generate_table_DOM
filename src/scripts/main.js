'use strict';

const people = require('./lib/people');

const table = document.querySelector('.dashboard');

for (const person of people) {
  const row = document.createElement('tr');

  for (let i = 0; i < 6; i++) {
    row.append(document.createElement('td'));
  }

  row.children[0].innerText = person.name;
  row.children[1].innerText = person.sex === 'm' ? 'Male' : 'Female';
  row.children[2].innerText = person.born;
  row.children[3].innerText = person.died;
  row.children[4].innerText = person.died - person.born;
  row.children[5].innerText = Math.ceil(person.died / 100);

  table.append(row);
}
