'use strict';

const people = require('./lib/people');

// eslint-disable-next-line no-console
console.log(people); // you can remove it

const table = document.querySelector('.dashboard');

for (const key of people) {
  table.insertAdjacentHTML('beforeend', `
   <tr>
     <td>${key.name}</td>
     <td>${key.sex}</td>
     <td>${key.born}</td>
     <td>${key.died}</td>
     <td>${key.died - key.born}</td>
     <td>${Math.ceil(key.died / 100)}</td>
   </tr>
  `);
}
