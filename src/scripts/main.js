'use strict';

const people = require('./lib/people');

const tElement = document.querySelector('tbody');

people.forEach(person => {
  const gender = person.sex === 'm' ? 'Male' : 'Female';

  tElement.insertAdjacentHTML('beforeend', `
    <tr>
      <td>${person.name}</td>
      <td>${gender}</td>
      <td>${person.born}</td>
      <td>${person.died}</td>
      <td>${person.died - person.born}</td>
      <td>${Math.ceil(person.died / 100)}</td>
    </tr>
  `);
});
