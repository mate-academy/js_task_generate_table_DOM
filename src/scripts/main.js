'use strict';

const people = require('./lib/people');
const table = document.querySelector('.dashboard');

const arrayPeople = people.map(person => {
  const age = person.died - person.born;
  const century = Math.ceil(person.died / 100);
  const sex = person.sex === 'm' ? 'Male' : 'Female';

  return `
  <tr>
      <td>${person.name}</td>
      <td>${sex}</td>
      <td>${person.born}</td>
      <td>${person.died}</td>
      <td>${age}</td>
      <td>${century}</td>
   </tr>
  `;
});

table.children[0].insertAdjacentHTML('beforeend', arrayPeople.join(''));
