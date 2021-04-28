'use strict';

const people = require('./lib/people');

for (const person of people) {
  const table = document.querySelector('.dashboard');
  const personName = person.name;
  let gender;

  if (person.sex === 'm') {
    gender = 'Male';
  } else {
    gender = 'Female';
  }

  const born = person.born;
  const died = person.died;
  const age = died - born;
  const century = Math.ceil(died / 100);

  table.insertAdjacentHTML('beforeend',
    '<tr>'
    + `<td>${personName}</td>`
    + `<td>${gender}</td>`
    + `<td>${born}</td>`
    + `<td>${died}</td>`
    + `<td>${age}</td>`
    + `<td>${century}</td>`
    + '</tr>');
}
