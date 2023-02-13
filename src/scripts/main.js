'use strict';

const people = require('./lib/people');

const tablElement = document.querySelector('.dashboard');

people.forEach(person => {
  const trElement = document.createElement('tr');

  trElement.insertAdjacentHTML('beforeend', `
    <td>${person.name}</td>
    <td>${person.sex === 'm' ? 'Male' : 'Female'}</td>
    <td>${person.born}</td>
    <td>${person.died}</td>
    <td>${person.died - person.born}</td>
    <td>${Math.ceil(person.died / 100)}</td>
  `);

  tablElement.append(trElement);
});
