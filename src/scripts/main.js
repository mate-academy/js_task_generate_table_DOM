'use strict';

const people = require('./lib/people');

// eslint-disable-next-line no-console
console.log(people); // you can remove it

// write your code here
const table = document.querySelector('.dashboard');

table.children[0].insertAdjacentHTML('beforeend',
  people.map(
    person => {
      let row = '<tr>';

      row += `<td>${person.name}</td>`;
      row += `<td>${person.sex === 'm' ? 'Male' : 'Female'}</td>`;
      row += `<td>${person.born}</td>`;
      row += `<td>${person.died}</td>`;
      row += `<td>${person.died - person.born}</td>`;
      row += `<td>${Math.ceil(person.died / 100)}</td>`;

      row += '</tr>';

      return row;
    },
  ).join(''),
);
