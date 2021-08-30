'use strict';

const people = require('./lib/people');

// eslint-disable-next-line no-console
console.log(people); // you can remove it

// write your code here

const newTable = document.querySelector('.dashboard');
for (const person of people) {
  const row = document.createElement('tr');

  person.age = person.died - person.born;
  person.century = Math.ceil(person.died / 100);

  const gender = person.gender === 'm' ? 'Male' : 'Female';

  row.innerHTML = `
  <td>${person.name}</td>
  <td>${gender}</td>
  <td>${person.born}</td>
  <td>${person.died}</td>
  <td>${person.age}</td>
  <td>${person.century}</td>
  `;

  newTable.append(row);
}
