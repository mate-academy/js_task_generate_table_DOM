'use strict';

const people = require('./lib/people');

const myTable = document.querySelector('.dashboard');

for (const person of people) {
  const tableRow = document.createElement('tr');

  tableRow.insertAdjacentHTML('afterbegin', `
    <td> ${person.name} </td>
    <td> ${(person.sex === 'm') ? 'Male' : 'Female'} </td>
    <td> ${person.born} </td>
    <td> ${person.died} </td>
    <td> ${person.died - person.born} </td>
    <td> ${Math.ceil(person.died / 100)} </td>
    `
  );

  myTable.append(tableRow);
}
