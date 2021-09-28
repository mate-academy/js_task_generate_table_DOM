'use strict';

const people = require('./lib/people');

// eslint-disable-next-line no-console
// write your code here

people.forEach(person => {
  document.querySelector('tbody').insertAdjacentHTML('beforeend', `
  <tr>
    <td>${person.name}</td>
    <td>${person.sex}</td>
    <td>${person.born}</td>
    <td>${person.died}</td>
    <td>${person.died - person.born}</td>
    <td>${Math.ceil(person.died / 100)}</td>
  </tr>`
  );
});
