'use strict';

const people = require('./lib/people');

// write your code here
const table = document.getElementsByClassName('dashboard')[0];
const getCentury = (deathAge) => {
  return Math.ceil(deathAge / 100);
};

const getFullGender = (sex) => {
  return sex === 'f' ? 'Female' : 'Male';
};

const getRow = (person) => {
  return `<tr>
    <td> ${person.name} </td>
    <td>${getFullGender(person.sex)}</td>
    <td>${person.born}</td>
    <td>${person.died}</td>
    <td>${person.died - person.born}</td>
    <td>${getCentury(person.died)}</td>
  </tr>`;
};

const tbody = table.children[0];

tbody.innerHTML += people.map(person => getRow(person)).join('');
