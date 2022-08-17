'use strict';

const people = require('./lib/people');

const tbody = document.querySelector('tbody');

for (const person of people) {
  tbody.insertAdjacentHTML('beforeend', `
  <tr>
    <td>${person.name}</td>
    <td>${gender(person)}</td>
    <td>${person.born}</td>
    <td>${person.died}</td>
    <td>${person.died - person.born}</td>
    <td>${Math.ceil(person.died / 100)}</td>
  </tr>
  `); ;
}

function gender(human) {
  if (human.sex === 'm') {
    return 'Male';
  } else {
    return 'Female';
  }
}
