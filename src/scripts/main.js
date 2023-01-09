'use strict';

const people = require('./lib/people');

//  variables
const table = document.querySelector('tbody');

// calculate century
function getCentury(year) {
  return Math.ceil(year / 100);
}

people.forEach(({ name, born, died, sex }) => {
  table.insertAdjacentHTML('beforeend',
    `<tr>
    <td>${name}</td>
    <td>${sex === 'f' ? 'Female' : 'Male'}</td>
    <td>${born}</td>
    <td>${died}</td>
    <td>${died - born}</td>
    <td>${getCentury(died)}</td>
  </tr>
  `
  );
});
