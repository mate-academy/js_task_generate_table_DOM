'use strict';

const people = require('./lib/people');
const dashboard = document.querySelector('.dashboard');

const fullPeopleData = people.map(person => {
  person.age = person.died - person.born;
  person.century = Math.ceil(person.died / 100);
  person.sex = person.sex === 'm' ? 'Male' : 'Female';

  return person;
});

for (const person of fullPeopleData) {
  dashboard.firstElementChild.insertAdjacentHTML(
    'beforeend',
    `
    <tr>
        <td>${person.name}</td>
        <td>${person.sex}</td>
        <td>${person.born}</td>
        <td>${person.died}</td>
        <td>${person.age}</td>
        <td>${person.century}</td>
    </tr>
  `);
}
