'use strict';

const people = require('./lib/people');

// eslint-disable-next-line no-console
console.log(people);

people.map(person => {
  const table = document.querySelector('.dashboard');

  table.lastChild.innerHTML += `
    <tr>
      <td>${person.name}</td>
      <td>${person.sex === 'm' ? 'Male' : 'Female'}</td>
      <td>${person.born}</td>
      <td>${person.died}</td>
      <td>${person.died - person.born}</td>
      <td>${Math.ceil(person.died / 100)}</td>
    </tr>`;
});
