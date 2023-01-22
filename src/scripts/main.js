'use strict';

const people = require('./lib/people');
const table = document.querySelector('.dashboard');

people.map(person => {
  table.firstElementChild.insertAdjacentHTML('beforeend', `
    <tr>
      <td>${person.name}</td>
      <td>${person.sex === 'm' ? 'Male' : 'Female'}</td>
      <td>${person.born}</td>
      <td>${person.died}</td>
      <td>${person.age = person.died - person.born}</td>
      <td>${person.century = Math.ceil(person.died / 100)}</td>
    </tr>
`);
});
