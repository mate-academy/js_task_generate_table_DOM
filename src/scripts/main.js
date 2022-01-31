'use strict';

const people = require('./lib/people');

// eslint-disable-next-line no-console
console.log(people); // you can remove it

const nevarr = people.map(el => {
  return `
  <tr>
 <td>${el.name}</td>
 <td>${el.sex === 'f' ? 'Female' : 'Male'}</td>
 <td>${el.born}</td>
 <td>${el.died}</td>
 <td>${el.died - el.born}</td>
 <td>${Math.ceil(el.died / 100)}</td>
 </tr>
 `;
});

const table = document.querySelector('tbody');

table.insertAdjacentHTML('beforeend', nevarr.join(' '));
