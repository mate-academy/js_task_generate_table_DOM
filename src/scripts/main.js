'use strict';

const people = require('./lib/people');

// eslint-disable-next-line no-console
console.log(people); // you can remove it

const table = document.querySelector(
  '.dashboard'
).firstElementChild;

people.forEach(person => {
  const age = person.died - person.born;
  const century = Math.ceil(person.died / 100);
  const sex = person.sex === 'm'
    ? 'Male'
    : 'Female';

  table.insertAdjacentHTML(
    'beforeend',
    `<tr>
      <td>${person.name}</td>
      <td>${sex}</td>
      <td>${person.born}</td>
      <td>${person.died}</td>
      <td>${age}</td>
      <td>${century}</td>
    </tr>`
  );
});
