'use strict';

const people = require('./lib/people');

// eslint-disable-next-line no-console
console.log(people); // you can remove it

const table = document.querySelector('.dashboard').firstElementChild;

people.forEach(person => {
  const gender = person.sex === 'm' ? 'Male' : 'Female';
  const century = Math.ceil(person.died / 100);

  return table.insertAdjacentHTML('beforeend', `
    <tr>
      <td>${person.name}</td>
      <td>${gender}</td>
      <td>${person.born}</td>
      <td>${person.died}</td>
      <td>${person.died - person.born}</td>
      <td>${century}</td>
    </tr>
  `);
});
