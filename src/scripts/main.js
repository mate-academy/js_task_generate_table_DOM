'use strict';

const people = require('./lib/people');
const board = document.querySelector('.dashboard');

people.forEach(person => {
  const row = document.createElement('tr');

  const getPersonGender = (human) => {
    if (human.sex === 'f') {
      return 'Female';
    }

    return 'Male';
  };

  const columns = `
    <td>${person.name}</td>
    <td>${getPersonGender(person)}</td>
    <td>${person.born}</td>
    <td>${person.died}</td>
    <td>${person.died - person.born}</td>
    <td>${Math.floor(person.died / 100)}</td>
  `;

  row.innerHTML = columns;

  board.insertAdjacentElement('beforeend', row);
});
