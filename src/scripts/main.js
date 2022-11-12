'use strict';

const people = require('./lib/people');

const table = document.querySelector('.dashboard');

const newPeople = [...people];

newPeople.forEach(person => {
  const cells = document.createElement('tr');

  cells.insertAdjacentHTML('afterbegin', `
  <td>${person.name}</td>
  <td>${person.sex === 'm' ? 'Male' : 'Female'}</td>
  <td>${person.born}</td>
  <td>${person.died}</td>
  <td>${person.age = person.died - person.born}</td>
  <td>${person.century = Math.round(person.died / 100)}</td>`);

  table.append(cells);
});
