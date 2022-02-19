'use strict';

const people = require('./lib/people');

const myTable = document.querySelector('.dasboard');

const tableRow = document.createElement('tr');

for (const person of people.length) {
  tableRow.insertAdjacentHTML('beforeend', `
    <td> ${person.name} </td>
    <td> ${person.sex} </td>
    <td> ${person.born} </td>
    <td> ${person.died} </td>
    <td> ${person.died - person.born} </td>
    <td> ${Math.ceil(person.died / 100)} </td>
    `
  );

  myTable.append(tableRow);
}
