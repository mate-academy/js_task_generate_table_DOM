'use strict';

const people = require('./lib/people');

// eslint-disable-next-line no-console
console.log(people); // you can remove it

for (const person of people) {
  const row = document.createElement('tr');
  const gender
  = person.sex === 'f' ? 'Female' : 'Male';

  row.innerHTML = `
     <th> ${person.name} </th>
     <th> ${gender} </th>
     <th> ${person.born} </th>
     <th> ${person.died} </th>
     <th> ${person.died - person.born} </th>
     <th> ${Math.ceil(person.died / 100)} </th>
    `;

  const table = document.querySelector('.dashboard');

  table.append(row);
}
