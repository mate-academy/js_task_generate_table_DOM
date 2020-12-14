'use strict';

const people = require('./lib/people');
const table = document.querySelector(`table`);

people.forEach(person => {
  person.age = person.died - person.born;
  person.century = Math.ceil(person.died / 100);
  person.sex = person.sex === `m` ? `Male` : `Female`;
});

function toAddList(arr) {
  for (const person of arr) {
    const row = document.createElement(`tr`);

    row.innerHTML = `
    <td>${person.name}</td>
    <td>${person.sex}</td>
    <td>${person.born}</td>
    <td>${person.died}</td>
    <td>${person.age}</td>
    <td>${person.century}</td>
    `;
    table.append(row);
  }
}

toAddList(people);
