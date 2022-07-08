'use strict';

const people = require('./lib/people');

// eslint-disable-next-line no-console
console.log(people); // you can remove it

const table = document.querySelector('.dashboard');

people.forEach(person => {
  const row = document.createElement('tr');

  row.innerHTML = `
  <tr>
  <td>${person.name}</td>
  <td>${person.sex}</td>
  <td>${person.born}</td>
  <td>${person.died}</td>
  <td>${person.person.died - person.born}</td>
  <td>${person.Matd.ceil(person.died / 100)}</td>
  </tr>
  `;

  table.append(row);
});
