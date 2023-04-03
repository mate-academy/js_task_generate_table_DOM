'use strict';

const people = require('./lib/people');

// eslint-disable-next-line no-console
console.log(people); // you can remove it

const rootElement = document.querySelector('table');

for (const person of people) {
  person.age = person.died - person.born;
  person.century = Math.ceil(person.died / 100);
  person.gender = person.sex === 'm' ? 'Male' : 'Female';

  const rows = document.createElement('tr');

  rows.innerHTML = `
  <td> ${person.name}</td>
  <td> ${person.gender}</td>
  <td> ${person.born}</td>
  <td> ${person.died}</td>
  <td> ${person.age}</td>
  <td> ${person.century}</td>
  `;

  rootElement.append(rows);
}
