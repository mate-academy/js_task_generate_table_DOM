'use strict';

const people = require('./lib/people');
const table = document.querySelector('.dashboard');

people.forEach(person => {
  person.age = person.died - person.born;
  person.century = Math.ceil(person.died / 100);
  person.gender = person.sex === 'm' ? 'Male' : 'Female';

  const row = document.createElement('tr');

  row.innerHTML = `
    <td> ${person.name}</td>
    <td> ${person.gender}</td>
    <td> ${person.born}</td>
    <td> ${person.died}</td>
    <td> ${person.age}</td>
    <td> ${person.century}</td>
  `;

  table.append(row);
});
