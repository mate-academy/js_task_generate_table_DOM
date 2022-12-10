'use strict';

const people = require('./lib/people');

// eslint-disable-next-line no-console
console.log(Array.isArray(people)); // you can remove it

const tableRowsArray = people.map(person => {
  const century = Math.ceil(person.died / 100);
  const gender = person.sex === 'm' ? 'Male' : 'Female';
  const age = person.died - person.born;
  const tableRow = `
    <tr>
      <td>${person.name}</td>
      <td>${gender}</td>
      <td>${person.born}</td>
      <td>${person.died}</td>
      <td>${age}</td>
      <td>${century}</td>
    </tr>
  `;

  return tableRow;
});

const dashboardElem = document.querySelector('.dashboard');

dashboardElem.children[0]
  .insertAdjacentHTML('beforeend', tableRowsArray.join(''));
