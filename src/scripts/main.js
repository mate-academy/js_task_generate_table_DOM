'use strict';

import people from './lib/people.json';

const table = document.querySelector('.dashboard');

people.forEach((person) => {
  const personElement = document.createElement('tr');

  let gender;

  if (person.sex === 'm') {
    gender = 'Male';
  } else {
    gender = 'Female';
  }

  const values = [
    person.name,
    gender,
    person.born,
    person.died,
    person.died - person.born,
    Math.ceil(person.died / 100),
  ];

  values.forEach((value) => {
    const cell = document.createElement('td');

    cell.textContent = value;

    personElement.appendChild(cell);
  });

  table.appendChild(personElement);
});
