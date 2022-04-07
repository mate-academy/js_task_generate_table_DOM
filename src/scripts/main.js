'use strict';

const people = require('./lib/people');
const tbody = document.querySelector('.dashboard').children[0];

for (const person of people) {
  tbody.innerHTML += `<tr>
    <td>${person.name}</td>
    <td>${person.sex}</td>
    <td>${person.born}</td>
    <td>${person.died}</td>
    <td>${person.died - person.born}</td>
    <td>${Math.ceil(person.died / 100)}</td>
  </tr>`;
}
