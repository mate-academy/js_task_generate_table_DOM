'use strict';

const people = require('./lib/people');

for (const person of people) {
  const table = document.querySelector('tbody');

  const row = document.createElement('tr');

  table.append(row);

  row.insertAdjacentHTML('afterbegin', `
    <th>${person.name}</th>
    <th>${getSex(person.sex)}</th>
    <th>${person.born}</th>
    <th>${person.died}</th>
    <th>${person.died - person.born}</th>
    <th>${Math.ceil(person.died / 100)}</th>
  `
  );
}

function getSex(x) {
  if (x === 'm') {
    return 'Male';
  }

  return 'Famale';
}
