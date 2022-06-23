'use strict';

const people = require('./lib/people');

// eslint-disable-next-line no-console
console.log(people); // you can remove it

// write your code here

const table = document.querySelector('.dashboard');

for (const ch of people) {
  const row = document.createElement('tr');

  if (ch.sex === 'm') {
    ch.sex = 'Male';
  }

  if (ch.sex === 'f') {
    ch.sex = 'Female';
  }

  row.innerHTML = `
  <th>${ch.name}</th>
  <th>${ch.sex}</th>
  <th>${ch.born}</th>
  <th>${ch.died}</th>
  <th>${ch.died - ch.born}</th>
  <th>${Math.ceil(ch.died / 100)}</th>`;

  table.append(row);
}
