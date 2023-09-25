'use strict';

const people = require('./lib/people');

// eslint-disable-next-line no-console

function calculateAgeAndCentury(person) {
  const age = person.died - person.born;

  const century = Math.ceil(person.died / 100);

  return {
    age, century,
  };
}

const table = document.querySelector('.dashboard');

people.forEach(person => {
  const { age, century } = calculateAgeAndCentury(person);

  const row = document.createElement('tr');

  row.innerHTML = `

  <th>${person.name}</th>
  <th>${person.gender}</th>
  <th>${person.born}</th>
  <th>${person.died}</th>
  <th>${age}</th>
  <th>${century}</th>
  `;

  table.appendChild(row);
});
