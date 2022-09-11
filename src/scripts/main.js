'use strict';

const people = require('./lib/people');

// eslint-disable-next-line no-console
console.log(people); // you can remove it

const table = document.querySelector('tbody');

for (const person of people) {
  const personName = person.name;
  const personSex = person.sex === 'm' ? 'Male' : 'Female';
  const born = person.born;
  const died = person.died;
  const age = person.died - person.born;
  const century = Math.ceil(person.died / 100);

  table.insertAdjacentHTML('beforeend', `
  <tr>
    <td>${personName}</td>
    <td>${personSex}</td>
    <td>${born}</td>
    <td>${died}</td>
    <td>${age}</td>
    <td>${century}</td>
  </tr>`);
}
