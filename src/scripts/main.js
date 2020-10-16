'use strict';

const people = require('./lib/people');
const table = document.querySelector('.dashboard');

people.forEach((person) => {
  const line = document.createElement('tr');

  person.gender = person.sex === 'm' ? 'Male' : 'Female';
  person.age = person.died - person.born;
  person.century = Math.ceil(person.died / 100);

  line.innerHTML = `
    <td>${person.name}</td>
    <td>${person.gender}</td>
    <td>${person.born}</td>
    <td>${person.died}</td>
    <td>${person.age}</td>
    <td>${person.century}</td>
  `;

  table.append(line);
});
