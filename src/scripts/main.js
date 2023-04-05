'use strict';

const people = require('./lib/people');

// eslint-disable-next-line no-console
console.log(people); // you can remove it

// write your code here
const table = document.querySelectorAll('.dashboard');

for (const person of people) {
  for (const line of table) {
    line.children[0].insertAdjacentHTML('beforeend', `
         <tr>
         <th>${person.name}</th>
         <th>${person.sex === 'm' ? 'Male' : 'Female'}</th>
         <th>${person.born}</th>
         <th>${person.died}</th>
         <th>${person.died - person.born}</th>
         <th>${Math.ceil(person.died / 100)}</th>
       </tr>`);
  }
}
