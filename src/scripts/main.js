'use strict';

const people = require('./lib/people');

const table = document.querySelector('.dashboard');

people.forEach(person => {
  const personRow = document.createElement('tr');
  const gender = (person.sex === 'm')
    ? 'Male'
    : 'Famale';

  personRow.insertAdjacentHTML('afterbegin',
    `<td>${person.name}</td>
    <td>${gender}</td>
    <td>${person.born}</td>
    <td>${person.died}</td>
    <td>${person.died - person.born}</td>
    <td>${Math.ceil(person.died / 100)}</td>`);

  table.append(personRow);
});
