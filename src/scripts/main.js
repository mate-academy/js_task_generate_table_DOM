'use strict';

const people = require('./lib/people');
const table = document.querySelector('tbody');

for (const char of people) {
  table.insertAdjacentHTML('beforeend', `
  <tr>
    <td>${char.name}</td>
    <td>${char.sex === 'm' ? `Male` : 'Female'}</td>
    <td>${char.born}</td>
    <td>${char.died}</td>
    <td>${char.died - char.born}</td>
    <td>${Math.ceil(char.died / 100)}</td>
</tr>
`);
}
