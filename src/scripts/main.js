'use strict';

const people = require('./lib/people');

// eslint-disable-next-line no-console
console.log(people); // you can remove it

const table = document.querySelector('tbody');

people.forEach(({ name: personName, sex, born, died }) => {
  table.insertAdjacentHTML('beforeend', `
  <tr>
    <td>${personName}</td>
    <td>${sex}</td>
    <td>${born}</td>
    <td>${died}</td>
    <td>${died - born}</td>
    <td>${Math.ceil(died / 100)}</td>
  </tr>
`);
});
