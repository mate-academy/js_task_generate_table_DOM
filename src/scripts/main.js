'use strict';

const people = require('./lib/people');

// eslint-disable-next-line no-console
console.log(people); // you can remove it

function getAge(person) {
  const age = person.died - person.born;

  return age;
}

function getCentury(person) {
  const century = Math.ceil(person.died / 100);

  return century;
}

function convertingGenderData(string) {
  if (string === 'f') {
    return 'Female';
  } else if (string === 'm') {
    return 'Male';
  } else {
    return null;
  }
}

function generateTableRows(data) {
  const table = document.querySelector('.dashboard');

  for (const personData of data) {
    const row = document.createElement('tr');

    row.insertAdjacentHTML('afterbegin', `
    <td>${personData.name}</td>
    <td>${convertingGenderData(personData.sex)}</td>
    <td>${personData.born}</td>
    <td>${personData.died}</td>
    <td>${getAge(personData)}</td>
    <td>${getCentury(personData)}</td>
    `);

    table.append(row);
  }
}

generateTableRows(people);
