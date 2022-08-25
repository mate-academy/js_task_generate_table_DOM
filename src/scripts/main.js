'use strict';

const people = require('./lib/people');

// eslint-disable-next-line no-console
console.log(people); // you can remove it

const dashboard = document.getElementsByClassName('dashboard');

people.forEach(person => {
  const row = document.createElement('tr');
  const gender = person.sex === 'm' ? 'Male' : 'Female';
  const age = person.died - person.born;
  const century = Math.ceil(person.died / 100);

  row.insertAdjacentHTML('afterbegin', `
    <td>${person.name}</td>
    <td>${gender}</td>
    <td>${person.born}</td>
    <td>${person.died}</td>
    <td>${age}</td>
    <td>${century}</td>
  `);

  dashboard[0].append(row);
});
