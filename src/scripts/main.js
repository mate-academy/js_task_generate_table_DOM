'use strict';

const people = require('./lib/people');

// eslint-disable-next-line no-console

const table = document.querySelector('.dashboard').children[0];

people.forEach(person => {
  table.insertAdjacentHTML('beforeend',
    `<tr>
      <td>${person.name}</td>
      <td>${person.sex}</td>
      <td>${person.born}</td>
      <td>${person.died}</td>
      <td>${person.died - person.born}</td>
      <td>${Math.ceil(person.died / 100)}</td>
    </tr>`
  );
});
