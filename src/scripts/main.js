'use strict';

const people = require('./lib/people');

// eslint-disable-next-line no-console
console.log(people); // you can remove it

for (const char of people) {
  const table = document.querySelector('tr');

  table.insertAdjacentHTML('afterend', `
    <tr>
      <td>${char.name}</td>
      <td>${char.sex}</td>
      <td>${char.born}</td>
      <td>${char.died}</td>
      <td>${char.died - char.born}</td>
      <td>${Math.ceil(char.died / 100)}</td>
    </tr>
  `);
}
