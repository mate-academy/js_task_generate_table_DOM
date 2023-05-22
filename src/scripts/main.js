'use strict';

const people = require('./lib/people');

// eslint-disable-next-line no-console
console.log(people); // you can remove it

const rootElement = document.querySelector('.dashboard');

people.forEach(person => {
  const row = document.createElement('tr');

  row.innerHTML = `
  <tr>
    <th>${person.name}</th>
    <th>${person.sex === 'm' ? 'Male' : 'Female'}</th>
    <th>${person.born}</th>
    <th>${person.died}</th>
    <th>${person.died - person.born}</th>
    <th>${Math.ceil(person.died / 100)}</th>
</tr>`;

  rootElement.append(row);
});
// write your code here
