'use strict';

const people = require('./lib/people');

for (const person of people) {
  const table = document.querySelector('tbody');

  const row = document.createElement('tr');

  table.append(row);

  row.insertAdjacentHTML('afterbegin', `
    <td>${person.name}</td>
    <td>${getSex(person.sex)}</td>
    <td>${person.born}</td>
    <td>${person.died}</td>
    <td>${person.died - person.born}</td>
    <td>${Math.ceil(person.died / 100)}</td>
  `
  );
}

function getSex(gender) {
  if (gender === 'm') {
    return 'Male';
  }

  return 'Famale';
}
