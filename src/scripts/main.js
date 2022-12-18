'use strict';

const people = require('./lib/people');

// eslint-disable-next-line no-console
console.log(people); // you can remove it

// write your code here
const dashboard = document.querySelector('.dashboard tr');

people.forEach(person => {
  dashboard.insertAdjacentHTML('afterend', `
  <tr>
    <td>${person.name}</td>
    <td>${person.sex}</td>
    <td>${person.born}</td>
    <td>${person.died}</td>
    <td>${person.died - person.born}</td>
    <td>${Math.ceil(person.died / 100)}</td>
  </tr>
    `);
});
