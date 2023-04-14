'use strict';

const people = require('./lib/people');

// eslint-disable-next-line no-console
console.log(people); // you can remove it

const dashboard = document.querySelector('.dashboard');

people.forEach(person => {
  const row = document.createElement('tr');
  const sex = person.sex === 'm' ? 'Male' : 'Female'
  const age = person.died - person.born;
  const century = Math.ceil(person.died / 100);

  row.innerHTML = (
    `<td>${person.name}</td>
    <td>${sex}</td>
    <td>${person.born}</td>
    <td>${person.died}</td>
    <td>${age}</td>
    <td>${century}</td>`
  );

  dashboard.appendChild(row);
});
