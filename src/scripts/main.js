'use strict';

const people = require('./lib/people');

// eslint-disable-next-line no-console
console.log(people); // you can remove it

// write your code here
const element = document.querySelectorAll('.dashboard');

for (const person of people) {
  for (const i of element) {
    if (person.sex === 'm') {
      person.sex = 'male';
    } else {
      person.sex = 'female';
    };

    person.age = person.died - person.born;
    person.century = Math.ceil(person.died / 100);

    i.children[0].insertAdjacentHTML('beforeend', `
         <tr>
         <th>${person.name}</th>
         <th>${person.sex}</th>
         <th>${person.born}</th>
         <th>${person.died}</th>
         <th>${person.age}</th>
         <th>${person.century}</th>
       </tr>`);
  }
}
