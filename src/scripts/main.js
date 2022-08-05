'use strict';

const people = require('./lib/people');
const dashboard = document.querySelector('.dashboard');

for (const person of people) {
  let gender;

  if (person.sex === 'm') {
    gender = 'Male';
  } else {
    gender = 'Female';
  };

  dashboard.children[0].insertAdjacentHTML('beforeend', `
   <tr>
     <td>${person.name}</td>
     <td>${gender}</td>
     <td>${person.born}</td>
     <td>${person.died}</td>
     <td>${person.died - person.born}</td>
     <td>${Math.ceil(person.died / 100)}</td>
   </tr>
  `);
}
