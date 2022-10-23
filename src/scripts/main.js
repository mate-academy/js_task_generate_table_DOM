'use strict';

const people = require('./lib/people');

const table = document.querySelector('.dashboard');

people.map(person => {
  person.sex = person.sex === 'm' ? 'Male' : 'Female';
  person.age = person.died - person.born;
  person.century = centuryData(person.died);
});

function centuryData(deathYear) {
  return Math.ceil(deathYear / 100);
}

people.forEach(person => {
  const tableRow = `
  <tr>
    <td>${person.name}</td>
    <td>${person.sex}</td>
    <td>${person.born}</td>
    <td>${person.died}</td>
    <td>${person.age}</td>
    <td>${person.century}</td>
  </tr>`;

  table.lastChild.innerHTML += tableRow;
});
