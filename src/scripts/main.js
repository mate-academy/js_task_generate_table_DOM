'use strict';

const people = require('./lib/people');

// eslint-disable-next-line no-console
console.log(people); // you can remove it

const peopleTable = document.querySelector('.dashboard');

for (const person of people) {
  person.sex === 'm'
    ? person.sex = 'Male'
    : person.sex = 'Female';

  peopleTable.children[0].insertAdjacentHTML('beforeend',
    `<tr>
       <td>${person.name}</td>
       <td>${person.sex}</td>
       <td>${person.born}</td>
       <td>${person.died}</td>
       <td>${person.died - person.born}</td>
       <td>${Math.ceil(person.died / 100)}</td>
     </tr>
    `);
}
