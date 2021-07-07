'use strict';

const people = require('./lib/people');
const table = document.querySelector('.dashboard');

people.forEach(person => {
  const newTr = document.createElement('tr');

  newTr.innerHTML = `
    <td>${person.name}</td>
    <td>${person.innerText = (person.sex === 'm')
    ? 'male'
    : 'famale'}</td>
    <td>${person.born}</td>
    <td>${person.died}</td>
    <td>${person.died - person.born}</td>
    <td>${Math.floor(person.died / 100)}</td>
  `;
  table.append(newTr);
});
