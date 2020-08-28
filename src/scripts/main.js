'use strict';

const people = require('./lib/people');

const table = document.querySelector('tbody');

for (const person of people) {
  person.sex === 'm'
    ? person.sex = 'Male'
    : person.sex = 'Famale';

  table.insertAdjacentHTML('beforeend',
    `<tr class="${person.name}">
      <td>${person.name}</td>
      <td>${person.sex}</td>
      <td>${person.born}</td>
      <td>${person.died}</td>
      <td>${person.died - person.born}</td>
      <td>${Math.floor(person.died / 100)}</td>
    </tr>`
  );
}
