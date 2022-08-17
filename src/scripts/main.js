'use strict';

const people = require('./lib/people');

// eslint-disable-next-line no-console
console.log(Array.isArray(people)); // you can remove it

// write your code here

const table = document.querySelector('.dashboard tbody');

valTableName(people);

function male(p) {
  if (p === 'm') {
    return 'Male';
  } else {
    return 'Female';
  }
}

function valTableName(arr) {
  arr.forEach(person => {
    table.insertAdjacentHTML('beforeend', `
       <tr>
         <td>${person.name}</td>
         <td>${male(person.sex)}</td>
         <td>${person.born}</td>
         <td>${person.died}</td>
         <td>${person.died - person.born}</td>
         <td>${Math.ceil(person.died / 100)}</td>
       </tr>
      `);
  });
}
