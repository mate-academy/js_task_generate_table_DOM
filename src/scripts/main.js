'use strict';

const people = require('./lib/people');

// eslint-disable-next-line no-console
console.log(people); // you can remove it

people.forEach(person => {
  const row = document.createElement('tr');
  const table = document.querySelector('.dashboard');

  row.insertCell().textContent = person.name;
  row.insertCell().textContent = person.sex === 'm' ? 'Male' : 'Female';
  row.insertCell().textContent = person.born;
  row.insertCell().textContent = person.died;
  row.insertCell().textContent = person.died - person.born;
  row.insertCell().textContent = Math.ceil(person.died / 100);
  table.append(row);
});
