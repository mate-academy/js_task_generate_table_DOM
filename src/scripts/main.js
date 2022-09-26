'use strict';

const people = require('./lib/people');

const tableData = document.querySelector('.dashboard > tbody > tr');

tableData.insertAdjacentHTML('afterend', people.map(person =>
  `<tr>
    <td>${person.name}</td>
    <td>${person.sex.toUpperCase()}</td>
    <td>${person.born}</td>
    <td>${person.died}</td>
    <td>${person.died - person.born}</td>
    <td>${Math.ceil(person.died / 100)}</td>
  </tr>`).join('')
);
