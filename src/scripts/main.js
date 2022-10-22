'use strict';

const people = require('./lib/people');

// eslint-disable-next-line no-console
console.log(people); // you can remove it

const table = document.querySelector('.dashboard');

people.forEach(person => {
  const tr = document.createElement('tr');

  person.age = person.died - person.born;

  person.century = Math.ceil(person.died / 100);

  tr.insertAdjacentHTML('afterbegin', `
  <td>${person.name}</td>
  <td>${person.sex === 'm' ? 'Male' : 'Female'}</td>
  <td>${person.born}</td>
  <td>${person.died}</td>
  <td>${person.age}</td>
  <td>${person.century}</td>
  `);
  table.append(tr);
});
