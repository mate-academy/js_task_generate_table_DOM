'use strict';

const people = require('./lib/people');

// eslint-disable-next-line no-console
console.log(people); // you can remove it

const table = document.querySelector('.dashboard tbody');

people.forEach(person => {
  person.gender = person.sex === 'm' ? 'Male' : 'Female';
  person.age = person.died - person.born;
  person.century = Math.ceil(person.died / 100);

  table.insertAdjacentHTML('beforeend', `
    <tr>
      <td>${person.name}</td>
      <td>${person.gender}</td>
      <td>${person.born}</td>
      <td>${person.died}</td>
      <td>${person.age}</td>
      <td>${person.century}</td>
   </tr>
 `);
});
