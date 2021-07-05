'use strict';

const people = require('./lib/people');
const table = document.querySelector('.dashboard');

// eslint-disable-next-line no-console
// console.log(people); // you can remove it

for (let i = 0; i < people.length; i++) {
  const person = people[i];
  const row = document.createElement('tr');

  person.age = person.died - person.born;
  person.century = Math.ceil(person.died / 100);

  row.innerHTML = `<td>${person.name}</td>
  <td>${person.sex === 'm' ? 'male' : 'female'}</td>
  <td>${person.born}</td>
  <td>${person.died}</td>
  <td>${person.age}</td>
  <td>${person.century}</td>`;

  table.append(row);
};
