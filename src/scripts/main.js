'use strict';

const people = require('./lib/people');

// eslint-disable-next-line no-console
// console.log(people); // you can remove it

(function() {
  const tableRow = document.querySelector('.dashboard tbody tr');

  [...people].forEach(person => {
    tableRow.insertAdjacentHTML('afterend',
      `<tr>
        <td>${person.name}</td>
        <td>${person.sex === 'm' ? 'Male' : 'Female'}</td>
        <td>${person.born}</td>
        <td>${person.died}</td>
        <td>${person.died - person.born}</td>
        <td>${Math.ceil(person.died / 100)}</td>
      </tr>`);
  });
}());
