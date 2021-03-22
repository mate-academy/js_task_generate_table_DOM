'use strict';

const people = require('./lib/people');

const getGender = function(string) {
  return (string === 'm' ? 'Male' : 'Female');
};

const table = document.querySelector('.dashboard');

for (const person of people) {
  const row = document.createElement('tr');

  row.innerHTML = `
    <td>${person.name}</td>
    <td>${getGender(person.sex)}</td>
    <td>${person.born}</td>
    <td>${person.died}</td>
    <td>${person.died - person.born}</td>
    <td>${Math.ceil(person.died / 100)}</td>
  `;

  table.append(row);
}
