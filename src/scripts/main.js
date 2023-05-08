'use strict';

const people = require('./lib/people');
const table = document.querySelector('table.dashboard');
const tableBody = table.firstElementChild;

people.forEach(person => {
  const personAge = person.died - person.born;
  const personCentury = Math.ceil(person.died / 100);
  const gender = (person.sex === 'm') ? 'Male' : 'Female';

  tableBody.insertAdjacentHTML('beforeend', `
   <tr>
    <td>${person.name}</td>
    <td>${gender}</td>
    <td>${person.born}</td>
    <td>${person.died}</td>
    <td>${personAge}</td>
    <td>${personCentury}</td>
  </tr>
  `);
});
