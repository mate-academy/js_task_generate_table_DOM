'use strict';

const people = require('./lib/people');

const table = document.querySelector('tbody');

people.forEach(pers => {
  pers.sex = pers.sex === 'f' ? 'Female' : 'Male';

  table.insertAdjacentHTML('beforeend', `
    <tr>
      <td>${pers.name}</td>
      <td>${pers.sex}</td>
      <td>${pers.born}</td>
      <td>${pers.died}</td>
      <td>${pers.died - pers.born}</td>
      <td>${Math.ceil(pers.died / 100)}</td>
    </tr>
  `);
});
