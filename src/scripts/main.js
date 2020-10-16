'use strict';

const people = require('./lib/people');

// eslint-disable-next-line no-console
console.log(people); // you can remove it

const rootTable = document.querySelector('.dashboard');

people.forEach(person => {

  const rowElement = document.createElement('tr');

  rowElement.innerHTML = `
  <tr>
    <td>${person.name}</td>
    <td>${(person.sex === 'm') ? 'Male' : 'Female'}</td>
    <td>${person.born}</td>
    <td>${person.died}</td>
    <td>${person.died - person.born}</td>
    <td>${Math.ceil(person.died / 100)}</td>
  </tr>
 `;

  rootTable.append(rowElement);
});
