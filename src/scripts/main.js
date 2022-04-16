'use strict';

const people = require('./lib/people');

// eslint-disable-next-line no-console
console.log(people); // you can remove it

const table = document.querySelector('.dashboard tbody');

people.map(item => {
  table.insertAdjacentHTML('beforeend', `
    <tr>
      <td>${item.name}</td>
      <td>${item.sex === 'm' ? 'Male' : 'Female'}</td>
      <td>${item.born}</td>
      <td>${item.died}</td>
      <td>${item.died - item.born}</td>
      <td>${Math.ceil(item.died / 100)}</td>
    </tr>
  `);
});
