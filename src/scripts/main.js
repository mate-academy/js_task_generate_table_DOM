'use strict';

const people = require('./lib/people');

const tableBody = document.querySelector('.dashboard');

const listOfPeople = people.map((person) => {
  const tableRaw = document.createElement('tr');

  tableRaw.innerHTML = `
    <td>${person.name}</td>
    <td>${person.sex === 'm' ? 'Male' : 'Female'}</td>
    <td>${person.born}</td>
    <td>${person.died}</td>
    <td>${person.died - person.born}</td>
    <td>${Math.ceil(person.died / 100)}</td>
  `;

  return tableRaw;
});

tableBody.append(...listOfPeople);
