'use strict';

const people = require('./lib/people');

// eslint-disable-next-line no-console
console.log(people); // you can remove it

// write your code here
const table = document.querySelector('.dashboard');

for (const value of people) {
  const row = `
    <tr>
      <td>${value.name}</td>
      <td>${value.sex === 'm' ? 'Male' : 'Female'}</td>
      <td>${value.born}</td>
      <td>${value.died}</td>
      <td>${value.died - value.born}</td>
      <td>${Math.ceil(value.died / 100)}</td>
    </tr>
  `;

  table.children[0].insertAdjacentHTML('beforeend', row);
}
