'use strict';

const people = require('./lib/people');

const element = document.querySelector('.dashboard');

[...people].forEach((person) => {
  const newLine = document.createElement('tr');

  newLine.innerHTML = `<td> ${person.name} </td>`
    + `<td> ${person.sex === 'm' ? 'Male' : 'Female'} </td>`
    + `<td> ${person.born} </td>`
    + `<td> ${person.died} </td>`
    + `<td> ${person.died - person.born} </td>`
    + `<td> ${Math.ceil(person.died / 100)} </td>`;

  element.append(newLine);
});
