'use strict';

const people = require('./lib/people');

// eslint-disable-next-line no-console
console.log(people); // you can remove it

const table = document.querySelector('.dashboard');

people.forEach(person => {
  const sex = (person.sex === 'f')
    ? 'Female'
    : 'Male';

  table.insertAdjacentHTML('beforeend', `
      <tr>
        <th>${person.name}</th>
        <th>${sex}</th>
        <th>${person.born}</th>
        <th>${person.died}</th>
        <th>${person.died - person.born}</th>
        <th>${Math.ceil(person.died / 100)}</th>
      </tr>
  `);
});
