'use strict';

const people = require('./lib/people');

const ourTable = document.querySelector('.dashboard');

for (const person of people) {
  ourTable.insertAdjacentHTML('beforeend', `
    <tr>
      <td>${person.name}</td>
      <td>${person.sex}</td>
      <td>${person.born}</td>
      <td>${person.died}</td>
      <td>${person.died - person.born}</td>
      <td>${Math.ceil(Math.ceil(person.died / 100))}</td>
    </tr>
  `)
}

console.log(ourTable)
