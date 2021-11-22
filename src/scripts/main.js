'use strict';

const people = require('./lib/people');
const table = document.querySelector('.dashboard');

people.forEach((user) => {
  table.children[0].insertAdjacentHTML('beforeend',
    `
     <tr>
      <td>${user.name}</td>
      <td>${user.sex === 'm' ? 'Male' : 'Female'}</td>
      <td>${user.born}</td>
      <td>${user.died}</td>
      <td>${user.died - user.born}</td>
      <td>${Math.ceil(user.died / 100)}</td>
     </tr>
    `);
});
