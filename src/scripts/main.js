'use strict';

const people = require('./lib/people');

const tableObject = document.querySelector('table tbody');

let personAttributes = [];

for (const person of people) {
  const newRow = document.createElement('tr');

  personAttributes = [
    person.name,
    person.sex === 'm' ? 'Male' : 'Female',
    person.born,
    person.died,
    getAge(person.born, person.died),
    getCentury(person.died)];

  for (const attribute of personAttributes) {
    const newCell = document.createElement('td');

    newCell.innerText = attribute;
    newRow.append(newCell);
  }
  tableObject.append(newRow);
}

function getAge(birthDate, deathDate) {
  return deathDate - birthDate;
}

function getCentury(deathDate) {
  return Math.ceil(deathDate / 100);
}
