'use strict';

const people = require('./lib/people');

people.forEach(person => {
  document.querySelector('.dashboard').children[0]
    .insertAdjacentHTML('beforeend', `
      <tr>
        <td>${person.name}</td>
        <td>${person.sex === 'm' ? 'Male' : 'Female'}</td>
        <td>${person.born}</td>
        <td>${person.died}</td>
        <td>${person.died - person.born}</td>
        <td>${Math.ceil(person.died / 100)}</td>
      </tr>
    `);
});
