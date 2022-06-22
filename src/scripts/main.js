'use strict';

const people = require('./lib/people');
const row = document.querySelector('tr');

people.forEach(person => {
  const age = person.died - person.born;
  const century = Math.ceil(person.died / 100);

  const gender = (sex) => {
    if (sex === 'm') {
      return 'Male';
    } else {
      return 'Female';
    }
  };

  row.insertAdjacentHTML('afterend', `
    <tr>
      <td>${person.name}</td>
      <td>${gender(person.sex)}</td>
      <td>${person.born}</td>
      <td>${person.died}</td>
      <td>${age}</td>
      <td>${century}</td>
    </tr>
  `);
});
