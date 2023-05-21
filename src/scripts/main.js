'use strict';

const people = require('./lib/people');

// eslint-disable-next-line no-console
console.log(people); // you can remove it

const current = document.querySelector('tr');

people.forEach((person) => {
  person.age = person.died - person.born;
  person.century = Math.ceil(person.died / 100);

  if (person.sex === 'f') {
    person.sex = 'female';
  } else {
    person.sex = 'male';
  }

  const table = document.createElement('tr');

  current.parentElement.append(table);

  table.insertAdjacentHTML(
    'beforeend', `
    <th>${person.name}</th>
    <th>${person.sex}</th>
    <th>${person.born}</th>
    <th>${person.died}</th>
    <th>${person.age}</th>
    <th>${person.century}</th>
    `
  );
});
