'use strict';

const people = require('./lib/people');

// eslint-disable-next-line no-console
console.log(people); // you can remove it

const tbody = document.querySelector('tbody');

people.forEach(person => {
  const gender = person.sex === 'm' ? 'Male' : 'Female';

  const row = `
      <tr>
        <td>${person.name}</td>
        <td>${gender}</td>
        <td>${person.born}</td>
        <td>${person.died}</td>
        <td>${person.died - person.born}</td>
        <td>${Math.ceil(person.died / 100)}</td>
      </tr>
      `;

  tbody.insertAdjacentHTML('beforeend', row);
});
