'use strict';

const people = require('./lib/people');

// eslint-disable-next-line no-console
console.log(people); // you can remove it

// write your code here
const dashboard = document.querySelector('.dashboard');

people.forEach(person => {
  const age = person.died - person.born;
  const century = Math.ceil(person.died / 100);
  const row = document.createElement('tr');

  row.insertAdjacentHTML('beforeend',
    `<td>${person.name}</td>
    <td>${person.sex}</td>
    <td>${person.born}</td>
    <td>${person.died}</td>
    <td>${age}</td>
    <td>${century}</td>`);

  dashboard.append(row);
});
