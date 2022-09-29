'use strict';

const people = require('./lib/people');
const tablePeople = document.querySelector('.dashboard tbody');

for (const person of people) {
  const age = person.died - person.born;
  const century = Math.ceil(person.died / 100);

  tablePeople.innerHTML += `
  <tr>
    <td>${person.name}</td>
    <td>${person.sex}</td>
    <td>${person.born}</td>
    <td>${person.died}</td>
    <td>${age}</td>
    <td>${century}</td>
  </tr>`;
}
