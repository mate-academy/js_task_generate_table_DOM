'use strict';

const people = require('./lib/people');
const dashBoard = document.querySelector('.dashboard').querySelector('tbody');

people.forEach(person => {
  const age = person.died - person.born;
  const century = Math.ceil(person.died / 100);
  const gender = person.sex === 'm' ? 'Male' : 'Female';
  const row
  = `
    <tr>
      <td>${person.name}</td>
      <td>${gender}</td>
      <td>${person.born}</td>
      <td>${person.died}</td>
      <td>${age}</td>
      <td>${century}</td>
    </tr>
  `;

  dashBoard.insertAdjacentHTML('beforeend', row);
});
