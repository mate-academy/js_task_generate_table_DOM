'use strict';

const people = require('./lib/people');

// eslint-disable-next-line no-console
console.log(people); // you can remove it

const dashboard = document.querySelector('.dashboard');

people.forEach(person => {
  const newRow = document.createElement('tr');

  newRow.insertAdjacentHTML('beforeend', `
    <td>${person.name}</td>
    <td>${person.sex === 'f' ? 'Female' : 'Male'}</td>
    <td>${person.born}</td>
    <td>${person.died}</td>
    <td>${person.died - person.born}</td>
    <td>${Math.floor(person.died / 100)}</td>
  `);

  dashboard.append(newRow);
});
