'use strict';

const people = require('./lib/people');
// write your code here
const table = document.querySelector('.dashboard');

people.forEach(person => {
  const tr = document.createElement('tr');

  tr.insertAdjacentHTML('afterbegin', `
    <tr>
      <td>${person.name}</td>
      <td>${person.sex === 'm' ? 'Male' : 'Female'}</td>
      <td>${person.born}</td>
      <td>${person.died}</td>
      <td>${person.died - person.born}</td>
      <td>${Math.ceil(person.died / 100)}</td>
    </tr>
  `);
  table.append(tr);
});
