'use strict';

const people = require('./lib/people');

// eslint-disable-next-line no-console
console.log(people); // you can remove it

const table = document.querySelector('.dashboard');

for (const human of people) {
  const row = document.createElement('tr');

  row.innerHTML = `
    <td>${human.name}</td>
    <td>${human.sex === 'm' ? 'Male' : 'Female'}</td>
    <td>${human.born}</td>
    <td>${human.died}</td>
    <td>${human.died - human.born}</td>
    <td>${Math.ceil(human.died / 100)}</td>
  `;

  table.append(row);
}
