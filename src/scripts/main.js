'use strict';

const people = require('./lib/people');

// eslint-disable-next-line no-console

// write your code here
const table = document.querySelector('tbody');

for (const person of people) {
  const userTable = document.createElement('tr');

  table.append(userTable);

  userTable.insertAdjacentHTML('beforeend', `
    <td>${person.name}</td>
    <td>${person.sex === 'm' ? 'Male' : 'Female'}</td>
    <td>${person.born}</td>
    <td>${person.died}</td>
    <td>${person.age}</td>
    <td>${person.century}</td>
  `);
}
