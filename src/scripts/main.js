'use strict';

const people = require('./lib/people');
const tableBody = document.querySelector('.dashboard tbody');

people.forEach(person => {
  tableBody.insertAdjacentHTML('beforeend',
    `<tr>
    <td>${person.name}</td>
    <td>${getPersonSex(person.sex)}</td>
    <td>${person.born}</td>
    <td>${person.died}</td>
    <td>${person.died - person.born}</td>
    <td>${getCentury(person.died)}</td>
    </tr>`);
});

function getPersonSex(sex) {
  return (sex === 'm') ? 'Male' : 'Female';
}

function getCentury(year) {
  return Math.ceil(year / 100);
}
