'use strict';

const people = require('./lib/people');

// eslint-disable-next-line no-console
console.log(people); // you can remove it

// write your code here

const tablet = document.querySelector('.dashboard').children[0];

people.forEach(person => tablet.insertAdjacentHTML('beforeend', `
  <tr>
    <td>${person.name}</th>
    <td>${person.sex}</th>
    <td>${person.born}</th>
    <td>${person.died}</th>
    <td>${person.died - person.born}</th>
    <td>${Math.ceil(person.died / 100)}</th>
  </tr>
`));
