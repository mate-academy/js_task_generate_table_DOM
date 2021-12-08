'use strict';

const people = require('./lib/people');

// eslint-disable-next-line no-console
console.log(people); // you can remove it

// write your code here

const tbody = document.querySelector('tbody');

for (const user of people) {
  tbody.insertAdjacentHTML('beforeend',
    `<tr>
      <td>${user.name}</td>
      <td>${user.sex === 'm' ? 'Male' : 'Female'}</td>
      <td>${user.born}</td>
      <td>${user.died}</td>
      <td>${user.died - user.born}</td>
      <td>${Math.ceil(user.died / 100)}</td>
    </tr>`
  );
};
