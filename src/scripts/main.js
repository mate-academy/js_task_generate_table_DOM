'use strict';

const people = require('./lib/people');

// eslint-disable-next-line no-console
console.log(people); // you can remove it

const current = document.querySelector('tr');

people.forEach(({ name: fullName, died, born, sex }) => {
  const century = Math.ceil(died / 100);

  const table = document.createElement('tr');

  current.parentElement.append(table);

  table.insertAdjacentHTML(
    'beforeend', `
    <td>${fullName}</td>
    <td>${sex === 'f' ? 'Female' : 'Male'}</td>
    <td>${born}</td>
    <td>${died}</td>
    <td>${died - born}</td>
    <td>${century}</td>
    `
  );
});
