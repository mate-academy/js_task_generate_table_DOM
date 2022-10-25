'use strict';

const people = require('./lib/people');
const dashBoard = document.querySelector('.dashboard');

for (const person of people) {
  const row = document.createElement('tr');
  const sex = person.sex === 'm'
    ? 'Male'
    : 'Female';

  row.innerHTML = `
  <td>${person.name}</td>
  <td>${sex}</td>
  <td>${person.born}</td>
  <td>${person.died}</td>
  <td>${person.died - person.born}</td>
  <td>${Math.ceil(person.born / 100)}</td>
  `;

  dashBoard.append(row);
}

// eslint-disable-next-line no-console
console.log(people); // you can remove it
