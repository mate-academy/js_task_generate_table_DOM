'use strict';

const people = require('./lib/people');

// eslint-disable-next-line no-console
console.log(people); // you can remove it

const table = document.querySelector('.dashboard');

people.forEach((person) => {
  const age = person.died - person.born;
  const century = Math.ceil(person.died / 100);

  if (person.sex === 'f') {
    person.sex = 'Female';
  }

  if (person.sex === 'm') {
    person.sex = 'Male';
  }

  table.insertAdjacentHTML('beforeend', `
    <td>${person.name}</td>
    <td>${person.sex}</td>
    <td>${person.born}</td>
    <td>${person.died}</td>
    <td>${age}</td>
    <td>${century}</td>
`);
});
